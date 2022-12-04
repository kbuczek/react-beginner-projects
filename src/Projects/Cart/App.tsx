import { useGlobalContext } from "./context";
import NavbarCart from "./components/NavbarCart";
import CartContainer from "./components/CartContainer";

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
      <NavbarCart />
      <CartContainer />
    </main>
  );
}

export default App;
