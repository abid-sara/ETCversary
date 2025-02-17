import React from "react";

const ETCVersary = () => {
  return (
    <div className="bg-blueCustom h-auto flex flex-col items-center py-10 my-10">
      <h1 className="text-white font-primary text-3xl sm:text-4xl text-center">
        <span className="text-yellowCustom">etc</span>versary
      </h1>

      <div className="flex justify-center pt-8 mx-8">
        <div
          className="relative p-[1px] rounded-[20px] w-full max-w-[900px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1))",
          }}
        >
          <div className="bg-blueGray text-white p-6 sm:p-7 tracking-wider leading-loose rounded-[20px]">
          ETC Versary is the annual anniversary celebration of the ENSIA Tech Community (ETC). This year’s edition, taking place on February 22, 2025, will be an Ideathon where participants will compete to develop the best innovative ideas within a set timeframe. The event will bring together students, professionals, and experts in various fields to foster creativity, collaboration, and entrepreneurship.
          The Next Level Digital Solutions Agency (TNL) will be our main sponsor, guiding participants with a specialized talk on how to refine ideas and maximize their potential for real-world impact.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETCVersary;
