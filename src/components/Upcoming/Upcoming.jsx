import { upcoming } from "../../assets/asset";
import Headof from "../helpers/Headof";
import { ImArrowRight2 } from "react-icons/im";

const Upcoming = () => {
  return (
    <>
      <Headof title="Upcoming" />
      <section className="px-20 py-4 mx-auto max-sm:px-2 max-md:px-20">
        <div className="mx-10 mb-20 mt-20 max-sm:mx-2">
          <h1 className="text-3xl mb-2 text-center border-b-2 border-lime-800 w-3/5 max-sm:w-full mx-auto leading-snug">
            Upcoming Projects
          </h1>
          <p className="text-xl text-center leading-8 py-10 w-auto mx-auto max-sm:text-center max-sm:text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            ipsam corporis atque nisi explicabo quasi ex eligendi non officia
            nam omnis ratione placeat dolores, vel praesentium dolor consequatur
            expedita quae?
          </p>
        </div>
      </section>
      <section className="px-20 py-4 mx-auto max-sm:px-2 max-md:px-20 ">
        {/* Trading Items */}
        {upcoming.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-6 max-sm:grid-cols-1"
          >
            <div className="mb-6">
              <img className="rounded-xl " src={item.image} alt="" />
            </div>
            <div className="leading-snug mb-4">
              <h1 className="text-2xl mb-2">{item.name}</h1>
              <p className="text-gray-400 font-semibold mb-2 text-1xl">
                {item.date}
              </p>
              <p className="text-xl font-light">{item.description}</p>
              <button className=" flex  p-2 mt-4 text-yellow-100 border-none shadow-slate-950  bg-lime-700 rounded-3xl hover:scale-105 hover:shadow-gray-950 duration-500 transition">
                {" "}
                Learn More <ImArrowRight2 className="ml-2 mt-1" />{" "}
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Upcoming;
