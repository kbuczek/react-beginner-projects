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
            {/* <div className="projects-article-underline"></div> */}
            <div className="project-article-text-desc">
              Site that measures how fast you type on keyboard in words per
              minute. It picks 10 random words from wikipedia's 1000 simplest
              english words list.
            </div>
            <div className="projects-article-text-stack">
              <div className="projects-article-text-tech">React</div>
              <div className="projects-article-text-tech">JavaScript</div>
              <div className="projects-article-text-tech">CSS</div>
            </div>
          </div>
        </div>
      </Link>

      <Link to="/notification" style={{ textDecoration: "none" }}>
        <div className="projects-article-box">
          <div className="projects-article-text">
            <h2>Notifications</h2>
            {/* <div className="projects-article-underline"></div> */}
            <div>
              Notifications for your website. Notifications can appear in 6
              different positions and have 4 different types: Info, Success,
              Warning and Danger. Notification automatically disappear after set
              time.
            </div>
            <div className="projects-article-text-stack">
              <div className="projects-article-text-tech">React</div>
              <div className="projects-article-text-tech">TypeScript</div>
              <div className="projects-article-text-tech">CSS</div>
            </div>
          </div>
          <img
            src="./images/projects-notifications.png"
            className="projects-article-photo"
            alt="photo"
          />
        </div>
      </Link>

      <Link to="/griddnd" style={{ textDecoration: "none" }}>
        <div className="projects-article-box">
          <img
            src="./images/projects-griddnd.png"
            className="projects-article-photo"
            alt="photo"
          />
          <div className="projects-article-text">
            <h2>CSS Grid Drag and Drop + Resize</h2>
            {/* <div className="projects-article-underline"></div> */}
            <div>
              Drag and drop boxes on CSS grid. Change boxes sizes by pressing
              "+" or "-" signs. Change number of grid columns.
            </div>
            <div className="projects-article-text-stack">
              <div className="projects-article-text-tech">React</div>
              <div className="projects-article-text-tech">TypeScript</div>
              <div className="projects-article-text-tech">CSS</div>
            </div>
          </div>
        </div>
      </Link>

      <a
        href="https://github.com/kbuczek/chairman-mobileapp/blob/main/README.md"
        style={{ textDecoration: "none" }}
      >
        <div className="projects-article-box">
          <div className="projects-article-text">
            <h2>Chairman Fullstack App</h2>
            {/* <div className="projects-article-underline"></div> */}
            <div>
              I created this app to help manage conferences schedule. React
              Native App allows users to add rooms with lecture information.
              Website created in React allows conference attendees to browse
              conference schedule added via mobile app.
            </div>
            <div className="projects-article-text-stack">
              <div className="projects-article-text-tech">React Native</div>
              <div className="projects-article-text-tech">React</div>
              <div className="projects-article-text-tech">NodeJS</div>
              <div className="projects-article-text-tech">MongoDB</div>
              <div className="projects-article-text-tech">JavaScript</div>
              <div className="projects-article-text-tech">CSS</div>
            </div>
          </div>
          <img
            src="./images/projects-chairman.png"
            className="projects-article-photo"
            alt="photo"
          />
        </div>
      </a>
    </article>
  );
};

export default ProjectsArticle;
