import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { ProductService } from "../services/product.service";
import { Actions,createEffect,Effect,ofType } from "@ngrx/effects";
import { GetAllProductsActionError, GetAllProductsSuccess, ProductsActions, ProductActionsTypes,GetSelectedProductsSuccess,GetSelectedProductsActionError } from "./products.actions";
import {catchError, map,mergeMap} from 'rxjs/operators';


@Injectable()
export class ProductsEffects{
    constructor(private productService:ProductService,private effetActions:Actions){

    }

    getAllProductsEffect:Observable<Action>=createEffect(()=>this.effetActions.pipe(ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
    mergeMap((action)=>{
     return this.productService.getAllProducts()
     .pipe(
         map((products)=> new GetAllProductsSuccess(products)),
         catchError((err)=>of(new GetAllProductsActionError(err.message)))
     )
    })
    )
    );
    /*Get Selected  Products */
    getSelectedProductsEffect:Observable<Action>=createEffect(()=>this.effetActions.pipe(ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
    mergeMap((action)=>{
     return this.productService.getSelectedProducts()
     .pipe(
         map((products)=> new GetSelectedProductsSuccess(products)),
         catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
     )
    })
    )
    );
    
}