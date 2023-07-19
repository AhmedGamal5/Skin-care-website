import React from "react";
import "./ThirdSection.css";
import shade from "../../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import before from "../../assets/before.png";
import after from "../../assets/after.png";

const ThirdSection = () => {
  return (
    <div className="third-sec">
      <div className="left">
        <p>VIRTUAL TRY-ON</p>
        <p>NEVER BUY THE WRONG SHADE AGAIN!</p>
        <p>Try Now!</p>
        <img src={shade} alt="shade" />
      </div>
      <div className="right-third">
        <div className="effect">
          <ReactCompareImage leftImage={before} rightImage={after} />;
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
