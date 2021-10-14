import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./ToursIntro.css";
const url = "https://course-api.com/react-tours-project";

const ToursIntro = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="tours-intro">
      <Tours tours={tours} />
    </main>
  );
};

export default ToursIntro;
