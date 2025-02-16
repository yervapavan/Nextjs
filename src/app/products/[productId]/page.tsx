export default function ProductPage({params}:{params:{productId:string}}) {
        return (
                <>
                This is the detailed page for Product {params.productId}
                </>
        )
}