import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import ScheduleCalendar from '@/core/components/Calendar/ScheduleCalendar';
import { PeriodDates } from '../DatePickerCalendar/types/DatePickerCalendarProps';
import { getDayjs } from '@/utilities/day';

const meta = {
  title: 'core/Calendar/ScheduleCalendar',
  component: ScheduleCalendar,
} satisfies Meta<typeof ScheduleCalendar>;

export default meta;

export const Default = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const onDateClick = (date: string) => {
    setSelectedDate(date);
  };

  const getCalendarDates = (dates: PeriodDates) => {
    console.log(dates);
  };

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <div className={'w-[1000px]'}>
      <ScheduleCalendar
        initialDate={getDayjs('2023-12-02').unix()}
        onRender={getCalendarDates}
        defaultQuantity={25}
        schedulesData={{
          '2023-11-30': {
            quantity: 10,
            markedDates: ['특강'],
          },
          '2023-12-01': {
            quantity: 10,
            markedDates: ['방학'],
          },
          '2023-12-02': {
            quantity: 10,
            markedDates: [''],
          },
          '2023-12-03': {
            quantity: 10,
            markedDates: [''],
          },
          '2023-12-04': {
            quantity: 10,
            markedDates: [''],
          },
          '2023-12-05': {
            quantity: 10,
            markedDates: [''],
          },
          '2023-12-06': {
            quantity: 10,
            markedDates: ['', '견학', '견학'],
          },
          '2023-12-07': {
            markedDates: ['특강', '', '', ''],
          },
          '2023-12-08': {
            markedDates: [''],
          },
          '2023-12-09': {
            markedDates: [''],
          },
          '2023-12-10': {
            quantity: 10,
            markedDates: [''],
          },
          '2023-12-11': {
            quantity: 10,
            markedDates: [''],
          },
          '2023-12-12': {
            quantity: 10,
            markedDates: [''],
          },
          '2023-12-15': {
            quantity: 10,
            markedDates: ['정식 전환일'],
          },
        }}
        onDateClick={onDateClick}
      />
    </div>
  );
};
