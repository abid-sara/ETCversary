import React from "react";
import NavBar from "./navBar";

const HeroSection = () => {
  return (
    <div className="bg-blueCustom w-full h-full">
      
      <div className="flex">
        <div className="w-1/2">
          <div className="text-center pt-10">
            <h1 className="font-primary text-white text-[43px] leading-tight">
              Join us <br />
              for the epic{" "} <br/>
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #3F3700, #FFDF00, #FFDF00)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                etcversary
              </span>{" "}<br/>
              celebration!
            </h1>
          </div>
          <div className="flex justify-center pt-5">
            <button
              className="bg-yellowLight text-white text-secondary text-lg w-72 h-16 font-bold rounded-sm"
              style={{
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.5)",
              }}
            >
              Register <span className="font-extrabold uppercase">Now!</span>
            </button>
          </div>
          <div className="flex justify-evenly pt-10">
            <div className="flex gap-3">
              <img
                src="images/calendar.png"
                alt="calendar"
                className="w-10 h-10"
              />
              <p className="font-secondary text-white text-base pt-2 font-semibold tracking-widest">
                20-22 Fev
              </p>
            </div>

            <div className="flex gap-3">
              <img
                src="images/location.png"
                alt="location"
                className="w-10 h-10"
              />
              <p className="font-secondary text-white text-base pt-2 font-semibold tracking-widest">
                ENSIA School
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <img
            src="images/heroSection.png"
            alt="hero section"
            className="lg:w-[530px] lg:h-[450px] -mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
