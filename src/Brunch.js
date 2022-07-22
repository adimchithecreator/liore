import React from "react";
import brunch from'.//image/brunch.avif'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'



export default function Brunch(params) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className=" col-span-1 lg:col-span-2">
        <img src={brunch} alt="Bread and coffee at brunch"/>
        </div>
        <div className="  p-10 ">
            <h1 className=" uppercase text-4xl tracking-widest">
           Beautiful stories every time
           </h1>
        <p className="mt-5 lg:text-lg text-gray-500 text-sm">
        We provide design templates to ensure your stories look terrific. easily add photos, text, embed maps and media from other networks. Then share your story with everyone.
        </p>
        <div className="flex lg:mt-10 mt-7">
<a href="http://www.googlesin.com" className="uppercase inline-flex text-xs font-semibold  text-black tracking-widest"> View the stories 
&nbsp; &nbsp; <ArrowNarrowRightIcon className=" hover:w-7 h-5 w-5"/> 
</a>
</div>
        </div>
        
            </div>
    )
}