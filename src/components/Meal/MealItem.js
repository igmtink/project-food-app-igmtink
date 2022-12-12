import { Card } from "../UI/UIShared";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const MealItem = (props) => {
  // !Import all image from our (assets) folder
  const importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });

    return images;
  };

  // !(toFixed(2)) will always render two decimal places from our price
  const price = `$${props.price.toFixed(2)}`;

  const images = importAll(
    require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
  );

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (enteredQuantity) => {
    cartCtx.addItem({
      _id: props._id,
      name: props.name,
      price: props.price,
      quantity: enteredQuantity,
    });
  };

  return (
    <li>
      <Card className="flex justify-between gap-4 overflow-hidden shadow-xl">
        <div className="overflow-hidden">
          <img
            className="w-32 -translate-x-6 -translate-y-5 scale-150 drop-shadow-xl"
            src={images["img-" + props.img + ".png"]}
            alt="meals"
          />
        </div>

        <div className="grid gap-4 w-48 p-4">
          <div>
            <h1 className="text-lg font-bold">{props.name}</h1>
          </div>
          <div className="self-end">
            <div className="flex justify-between items-center gap-4">
              <span className="font-bold text-amber-900">{price}</span>
              <MealItemForm addToCart={addToCartHandler} />
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default MealItem;
