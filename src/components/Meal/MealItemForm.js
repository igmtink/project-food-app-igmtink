import { Button, Input, Alert } from "../UI/UIShared";
import { useRef, useState, useEffect } from "react";

const MealItemForm = (props) => {
  const quantityInputRef = useRef();
  const [quantityIsValid, setQuantityIsValid] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuantityIsValid(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [quantityIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;

    if (+enteredQuantity < 1) {
      setQuantityIsValid(false);
      return;
    }

    props.addToCart(+enteredQuantity);
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-2">
      <Input
        ref={quantityInputRef}
        input={{
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />

      <Button
        className="w-11 h-8 bg-neutral-900 text-white hover:bg-neutral-800"
        button={{ type: "submit" }}
      >
        +
      </Button>

      {!quantityIsValid && (
        <Alert
          className="animate-fade-in-out"
          message="Please enter a valid amount!"
        />
      )}
    </form>
  );
};

export default MealItemForm;
