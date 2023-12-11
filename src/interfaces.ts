export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProductCrud {
    createProduct(data: Pick<IProduct, "name" | "price">): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: Partial<IProduct>): IProduct;
    deleteProduct(id: number): any
}