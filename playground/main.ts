// playground/main.ts
// Implementación y verificación de modelos para The Tractor Store (Fase 1)

import { Product, Cart, CartItem, LineItem, Result } from './models';

// 1. Datos simulados: Catálogo con nuestro primer tractor
const classicTractor: Product = {
    id: 'trac-01',
    name: 'Tractor Clásico 5000',
    description: 'Tractor utilitario de alta potencia para campo abierto.',
    category: 'classic',
    variants: [
        {
            id: 'var-red-01',
            sku: 'TRAC-RED-5000',
            name: 'Rojo Cosecha',
            color: '#d32f2f',
            price: 2500000, // 25,000.00 USD en centavos para evitar errores de coma flotante
            image: '/images/tractor-red.png'
        },
        {
            id: 'var-green-01',
            sku: 'TRAC-GRN-5000',
            name: 'Verde Pradera',
            color: '#388e3c',
            price: 2550000,
            image: '/images/tractor-green.png'
        }
    ]
};

// 2. Función genérica con Result<T, E> para buscar un tractor en el catálogo
function findProductById(id: string): Result<Product, string> {
    if (id === classicTractor.id) {
        return { success: true, value: classicTractor };
    }
    return { success: false, error: `Producto con id '${id}' no encontrado.` };
}

// 3. Simulación de compra: Seleccionar variante y añadir al Carrito
const selectedVariant = classicTractor.variants[0];

// Creamos el CartItem aprovechando los datos de la variante
const itemToCart: CartItem = {
    id: selectedVariant.id,
    sku: selectedVariant.sku,
    name: selectedVariant.name,
    price: selectedVariant.price,
    image: selectedVariant.image
};

const initialCart: Cart = {
    items: [
        { item: itemToCart, quantity: 1 }
    ],
    totalPrice: itemToCart.price,
    totalQuantity: 1
};

// 4. Ejecución y comprobación
console.log('--- The Tractor Store (Prueba de Modelos) ---');

const searchResult = findProductById('trac-01');
if (searchResult.success) {
    console.log('✅ Producto encontrado:', searchResult.value.name);
    console.log('📦 Total variantes disponibles:', searchResult.value.variants.length);
} else {
    console.error('❌ Error:', searchResult.error);
}

console.log('🛒 Estado inicial del carrito:', {
    cantidadArticulos: initialCart.totalQuantity,
    precioTotalEnDolares: `$${(initialCart.totalPrice / 100).toFixed(2)}`
});
