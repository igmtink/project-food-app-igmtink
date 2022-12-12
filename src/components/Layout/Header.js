import { Button } from "../UI/UIShared";
import CartContext from "../../store/CartContext";
import { useContext, useEffect, useState } from "react";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.quantity;
  }, 0);

  const [cartIsShaked, setCartIsShaked] = useState(false);

  const cartAnimate = `${cartIsShaked ? "animate-shake" : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setCartIsShaked(true);

    const timer = setTimeout(() => {
      setCartIsShaked(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <header className="fixed left-0 right-0">
      <div className="w-[640px] max-w-full mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold">Food App</h1>
        <Button
          button={{ onClick: props.cartShow }}
          className={`${cartAnimate} bg-none shadow-none rounded-none hover:bg-none group relative`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 group-hover:fill-neutral-200 transition-colors"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 rounded-[50%] bg-amber-300 w-4 h-4 text-xs text-neutral-900 group-hover:bg-amber-400 transition-colors">
            {numberOfCartItems}
          </span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
