import React from "react";
import NavbarStripe from "./NavbarStripe";
import HeroStripe from "./HeroStripe";
import SidebarStripe from "./SidebarStripe";
import SubmenuStripe from "./SubmenuStripe";
import { AppProvider } from "./context";

const App = () => {
  return (
    <>
      <AppProvider>
        <NavbarStripe />
        <SidebarStripe />
        <HeroStripe />
        <SubmenuStripe />
      </AppProvider>
    </>
  );
};

export default App;
