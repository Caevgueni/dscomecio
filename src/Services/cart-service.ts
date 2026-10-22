import type { OrderDTO } from "../models/order";


import * as cartResository from '../localstorage/cart-repository';

export function saveCart(cart: OrderDTO){

    cartResository.save(cart);

}

export function getCart() : OrderDTO{
   return  cartResository.get();
}