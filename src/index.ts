import { IProduct, IProductList } from "./interfaces";

class ProductList implements IProductList {
    private productList: IProduct[] = []
    id: number = 1

    date = new Date()

    createProduct(data: any): IProduct {
        
        const product = {
            id: this.id,
            name: data.name,
            price: data.price,
            createdAt: this.date,
            updatedAt: this.date,
        }
        
        this.productList.push(product)
        this.id++
        
        return product
    }
    
    getProducts(): IProduct[] {
        return this.productList
    }

    getOneProduct(id: number): IProduct | undefined {
        const findProduct = this.productList.find((product) => {console.log(product); product.id === id})
        console.log(findProduct);
        
        return findProduct
    }

    updateProduct(id: number, data: Pick<IProduct, 'name' | 'price'>): IProduct {
        const editProduct = this.productList.findIndex((product) => {product.id === id})
        const newProduct = {
            id: id,
            name: data.name,
            price: data.price,
            createdAt: this.date,
            updatedAt: this.date,
        }

        this.productList.splice(editProduct, 1, newProduct)

        return newProduct
    }

    deleteProduct(id: number): any {
        const deleteProduct = this.productList.findIndex((product) => {product.id === id})
        this.productList.splice(deleteProduct, 1)

        return { message: "Product sucessfully deleted."}
    }
}

const productList = new ProductList()

const produto = {name: 'computador', price: 2500}
productList.createProduct(produto)
console.log(productList.getProducts());
console.log(productList.getOneProduct(1));


