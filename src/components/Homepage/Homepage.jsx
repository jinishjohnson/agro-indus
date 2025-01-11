import Herovid from "../../assets/titlevid.mp4";
import Typer from "../helpers/Typer";
import Image1 from "../../assets/mainpage.jpg";
// import { BsFillCheckCircleFill } from "react-icons/bs";
import "./Homepage.css";
import { ImLeaf } from "react-icons/im";
//hero content //
const Quote = '"Rooted in tradition , Growing for tomorrow"';

//content//
const Aboutcontent = {
  data1: [
    {
      id: 1,
      title: "AGRO",
      subtitle: "Welcome to The Kannammal Agro Industries ",
      description:
        "Kannammal Agro Industries Private Limited is a Private company incorporated on 18 September 2020. It is classified as Non-government company and is registered at Registrar of Companies, Chennai. Its authorized share capital is Rs. 20,000,000 and its paid up capital is Rs. 10,000,000. It's NIC code is 151 (which is part of its CIN). As per the NIC code, it is inolved in Production, processing and preservation of meat, fish, fruit vegetables, oils and fats.",
    },
  ],
};

// card //
const cardData = {
  card1: [
    {
      title: " Litigation Search Report of Kannammal Agro Industries",
      description:
        "Get a list of all litigations Kannammal Agro Industries is contesting or have contested in the past. Litigation search report is crucial if you are a potential vendor, employee or a customer of Kannammal Agro Industries. ",
    },
  ],
  card2: [
    {
      title: "Outstanding Payments to Micro & Small Enterprises",
      description:
        "Companies are required to file half yearly returns showing payments due to Micro & Small Enterprises that have been delayed more than 45 days.",
    },
  ],
  card3: [
    {
      title: "Regulatory Filings of Kannammal Agro Industries",
      description:
        "All companies in India are required to file various documents like financials, loan agreements, list of shareholders, details of directors, details of funding rounds and a lot more.",
    },
  ],
};

const Homepage = () => {
  return (
    <>
      {/* hero-section */}
      <section
        id="section1"
        className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"
      >
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={Herovid}
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="video-content space-y-2">
          <Typer />
          <h3 className="font-light text-xl sm:text-2xl lg:text-3xl capitalize italic">
            {Quote}
          </h3>
          <p className="font-light ">
            to encourae farmer to adopt sustainable practices and to promote the
            use of technology in agriculture
          </p>
          <button className="btn "> Read More</button>
        </div>
      </section>
      {/* hero-section-end */}
      {/* section-2 */}
      <section>
        <div className="container mx-auto my-20 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col">
              <img
                src={Image1}
                alt="Agro"
                className="rounded-3xl w-full h-auto"
              />
            </div>
            {Object.values(Aboutcontent)
              .flat()
              .map((item, index) => (
                <div key={index} className="col md:mx-8">
                  <h1 className="text-xl text-stone-700 uppercase font-bold">
                    {item.title}
                  </h1>
                  <h1 className="text-2xl md:text-3xl text-dark-900 capitalize font-bold my-2">
                    {item.subtitle}
                  </h1>
                  <p className="text-sm md:text-sm my-4 text-dark-100 leading-normal">
                    {item.description}
                  </p>
                  <button className="bg-[#EFE3C2] text-[#314116;] font-bold p-2 rounded my-2 hover:bg-[#EFE3C8] hover:scale-105 transition">
                    Read More
                  </button>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* section-2-end */}
      {/* section-3 */}

      <section id="section2" className="bg-[#f5f6f6] py-1">
        <div className="container mx-auto my-20 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col">
              <h1 className="text-2xl md:text-3xl text-dark-900 capitalize font-bold my-2 border-b-2 border-[#123524] pb-2">
                Our Product
              </h1>
              <div className="grid grid-cols-1 gap-0 mx-3">
                {Object.values(cardData)
                  .flat()
                  .map((card, index) => (
                    <div
                      key={index}
                      className="container card-body bg-white my-5 rounded-xl p-6 shadow-md"
                    >
                      <div className="card-title font-bold my-2 subpixel-antialiased">
                        {card.title}
                      </div>
                      <div className="card-description text-sm subpixel-antialiased">
                        {card.description}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col">
              <h1 className="text-2xl md:text-3xl text-dark-900 capitalize font-bold w-50 my-2 my-2 border-b-2 border-[#123524] pb-2">
                Sample Heading
              </h1>
              <div className="container mx-auto my-10">
                <h4 className="text-xl font-bold my-10 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, cum incidunt dicta deserunt tenetur consequuntur ullam, ipsum commodi mollitia, quidem temporibus labore sapiente ducimus id debitis ea assumenda corporis aliquid?
                </h4>
                <p className="text-justify">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis odit. Laudantium illo quis pariatur quasi provident repellat, commodi doloribus odit perspiciatis inventore sapiente accusamus non consequatur facilis possimus nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellat omnis incidunt hic quibusdam ipsum tempore quod fugit. Nobis ab officiis aspernatur laboriosam aperiam dolorum eos tempora. Itaque, perferendis eos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas facere repellendus nihil harum nisi iure amet fugit corrupti, magni eum aspernatur rerum fugiat placeat repudiandae magnam libero nostrum ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quaerat ipsum laborum. Perferendis eum commodi mollitia fuga aperiam saepe quidem accusamus alias perspiciatis! Fugiat nisi saepe quidem iste! Laboriosam, in.
                </p>
                <ul className=" mx-3 my-5 text-sm ">
            
                  <li className="flex gap-5">
                <ImLeaf className="mt-2 text-[#85A947]"/>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus exercitationem eveniet.
                  </li>
                  <li className="flex gap-5 ">
                <ImLeaf className="mt-2 text-[#85A947]"/>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus exercitationem eveniet.
                  </li>
                  <li className="flex gap-5">
                <ImLeaf className="mt-2 text-[#85A947]" />
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus exercitationem eveniet.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
