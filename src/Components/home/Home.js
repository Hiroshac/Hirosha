import React from "react";
import HiImage from "../../image/Hi.jpg";
import Hi2Image from "../../image/H-1.png";
import CTA from "./CTA";
import "./home.css";



export default function Home() {
  return (
    // <center>
    <di className="container header__container">
      <section id="#">
        <h1>Hello, I am </h1>

        <img src={Hi2Image} style={{ width: "300px", height: "400px" }} />

        <h1> HIROSHA CHANDRAMAL </h1>
        <h4>
          I am 22-year-old Undergraduate Software Engineer in Sri Lanka
          Institute of Information Technology.
        </h4>
        <h4>I am Fullstack Developer.</h4>
        <CTA />
        <div></div>
      </section>
    </di>
    // </center>
  );
}
