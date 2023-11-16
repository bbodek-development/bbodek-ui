
import { useCalendar } from "@/core/components/Calendar/hooks/useCalendar";
import CalendarWeekDayComponent from "@/core/components/Calendar/subs/CalendarWeekdayComponent";
import { CalendarDayComponent } from "@/core/components/Calendar/subs/ComponentDayComponent";
import { CalendarComponentProps } from "@/core/components/Calendar/types/ICalendarComponentProps";

import CaretLeft from "/images/CaretLeft.png";
import CaretRight from "/images/CaretRight.png";

export default function Index ({
  disabledDates,
  markedDates,
}: CalendarComponentProps) {
  const { models, operations } = useCalendar();

  return (
    <div className = {"flex flex-col h-full px-5 w-full"}>
      <div className = {"flex flex-col justify-center items-center gap-1.5"}>
        <div className = {"grid flex-row grid-cols-3 justify-between items-center"}>
          <div
            onClick = {operations.onPreviousMonthClick}
            className = {"flex justify-center items-center cursor-pointer"}
          >
            <img src = {CaretLeft} alt = {"CaretLeft"} className = {"w-[1.5rem] h-[1.5rem]"}/>
          </div>
          <div>{models.selectedDayjs.format("YYYY년-MM월")}</div>
          <div
            onClick = {operations.onNextMonthClick}
            className = {"flex justify-center items-center cursor-pointer"}
          >
            <img src = {CaretRight} className = {"w-[1.5rem] h-[1.5rem]"} alt = {"CaretRight"}/>
          </div>
        </div>
        <CalendarWeekDayComponent/>
        <CalendarDayComponent
            markedDates = {markedDates}
            disabledDates = {disabledDates}
            calendarDates = {models.calendarDates}
            onDateClick = {operations.onDateClick}
            periodDates = {models.periodDates}
            selectedDate = {models.startDayjs}
          />
      </div>
    </div>
  );
}
