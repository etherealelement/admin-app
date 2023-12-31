import {IProduct} from "@/app/services/interfaces/product.interface";
import {action, makeAutoObservable, observable} from "mobx";

const usersApi: string = process.env.USERS_LIST_API as string;
class Products {
  products: IProduct[] = [];

  constructor() {
    makeAutoObservable(this, {
      products: observable,
        fetchProducts: action
    })
  }

   fetchProducts() {
    fetch("https://test-api.itrum.ru/api/products/")
        .then(response => response.json())
        .then(data => this.products = [...this.products, data.results])
   }
}

export default new Products();