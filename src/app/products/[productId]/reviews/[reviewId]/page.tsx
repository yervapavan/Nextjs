export default function reviews({params}:{params:{productId:string,reviewId:string}}){
        return(
                <h1>this is Review of {params.productId}</h1>
        )
}