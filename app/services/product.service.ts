import {IProduct} from "@/app/services/interfaces/product.interface";
import {action, makeAutoObservable, observable, runInAction} from "mobx";

const usersApi: string = process.env.USERS_LIST_API as string;
class Product {
  products: IProduct[] = [];

  constructor() {
    makeAutoObservable(this, {
        products: observable,
        fetchProducts: action,
    })
  }

   async fetchProducts() {
        try {
            const response = await fetch("https://test-api.itrum.ru/api/products/");
            const data = await response.json()
            runInAction(() => {
               return this.products = [...this.products, ...data.results];
            })
        } catch (e) {
            console.log(e)
        }
   }
}

export default new Product();