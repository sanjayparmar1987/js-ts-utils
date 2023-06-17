/**
 * Get client side timezone.
 *
 * @returns {(+|-)HH:mm} - Where `HH` is 2 digits hours and `mm` 2 digits minutes.
 * @example
 * // From Indian/Reunion with UTC+4
 * // '+04:00'
 * getTimeZone()
 */
export declare const getTimeZone: () => {
    timezone: string;
    timezoneName: string;
};
/**
 * Get Day`s full name list of week.
 */
export declare const DAYS: string[];
/**
 * Get Day`s short name list of week.
 */
export declare const SHORT_DAYS: string[];
/**
 * Get Month`s full name list of year.
 */
export declare const MONTHS: string[];
/**
 * Get Month`s short name list of year.
 */
export declare const SHORT_MONTHS: string[];
/**
 * This function is useful get list of Date detail according to passed date between range.
 * This function returns Array.
 * If passed argument fromDate contains undefined or null or blank or "null" / Invalid date then this function returns blank Array.
 * If passed argument toDate contains undefined or null or blank or "null" / Invalid date then this function returns blank Array.
 * @param fromDate is a types of Date.
 * @param toDate is a types of Date.
 */
export declare const betweenDates: (fromDate: Date, toDate: Date) => any[];
/**
 * This function is useful to get End Date of before previous weel.
 * This function returns object.
 * Passed argument is optional.
 * If don't pass any agument then it will take current Date as argument.
 * If passed argumet is invalid date then this function return null.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param date is a types of Date (number | string | Date) and it is optional.
 */
export declare const beforePreviousWeek: (date?: number | string | Date) => {
    endDate: Date;
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
export declare const previousWeek: (date?: number | string | Date) => {
    startDate: Date;
    endDate: Date;
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
export declare const week: (date?: number | string | Date) => {
    startDate: Date;
    endDate: Date;
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
export declare const nextWeek: (date?: number | string | Date) => {
    startDate: Date;
    endDate: Date;
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
export declare const afterNextWeek: (date?: number | string | Date) => {
    startDate: Date;
};
