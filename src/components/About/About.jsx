import "./About.css";
import Imgabt from "../../assets/header.jpg";

//content
const Abt_Title = "KANNAMMAL AGRO INDUSTRIES PRIVATE LIMITED";
const Abt_Desc = 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,sed voluptatum nisi deleniti beatae error. Explicabo place ullam ducimus ipsum consectetur enim commodi deleniti distinctio, cupiditate blanditiis quam laudantium in. Lorem,ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptas accusamus tempora rem inventore reiciendis veritatis id commodi mollitia aperiam perspiciatis, iusto quasi autem, vitae maxime. Magnam at veritatis a. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, magnam repellat rerum alias omnis nesciunt harum adipisci architecto temporibus dolore eos? Eos molestiae temporibus veritatis cumque eligendi iure possimus id? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tempore accusantium magnam laudantium totam quis, veritatis corporis! Quia repudiandae at enim praesentium? Veniam dolore minus voluptas perferendis odit eius molestiae.";

const About = () => {
  return (
    <>
      <section className="z-0">
        <div className="shape">
          <h1 className="text-bold text-4xl md:text-4xl md:text-white sm:text-2xl sm:text-[#123524]">
            About-us
          </h1>
        </div>
        <h1 className="text-3xl sm:text-2xl font-normal sm:font-bold-xl text-center">
          About us
        </h1>
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h1 className="text-bold text-3xl text-[#123524] md:text-3xl sm:text-2xl py-20">
            {Abt_Title}
          </h1>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-6 xl:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="col">
              <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl my-5">
                Heading Sample
              </h1>
              <p className="text-base sm:text-sm md:text-base lg:text-lg text-justify leading-relaxed sm:leading-normal md:leading-relaxed lg:leading-loose">
                {Abt_Desc}
              </p>
            </div>
            <div className="col-2">
              <img src={Imgabt} alt="" className="w-4/2" />
              <div className="shape-2"></div>
            </div>
          </div>
        </div>
      </section>
      {/* motive */}
      <section className="bg-[#123524] py-10 sm:py-16 md:py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-6 xl:px-24">
          <h1 className="text-2xl sm:text-2xl md:text-3xl text-[#EFE3C2] italic text-center">
            Company Motive -- Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Tempora fuga minus libero quia consequuntur
            nesciunt.
          </h1>
        </div>
      </section>

      <section className="bg-[#e5e7eb] py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-6 xl:px-24">
          <h1 className="text-2xl sm:text-2xl md:text-2xl text-dark-900 capitalize font-bold my-4 sm:my-6 md:my-8 border-b-2 border-[#123524] pb-2">
            To encourage farmers to adopt sustainable practices, it is important
            to provide training, build demonstration areas, and offer machinery
            supports.
          </h1>
          <ul className="list-disc mx-3 sm:mx-6 md:mx-10 my-5 text-lg sm:text-xl md:text-xl py-2">
            <li className="py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              exercitationem quisquam temporibus possimus dignissimos quo, sed
              animi iusto itaque asperiores alias illum, maxime voluptas
              inventore cupiditate tenetur minus in. Alias.
            </li>
            <li className="py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              exercitationem quisquam temporibus possimus dignissimos quo, sed
              animi iusto itaque asperiores alias illum, maxime voluptas
              inventore cupiditate tenetur minus in. Alias.
            </li>
            <li className="py-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              exercitationem quisquam temporibus possimus dignissimos quo, sed
              animi iusto itaque asperiores alias illum, maxime voluptas
              inventore cupiditate tenetur minus in. Alias.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
