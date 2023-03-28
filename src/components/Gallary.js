import React from "react";
import { useState } from "react";
import ImgCompo from "../images/ImgCompo";
import "../cssComponents/GallaryPage.css";
import { Parallax } from "react-parallax";
import { AiOutlineClose } from "react-icons/ai";
import LazyLoad from "react-lazy-load";
import {LazyLoadImage} from 'react-lazy-load-image-component'


function Gallary() {
  let [img, setImg] = useState(null)
  let [close, setClose] = useState(false)


function handleClick(image){
    setImg((prev) => prev = image)
    setClose(prev => prev = true)
}
function handleChange(){
  setClose((prev)=> prev = false )
}
  return (
    <div className="page imageBox" id="gallaryPage">
      {ImgCompo[0].map((item) => (
        <Parallax strength={300}>
          <LazyLoad threshold={0.5}>
          <LazyLoadImage loading="lazy" key={item["id"]} onClick={()=> handleClick(item["image"])} src={item["image"]} alt="" />
        </LazyLoad>
        </Parallax>
      ))}

      {
                close && 
                <div className="popup">
                <img src={img} alt="" />
                <div className='closeBtn' onClick={()=> handleChange()} >
                    <AiOutlineClose/>
                </div>
                </div>
            }
    </div>
  );
}

export default Gallary;
