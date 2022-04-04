import React from "react";
import Navbar from "../Navbar2";
import { Link } from "react-router-dom";
import ProjectsArticle from "./ProjectsArticle";
import "./Projects.css";

const Projects = () => {
  return (
    <main className="projects">
      <Navbar />
      <section className="projects-container">
        <h1>My projects</h1>
        <div className="projects-underline"></div>
        <ProjectsArticle />
      </section>
      <section className="home-small-projects">
        <h4>Smaller projects that I've created while learning React</h4>
        <ul className="home-container">
          {/* <li>
            <Link className="home-link home-button-red" to="/memory-game">
              MEMORY GAME
            </Link>
          </li> */}
          <li>
            <Link className="home-link home-button" to="/photo-slider">
              Photo Slider
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/navbar2">
              Navbar with Dropdown
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/navbar">
              Navbar
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/tabs">
              Tabs
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/menu">
              Menu Filters
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/accordion">
              Accordion
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/tours-intro">
              Tours Intro fetch()
            </Link>
          </li>
          <li>
            <Link
              className="home-link home-button"
              to="/birthday-list-bootstrap"
            >
              Birthday List Bootstrap
            </Link>
          </li>
          <li>
            <Link className="home-link home-button" to="/simple-list">
              Simple List
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Projects;
