import React from "react";
import archi from './/image/Archi.avif';

export default function Archi() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 mt-0">
    <div className="col-span-2 md:hidden block">
<img src={archi} />
</div>
    <div className=" bg-black  p-10 ">
        <h1 className=" uppercase text-4xl text-white tracking-widest">
       Beautiful stories every time
       </h1>
    <p className="mt-5">
    
    </p>
    </div>
    <div className="col-span-2 hidden md:block">
    <img src={archi}/>
    </div>
    
        </div>
    )
}