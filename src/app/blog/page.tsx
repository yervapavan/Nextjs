export default async function blog(){
        await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        resolve("resolved")
                },2000)
        })
        return(
                <>
                <h1>Blog</h1>
                </>
        )
}       