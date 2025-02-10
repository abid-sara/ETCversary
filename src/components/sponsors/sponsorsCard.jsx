import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const SponsorCard = ({ name, description, pic, ig, fb, ln }) => {
  return (
    <div className="max-w-[300px] sm:w-[22em] h-auto border border-2 border-white/20 bg-gradient-to-b from-white/10 to-black/10 flex flex-col gap-6 px-5 py-6">
      <div className="flex justify-center items-center">
        <img src={pic} alt={name} className="w-full h-auto object-cover" />
      </div>
      <div className="flex flex-col items-start font-secondary">
        <div className="flex justify-center items-center">
          <h3 className="text-white text-xl font-bold">{name}</h3>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-white text-base ">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-center my-4">
        <div className="flex gap-6">
          <FaInstagram
            className="cursor-pointer"
            size={40}
            color="#FFDF00"
            onClick={() => (window.location.href = ig)}
          />
          <FaFacebook
            className="cursor-pointer"
            size={40}
            color="#FFDF00"
            onClick={() => (window.location.href = fb)}
          />
          <FaLinkedin
            className="cursor-pointer"
            size={40}
            color="#FFDF00"
            onClick={() => (window.location.href = ln)}
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
