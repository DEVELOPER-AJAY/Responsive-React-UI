import React from "react";
import { CTA, Brand, Navbar } from "../components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "../containers";
import "./ChatGPT.css";

function ChatGPT() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <div></div>
    </div>
  );
}

export default ChatGPT;
