import clsx from "clsx";

import { CalendarComponentProps } from "@/core/components/Calendar/ScheduleCalendar/types/CalendarComponentProps";
import { CalendarDateDto } from "@/core/components/Calendar/common/types/CalendarDateDto";
import Typography from "@/core/components/Typography";

interface CalendarDayComponentProps extends CalendarComponentProps {
  calendarDates: CalendarDateDto[][];
}

export const CalendarDayComponent = ({
  schedulesData,
  calendarDates,
  onDateClick,
}: CalendarDayComponentProps) => {
  return(
    <>
      { calendarDates.map((calendarWeekDates: CalendarDateDto[], index) => (
        <div
          key = {index}
          className = {"grid grid-cols-7 min-w-full w-full flex-1"}
        >
          {calendarWeekDates.map((calendarDate: CalendarDateDto, index: number) => {
            return (
              <button
                key = {index}
                type = "button"
                disabled = {!calendarDate.isThisMonth}
                className = "flex-v-stack items-center h-full text-center"
                onClick = {(): void => {
                  const currentDate: string = calendarDate.dayjs.format("YYYY-MM-DD");
                  onDateClick(currentDate);
                }}
              >
                <div
                  className = {clsx("relative flex justify-center items-center h-8",
                    {
                      "w-8 rounded-full bg-gray-03": calendarDate.isToday,
                      "text-gray-03": !calendarDate.isThisMonth,
                    },
                  )}
                >
                  <Typography
                    text = {`${calendarDate.dayjs.date()}`}
                    theme = "body-01-bold"
                    className = "text-inherit"
                  />
                  {schedulesData && Object.keys(schedulesData).map((scheduleDate, index) => (
                    scheduleDate === calendarDate.dayjs.format("YYYY-MM-DD") &&
                    <Typography
                      key = {index}
                      text = {`(${schedulesData?.[scheduleDate].quantity})`}
                      className = "absolute top-[3px] end-0 translate-x-[calc(100%+0.625rem)]"
                      color = {`${!calendarDate.isThisMonth ? "gray-03" : "primary-03"}`}
                    />
                  ))}
                </div>
                {schedulesData && Object.keys(schedulesData).map(markedDate => (
                  markedDate === calendarDate.dayjs.format("YYYY-MM-DD") &&
                  <div className = "flex-v-stack gap-1 w-full pt-1" key = {markedDate}>
                    {
                      schedulesData?.[markedDate].markedDates?.map((markedDateValue, index) => (
                        <div
                          key = {index}
                          className = {`${!calendarDate.isThisMonth ? "bg-gray-00 text-primary-00" : "bg-primary-00 text-primary-02"}`}
                        >
                          &nbsp;
                          <Typography
                            theme = "body-02-bold"
                            text = {markedDateValue === undefined ? "" : markedDateValue}
                            className = "text-inherit"
                          />
                          &nbsp;
                        </div>
                      ))
                    }
                  </div>
                ))}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
};