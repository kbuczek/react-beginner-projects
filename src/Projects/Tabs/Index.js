import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./Index.css";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="tabs-loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="tabs">
      <div className="tabs-title">
        <h2>My work experience</h2>
      </div>
      <div className="tabs-jobs container">
        <div className="tabs-jobs-buttons">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                className={`tabs-jobs-button ${
                  index === value && "tabs-jobs-button-active"
                }`}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="tabs-jobs-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="tabs-job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="tabs-job-description">
                <FaAngleDoubleRight className="tabs-job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Tabs;
