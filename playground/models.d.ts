export interface Variant {
    id: string;
    sku: string;
    name: string;
    color: string;
    price: number;
    image: string;
}
export interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    variants: Variant[];
}
export type CartItem = Pick<Variant, 'id' | 'name' | 'price' | 'image'>;
export interface LineItem {
    item: CartItem;
    quantity: number;
}
export interface Cart {
    items: LineItem[];
    totalPrice: number;
    totalQuantity: number;
}
export interface Store {
    id: string;
    name: string;
    city: string;
    address: string;
}
export type Result<T, E = Error> = {
    success: true;
    value: T;
} | {
    success: false;
    error: E;
};
//# sourceMappingURL=models.d.ts.map