import React from "react";
import phoneImg from "./Images/phone.svg";
import { useGlobalContext } from "./context";
import "./HeroStripe.css";

const HeroStripe = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="heroStripe">
      <div className="heroStripe-center">
        <article className="heroStripe-text">
          <h1>Payments infrastucture for the internet</h1>
          <p>
            Millions of companies of all sizes-from startups to Fortune 500s -
            use Stripe's osftware and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="heroStripe-button">Start now</button>
        </article>
        <article className="heroStripe-images">
          <img src={phoneImg} className="heroStripe-phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default HeroStripe;
