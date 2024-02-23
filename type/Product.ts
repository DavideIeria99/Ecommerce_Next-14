export interface productObject {
    userId: number;
    id: number;
    title: string;
    body: string;
}
export interface productPrisma {
    id: number;
    name: string;
    description: String
    price: number
    image: String
}