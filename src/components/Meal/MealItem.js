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
  return (
    <li className="border-b-amber-400 border-b-2 flex gap-4">
      <div className="overflow-hidden">
        <img
          className="w-32 -translate-x-6 -translate-y-5 scale-150 drop-shadow-xl"
          src={images["img-" + props.img + ".png"]}
          alt="meals"
        />
      </div>

      <div className="grid gap-4 w-44 pr-8 py-2">
        <div>
          <h1 className="text-lg font-bold">{props.name}</h1>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-amber-900">{price}</span>
          <button className="w-8 h-8 bg-neutral-900 text-white font-bold rounded-lg shadow-xl">
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default MealItem;
