import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SponsorCard from "./sponsorsCard";
import samplePic from "./../../assets/sample.png";

const sponsors = [
  {
    name: "Dr. Mohamed Mohamed",
    description: "Some description",
    pic: samplePic,
  },
  {
    name: "Dr. Mohamed Mohamed",
    description: "Some description",
    pic: samplePic,
  },
  {
    name: "Dr. Mohamed Mohamed",
    description: "Some description",
    pic: samplePic,
  },
];

const Sponsors = () => {
  const scrollRef = useRef(0);
  const cardWidth = 512 + 40;

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= cardWidth;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += cardWidth;
  };

  return (
    <div className="bg-blueCustom h-full flex flex-col px-4 sm:px-8 md:px-32 items-center py-10 relative my-10">
      <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl text-yellowCustom mb-10 text-center">
        Our Sponsors
      </h2>

      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex justify-center sm:justify-start sm:gap-0 gap-10 overflow-x-auto scrollbar-hide scroll-smooth w-full pl-8 sm:pl-16 pr-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {sponsors.map((speaker, index) => (
            <div
              key={index}
              className="shrink-0 w-[90%] sm:w-[412px] scroll-snap-align-start mx-2"
            >
              <SponsorCard
                name={speaker.name}
                description={speaker.description}
                pic={speaker.pic}
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Sponsors;
