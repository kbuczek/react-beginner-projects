import React from "react";
import phoneImg from "./Images/phone.svg";
import { useGlobalContext } from "./context";

const HeroStripe = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="heroStripe">
      <div className="heroStripe-center">
        <article>
          <h1>Payments infrastucture for the interet</h1>
          <p>
            Millions of companiesof all sizes-from startups to Fortune 500s -
            use Stripe's osftware and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
        </article>
        <article className="heroStripe-images">
          <img src={phoneImg} className="heroStripe-phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default HeroStripe;
