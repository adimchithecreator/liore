import React from "react";
import couch from './/image/couch.avif'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'


export default function Main(params) {
   return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 md:hidden block">
<img src={couch} alt="Girl looking at a painting ina museum" />
</div>
<div className=" bg-black p-11 ">
    <h1 className=" uppercase text-white text-4xl tracking-widest">
        Create and share your photo stories
    </h1>
<p className="mt-5 lg:text-lg lg:mt-10 text-gray-400 text-sm">
Photosnap is a platform for photographers and visual storytellers. We make it easy to share phptos, tell stories and connect tith others.
</p>
<div className="flex lg:mt-12 mt-7">
<a href="https://www.medium.com/@adimchi" className="uppercase inline-flex text-xs font-semibold  text-white tracking-widest">Get an invite 
&nbsp; &nbsp; <ArrowNarrowRightIcon className=" hover:w-7 h-5 w-5"/> 
</a>
</div>
</div>
<div className="lg:col-span-2 hidden md:block">
<img src={couch} alt="Girl looking at a painting ina museum" />
</div>
    </div>
   )  
}