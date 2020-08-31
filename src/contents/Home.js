import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/me-copy.png";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic" alt="Tijani Fulani"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Hello",
            "Barka",
            "Bonjour",
            "Hei",
            "Hola",
            "Privet",
            "Nǐ hǎo",
            "Ciao",
            "Konnichiwa",
            "Guten Tag",
            "Olá",
            "Anyoung",
            "Ahlan",
            "Habari",
            "Yassas",
            "Namaste",
            "Shalom",
          ]}
          speed={100}
          eraseDelay={600}
        />
        <h1>My name is Tijani Fulani</h1>
        <h2>I am a Software Developer</h2>
      </div>
    );
  }
}

export default Home;
