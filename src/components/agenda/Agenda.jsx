import TimelineItem from "./Timeline";

// You might change the activities here
const activities = [
  {
    start_time: "08:30",
    end_time: "09:00 AM",
    activity: "Check-in and Opening Ceremony",
    progress: 100,
  },
  {
    start_time: "09:00",
    end_time: "10:30 AM",
    activity: "Talk by The Next Level Digital Solutions Agency (TNL)",
    progress: 100,
  },
  {
    start_time: "10:30",
    end_time: "11:30 AM",
    activity: "Theme Selection",
    progress: 100,
  },
  {
    start_time: "11:30",
    end_time: "12:30 AM",
    activity: "Lunch Break",
    progress: 100,
  },
  {
    start_time: "12:30",
    end_time: "03:30 PM",
    activity: "Ideation Phase",
    progress: 100,
  },
  {
    start_time: "03:30",
    end_time: "04:30 PM",
    activity: "Pitching Round",
    progress: 100,
  },
  {
    start_time: "04:30",
    end_time: "05:00 PM",
    activity: "Announcement of Finalists",
    progress: 100,
  },
  {
    start_time: "05:00",
    end_time: "06:00 PM",
    activity: "Final Pitching Round & Winner Selection",
    progress: 100,
  },
  {
    start_time: "06:00",
    end_time: "06:30 PM",
    activity: "Cake Cutting & Event Closure",
    progress: 100,
  },
];

const midIndex = Math.ceil(activities.length / 2);
const firstColumn = activities.slice(0, midIndex);
const secondColumn = activities.slice(midIndex);

const Agenda = () => {
  return (
    <div className="bg-blueCustom h-full flex flex-col px-4 md:px-32 items-center py-10 my-10">
      <h2 className="font-primary text-3xl md:text-4xl text-yellowCustom mb-10">
        AGENDA
      </h2>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-12 sm:gap-8">
        <div className="flex flex-col gap-12 sm:gap-8">
          {firstColumn.map((activity, index) => (
            <TimelineItem key={index} {...activity} />
          ))}
        </div>

        <div className="flex flex-col gap-12 sm:gap-8">
          {secondColumn.map((activity, index) => (
            <TimelineItem key={index + midIndex} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
