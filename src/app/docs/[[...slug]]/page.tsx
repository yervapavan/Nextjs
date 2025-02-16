export default function docs({params}:{params:{
        slug:string[]
}}){
                if(params.slug?.length==2){
                        return(
                        <h1>This is the doc page of {params.slug[0]} of the concept {params.slug[1]} </h1>)
                }
                else if(params.slug?.length==1){
                        return(
                        <h1>This is the doc page of {params.slug[0]}</h1>)
                }
                else{
                        return(
                        <h1>Docs Page</h1>)
                }
}