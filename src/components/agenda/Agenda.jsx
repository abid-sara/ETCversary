import TimelineItem from "./Timeline";

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
    start_time: "10:24",
    end_time: "12:00 AM",
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
    start_time: "12:30",
    end_time: "01:30 PM",
    activity: "Lunch Break",
    progress: 100,
  },
  {
    start_time: "01:30",
    end_time: "03:00 PM",
    activity: "some activity",
    progress: 100,
  },
  {
    start_time: "03:00",
    end_time: "04:30 PM",
    activity: "some activity",
    progress: 100,
  },
  {
    start_time: "04:30",
    end_time: "05:00 PM",
    activity: "Closing Ceremony",
    progress: 100,
  },
];

const Agenda = () => {
  return (
    <div className="h-screen flex flex-col px-64 items-center ">
      <h2 className="font-primary text-[48px] text-yellowCustom my-20">
        AGENDA
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12">
        {activities.map((activity, index) => (
          <TimelineItem
            key={index}
            start_time={activity.start_time}
            end_time={activity.end_time}
            activity={activity.activity}
            progress={activity.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default Agenda;
