import dayjs from 'dayjs';

import { CalendarDateDto } from '@/core/components/Calendar/common/types/CalendarDateDto';

export interface UseCalendarResponse {
  models: {
    selectedDayjs: dayjs.Dayjs;
    calendarDates: CalendarDateDto[][];
  };
  operations: {
    onPreviousMonthClick: () => void;
    onNextMonthClick: () => void;
    setInitialSelectedDayjs: (selectedDayjs: dayjs.Dayjs) => void;
  };
}
