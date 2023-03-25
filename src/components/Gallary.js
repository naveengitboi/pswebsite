import React from "react";
import { useState } from "react";
import ImgCompo from "../images/ImgCompo";
import "../cssComponents/GallaryPage.css";
import { Parallax } from "react-parallax";
import { AiOutlineClose } from "react-icons/ai";


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
        <img key={item["id"]} onClick={()=> handleClick(item["image"])} src={item["image"]} alt="" />
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
