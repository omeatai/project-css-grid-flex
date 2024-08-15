import React from "react";
import "./GridStyles.css";

import normal1 from "./img/normal1.jpg";
import normal2 from "./img/normal2.jpg";
import normal3 from "./img/normal3.jpg";
import normal4 from "./img/normal4.jpg";
import normal5 from "./img/normal5.jpg";
import normal6 from "./img/normal6.jpg";
import normal7 from "./img/normal7.jpg";
import normal8 from "./img/normal8.jpg";
import normal9 from "./img/normal9.jpg";
import big1 from "./img/big1.jpg";
import big2 from "./img/big2.jpg";
import big3 from "./img/big3.jpg";
import vertical1 from "./img/vertical1.jpg";
import vertical2 from "./img/vertical2.jpg";
import vertical3 from "./img/vertical3.jpg";
import horizontal1 from "./img/horizontal1.jpg";
import horizontal2 from "./img/horizontal2.jpg";
import horizontal3 from "./img/horizontal3.jpg";

const Grid = () => {
  return (
    <section className="container">
      <div>
        <img src={normal1} alt="" />
      </div>
      <div class="vertical">
        <img src={vertical1} alt="" />
      </div>
      <div class="horizontal">
        <img src={horizontal1} alt="" />
      </div>
      <div>
        <img src={normal2} alt="" />
      </div>
      <div>
        <img src={normal3} alt="" />
      </div>
      <div class="big">
        <img src={big1} alt="" />
      </div>
      <div>
        <img src={normal4} alt="" />
      </div>
      <div class="vertical">
        <img src={vertical2} alt="" />
      </div>
      <div>
        <img src={normal5} alt="" />
      </div>
      <div class="horizontal">
        <img src={horizontal2} alt="" />
      </div>
      <div>
        <img src={normal6} alt="" />
      </div>
      <div class="big">
        <img src={big2} alt="" />
      </div>
      <div>
        <img src={normal7} alt="" />
      </div>
      <div class="horizontal">
        <img src={horizontal3} alt="" />
      </div>
      <div>
        <img src={normal8} alt="" />
      </div>
      <div class="big">
        <img src={big3} alt="" />
      </div>
      <div>
        <img src={normal9} alt="" />
      </div>
      <div class="vertical">
        <img src={vertical3} alt="" />
      </div>
    </section>
  );
};

export default Grid;
