import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MentorCard from "./MentorCard";
import samplePic from "./../../assets/sample.png";

const mentors = [
  {
    name: "Dr. Mohamed 1",
    description: "Some description",
    pic: samplePic,
  },
  {
    name: "Dr. Mohamed 2",
    description: "Another description",
    pic: samplePic,
  },
  {
    name: "Dr. Mohamed 3",
    description: "Description for speaker 3",
    pic: samplePic,
  },
  {
    name: "Dr. Mohamed 4",
    description: "Description for speaker 4",
    pic: samplePic,
  },
  {
    name: "Dr. Mohamed 5",
    description: "Description for speaker 5",
    pic: samplePic,
  },
];

const Mentors = () => {
  const scrollRef = useRef(0);
  const cardWidth = 512 + 40;

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft -= cardWidth;
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollLeft += cardWidth;
  };

  return (
    <div className="bg-blueCustom h-full flex flex-col px-4 sm:px-8 md:px-32 items-center py-10 relative my-10">
      <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl text-yellowCustom mb-4 sm:mb-10 text-center">
        Our Mentors
      </h2>
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex justify-start sm:gap-0 gap-10 overflow-x-auto scrollbar-hide scroll-smooth w-full pl-8 sm:pl-16 pr-8"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="shrink-0 w-[90%] sm:w-[412px] scroll-snap-align-start mx-2"
            >
              <MentorCard
                name={mentor.name}
                description={mentor.description}
                pic={mentor.pic}
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

export default Mentors;
