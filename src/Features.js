import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons'
import { faInfinity} from '@fortawesome/free-solid-svg-icons'
import { faPhotoFilm} from '@fortawesome/free-solid-svg-icons'



 export default function Features(params) {
    return(
        <div className=" text-center mb-5 p-5 grid grid-cols-1 md:grid-cols-3">
            <div className="p-5">
                <div className=" text-6xl">
<FontAwesomeIcon icon={faLaptopFile} />
</div>
<h2 className="mt-10 font-semibold text-lg"> 100% Responsive</h2>
<p className=" lg:p-10 text-gray-600 text-sm">No matter which device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
</div>
<div className="p-5">
<div className=" text-6xl" >
<FontAwesomeIcon icon={faInfinity} />
</div>
<h2 className=" capitalize mt-10 font-semibold text-lg">No Photo Upload limit</h2>
<p className="text-sm text-gray-600 lg:p-10"> Our tool has no limits on upload or bandwidth. Freely upload in bulk and share all of your stores in one go.</p>
</div>
<div className="p-5">
<div className=" text-6xl">
<FontAwesomeIcon icon={faPhotoFilm} />
</div>
<h2 className="mt-10 font-semibold text-lg">Available to Embed </h2>
<p className=" lg:p-10 text-gray-600 text-sm"> Embed Tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google Maps, and more.</p>
</div>
</div>
    )
 }