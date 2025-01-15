import Headof from "../helpers/Headof";
import Nopro from "../../assets/NoProfile.jpg";




const Bod = () => {
    
  return (
    <>
      <Headof
        title="Board of director"
        customStyle={{ left: "346px" }}
      ></Headof>
      <section>
      <div className="container px-4 sm:px-6 md:px-10 lg:px-20 my-10 sm:my-12 md:my-16 lg:my-20 mx-auto">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl capitalize my-4">heading</div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-slate-600 font-normal">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            maxime accusantium aut repellendus soluta laborum ullam nulla
            reiciendis recusandae laudantium voluptatibus sapiente eos, fugit in
            possimus? Quo libero dolorum reiciendis.
          </p>
        </div>
      </section>
      <section>
        <div className="container px-4 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-16 my-10 sm:my-12 md:my-16 lg:my-20 xl:my-24 mx-auto">
          <div className="grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 max-xl:grid-cols-2 gap-4">
            <div className="col">
              <img src={Nopro} alt="" className="rounded-2xl" />
               <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-center text-[#123545] capitalize bg-[#EFE3C2] py-4 sm:py-5 md:py-6 lg:py-6 xl:py-6 -my-5 sm:-my-6 md:-my-4 lg:-my-4 xl:-my-4 rounded-xl"> name of the person1</p>
            </div>
            <div className="col">
              <img src={Nopro} alt="" className="rounded-2xl" />
               <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-center text-[#123545] capitalize bg-[#EFE3C2] py-4 sm:py-5 md:py-6 lg:py-6 xl:py-6 -my-5 sm:-my-6 md:-my-4 lg:-my-4 xl:-my-4 rounded-xl"> name of the person1</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bod;
