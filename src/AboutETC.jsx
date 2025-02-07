import React from "react";

const AboutSection = () => {
  return (
    <div className="about-section">
      <h2 className="text-yellowCustom text-2xl md:text-3xl lg:text-4xl font-primary uppercase mb-4 text-center">
        About ETC
      </h2>
      
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[70vh] xl:h-[90vh]">
          {/* Main Background Image */}
          <img
            src="/images/heroSection_Noblur.png"
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
          />
          
          {/* Blurred Image Overlay with Border */}
          <div className="absolute inset-0 rounded-[25px] overflow-hidden border border-white/60">
            <img
              src="/images/blur.png"
              alt="Blurred Background"
              className="w-full h-full object-cover scale-110 filter backdrop-blur"
            />
          </div>
          
          {/* Content Overlay with Border */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 text-center font-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros ut ex
              pellentesque tincidunt. Proin malesuada, lectus vitae vestibulum facilisis, nunc massa
              vehicula justo, non aliquet risus est id metus. Duis fringilla mi at orci auctor,
              non aliquam eros suscipit. Sed non eros nulla...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros ut ex
              pellentesque tincidunt. Proin malesuada, lectus vitae vestibulum facilisis, nunc massa
              vehicula justo, non aliquet risus est id metus. Duis fringilla mi at orci auctor,
              non aliquam eros suscipit. Sed non eros nulla...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;