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
    </main>
  );
};

export default Projects;
