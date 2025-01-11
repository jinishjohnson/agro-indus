import {
  assets,
  service3,
  service4,
  services,
  services2,
} from "../../assets/asset";
import Headof from "../helpers/Headof";
import { ImLeaf } from "react-icons/im";


const Services = () => {
  return (
    <>
      <Headof title="Services" />
      <section className="px-20 -mt-10 rounded-3xl pt-32 mx-auto bg-[#F5F6F6] max-sm:px-12 max-sm:mt-0">
        <div className="grid grid-cols-2 gap-14 max-sm:grid-cols-1 ">
          <div className="relative">
            <img
              src={assets.ImgSer}
              alt="main-img"
              className="w-full object-cover h-5/6 rounded-2xl "
            />
            <img
              src={assets.PopImg}
              alt="pop"
              className="absolute top-96 w-32 motion-safe:animate-bounce duration-500 max-sm:w-20 max-sm:top-16 "
            />
          </div>
          {services.map((item, index) => (
            <div key={index}>
              <h1 className="text-2xl text-green-900 mb-4">{item.title}</h1>
              <h1 className="text-3xl text-gray-800 mb-4">{item.head}</h1>
              <p className="text-xl text-gray-500 font-normal mb-4">
                {item.para}
              </p>
              <ul className="list-inside text-2.4xl">
                <li className="flex mb-4 gap-5">
                  <ImLeaf className="mt-3 text-[#85A947]" />
                  {item.point1}
                </li>
                <li className="flex mb-4 gap-5">
                  <ImLeaf className="mt-3 text-[#85A947]" />
                  {item.point2}
                </li>
                <li className="flex mb-4 gap-5">
                  <ImLeaf className="mt-3 text-[#85A947]" />
                  {item.point3}
                </li>
                <li className="flex mb-4 gap-5">
                  <ImLeaf className="mt-3 text-[#85A947]" />
                  {item.point4}
                </li>
                <li className="flex mb-4 gap-5">
                  <ImLeaf className="mt-3 text-[#85A947]" />
                  {item.point5}
                </li>
              </ul>
              <button className="px-8 mt-5 py-2 rounded-3xl bg-[#85A947] text-xl text-white gap-4 transition duration-500 hover:scale-105">
                View Shop Product
              </button>
            </div>
          ))}
        </div>
      </section>
      <section
        className=" pt-20 pb-20 max-sm:px-2"
        style={{ background: "linear-gradient(to top, #0d401c, #1c6932)" }}
      >
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1">
          {services2.map((service, index) => (
            <div
              key={index}
              className="text-center flex flex-col justify-center items-center border-dotted border-r-2 border-white"
            >
              <div className="">
                <img
                  src={service.icon}
                  alt="service"
                  className="w-20 h-20   rounded-full object-cover"
                />
              </div>
              <h1 className="text-2xl text-white mt-4 hover:text-[#f8c32c] cursor-pointer transition duration-500">
                {service.title}
              </h1>
              <p className="text-lg text-white mt-2 font-thin text-pretty p-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-20 py-20  mx-auto bg-[#F5F6F6]">
        {service3.map((items, index) => (
          <div key={index} className="mx-auto text-center">
            <h1 className="text-2xl text-green-900 mb-4 capitalize">
              {items.heading}
            </h1>
            <h1 className="text-3xl text-gray-800 mb-4">{items.title}</h1>
            <p className="text-xl text-gray-500 font-normal mb-4">
              {items.para}
            </p>
          </div>
        ))}

        <div className="grid grid-cols-3 gap-8 py-20 max-sm:grid-cols-1">
          {service4.map((items, index) => (
            <div className="text-center" key={index}>
              <img
                src={items.img}
                alt=""
                className="w-full  rounded-2xl hover:scale-105 duration-500 transition object-cover "
              />
              <div className="text-start ml-3 mt-5 mb-2 gap-2 flex flex-col">
                <h1 className="text-2xl text-[#112919] hover:text-[#278d45] cursor-pointer capitalize">
                  {items.title}
                </h1>
                <p className="text-gray-500">{items.para}</p>
                <button className="bg-transparent text-xl text-start w-fit text-green-600 border-b-2 border-transparent hover:border-yellow-400 transition duration-500">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
