export default function ProductPage({params}:{params:{productId:string}}) {
        const {productId}:{productId:string}= params
        return (
                <>
                This is the detailed page for Product {productId}
                </>
        )
}