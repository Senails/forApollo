import React from "react";
import Header from "../components/header/Header";
import Block1 from "./blocks/block1/Block1";
import Block2 from "./blocks/block2/Block2";
import Block3 from "./blocks/block3/Block3";
import Block4 from "./blocks/block4/Block4";
import Block5 from "./blocks/block5/Block5";
import './main.css'

export default function Main():JSX.Element {
    return <div className="main">
    <Header/>
    <Block1/>
    <Block2/>
    <Block3/>
    <Block4/>
    <Block5/>
  </div>
}