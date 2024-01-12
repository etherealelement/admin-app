import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {IProduct} from "@/app/services/interfaces/product.interface";

class Product {
  products: IProduct[] = [];

  constructor() {
    makeAutoObservable(this, {
        products: observable,
        fetchProducts: action,
    })
  }

    async fetchProducts() {
      if (this.products.length === 0) {
        try {
            const response = await fetch("https://test-api.itrum.ru/api/products/");
            const data = await response.json();
            runInAction(() =>  this.products = data.results)
        } catch (e) {
            console.log(e);
        }
    }
   }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Product();