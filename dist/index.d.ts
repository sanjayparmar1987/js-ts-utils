import { json } from "./data-type";
export * from "./data-type";
/**
 * This function is useful to check that var contains blank or empty.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns true else false.
 * @param args may be any types of datatype.
 */
export declare const isBlankOrNull: (args: any) => boolean;
/**
 * This function is useful to check that both arguments are equel or not.
 * This function returns Boolean value.
 * @param args1 may be boolean, number, string, object, array, date, null or any.
 * @param args2 may be boolean, number, string, object, array, date, null or any.
 * @param option is used for passing option - such as if we want to compare string as case ignore then we pass caseIgnore true in option. By default caseIgnore is false.
 */
export declare const isEqual: (args1: any, args2: any, option?: {
    caseIgnore: boolean;
}) => boolean;
/**
 * This function is useful to check that var contains blank / empty value or object is empty or array is empty.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank then this function returns true.
 * @param args may be string | object | Array.
 */
export declare const isEmpty: (args: string | object | Array<any>) => boolean;
/**
 * This function is useful to check that var is available / undefined type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined then returns true else false.
 * @param args may be any types of datatype.
 */
export declare const isUndefined: (args: any) => boolean;
/**
 * This function is useful to check that var is null / Null type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined / null / "null" then returns true else false.
 * @param args may be any types of datatype.
 */
export declare const isNull: (args: any) => boolean;
/**
 * This function is useful to check that var is Array type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isArray: (args: any) => boolean;
/**
 * This function is useful to check that var is Object type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isObject: (args: any) => boolean;
/**
 * This function is useful to check that var is Number type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isNumber: (args: any) => boolean;
/**
 * This function is useful to check that var is Integer or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isInteger: (args: any) => boolean;
/**
 * This function is useful to check that var is Floating point number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isFloat: (args: any) => boolean;
/**
 * This function is useful to check that var is Hexa decimal or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isHex: (args: any) => boolean;
/**
 * This function is useful to check that var is Binary number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isBinary: (args: any) => boolean;
/**
 * This function is useful to check that var is Octal number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isOctal: (args: any) => boolean;
/**
 * This function is useful to check that var is String type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isString: (args: any) => boolean;
/**
 * This function is useful to check that var is Boolean type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isBoolean: (args: any) => boolean;
/**
 * This function is useful to check that var is Date type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isDate: (args: any) => boolean;
/**
 * This function is useful to check that var is Json or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export declare const isJson: (args: any) => boolean;
/**
 * This function is useful to parse in Json from any type.
 * This function returns any or Json type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param args may be any types of datatype.
 */
export declare const toJson: (args: any) => any;
/**
 * This function is useful to parse in String from any type.
 * This function returns String type.
 * If passed argument contains undefined or null or blank or "null" then this function returns blank.
 * If passed argument contains Object type value or Array type value then this function returns stringify value.
 * If passed argument contains Date type value then this function returns toISOString.
 * @param args may be any types of datatype.
 */
export declare const toString: (args: any) => string;
/**
 * This function is useful to parse in Number from any type.
 * This function returns Number type.
 * If passed argument contains undefined or null or blank or "null" then this function returns 0.
 * If passed argument contains Boolean type then it will be parsed as 1 means true or 0 means false.
 * If passed argument contains valid Number type of data then it will be parsed as Number otherwise returns 0.
 * @param args may be boolean | number | string type.
 */
export declare const toNumber: (args: boolean | number | string) => number;
/**
 * This function is useful to parse in Date from any type.
 * This function returns Date type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * If passed argument contains valid Date type of data then it will be parsed as Date otherwise returns null.
 * @param args may be number as long | string | Date type.
 */
export declare const toDate: (args: number | string | Date) => Date;
/**
 * This function is useful to parse in Boolean from any type.
 * This function returns Boolean type.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * If passed argument contains valid Boolean type of data then it will be parsed as Boolean otherwise returns false.
 * If we pass yes or 1 then this function returns true.
 * If we pass no or 0 then this function returns false.
 * @param args may be boolean | number | string.
 */
export declare const toBoolean: (args: boolean | number | string) => boolean;
/**
 * This function is useful to copy of Object or Array.
 * This function returns any type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * If passed argument contains valid dat then it will be copied otherwise returns null.
 * @param args may be object | Array<any> | json.
 */
export declare const toCopy: (args: object | Array<any> | json) => any;
