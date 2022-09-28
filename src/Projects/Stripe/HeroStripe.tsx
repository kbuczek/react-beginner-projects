import React from "react";
import phoneImg from "./Images/phone.svg";
import { useGlobalContext } from "./context";
import "./HeroStripe.css";

const HeroStripe = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section
      className="heroStripe"
      onMouseOver={() => {
        closeSubmenu();
      }}
    >
      <div className="heroStripe-center">
        <article className="heroStripe-info">
          <h1 className="heroStripe-text">
            Payments infrastructure for the internet
          </h1>
          <p className="heroStripe-text">
            Millions of companies of all sizes-from startups to Fortune 500s -
            use Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="heroStripe-button">Start Now</button>
        </article>
        <article className="heroStripe-images">
          <img src={phoneImg} className="heroStripe-phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default HeroStripe;
