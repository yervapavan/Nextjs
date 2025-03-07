import { Metadata } from "next"

export const metadata:Metadata={
        title:{
                absolute:"Dashboard"
        },
        description:"Dashboard page"

}
export default function Layout({children,
        notifications,
        revenue,
        users

}:{children:React.ReactNode,notifications:React.ReactNode,revenue:React.ReactNode,users:React.ReactNode}){
        return(
                <>
                {children}
                <div className="flex flex-row h-screen w-full">
                        <div className="flex flex-col justify-center items-center">
                                {notifications}
                                {revenue}
                        </div>
                        <div>
                                {users}
                        </div>

                </div>
                </>
        )
}