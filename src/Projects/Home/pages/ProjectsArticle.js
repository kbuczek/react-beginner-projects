import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsArticle.css";

const ProjectsArticle = () => {
  return (
    <article className="projects-article">
      <Link to="/type-racer" style={{ textDecoration: "none" }}>
        <div className="projects-article-box">
          <img
            src="./images/projects-typeracer.png"
            className="projects-article-photo"
            alt="photo"
          />
          <div className="projects-article-text">
            <h2>Type Racer</h2>
            <div className="projects-article-underline"></div>
            <div>
              Site that measures how fast you type on keyboard in words per
              minute. It picks 10 random words from wikipedia's 1000 simplest
              english words list.
            </div>
            <div className="projects-article-text-stack">
              <div>React</div>
              <div>JavaScript</div>
              <div>CSS</div>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/notification" style={{ textDecoration: "none" }}>
        <div className="projects-article-box">
          <div className="projects-article-text">
            <h2>Notifications</h2>
            <div className="projects-article-underline"></div>
            <div>
              Notifications for your website. Notifications can appear in 6
              different positions and have 4 different types: Info, Success,
              Warning and Danger. Notification automatically disappear after set
              time.
            </div>
          </div>
          <img
            src="./images/projects-notifications.png"
            className="projects-article-photo"
            alt="photo"
          />
        </div>
      </Link>

      <Link to="/type-racer" style={{ textDecoration: "none" }}>
        <div className="projects-article-box">
          <img
            src="./images/projects-typeracer.png"
            className="projects-article-photo"
            alt="photo"
          />
          <div className="projects-article-text">
            <h2>CSS Grid Drag and Drop + Resize</h2>
            <div className="projects-article-underline"></div>
            <div>
              Site that measures how fast you type on keyboard in words per
              minute. It picks 10 random words from wikipedia's 1000 simplest
              english words list.
            </div>
            <div className="projects-article-text-stack">
              <div>React</div>
              <div>JavaScript</div>
              <div>CSS</div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectsArticle;
