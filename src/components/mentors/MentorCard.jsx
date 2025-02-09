import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const MentorCard = ({ name, description, pic, ig, fb, gh }) => {
  return (
    <div className="min-w-[25%] sm:w-[22em] h-[390px] bg-[url('/images/shield2.png')] bg-contain bg-no-repeat bg-center flex flex-col items-start">
      <div className="">
        <div className="">
          <img
            src={pic}
            alt={name}
            className="w-[255px] h-[236px] object-cover"
          />
        </div>
        <div className="py-4 ">
          <div className="flex flex-col items-start font-secondary">
            <div className="flex justify-center items-center">
              <h3 className="text-white text-xl font-bold">{name}</h3>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-white text-base ">{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center my-4 w-full">
            <div className="flex gap-6">
              <FaGithub
                className="cursor-pointer"
                size={50}
                color="#FFDF00"
                onClick={() => (window.location.href = gh)}
              />
              <FaInstagram
                className="cursor-pointer"
                size={50}
                color="#FFDF00"
                onClick={() => (window.location.href = ig)}
              />
              <FaLinkedin
                className="cursor-pointer"
                size={50}
                color="#FFDF00"
                onClick={() => (window.location.href = fb)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
