export interface IProduct {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface IProductList {
    createProduct(data: Pick<IProduct, 'name' | 'price'>): IProduct;
    getProducts(): IProduct[];
    getOneProduct(id: number): IProduct | undefined;
    updateProduct(id: number, data: Pick<IProduct, 'name' | 'price'>): IProduct;
    deleteProduct(id: number): any
}