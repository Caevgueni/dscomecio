import type { OrderDTO } from "../models/order";

export function save(cart: OrderDTO){
    const str = JSON.stringify(cart);
    localStorage.setItem("com.devfernandes.dscomercio/cart", str);
}

export function get() : OrderDTO {
    const str = localStorage.getItem("com.devfernandes.dscomercio/cart" )|| '"items"={}'; 
    return JSON.parse(str);

}