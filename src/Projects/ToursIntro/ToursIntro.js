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

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="tours-intro-no-left">No tours left :(</div>
        <div>
          <button className="tours-intro-refresh-button">refresh data</button>
        </div>
      </main>
    );
  }

  return (
    <main className="tours-intro">
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default ToursIntro;
