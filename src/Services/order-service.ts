import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/request";
import type { OrderDTO } from "../models/order";

export function findByIdRequest(id: number){
    const config: AxiosRequestConfig = {
        url: `/orders/${id}`,
        withCredentials: true
    }

    return requestBackend(config);

}

export function placeOrderRquest(cart: OrderDTO){

    const config : AxiosRequestConfig ={
        url: "/orders",
        method: "POST",
        withCredentials: true,
        data: cart
    }

  return  requestBackend(config);
}

