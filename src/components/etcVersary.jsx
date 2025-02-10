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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            facilis, quae animi numquam dolore aspernatur eos quisquam
            accusamus! Eaque ratione consequuntur fugiat ipsam deserunt corporis
            voluptate tenetur, perferendis nam voluptatem? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Architecto porro, enim rem
            perferendis commodi fuga saepe omnis veritatis. Provident quam ex
            aut, dolor illo adipisci corrupti sit neque in iste?
          </div>
        </div>
      </div>
    </div>
  );
};

export default ETCVersary;
