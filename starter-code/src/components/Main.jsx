import React, { components } from "react";
import Button from "./button";
import "../App.css";


class Main extends React.Component {
  render() {
    return (
      <article className="main">
        <nav className="topBar">
          <img src="/images/ironhack-logo.svg" />
          <img src="/images/menu-top.svg" />
        </nav>

        <p className="titleText">Say hello to ReactJS</p>

        <p className="titleSpeech">You will lear a Frontend framework from scratch, to become a Ninka Developer.</p>

        <Button className="awesomeBtn"/>

        <img src="/images/react-logo.svg" className="reactLogo" />
      </article>
    );
  }
}

export default Main;
