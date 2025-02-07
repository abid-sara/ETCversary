// import githubIcon from "../public/icons/Github.png";
// import facebookIcon from "../public/icons/facebook.png";
// import instagramIcon from "../public/icons/instagram.png";
// import tiktokIcon from "../public/icons/TikTok.png";
// import linkedinIcon from "../public/icons/linkedIn.png";
// import youtubeIcon from "../public/icons/youtube.png";
// import discordIcon from "../public/icons/discord.png";
// import logo from "../public/images/logoETC.png";
// import phoneIcon from "../public/icons/phone.png";
// import locationIcon from "../public/icons/location.png";
// import emailIcon from "../public/icons/email.png";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-900 text-white py-8">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left  mt-[0vh]">
//         {/* Social Media Section */}
//         <div className="ml-[4vw] " >
//           <h3 className="text-2xl mb-[5vh] font-secondary text-white">Our Social Media:</h3>
//           {/* First row with 4 icons */}
//           <div className="flex justify-center md:justify-start space-x-4 mb-[3vh] mt-[7vh]">
//             <a href="#" className="hover:opacity-75 transition-opacity">
//               <img src={githubIcon} alt="GitHub" className="w-[2vw] h-[5vh]" />
//             </a>
//             <a href="#" className="hover:opacity-75 transition-opacity">
//               <img src={facebookIcon} alt="Facebook" className="w-[2vw] h-[5vh]" />
//             </a>
//             <a href="#" className="hover:opacity-75 transition-opacity">
//               <img src={instagramIcon} alt="Instagram" className="w-[2vw] h-[5vh]" />
//             </a>
//             <a href="#" className="hover:opacity-75 transition-opacity">
//               <img src={tiktokIcon} alt="TikTok" className="w-[2vw] h-[5vh]" />
//             </a>
//           </div>
//           {/* Second row with 3 icons */}
//         <div className="flex justify-center md:justify-start space-x-4 ml-[1vw]">
//             <a href="#" className="hover:opacity-75 transition-opacity">
//               <img src={discordIcon} alt="Discord" className="w-[2vw] h-[5vh]" />
//             </a>
//             <a href="#" className="hover:opacity-75 transition-opacity">
//               <img src={linkedinIcon} alt="LinkedIn" className="w-[2vw] h-[5vh]" />
//             </a>
//             <a href="#" className="hover:opacity-75 transition-opacity">
//               <img src={youtubeIcon} alt="YouTube" className="w-[2vw] h-[5vh]" />
//             </a>
//           </div>
//         </div>

//         {/* Logo Section */}
//         <div className="flex flex-col items-center justify-center mr-[12vw] mt-[0vh]">
//         <img src={logo} alt="Logo" className="w-[12vw] h-[30vh]" />
//         </div>

//         {/* Contact Us Section */}
//         <div>
//           <h3 className="text-2xl mb-4 font-secondary text-white">Contact Us:</h3>
//           <div className="flex flex-col space-y-3">
//             <div className="flex items-center space-x-3">
//               <img src={phoneIcon} alt="Phone" className="w-[3vw] h-[6vh]" />
//               <p className="text-lg font-secondary text-white ">123567/073877</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <img src={locationIcon} alt="Location" className="w-[3vw] h-[6vh]" />
//               <p className="text-lg font-secondary text-white">Ensia Sidi Abdelah</p>
//             </div>
//             <div className="flex items-center space-x-3">
//               <img src={emailIcon} alt="Email" className="w-[3vw] h-[6vh]" />
//               <p className="text-lg font-secondary text-white">tech-community@ensia.edu.dz</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom Text */}
//       <div className="text-center mt-[4vh] mr-[6vw] text-xl font-primary text-white">
//         <p>EMPOWERED BY ENOVATION</p>
//       </div>
//     </footer>
//   );
// };
import githubIcon from "../public/icons/Github.png";
import facebookIcon from "../public/icons/facebook.png";
import instagramIcon from "../public/icons/instagram.png";
import tiktokIcon from "../public/icons/TikTok.png";
import linkedinIcon from "../public/icons/linkedIn.png";
import youtubeIcon from "../public/icons/youtube.png";
import discordIcon from "../public/icons/discord.png";
import logo from "../public/images/logoETC.png";
import phoneIcon from "../public/icons/phone.png";
import locationIcon from "../public/icons/location.png";
import emailIcon from "../public/icons/email.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl mb-4 font-secondary text-white">
              Our Social Media:
            </h3>
            {/* First row with 4 icons */}
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={tiktokIcon} alt="TikTok" className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
            {/* Second row with 3 icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={discordIcon} alt="Discord" className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity">
                <img src={youtubeIcon} alt="YouTube" className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>

          {/* Logo Section - Fixed alignment with self-center */}
          <div className="flex justify-center items-center self-center md:justify-start">
  <div className="w-full flex justify-center ">
    <img 
      src={logo} 
      alt="Logo" 
      className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" 
    />
  </div>
</div>


          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl mb-4 font-secondary text-white">
              Contact Us:
            </h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <img src={phoneIcon} alt="Phone" className="w-6 h-6 md:w-8 md:h-8" />
                <p className="text-sm md:text-lg font-secondary text-white">
                  123567/073877
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={locationIcon} alt="Location" className="w-6 h-6 md:w-8 md:h-8" />
                <p className="text-sm md:text-lg font-secondary text-white">
                  Ensia Sidi Abdelah
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={emailIcon} alt="Email" className="w-6 h-6 md:w-8 md:h-8" />
                <p className="text-sm md:text-lg font-secondary text-white">
                  tech-community@ensia.edu.dz
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center mt-8 text-lg md:text-xl font-primary text-white ">
          <p>EMPOWERED BY ENOVATION</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;