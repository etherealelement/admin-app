import {action, makeAutoObservable, observable, runInAction} from "mobx";
import {IProduct} from "@/app/services/interfaces/product.interface";
import {IProducts} from "@/app/components/dashboard/dashboard.props";

class Product {
  products: IProduct[] = [];

  constructor() {
    makeAutoObservable(this, {
        products: observable,
        fetchProducts: action,
        deleteProduct: action,
        addProduct: action,
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

   async deleteProduct(id: string) {
    try {
      const response = await fetch(`https://test-api.itrum.ru/api/products/${id}/`)
      const data = await response.json();
      console.log(data);
    }catch(e) {
      console.log(e);
    }
   }

   async addProduct(data: IProducts) {
    try {
        const res = await fetch("https://test-api.itrum.ru/api/products/", {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ecd686d984219dc8ef50f6ea8dc41793228b7f6c'
            }
        })
        console.log(res);
    } catch (e) {
        console.log(e)
    }
    }


}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Product();