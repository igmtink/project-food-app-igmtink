import Card from "../UI/Card";
import Meals from "../Meal/Meals";

const Home = (props) => {
  return (
    <section className="h-screen w-[640px] max-w-full mx-auto grid grid-rows-2 p-6">
      <div className="fixed inset-0 bg-black/60 -z-10" />
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-3xl w-8/12">
          Get Delicious Food Right Now
        </h1>
        <h2 className="w-7/12">
          Get your delicious food and fast delivery in one app
        </h2>
      </div>

      <div className="relative">
        <Card className="absolute inset-0 overflow-auto">
          <Meals />
        </Card>
      </div>
    </section>
  );
};

export default Home;
