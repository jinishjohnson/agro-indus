import "./Headof.css";

const Headof = ({ title = "Default Title" ,customStyle={} }) => {
  return (
    <div>
      <div className="shape">
        <h1 className="text-bold text-4xl md:text-4xl md:text-white sm:text-2xl sm:text-[#123524]" style={customStyle}>
          {title}
        </h1>
      </div>
      <h1 className="hidden max-sm:block max-sm:text-2xl font-normal font-bold text-center">
        {title}
      </h1>
    </div>
  );
};

export default Headof;
