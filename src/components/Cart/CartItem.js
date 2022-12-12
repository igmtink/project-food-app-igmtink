import CartContext from "../../store/CartContext";
import { useContext } from "react";
import { Button } from "../UI/UIShared";

const CartItem = (props) => {
  return (
    <li className="grid gap-6 grid-cols-1">
      <div>
        <h1>{props.name}</h1>
      </div>
    </li>
  );
};

export default CartItem;
