import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const MentorCard = ({ name, description, pic, ig, fb, gh }) => {
  const iconSize = 40;
  return (
    <div className="sm:min-w-[50%] min-w-[25%] sm:w-[22em] h-auto bg-[url('/images/shield2.png')] bg-contain bg-no-repeat bg-center flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mr-12 mt-12 sm:mr-0 sm:mt-0">
          <img
            src={pic}
            alt={name}
            className="w-[205px] h-[185px] sm:w-[255px] sm:h-[236px] object-cover"
          />
        </div>
        <div className="py-4 w-5/6 sm:w-full">
          <div className=" flex flex-col items-center font-secondary">
            <div className="flex justify-center items-center">
              <h3 className="text-white text-xl font-bold">{name}</h3>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-white text-base align-center">{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center my-4 w-full">
            <div className="flex gap-6">
              <FaGithub
                className="cursor-pointer"
                size={iconSize}
                color="#FFDF00"
                onClick={() => (window.location.href = gh)}
              />
              <FaInstagram
                className="cursor-pointer"
                size={iconSize}
                color="#FFDF00"
                onClick={() => (window.location.href = ig)}
              />
              <FaLinkedin
                className="cursor-pointer"
                size={iconSize}
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
