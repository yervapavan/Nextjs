"use client"
import { use } from "react"
export default function reviews({params}:
        {params:Promise<{productId:string,reviewId:string}>}){
        const {productId,reviewId} = use(params)
        return(
                <>
                <h1>this is Review of {productId}</h1>
                <h2>reviewId: {reviewId}</h2>
                </>
        )
}