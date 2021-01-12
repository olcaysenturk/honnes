import React, { Component } from "react";
import { Container,Col } from "reactstrap";

export default class HomeSlider extends Component {
 
  render() {
    return (
      <div className={"fullscreen-bg"}>
        
        <img src={"/static/cdn/images/slider-1.png"} className={"slider-img"} alt={""} />
       
          <div className={"sliderContent"}>
          <div className={"title"}>
            HONNES
          </div>
          <div className={"text"}>
              <strong>SAĞLIĞINIZ İÇİN ÇALIŞIYORUZ</strong>
            </div>
        </div>
        
        <img src={"/static/cdn/images/down.png"} className={"down-arrow"} alt={""} />
      </div>
      
    );
  }
}
