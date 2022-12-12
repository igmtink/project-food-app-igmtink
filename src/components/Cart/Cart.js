import CartItem from "./CartItem";
import { Modal, Button } from "../UI/UIShared";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hasItem = cartCtx.items.length > 0;

  const cartList = cartCtx.items.map((cart) => (
    <CartItem key={cart._id} name={cart.name} />
  ));
  return (
    <Modal className="bg-neutral-900 p-4 animate-slide-down grid grid-cols-1 gap-6">
      <ul>{cartList}</ul>
      <div className="grid gap-2 justify-end items-center border-t-neutral-800 border-t-2 pt-2">
        <span>Total Amount: ${totalAmount}</span>
        <div className="flex gap-2">
          <Button
            button={{ onClick: props.cartHide }}
            className="bg-red-500 hover:bg-red-600 flex-1 px-2 py-2"
          >
            Close
          </Button>

          {hasItem && (
            <Button className="bg-amber-300 hover:bg-amber-400 text-neutral-900 flex-1 px-2 py-2">
              Order
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
