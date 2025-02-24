import { Metadata } from "next";
export const metadata: Metadata = {
        title:"product page",
        description: "product page",
};
export default async function ProductPage({params}:{params:{productId:string}}) {
        const {productId}= await params
        return (
                <>
                This is the detailed page for Product {productId}
                </>
        )
}