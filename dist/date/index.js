"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.afterNextWeek = exports.nextWeek = exports.week = exports.previousWeek = exports.beforePreviousWeek = exports.betweenDates = exports.SHORT_MONTHS = exports.MONTHS = exports.SHORT_DAYS = exports.DAYS = exports.getTimeZone = void 0;
const __1 = require("..");
/**
 * Get client side timezone.
 *
 * @returns {(+|-)HH:mm} - Where `HH` is 2 digits hours and `mm` 2 digits minutes.
 * @example
 * // From Indian/Reunion with UTC+4
 * // '+04:00'
 * getTimeZone()
 */
const getTimeZone = () => {
    let timezone = "", timezoneName = "";
    let offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
    timezone =
        (offset < 0 ? "+" : "-") +
            ("00" + Math.floor(o / 60)).slice(-2) +
            ":" +
            ("00" + (o % 60)).slice(-2);
    timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return { timezone, timezoneName };
};
exports.getTimeZone = getTimeZone;
/**
 * Get Day`s full name list of week.
 */
exports.DAYS = [
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
exports.SHORT_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
/**
 * Get Month`s full name list of year.
 */
exports.MONTHS = [
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
exports.SHORT_MONTHS = [
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
const betweenDates = (fromDate, toDate) => {
    if ((0, __1.isBlankOrNull)(fromDate) || !(0, __1.isDate)(fromDate)) {
        return [];
    }
    if ((0, __1.isBlankOrNull)(toDate) || !(0, __1.isDate)(toDate)) {
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
            day: exports.DAYS[d.getDay()],
            shortDay: exports.SHORT_DAYS[d.getDay()],
            isPastDate: new Date(d).setHours(0, 0, 0, 0) < currentDate.setHours(0, 0, 0, 0)
                ? true
                : false,
            isCurrentDate: new Date(d).setHours(0, 0, 0, 0) == currentDate.setHours(0, 0, 0, 0)
                ? true
                : false,
            isFutureDate: new Date(d).setHours(0, 0, 0, 0) > currentDate.setHours(0, 0, 0, 0)
                ? true
                : false,
        });
        d = new Date(d.getTime() + 24 * 60 * 60 * 1000);
    }
    return dateList;
};
exports.betweenDates = betweenDates;
/**
 * This function is useful to get End Date of before previous weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
const beforePreviousWeek = (date) => {
    try {
        if (!(0, __1.isBlankOrNull)(date) && !(0, __1.isDate)(date)) {
            return null;
        }
        const currentDate = date ? new Date(date) : new Date();
        currentDate.setHours(0, 0, 0, 0);
        const currentWeekStartDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - currentDate.getDay()));
        const previousWeekEndDate = new Date(new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() - 1));
        const previousWeekStartDate = new Date(new Date(previousWeekEndDate).setDate(previousWeekEndDate.getDate() - 6));
        const endDate = new Date(new Date(previousWeekStartDate).setDate(previousWeekStartDate.getDate() - 1));
        endDate.setHours(0, 0, 0, 0);
        return {
            endDate: endDate,
        };
    }
    catch (error) {
        return null;
    }
};
exports.beforePreviousWeek = beforePreviousWeek;
/**
 * This function is useful to get Start Date & End Date of previous weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
const previousWeek = (date) => {
    try {
        if (!(0, __1.isBlankOrNull)(date) && !(0, __1.isDate)(date)) {
            return null;
        }
        const currentDate = date ? new Date(date) : new Date();
        currentDate.setHours(0, 0, 0, 0);
        const currentWeekStartDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - currentDate.getDay()));
        const endDate = new Date(new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() - 1));
        const startDate = new Date(new Date(endDate).setDate(endDate.getDate() - 6));
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        return {
            startDate: startDate,
            endDate: endDate,
        };
    }
    catch (error) {
        return null;
    }
};
exports.previousWeek = previousWeek;
/**
 * This function is useful to get Start Date & End Date of weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
const week = (date) => {
    try {
        if (!(0, __1.isBlankOrNull)(date) && !(0, __1.isDate)(date)) {
            return null;
        }
        const currentDate = date ? new Date(date) : new Date();
        currentDate.setHours(0, 0, 0, 0);
        const startDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - currentDate.getDay()));
        const endDate = new Date(new Date(startDate).setDate(startDate.getDate() + 6));
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        return {
            startDate: startDate,
            endDate: endDate,
        };
    }
    catch (error) {
        return null;
    }
};
exports.week = week;
/**
 * This function is useful to get Start Date & End Date of next weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
const nextWeek = (date) => {
    try {
        if (!(0, __1.isBlankOrNull)(date) && !(0, __1.isDate)(date)) {
            return null;
        }
        const currentDate = date ? new Date(date) : new Date();
        currentDate.setHours(0, 0, 0, 0);
        const currentWeekStartDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - currentDate.getDay()));
        const currentWeekEndDate = new Date(new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() + 6));
        const startDate = new Date(new Date(currentWeekEndDate).setDate(currentWeekEndDate.getDate() + 1));
        const endDate = new Date(new Date(startDate).setDate(startDate.getDate() + 6));
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);
        return {
            startDate: startDate,
            endDate: endDate,
        };
    }
    catch (error) {
        return null;
    }
};
exports.nextWeek = nextWeek;
/**
 * This function is useful to get Start Date of after next weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
const afterNextWeek = (date) => {
    try {
        if (!(0, __1.isBlankOrNull)(date) && !(0, __1.isDate)(date)) {
            return null;
        }
        const currentDate = date ? new Date(date) : new Date();
        currentDate.setHours(0, 0, 0, 0);
        const currentWeekStartDate = new Date(new Date(currentDate).setDate(currentDate.getDate() - currentDate.getDay()));
        const currentWeekEndDate = new Date(new Date(currentWeekStartDate).setDate(currentWeekStartDate.getDate() + 6));
        const nextWeekStartDate = new Date(new Date(currentWeekEndDate).setDate(currentWeekEndDate.getDate() + 1));
        const nextWeekEndDate = new Date(new Date(nextWeekStartDate).setDate(nextWeekStartDate.getDate() + 6));
        const startDate = new Date(new Date(nextWeekEndDate).setDate(nextWeekEndDate.getDate() + 1));
        startDate.setHours(0, 0, 0, 0);
        return {
            startDate: startDate,
        };
    }
    catch (error) {
        return null;
    }
};
exports.afterNextWeek = afterNextWeek;
