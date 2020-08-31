import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Projects</h1>
        <Widecard
          title="Frontend Mentor Challenges"
          describtion="Frontend Mentor is a place where people can improve their frontend skills by building real projects is HTML CSS and JavaScript. Below you will find links to my attempt on some of them."
          urlOne={
            <a
              className="projectsLink"
              href="https://github.com/Tijanif/Frontend-Mentor-Challenges "
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
          }
          urlTwo={
            <a
              className="projectsLink"
              href="https://blissful-montalcini-3567f2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live site
            </a>
          }
        />

        <Widecard
          title="My Book List"
          describtion="Build a full app in JavaScript without a library or JS framework, using classes, local storage. I found this project very helpful in solidifying my JavaScript fundamentals."
          urlOne={
            <a
              className="projectsLink"
              href="https://github.com/Tijanif/myBookList"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
          }
          urlTwo={
            <a
              className="projectsLink"
              href="https://tijanif.github.io/myBookList/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          }
        />

        <Widecard
          title="Travel Home"
          describtion="Created a Simple travel website in order to learn more about Materialise CSS. Found it very interesting and easy to use. Will definetly look into using it more in the future."
          urlOne={
            <a
              className="projectsLink"
              href="https://github.com/Tijanif/travelhome"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
          }
          urlTwo={
            <a
              className="projectsLink"
              href="https://tijanif.github.io/travelhome/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
          }
        />
      </div>
    );
  }
}

export default Projects;
