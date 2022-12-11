const Card = (props) => {
  let classes =
    "bg-amber-300 rounded-2xl text-neutral-900 shadow-lg " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
