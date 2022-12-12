import CartItem from "./CartItem";
import { Modal, Button } from "../UI/UIShared";
import CartContext from "../../store/CartContext";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  const onRemoveHandler = (_id) => {
    cartCtx.removeItem(_id);
  };

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const hasItem = cartCtx.items.length > 0;

  const cartList = cartCtx.items.map((cart, index) => (
    <CartItem
      key={cart._id}
      name={cart.name}
      price={cart.price}
      quantity={cart.quantity}
      onRemove={onRemoveHandler.bind(null, cart._id)}
      onAdd={onAddHandler.bind(null, cart)}
      img={index}
    />
  ));
  return (
    <Modal className="bg-neutral-900 p-4 animate-slide-down grid grid-cols-1 gap-6">
      {hasItem && <ul className="grid grid-cols-1 gap-6">{cartList}</ul>}
      <div className="grid grid-cols-1 gap-2 items-center border-t-neutral-800 border-t-2 pt-2">
        <span className="justify-self-end">Total Amount: ${totalAmount}</span>
        <div className="flex gap-2 justify-self-end">
          <Button
            button={{ onClick: props.cartHide }}
            className="bg-red-500 hover:bg-red-600 flex-1 w-16 h-10"
          >
            Close
          </Button>

          {hasItem && (
            <Button className="bg-amber-300 hover:bg-amber-400 text-neutral-900 flex-1 w-16 h-10">
              Order
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
