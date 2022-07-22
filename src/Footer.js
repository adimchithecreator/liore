import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';
import {  faTwitter, } from '@fortawesome/free-brands-svg-icons';
import {  faYoutube , } from '@fortawesome/free-brands-svg-icons';
import {  faPinterest , } from '@fortawesome/free-brands-svg-icons';
import {  faInstagram , } from '@fortawesome/free-brands-svg-icons';


export default function Footer(params) {
    return(
       
<footer class="p-4 bg-black  shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span class=" text-gray-500 sm:text-center text-xs"> Copyright 2019 . All Rights Reserved.
    </span>
    <ul class="flex uppercase flex-wrap items-center mt-3 text-xs  text-white tracking-wider sm:mt-0">
        <li>
            <a href="https://www.medium.com/@adimchi" class="mr-4 hover:underline md:mr-6">Home</a>
        </li>
        <li>
            <a href="https://www.medium.com/@adimchi" class="mr-4 hover:underline md:mr-6">stories</a>
        </li>
        <li>
            <a href="https://www.medium.com/@adimchi" class="mr-4 hover:underline md:mr-6">feature</a>
        </li>
        <li>
            <a href="https://www.medium.com/@adimchi" class="hover:underline">pricing</a>
        </li>
    </ul>
 <span className="text-white">
 <FontAwesomeIcon icon={faFacebookF} className="mr-4"/>
 <FontAwesomeIcon icon={faTwitter} className="mr-4" />
 <FontAwesomeIcon icon={faPinterest} className="mr-4" />
 <FontAwesomeIcon icon={faYoutube} className="mr-4" />
 <FontAwesomeIcon icon={faInstagram} />
 </span>
</footer>

    
    )
}