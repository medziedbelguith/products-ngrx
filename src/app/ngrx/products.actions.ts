import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
export enum ProductActionsTypes{
    /* Get All products */
    GET_ALL_PRODUCTS="[P] Get All products",
    GET_ALL_PRODUCTS_SUCCESS="[P] Get All products Success",
    GET_ALL_PRODUCTS_ERROR="[P] Get All products Error",
     /* Get Selected products */
    GET_SELECTED_PRODUCTS="[P] Get Selected products",
    GET_SELECTED_PRODUCTS_SUCCESS="[P] Get Selected products Success",
    GET_SELECTED_PRODUCTS_ERROR="[P] Get Selected products Error",
   // GET_AVAILABLE_PRODUCTS="[P] Get Available products",
   // SEARCH_PRODUCTS="[P] Search products",
   // NEW_PRODUCT="[P] New product",
   // SELECT_PRODUCT="[P] Select product",
   // EDIT_PRODUCT="[P] Edit product",
   // DELETE_PRODUCT="[P] Delete product",
   // PRODUCT_ADDED="[P] product added",
   // PRODUCT_UPDATED="[P] product updated",
}

export class GetAllProductsAction implements Action{
    type: ProductActionsTypes=ProductActionsTypes.GET_ALL_PRODUCTS;    
    constructor(public payload:any)
    {

    }
}
export class GetAllProductsSuccess implements Action{
    type: ProductActionsTypes=ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;    
    constructor(public payload:Product[])
    {

    }
}
export class GetAllProductsActionError implements Action{
    type: ProductActionsTypes=ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;    
    constructor(public payload:string)
    {

    }
}
export class GetSelectedProductsAction implements Action{
    type: ProductActionsTypes=ProductActionsTypes.GET_SELECTED_PRODUCTS;    
    constructor(public payload:any)
    {

    }
}
export class GetSelectedProductsSuccess implements Action{
    type: ProductActionsTypes=ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;    
    constructor(public payload:Product[])
    {

    }
}
export class GetSelectedProductsActionError implements Action{
    type: ProductActionsTypes=ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;    
    constructor(public payload:string)
    {

    }
}

export type ProductsActions=GetAllProductsAction|GetAllProductsSuccess|GetAllProductsActionError
           |GetSelectedProductsAction|GetSelectedProductsSuccess|GetSelectedProductsSuccess;