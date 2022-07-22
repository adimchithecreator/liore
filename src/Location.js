import React from "react";
import hima from './/image/Hima.avif'
import times from './/image/Times.avif'
import beaver from './/image/beaver.avif'
import tecture from './/image/tecture.avif'
import { ArrowNarrowRightIcon } from '@heroicons/react/outline'


export default function Location() {
    return(
<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4">
<div className=" relative ">
<img src={hima} alt="Greenscapes at the himalayans" className=" lg:h-80"/>
<div className="absolute bottom-5 left-5  text-white">
<h2 className=" tracking-wide ">The Himalayans </h2>

 <h3 className=" text-xs ">by Amarachi Ezeego</h3> 

 <div className=" flex divide-y-reverse mt-5">
<hr/>
 <h4 className=" inline-flex uppercase font-medium text-sm tracking-wide "> Read story 
 <ArrowNarrowRightIcon className=" hover:w-7 h-5 w-5"/> </h4>
</div>
</div>
</div>
<div className=" relative">
<img src={times} alt="Night time at the NewYork times" className="lg:h-80"/>
<div className="absolute bottom-5 left-5  text-white">
<h2 className=" tracking-wide ">Night-time Cityscapes  </h2>

 <h3 className=" text-xs divide-y ">by Anita Daberechi</h3> 

 <div className=" flex divide-y-reverse mt-5">

 <h4 className=" inline-flex uppercase font-medium text-sm tracking-wide "> Read story 
 <ArrowNarrowRightIcon className=" hover:w-7 h-5 w-5"/> </h4>
</div>
</div>
</div>
<div className=" relative">
<img src={beaver} alt="Minimal architecture" className="lg:h-80"/>
<div className="absolute bottom-5 left-5  text-white">
<h2 className=" tracking-wide ">Architecturals </h2>

 <h3 className=" text-xs divide-y ">by Karen Anyanwu</h3> 

 <div className=" flex divide-y-reverse mt-5">

 <h4 className=" inline-flex uppercase font-medium text-sm tracking-wide "> Read story 
 <ArrowNarrowRightIcon className=" hover:w-7 h-5 w-5"/> </h4>
</div>
</div>
</div>
<div className= " relative ">
<img src={tecture} alt="Girl hiking on the mountains" className="lg:h-80 "/>
<div className="absolute bottom-5 left-5  text-white">
<h2 className=" tracking-wide ">18 Days Voyage </h2>

 <h3 className=" text-xs divide-y ">by Vanessa Nwali </h3> 

 <div className=" flex divide-y-reverse mt-5">

 <h4 className=" inline-flex uppercase font-medium text-sm tracking-wide "> Read story 
 <ArrowNarrowRightIcon className=" hover:w-7 h-5 w-5"/> </h4>
</div>
</div>
</div>
</div>
    )
}