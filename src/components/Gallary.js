import React from "react";
import ImgCompo from "../images/ImgCompo";
import "../cssComponents/GallaryPage.css";
import { Parallax } from "react-parallax";

function handleClick(id){
    console.log(id)
}

function Gallary() {
  return (
    <div className="page imageBox" id="gallaryPage">
      {ImgCompo[0].map((item) => (
        <Parallax strength={300}>
        <img key={item["id"]} onClick={()=> handleClick(item["id"])} src={item["image"]} alt="" />
        </Parallax>
      ))}
    </div>
  );
}

export default Gallary;
