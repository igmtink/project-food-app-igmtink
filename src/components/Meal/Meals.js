import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    _id: Math.random(),
    name: "Burger Sandwhich",
    price: 2.58,
  },
  {
    _id: Math.random(),
    name: "Chicken Inasal",
    price: 1.87,
  },
  {
    _id: Math.random(),
    name: "Sandwhich",
    price: 0.58,
  },
  {
    _id: Math.random(),
    name: "Spaghetti",
    price: 2.0,
  },
];

const Meals = (props) => {
  const mealList = DUMMY_MEALS.map((meal, index) => (
    <MealItem
      key={meal._id}
      _id={meal._id}
      name={meal.name}
      price={meal.price}
      img={index}
    />
  ));

  return <ul className="grid gap-5 animate-slide-up">{mealList}</ul>;
};

export default Meals;
