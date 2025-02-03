const TimelineItem = ({ start_time, end_time, activity, progress }) => {
  return (
    <div className="flex flex-col w-[474px] gap-2">
      <h4 className="font-bold text-white font-secondary text-3xl">
        {start_time} - {end_time}
      </h4>
      <div className="flex-1 relative shadow-l shadow-[0_0px_5px_rgba(255,255,255,0.9)] rounded-full">
        <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-redCustom"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <h4 className="font-bold text-white font-secondary text-3xl self-end">
        {activity}
      </h4>
    </div>
  );
};

export default TimelineItem;
