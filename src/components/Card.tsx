import React from 'react';
export default  function Card({children}:{children:React.ReactNode}){
        return (
                <div className='flex flex-1'>
                        <div className="m-2 border-b-slate-400 rounded-md shadow-inner bg-white w-[300px] text-black h-[300px] text-center">
                                {children}
                        </div>
                </div>
        )
}