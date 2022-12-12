import CartContext from "../../store/CartContext";
import { useContext } from "react";
import { Button } from "../UI/UIShared";

const CartItem = (props) => {
  // !Import all image from our (assets) folder
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  };

  const images = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
  );

  let imgSrc;

  const meal = props.name;

  switch (meal) {
    case "Burger Sandwhich":
      imgSrc = images["img-0.png"];
      break;
    case "Chicken Inasal":
      imgSrc = images["img-1.png"];
      break;
    case "Sandwhich":
      imgSrc = images["img-2.png"];
      break;
    case "Spaghetti":
      imgSrc = images["img-3.png"];
      break;
    default:
      console.log(meal);
  }

  const price = props.price.toFixed(2);

  return (
    <li className="flex items-center gap-4 border-b-neutral-800 border-b-2 last:border-b-0 pb-4">
      <img className="w-14 drop-shadow-xl" src={imgSrc} alt="meals" />
      <div className="grid gap-2 flex-1">
        <h1 className="font-bold text-lg">{props.name}</h1>
        <div className="flex justify-between items-center">
          <span className="font-bold text-amber-300">${price}</span>
          <div className="flex gap-2 items-center">
            <Button
              button={{ onClick: props.onRemove }}
              className="bg-neutral-800 hover:bg-neutral-700 h-8 w-8"
            >
              -
            </Button>
            <span className="text-white">x{props.quantity}</span>
            <Button
              button={{ onClick: props.onAdd }}
              className="bg-neutral-800 hover:bg-neutral-700 h-8 w-8"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
