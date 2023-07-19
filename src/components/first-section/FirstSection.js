import React from "react";
import "./FirstSection.css";
import MainImg from "../../assets/hero.png";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const FirstSection = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <section className="F-sec">
      <div className="left-sec">
        <div className="left-text1">
          <h5>SKIN PROTECTION CREAM</h5>
        </div>
        <div className="left-text2">
          <span>Trendy Collection</span>
          <h3>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </h3>
        </div>
      </div>

      <div className="main-sec">
        <motion.div
          initial={{ bottom: "32px" }}
          whileInView={{ bottom: "0px" }}
          transition={transition}
          className="circle-bcg"
        ></motion.div>
        <motion.img
          initial={{ bottom: "-32px" }}
          whileInView={{ bottom: "0px" }}
          transition={transition}
          className="img-main-sec"
          src={MainImg}
          alt="img"
        />
        <motion.div
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          transition={transition}
          className="icon-bag"
        >
          <span>
            <FaShoppingBag />
          </span>
          <div className="signup-offers">
            <p>Best Signup Offers</p>
            <span>
              <AiOutlineArrowRight />
            </span>
          </div>
        </motion.div>
      </div>

      <div className="right-sec">
        <div className="right-text1">
          <span>1.5m</span>
          <p>Monthly traffic</p>
        </div>
        <div className="right-text2">
          <span>100k</span>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
