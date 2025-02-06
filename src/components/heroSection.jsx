import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blueCustom w-full h-full px-4 sm:px-8 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center">
          <div className="pt-10">
            <h1 className="font-primary text-white text-3xl sm:text-4xl lg:text-[43px] leading-tight text-center">
              Join us <br />
              for the epic <br />
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to top right, #3F3700, #FFDF00, #FFDF00)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                etcversary
              </span>{" "}
              <br />
              celebration!
            </h1>
          </div>

          <div className="flex justify-center lg:justify-start pt-5">
            <button
              className="bg-yellowLight text-white text-lg w-64 sm:w-72 h-14 sm:h-16 font-bold rounded-sm"
              style={{
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.5)",
              }}
            >
              Register <span className="font-extrabold uppercase">Now!</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-5 pt-10">
            <div className="flex items-center gap-3">
              <img
                src="images/calendar.png"
                alt="calendar"
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
              <p className="font-secondary text-white text-base sm:text-lg font-semibold tracking-widest">
                20-22 Fev
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="images/location.png"
                alt="location"
                className="w-8 sm:w-10 h-8 sm:h-10"
              />
              <p className="font-secondary text-white text-base sm:text-lg font-semibold tracking-widest">
                ENSIA School
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pt-10 lg:pt-0">
          <img
            src="images/heroSection.png"
            alt="hero section"
            className="max-w-full h-auto lg:w-[530px] lg:h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
