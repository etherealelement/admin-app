import {IProduct} from "@/app/services/product-service/product.interface";
import {createStore} from "effector";
import {createQuery} from "@farfetched/core";

function createProductsDashboardApi(initial: IProduct[]) {
    //stores
    const $products = createStore<IProduct[]>(initial);
    const $url = createStore<string>("https://test-api.itrum.ru/api/products/")
    //events

    //requests
    const fetchProductsQuery = createQuery({
        handler: async () => {
            const response  = await fetch($url.defaultState)
            return response.json();
        }
    })
    fetchProductsQuery.start();

    // effects

    // samples

    return {
        $url,
        $products,
        fetchProductsQuery,
    }
}

export const productDashboardData = createProductsDashboardApi([]);