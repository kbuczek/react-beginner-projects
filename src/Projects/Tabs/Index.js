import React, { useState, useEffect } from "react";
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

  console.log(jobs);

  if (loading) {
    return (
      <section className="tabs-loading">
        <h1>loading...</h1>
      </section>
    );
  }
  return <div>jobs</div>;
};

export default Tabs;