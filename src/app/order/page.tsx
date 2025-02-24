"use client"
import { useRouter } from "next/navigation"

export default function OderProduct(){
        const router=useRouter()
        const handlePlaceOrder=()=>{
                router.push("/")
        }
        return(
                <>
                <button className="bg-white" onClick={handlePlaceOrder}>Place Order</button>
                </>
        )
}