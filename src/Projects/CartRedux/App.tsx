import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./NavbarCart";
import CartContainer from "./CartContainer";
// items

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      Redux Toolkit
      {/* <Navbar />
      <CartContainer /> */}
    </main>
  );
}

export default App;