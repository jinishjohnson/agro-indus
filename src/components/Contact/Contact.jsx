import { Address, contactData } from "../../assets/asset";
import Headof from "../helpers/Headof";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb46bc35-79a6-4f14-bd36-963a96972927");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    
    <>
      <Headof title="Contact Us" />
      <section className="bg-[#F5F6F6] py-10 max-sm:py-0">
        <div className="container px-10 mt-20 mx-auto max-sm:px-2 max-sm:mt-3">
          <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1 max-sm:gap-1">
            <div className="">
              <img
                src="	https://themesflat.co/html/donalfarm/images/section/s-contact.jpg"
                alt=""
                className="rounded-2xl h-1/4 w-4/5 object-cover mb-10 max-sm:w-full"
              />
              <div className="bg-[#F8C32C] w-4/5 rounded-3xl max-sm:w-full">

              {Address.map((items ,index)=>(
                <div key={index} className="grid grid-col-1 gap-4 px-6 py-6 w-4/5 rounded-3xl">
                <div className="flex gap-5 pl-8">

                <img
                  src={items.img}
                  alt=""
                  className="w-8 mt-2 h-8 "/>
                <div className="flex flex-col gap-2">
                  
                <h1 className="text-2xl font-semibold">{items.title}</h1>
                <p className="text-xl leading-loose ">{items.description}</p>
                </div>
                </div>
              </div>
              ))}
              </div>
            </div>
            <div className="mt-14 max-sm:mt-1">
              {contactData.map((items, index) => (
                <div key={index} className="flex flex-col gap-2 max-sm:gap-1">
                  <h1 className="text-2xl text-green-900 mb-4 capitalize max-sm:mb-2">{items.caption}</h1>
                  <h1 className="text-3xl text-gray-800 mb-4">{items.title}</h1>
                  <p className="text-xl text-gray-500 font-normal mb-4">{items.para}</p>
                </div>
              ))}
                  <form action="" className="flex flex-col gap-6 mt-8 max-sm:gap-2" onSubmit={onSubmit}>
                    <div className="flex gap-2">
                      <input type="text" className="w-1/2  bg-[#F3F5F3] p-3 rounded-full " name="Name" id="" placeholder="Name*" required/>
                      <input type="email" className="w-1/2  bg-[#F3F5F3] p-3 rounded-full" name="Email" id="" placeholder="Email*"required/>
                    </div>
                    <div className="flex gap-2">
                      <input type="text"className="w-1/2  bg-[#F3F5F3] p-3 rounded-full" name="Contact no." id="" placeholder="Phone"required/>
                      <input type="text" className="w-1/2 bg-[#F3F5F3] p-3 rounded-full" name="subject" id="" placeholder="you need help?"required/>
                    </div>
                    <div>
                      <textarea name="Message" placeholder="send message" className="w-full bg-[#F3F5F3] p-3 rounded-3xl h-48"  id=""required></textarea>
                    </div>
                    <button className=" bg-green-700 text-white drop-shadow-md text-center w-48 p-2 rounded-full hover:bg-green-800 transition duration-500 max-sm:mb-20">Submit the message</button>
                  </form>
                  <span>{result}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
