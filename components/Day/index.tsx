import React from 'react';
import { DateTime } from 'luxon';

interface Props {
  day: DateTime;
  month: string;
  events?: {
    date: string;
    title: string;
    hour: string;
    bgColor: string;
    textColor: string;
  }[];
}

const Day = ({ day, month, events = [] }: Props) => {
  return (
    <div className="border border-gray-300 rounded-md flex flex-col justify-between p-2 h-[108px] bg-white text-black">
      <span className="text-xs mb-2">{`${day.day} ${month}`}</span>
      <div className="flex flex-col gap-2 overflow-y-auto  no-scrollbar max-h-[80px]">
        {events.map((event, index) => (
          <div
            className="flex flex-col gap-1 text-xs bg-linear-to-b from-[#FFFFFF] to-[#FFFFF7] border border-[#CCCBC9] rounded-md  p-2 w-full"
            key={index}
            // style={{
            //   backgroundColor: event.bgColor,
            //   color: event.textColor,
            //   border: 0,
            // }}
          >
            <span className="font-semibold">{event.hour}</span>
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
