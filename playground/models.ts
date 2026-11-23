// playground/models.ts // 
// 1. Variantes de un tractor (por ejemplo: color rojo, verde o azul con diferente imagen)
export interface Variant {
    id: string;
    sku: string; // Código único de inventario (ej. "TRAC-RED-01")
    name: string; // Nombre de la variante (ej. "Rojo Clásico")
    color: string;
    price: number; // Precio en centavos para evitar redondeos decimales 
    image: string; // URL de la fotografía 
}
// 2. El tractor como producto principal 
export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    variants: Variant[];
}
// 3. Elemento dentro del carrito de compras
// Derivado seleccionando solo los datos necesarios con el Utility Type "Pick"
export type CartItem = Pick<Variant, 'id' | 'sku' | 'name' | 'price' | 'image'>;

export interface LineItem {
    item: CartItem;
    quantity: number;
}

// 4. El carrito de compras completo
export interface Cart {
    items: LineItem[];
    totalPrice: number;
    totalQuantity: number;
}

// 5. Tienda fisica (para el buscador del Team Explore)
export interface Store {
    id: string;
    name: string;
    city: string;
    address: string;
}

// 6. Genérico Result: para saber si una operación tuvo éxito (Ok) o falló (Err)
export type Result<T, E = Error> =
    | { success: true; value: T }
    | { success: false; error: E };



