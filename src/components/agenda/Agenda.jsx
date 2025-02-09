import TimelineItem from "./Timeline";

// You might change the activities here
const activities = [
  {
    start_time: "08:00",
    end_time: "08:30 AM",
    activity: "Check-in",
    progress: 100,
  },
  {
    start_time: "08:30",
    end_time: "09:00 AM",
    activity: "Opening Ceremony",
    progress: 100,
  },
  {
    start_time: "09:00",
    end_time: "10:30 AM",
    activity: "Talk About Something",
    progress: 100,
  },
  {
    start_time: "10:30",
    end_time: "12:00 PM",
    activity: "Talk About Something",
    progress: 100,
  },
  {
    start_time: "12:30",
    end_time: "01:30 PM",
    activity: "Lunch Break",
    progress: 100,
  },
  {
    start_time: "01:30",
    end_time: "03:00 PM",
    activity: "Some Activity",
    progress: 100,
  },
  {
    start_time: "03:00",
    end_time: "04:30 PM",
    activity: "Some Activity",
    progress: 100,
  },
  {
    start_time: "04:30",
    end_time: "05:00 PM",
    activity: "Closing Ceremony",
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
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          {firstColumn.map((activity, index) => (
            <TimelineItem key={index} {...activity} />
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {secondColumn.map((activity, index) => (
            <TimelineItem key={index + midIndex} {...activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
