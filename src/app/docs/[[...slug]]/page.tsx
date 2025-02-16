import { notFound } from "next/navigation"
export default function docs({params}:{params:{
        slug:string[]
}}){
                if(params.slug?.length==2){
                        if (params.slug[1]=="1001"){
                                return notFound()
                        }
                        return(
                        <h1>This is the doc page of {params.slug[0]} of the concept {params.slug[1]} </h1>)
                }
                else if(params.slug?.length==1){
                        return(
                        <h1>This is the doc page of {params.slug[0]}</h1>)
                }
                else{
                        return(
                        <h1>Welcome to docs Page</h1>)
                }
}