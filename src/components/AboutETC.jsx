import React from "react";
const AboutSection = () => {
  return (
    <div className="about-section bg-blueCustom py-10 my-10">
      <h2 className="text-yellowCustom text-2xl md:text-3xl lg:text-4xl font-primary uppercase mb-6 text-center ">
        About ETC
      </h2>

      <div className="flex items-start justify-center h-auto px-4">
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
              ENSIA Tech Community is a dynamic scientific club founded in March 2022 at the National School of Artificial Intelligence. As the school’s central hub for technology and computer science, we provide a collaborative and stimulating environment where students, researchers, and professionals can explore, learn, and innovate.
              
              Our mission is to bridge the gap between theory and practice by offering hands-on projects, technical workshops, interactive courses, and inspiring events. Whether you're a beginner taking your first steps into tech or an experienced enthusiast looking to collaborate on advanced projects, our community provides the perfect space to grow your skills and expand your knowledge.
              
              We cover a wide range of fields, including artificial intelligence, machine learning, software development, cybersecurity, and data science. Through hackathons, guest lectures, and real-world challenges, we encourage creativity, collaboration, and meaningful innovation.
              
              Join us to unlock your full potential, connect with like-minded individuals, and be part of a passionate community dedicated to shaping the future of technology!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
