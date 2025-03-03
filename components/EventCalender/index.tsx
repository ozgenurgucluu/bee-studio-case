'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { DateTime } from 'luxon';
import Day from '../Day';
import events from '@/events.json';
const EventCalender = () => {
  const [date, setDate] = useState<DateTime>(DateTime.now());
  console.log({ date });

  const setMonth = (value: 'next' | 'prev') => {
    setDate((prev: DateTime) =>
      value === 'next' ? prev.plus({ months: 1 }) : prev.minus({ months: 1 })
    );
  };

  const getDaysInMonth = (date: DateTime) => {
    const startOfMonth = date.startOf('month');
    const endOfMonth = date.endOf('month');
    const days = [];

    let day = startOfMonth;
    while (day <= endOfMonth) {
      days.push(day);
      day = day.plus({ days: 1 });
    }

    return {
      days,
      startOfMonth,
      endOfMonth,
      firstDayOfWeek: startOfMonth.weekday,
      lastDayOfWeek: endOfMonth.weekday,
    };
  };

  const getPreviousMonthDays = (
    startOfMonth: DateTime,
    firstDayOfWeek: number
  ) => {
    const prevMonth = startOfMonth.minus({ months: 1 });
    const prevMonthDays = [];
    let day = prevMonth.endOf('month');

    for (let i = 0; i < firstDayOfWeek - 1; i++) {
      prevMonthDays.unshift(day);
      day = day.minus({ days: 1 });
    }
    console.log({ prevMonthDays });
    return prevMonthDays;
  };

  const getNextMonthDays = (endOfMonth: DateTime, lastDayOfWeek: number) => {
    const nextMonth = endOfMonth.plus({ months: 1 });
    const nextMonthDays = [];
    let day = nextMonth.startOf('month');

    for (let i = 0; i < 7 - lastDayOfWeek; i++) {
      nextMonthDays.push(day);
      day = day.plus({ days: 1 });
    }

    return nextMonthDays;
  };

  const { days, firstDayOfWeek, lastDayOfWeek, startOfMonth, endOfMonth } =
    getDaysInMonth(date);
  const prevMonthDays = getPreviousMonthDays(startOfMonth, firstDayOfWeek);
  const nextMonthDays = getNextMonthDays(endOfMonth, lastDayOfWeek);

  const weekdays = [
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi',
    'Pazar',
  ];

  return (
    <div className="md:px-14 overflow-x-auto no-scrollbar ">
      <div className="bg-[#FCFBF8] py-6 flex flex-col  md:min-w-auto min-w-[1100px]">
        <div className="gap-1 md:container md:mx-auto flex flex-col">
          <div className="flex gap-3 items-center">
            <button className="bg-[#FCFBF8]" onClick={() => setMonth('prev')}>
              <Image
                src="/images/button.png"
                alt="Geri"
                width={32}
                height={32}
              />
            </button>
            <span>{date.setLocale('tr').toFormat('MMMM yyyy')}</span>
            <button className="bg-[#FCFBF8]" onClick={() => setMonth('next')}>
              <Image
                src="/images/button2.png"
                alt="İleri"
                width={32}
                height={32}
              />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-7 gap-2">
            {weekdays.map((day, index) => (
              <div
                key={day}
                className="text-center text-sm font-semibold bg-white border border-[#CCCBC9] p-3 py-4 rounded-md"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-7 gap-2">
            {prevMonthDays.map((day, index) => (
              <Day
                key={index}
                day={day}
                month={day.setLocale('tr').toFormat('MMMM')}
              />
            ))}

            {days.map((day, index) => (
              <Day
                events={events.filter(
                  (item) => item.date === day.toFormat('yyyy-MM-dd')
                )}
                key={index}
                day={day}
                month={date.setLocale('tr').toFormat('MMMM')}
              />
            ))}
            {nextMonthDays.map((day, index) => (
              <Day
                key={index}
                day={day}
                month={day.setLocale('tr').toFormat('MMMM')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
