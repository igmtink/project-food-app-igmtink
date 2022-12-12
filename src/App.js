import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Home from "./components/Page/Home";
import CartProvider from "./store/CartProvider";
import { useState } from "react";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const cartShowHandler = () => {
    setCartIsShow(true);
  };

  const cartHideHandler = () => {
    setCartIsShow(false);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      cartHideHandler();
    }
  });

  return (
    <CartProvider>
      {cartIsShow && <Cart cartHide={cartHideHandler} />}
      <Header cartShow={cartShowHandler} />
      <Home />
    </CartProvider>
  );
}

export default App;
