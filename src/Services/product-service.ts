import axios, { type AxiosRequestConfig } from "axios";

import { requestBackend } from "../utils/request";
import type { ProductDTO } from "../models/poroduct";

export function findPageRequest(page:number, name: string, size: number = 12, sort: string = "name"){

    const config: AxiosRequestConfig = {
       method: "GET",
      
       url: "/products",
       params: {
        page,
        name,
        size,
        sort
       }
    }
    return requestBackend(config);
}

export function findById(id: number){

    return requestBackend({url:`/products/${id}`});
}

export function deleteById(id: number){
     const config: AxiosRequestConfig = {
       method: "DELETE",
       url: `/products/${id}`,
       withCredentials: true
     }
     return requestBackend(config);
}

export function updateRquest(obj: ProductDTO){
    const config: AxiosRequestConfig = {

       method: "PUT",
       url: `/products/${obj.id}`,
       withCredentials: true,
       data: obj
    }
    return requestBackend(config);
}

export function insertRquest(obj: ProductDTO){
    const config: AxiosRequestConfig = {

       method: "POST",
       url: "/products",
       withCredentials: true,
       data: obj
    }
    return requestBackend(config);
}