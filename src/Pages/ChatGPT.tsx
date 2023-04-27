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

      <div></div>
      <CTA />
    </div>
  );
}

export default ChatGPT;
