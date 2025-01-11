import {  Products, trading } from "../../assets/asset";
import Headof from "../helpers/Headof";
import { CgArrowTopRightO } from "react-icons/cg";
import { FcUndo } from "react-icons/fc";


const Manufacturing = () => {
  return (
    <>
      <Headof title="Manufacturing" customStyle={{left:"364px"}} />
      <section className="px-20  md:px-20 max-sm:px-4 mx-auto py-20   lg:px-20">
        {/* Header Component */}

        {/* Trading Items */}
        <div className="grid relative grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
          {trading.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl w-fit flex flex-col items-start relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-72  object-cover rounded-lg"
              />
              <div className="p-2  cursor-pointer items-center w-full scale-95   rounded-3xl absolute bottom-2 bg-white shadow-xl px-4  hover:scale-100  duration-500 transition">
                <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl xl:text-6xl w-full text-center text- font-bold flex justify-between">
                  {item.name}
                  <CgArrowTopRightO />{" "}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 py-4 mx-auto max-sm:px-2 md:px-20 bg-[#f5f6f6] ">
        <div className="mx-10 mb-20 mt-20 max-sm:mx-4 max-sm:mt-0 ">

        <h1 className="text-3xl mb-2 max-sm:text-3xl text-center border-b-2 border-lime-800 w-36 mx-auto leading-snug" >Products</h1>
        <p className="text-xl text-center leading-8 py-10 w-auto mx-auto max-sm:text-wrap max-sm:mt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsam
          corporis atque nisi explicabo quasi ex eligendi non officia nam omnis
          ratione placeat dolores, vel praesentium dolor consequatur expedita
          quae?
        </p>
        </div>
        {/* Trading Items */}

        <div className="grid gap-6 grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-3 mb-10">
    {Products.map((item, index) => (
      <div
        key={index}
        className="bg-white border hover:shadow-lg hover:scale-105  duration-500 transition rounded-lg overflow-hidden flex flex-col cursor-pointer"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-72 object-cover max-sm:h-40"
        />
        <div className="p-4">
          <p className="text-2xl text-center font-semibold">{item.name}</p>
          <p className="text-xl mt-2 font-thin ">{item.description}</p>
          <button className="flex  justify-end items-center border rounded-2xl mt-2 p-1 hover:bg-lime-600 hover:text-white ">Read More<FcUndo /></button>
        </div>
      </div>
    ))}
    </div>
      </section>
    </>
  );
};

export default Manufacturing;
