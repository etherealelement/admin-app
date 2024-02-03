import {IProduct} from "@/app/services/product-service/product.interface";
import {createStore} from "effector";
import {createMutation, createQuery} from "@farfetched/core";
import { IProducts } from "@/app/components/dashboard/dashboard.props";

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

    // mutations;

    const createAddProductMutation = createMutation({
        handler:async (product: IProducts) => {
            const response = await fetch($url.defaultState, {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Token ecd686d984219dc8ef50f6ea8dc41793228b7f6c',
                    'Accept': 'application/json'
                }
            })
        }
    })


    // effects

    // samples

    return {
        $url,
        $products,
        fetchProductsQuery,
        createAddProductMutation,
    }
}

export const productDashboardData = createProductsDashboardApi([]);