import React from "react";
import Main from "./Main";
import Brunch from "./Brunch";
import Features from "./Features";


export default function Gallery() {
    return(
        <div>
        <div className="grid grid-rows-2">
<div>
    <Main/>
</div>
<div>
<Brunch/>
</div>
<div>
<Features/>
</div>
</div>

        </div>
    )
}