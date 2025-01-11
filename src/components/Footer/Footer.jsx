import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#85A947] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold xs:text-center">Agro</h3>
            <p className="text-sm">© 2025 All rights reserved.</p>
          </div>
          

          {/* Right Section - Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover:text-gray-400 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;