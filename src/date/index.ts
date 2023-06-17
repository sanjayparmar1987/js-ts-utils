import { isBlankOrNull, isDate } from "..";

/**
 * Get client side timezone.
 *
 * @returns {(+|-)HH:mm} - Where `HH` is 2 digits hours and `mm` 2 digits minutes.
 * @example
 * // From Indian/Reunion with UTC+4
 * // '+04:00'
 * getTimeZone()
 */
export const getTimeZone = () => {
  let timezone = "",
    timezoneName = "";
  let offset = new Date().getTimezoneOffset(),
    o = Math.abs(offset);
  timezone =
    (offset < 0 ? "+" : "-") +
    ("00" + Math.floor(o / 60)).slice(-2) +
    ":" +
    ("00" + (o % 60)).slice(-2);
  timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return { timezone, timezoneName };
};

/**
 * Get Day`s full name list of week.
 */
export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * Get Day`s short name list of week.
 */
export const SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Get Month`s full name list of year.
 */
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 * Get Month`s short name list of year.
 */
export const SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * This function is useful get list of Date detail according to passed date between range.
 * This function returns Array.
 * If passed argument fromDate contains undefined or null or blank or "null" / Invalid date then this function returns blank Array.
 * If passed argument toDate contains undefined or null or blank or "null" / Invalid date then this function returns blank Array.
 * @param fromDate is a types of Date.
 * @param toDate is a types of Date.
 */
export const betweenDates = (fromDate: Date, toDate: Date) => {
  if (isBlankOrNull(fromDate) || !isDate(fromDate)) {
    return [];
  }
  if (isBlankOrNull(toDate) || !isDate(toDate)) {
    return [];
  }
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  fromDate.setHours(0, 0, 0, 0);
  toDate.setHours(0, 0, 0, 0);
  let dateList = [];
  let d = fromDate;
  while (d <= toDate) {
    dateList.push({
      isoFormat: new Date(d).toISOString(),
      date: new Date(d).getDate(),
      month: new Date(d).getMonth() + 1,
      year: new Date(d).getFullYear(),
      day: DAYS[d.getDay()],
      shortDay: SHORT_DAYS[d.getDay()],
      isPastDate:
        new Date(d).setHours(0, 0, 0, 0) < currentDate.setHours(0, 0, 0, 0)
          ? true
          : false,
      isCurrentDate:
        new Date(d).setHours(0, 0, 0, 0) == currentDate.setHours(0, 0, 0, 0)
          ? true
          : false,
      isFutureDate:
        new Date(d).setHours(0, 0, 0, 0) > currentDate.setHours(0, 0, 0, 0)
          ? true
          : false,
    });
    d = new Date(d.getTime() + 24 * 60 * 60 * 1000);
  }
  return dateList;
};

/**
 * This function is useful to get End Date of before previous weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
export const beforePreviousWeek = (date?: number | string | Date) => {
  try {
    if (!isBlankOrNull(date) && !isDate(date)) {
      return null;
    }
    const currentDate = date ? new Date(date) : new Date();
    currentDate.setHours(0, 0, 0, 0);
    const currentWeekStartDate = new Date(
      new Date(currentDate).setDate(
        currentDate.getDate() - currentDate.getDay()
      )
    );
    const previousWeekEndDate = new Date(
      new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() - 1)
    );
    const previousWeekStartDate = new Date(
      new Date(previousWeekEndDate).setDate(previousWeekEndDate.getDate() - 6)
    );
    const endDate = new Date(
      new Date(previousWeekStartDate).setDate(
        previousWeekStartDate.getDate() - 1
      )
    );
    endDate.setHours(0, 0, 0, 0);
    return {
      endDate: endDate,
    };
  } catch (error) {
    return null;
  }
};

/**
 * This function is useful to get Start Date & End Date of previous weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
export const previousWeek = (date?: number | string | Date) => {
  try {
    if (!isBlankOrNull(date) && !isDate(date)) {
      return null;
    }
    const currentDate = date ? new Date(date) : new Date();
    currentDate.setHours(0, 0, 0, 0);
    const currentWeekStartDate = new Date(
      new Date(currentDate).setDate(
        currentDate.getDate() - currentDate.getDay()
      )
    );
    const endDate = new Date(
      new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() - 1)
    );
    const startDate = new Date(
      new Date(endDate).setDate(endDate.getDate() - 6)
    );
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return {
      startDate: startDate,
      endDate: endDate,
    };
  } catch (error) {
    return null;
  }
};

/**
 * This function is useful to get Start Date & End Date of weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
export const week = (date?: number | string | Date) => {
  try {
    if (!isBlankOrNull(date) && !isDate(date)) {
      return null;
    }
    const currentDate = date ? new Date(date) : new Date();
    currentDate.setHours(0, 0, 0, 0);
    const startDate = new Date(
      new Date(currentDate).setDate(
        currentDate.getDate() - currentDate.getDay()
      )
    );
    const endDate = new Date(
      new Date(startDate).setDate(startDate.getDate() + 6)
    );
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return {
      startDate: startDate,
      endDate: endDate,
    };
  } catch (error) {
    return null;
  }
};

/**
 * This function is useful to get Start Date & End Date of next weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
export const nextWeek = (date?: number | string | Date) => {
  try {
    if (!isBlankOrNull(date) && !isDate(date)) {
      return null;
    }
    const currentDate = date ? new Date(date) : new Date();
    currentDate.setHours(0, 0, 0, 0);
    const currentWeekStartDate = new Date(
      new Date(currentDate).setDate(
        currentDate.getDate() - currentDate.getDay()
      )
    );
    const currentWeekEndDate = new Date(
      new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() + 6)
    );
    const startDate = new Date(
      new Date(currentWeekEndDate).setDate(currentWeekEndDate.getDate() + 1)
    );
    const endDate = new Date(
      new Date(startDate).setDate(startDate.getDate() + 6)
    );
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return {
      startDate: startDate,
      endDate: endDate,
    };
  } catch (error) {
    return null;
  }
};

/**
 * This function is useful to get Start Date of after next weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
export const afterNextWeek = (date?: number | string | Date) => {
  try {
    if (!isBlankOrNull(date) && !isDate(date)) {
      return null;
    }
    const currentDate = date ? new Date(date) : new Date();
    currentDate.setHours(0, 0, 0, 0);
    const currentWeekStartDate = new Date(
      new Date(currentDate).setDate(
        currentDate.getDate() - currentDate.getDay()
      )
    );
    const currentWeekEndDate = new Date(
      new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() + 6)
    );
    const nextWeekStartDate = new Date(
      new Date(currentWeekEndDate).setDate(currentWeekEndDate.getDate() + 1)
    );
    const nextWeekEndDate = new Date(
      new Date(nextWeekStartDate).setDate(nextWeekStartDate.getDate() + 6)
    );
    const startDate = new Date(
      new Date(nextWeekEndDate).setDate(nextWeekEndDate.getDate() + 1)
    );
    startDate.setHours(0, 0, 0, 0);
    return {
      startDate: startDate,
    };
  } catch (error) {
    return null;
  }
};
