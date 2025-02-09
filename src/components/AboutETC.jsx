import React from "react";
const AboutSection = () => {
  return (
    <div className="about-section bg-blueCustom py-10 my-10">
      <h2 className="text-yellowCustom text-2xl md:text-3xl lg:text-4xl font-primary uppercase mb-6 text-center ">
        About ETC
      </h2>

      <div className="flex items-start justify-center h-auto px-4 ">
        {/* Gradient Border Container */}
        <div
          className="relative p-[2px] rounded-[20px] w-full max-w-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1))",
          }}
        >
          {/* Inner Container with Background */}
          <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh] xl:h-[90vh] bg-blueGray rounded-[18px] p-1">
            {/* Background Image */}
            <img
              src="/images/heroSection_Noblur.png"
              alt="Background"
              className="w-full h-full object-cover rounded-[18px]"
            />

            {/* Text Overlay with Scrolling */}
            <div className="absolute top-0 left-0 w-full h-full bg-blueGray/70 text-white p-6 sm:p-7 tracking-wider leading-loose rounded-[18px] border border-white/60 flex">
              {/* Scrollable Text Box */}
              <div className="w-full h-full pt-10 overflow-y-auto p-2 scrollbar-hide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac eros ut ex pellentesque tincidunt. Proin malesuada, lectus
                vitae vestibulum facilisis, nunc massa vehicula justo, non
                aliquet risus est id metus. Duis fringilla mi at orci auctor,
                non aliquam eros suscipit. Sed non eros nulla...
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac eros ut ex pellentesque tincidunt. Proin malesuada, lectus
                vitae vestibulum facilisis, nunc massa vehicula justo, non
                aliquet risus est id metus. Duis fringilla mi at orci auctor,
                non aliquam eros suscipit. Sed non eros nulla...
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ac eros ut ex pellentesque tincidunt. Proin malesuada, lectus
                vitae vestibulum facilisis, nunc massa vehicula justo, non
                aliquet risus est id metus. Duis fringilla mi at orci auctor,
                non aliquam eros suscipit. Sed non eros nulla...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
