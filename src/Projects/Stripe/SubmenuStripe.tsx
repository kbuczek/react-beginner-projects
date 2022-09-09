import React from "react";
import { useGlobalContext } from "./context";

const SubmenuStripe = () => {
  const { isSubmenuOpen } = useGlobalContext();
  return (
    <aside className={`submenuStripe ${isSubmenuOpen && "submenuStripe-show"}`}>
      SubmenuStripe
    </aside>
  );
};

export default SubmenuStripe;
