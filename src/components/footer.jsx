import logo from "/images/logoETC.png";
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTiktok, 
  FaYoutube, 
  FaGithub, 
  FaDiscord, 
  FaPhone,       
  FaMapMarkerAlt, 
  FaEnvelope  
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blueCustom text-white py-8">
      <div className="container mx-auto px-6 md:px-12 mr-4 md:mr-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl mb-4 font-secondary text-white">
              Our Social Media:
            </h3>

            {/* First row with 4 icons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-4 mb-4">
              <FaGithub className="cursor-pointer" size={40} color="#FFDF00" onClick={() => (window.location.href = "#")} />
              <FaFacebook className="cursor-pointer" size={40} color="#FFDF00" onClick={() => (window.location.href = "#")} />
              <FaInstagram className="cursor-pointer" size={40} color="#FFDF00" onClick={() => (window.location.href = "#")} />
              <FaTiktok className="cursor-pointer" size={40} color="#FFDF00" onClick={() => (window.location.href = "#")} />
            </div>

            {/* Second row with 3 icons */}
            <div className="flex justify-center md:justify-start space-x-6 lg:pl-6">
  <FaDiscord className="cursor-pointer" size={40} color="#FFDF00" onClick={() => (window.location.href = "#")} />
  <FaLinkedin className="cursor-pointer" size={40} color="#FFDF00" onClick={() => (window.location.href = "#")} />
  <FaYoutube className="cursor-pointer" size={40} color="#FFDF00" onClick={() => (window.location.href = "#")} />
</div>

          </div>

          {/* Logo Section */}
          <div className="flex justify-center items-center md:justify-start">
            <img src={logo} alt="Logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl mb-4 font-secondary text-white">
              Contact Us:
            </h3>
            <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-3">
      <FaPhone className="text-yellowCustom" size={24} />
      <p className="text-sm md:text-lg font-secondary text-white">+213697073877</p>
    </div>
    <div className="flex items-center space-x-3">
      <FaMapMarkerAlt className="text-yellowCustom" size={24} />
      <p className="text-sm md:text-lg font-secondary text-white">Ensia Sidi Abdellah</p>
    </div>
    <div className="flex items-center space-x-3">
      <FaEnvelope className="text-yellowCustom" size={24} />
      <p className="text-sm md:text-lg font-secondary text-white">tech-community@ensia.edu.dz</p>
    </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
      </div>
       
      {/* Footer Bottom Text */}
      <div className="text-center mt-[4vh] mr-[6vw] text-xl font-primary text-white">
        <p>EMPOWERED BY ENOVATION</p>
       </div> 
    </footer>
  );
};

export default Footer;
