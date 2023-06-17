"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCopy = exports.toBoolean = exports.toDate = exports.toNumber = exports.toString = exports.toJson = exports.isJson = exports.isDate = exports.isBoolean = exports.isString = exports.isOctal = exports.isBinary = exports.isHex = exports.isFloat = exports.isInteger = exports.isNumber = exports.isObject = exports.isArray = exports.isNull = exports.isUndefined = exports.isEmpty = exports.isEqual = exports.isBlankOrNull = void 0;
__exportStar(require("./data-type"), exports);
/**
 * This function is useful to check that var contains blank or empty.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns true else false.
 * @param args may be any types of datatype.
 */
const isBlankOrNull = (args) => {
    try {
        if (args === undefined || args === null || args === "") {
            return true;
        }
        else if (typeof args === "string" && JSON.parse(args) === null) {
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isBlankOrNull = isBlankOrNull;
/**
 * This function is useful to check that both arguments are equel or not.
 * This function returns Boolean value.
 * @param args1 may be boolean, number, string, object, array, date, null or any.
 * @param args2 may be boolean, number, string, object, array, date, null or any.
 * @param option is used for passing option - such as if we want to compare string as case ignore then we pass caseIgnore true in option. By default caseIgnore is false.
 */
const isEqual = (args1, args2, option = { caseIgnore: false }) => {
    try {
        if (!(0, exports.isNull)(args1) && !(0, exports.isNull)(args2)) {
            if (typeof args1 === typeof args2) {
                if ((0, exports.isBoolean)(args1) && (0, exports.isBoolean)(args2)) {
                    return (0, exports.toBoolean)(args1) === (0, exports.toBoolean)(args2);
                }
                else if ((0, exports.isString)(args1) && (0, exports.isString)(args2)) {
                    if (option.caseIgnore) {
                        return ((0, exports.toString)(args1).toLocaleLowerCase() ===
                            (0, exports.toString)(args2).toLocaleLowerCase());
                    }
                    return (0, exports.toString)(args1) === (0, exports.toString)(args2);
                }
                else if ((0, exports.isNumber)(args1) && (0, exports.isNumber)(args2)) {
                    return (0, exports.toNumber)(args1) === (0, exports.toNumber)(args2);
                }
                else if ((0, exports.isObject)(args1) && (0, exports.isObject)(args2)) {
                    return deepObjectEqual(args1, args2);
                }
                else if ((0, exports.isArray)(args1) && (0, exports.isArray)(args2)) {
                    return deepArrayEqual(args1, args2);
                }
                else if ((0, exports.isDate)(args1) && (0, exports.isDate)(args2)) {
                    const date1 = new Date(args1);
                    const date2 = new Date(args2);
                    return date1.getDate() === date2.getDate();
                }
            }
            return JSON.stringify(args1) === JSON.stringify(args2);
        }
        return args1 === args2;
    }
    catch (error) {
        return false;
    }
};
exports.isEqual = isEqual;
/**
 * This function is useful to check that var contains blank / empty value or object is empty or array is empty.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank then this function returns true.
 * @param args may be string | object | Array.
 */
const isEmpty = (args) => {
    try {
        if (args !== undefined && args !== null && args === "") {
            return true;
        }
        else if ((0, exports.isString)(args) && args === "") {
            return true;
        }
        else if ((0, exports.isObject)(args)) {
            return Object.keys(args).length === 0 && args.constructor === Object;
        }
        else if ((0, exports.isArray)(args)) {
            return Array.isArray(args) && !args.length;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isEmpty = isEmpty;
/**
 * This function is useful to check that var is available / undefined type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined then returns true else false.
 * @param args may be any types of datatype.
 */
const isUndefined = (args) => {
    if (args === undefined) {
        return true;
    }
    return false;
};
exports.isUndefined = isUndefined;
/**
 * This function is useful to check that var is null / Null type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined / null / "null" then returns true else false.
 * @param args may be any types of datatype.
 */
const isNull = (args) => {
    try {
        if (args === undefined || args === null) {
            return true;
        }
        else if (typeof args === "string" && JSON.parse(args) === null) {
            return true;
        }
        else if (Object.is(args, null)) {
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isNull = isNull;
/**
 * This function is useful to check that var is Array type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isArray = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        return typeof args === "object" && Array.isArray(args) && args !== null
            ? true
            : false;
    }
    catch (error) {
        return false;
    }
};
exports.isArray = isArray;
/**
 * This function is useful to check that var is Object type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isObject = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        return typeof args === "object" && !Array.isArray(args) && args !== null
            ? true
            : false;
    }
    catch (error) {
        return false;
    }
};
exports.isObject = isObject;
/**
 * This function is useful to check that var is Number type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isNumber = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        return /^-?[\d.]+(?:e-?\d+)?$/.test(args);
    }
    catch (error) {
        return false;
    }
};
exports.isNumber = isNumber;
/**
 * This function is useful to check that var is Integer or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
// return (
//   !isNaN(args) &&
//   (function (x) {
//     return (x | 0) === x;
//   })(parseFloat(args))
// );
const isInteger = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        if (!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(args)) {
            return false;
        }
        return !(args - parseInt(args));
    }
    catch (error) {
        return false;
    }
};
exports.isInteger = isInteger;
/**
 * This function is useful to check that var is Floating point number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isFloat = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        if (!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(args)) {
            return false;
        }
        return args - parseInt(args) ? true : false;
    }
    catch (error) {
        return false;
    }
};
exports.isFloat = isFloat;
/**
 * This function is useful to check that var is Hexa decimal or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isHex = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        let regex = /[0-9A-Fa-f]{6}/g;
        if (args.match(regex)) {
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isHex = isHex;
/**
 * This function is useful to check that var is Binary number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isBinary = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        let isBinary = true;
        for (let i = 0; i < args.length; i++) {
            if (args[i] != "0" && args[i] != "1") {
                isBinary = false;
            }
        }
        return isBinary;
    }
    catch (error) {
        return false;
    }
};
exports.isBinary = isBinary;
/**
 * This function is useful to check that var is Octal number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isOctal = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        if (/^(0o)?[0-7]+$/i.test(args)) {
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isOctal = isOctal;
/**
 * This function is useful to check that var is String type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null then this function returns false.
 * @param args may be any types of datatype.
 */
const isString = (args) => {
    if (args === undefined || args === null) {
        return false;
    }
    return typeof args === "string" ? true : false;
};
exports.isString = isString;
/**
 * This function is useful to check that var is Boolean type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isBoolean = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        return typeof args === "boolean" ? true : false;
    }
    catch (error) {
        return false;
    }
};
exports.isBoolean = isBoolean;
/**
 * This function is useful to check that var is Date type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isDate = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        else if ((0, exports.isBoolean)(args)) {
            return false;
        }
        else if ((0, exports.isString)(args)) {
            return (Object.prototype.toString.call(args) === "[object Date]" &&
                !isNaN(Date.parse(args)));
        }
        else {
            return new Date(args).toString() !== "Invalid Date";
        }
    }
    catch (error) {
        return false;
    }
};
exports.isDate = isDate;
/**
 * This function is useful to check that var is Json or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
const isJson = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        else if (typeof args === "string") {
            if (/^[\],:{}\s]*$/.test(args
                .replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                .replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                return true;
            }
            return false;
        }
        else {
            let value = typeof args !== "string" ? JSON.stringify(args) : args;
            const result = JSON.parse(value);
            const type = Object.prototype.toString.call(result);
            return type === "[object Object]" || type === "[object Array]";
        }
    }
    catch (e) {
        return false;
    }
};
exports.isJson = isJson;
/**
 * This function is useful to parse in Json from any type.
 * This function returns any or Json type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param args may be any types of datatype.
 */
const toJson = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return null;
        }
        else if ((0, exports.isString)(args)) {
            if ((0, exports.isJson)(args)) {
                return JSON.parse(args);
            }
            return null;
        }
        else {
            return args ? JSON.parse(JSON.stringify(args)) : null;
        }
    }
    catch (error) {
        return null;
    }
};
exports.toJson = toJson;
/**
 * This function is useful to parse in String from any type.
 * This function returns String type.
 * If passed argument contains undefined or null or blank or "null" then this function returns blank.
 * If passed argument contains Object type value or Array type value then this function returns stringify value.
 * If passed argument contains Date type value then this function returns toISOString.
 * @param args may be any types of datatype.
 */
const toString = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return "";
        }
        else if ((0, exports.isObject)(args)) {
            return JSON.stringify(args);
        }
        else if ((0, exports.isArray)(args)) {
            return JSON.stringify(args);
        }
        else if ((0, exports.isDate)(args)) {
            return new Date(args).toISOString();
        }
        return String(args);
    }
    catch (error) {
        return "";
    }
};
exports.toString = toString;
/**
 * This function is useful to parse in Number from any type.
 * This function returns Number type.
 * If passed argument contains undefined or null or blank or "null" then this function returns 0.
 * If passed argument contains Boolean type then it will be parsed as 1 means true or 0 means false.
 * If passed argument contains valid Number type of data then it will be parsed as Number otherwise returns 0.
 * @param args may be boolean | number | string type.
 */
const toNumber = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return 0;
        }
        else if (args === true) {
            return 1;
        }
        else if (args === false) {
            return 0;
        }
        else if ((0, exports.isNumber)(args)) {
            return Number(args);
        }
        return 0;
    }
    catch (error) {
        return 0;
    }
};
exports.toNumber = toNumber;
/**
 * This function is useful to parse in Date from any type.
 * This function returns Date type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * If passed argument contains valid Date type of data then it will be parsed as Date otherwise returns null.
 * @param args may be number as long | string | Date type.
 */
const toDate = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return null;
        }
        else if ((0, exports.isDate)(args)) {
            return new Date(args);
        }
        return null;
    }
    catch (error) {
        return null;
    }
};
exports.toDate = toDate;
/**
 * This function is useful to parse in Boolean from any type.
 * This function returns Boolean type.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * If passed argument contains valid Boolean type of data then it will be parsed as Boolean otherwise returns false.
 * If we pass yes or 1 then this function returns true.
 * If we pass no or 0 then this function returns false.
 * @param args may be boolean | number | string.
 */
const toBoolean = (args) => {
    var _a;
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return false;
        }
        if (args === true || args === 1) {
            return true;
        }
        if (args === false || args === 0) {
            false;
        }
        switch ((_a = (0, exports.toString)(args).toLowerCase()) === null || _a === void 0 ? void 0 : _a.trim()) {
            case "true":
            case "yes":
            case "1":
                return true;
            case "false":
            case "no":
            case "0":
            case "":
            case "null":
            case null:
            case undefined:
                return false;
            default:
                return false;
        }
    }
    catch (error) {
        return false;
    }
};
exports.toBoolean = toBoolean;
/**
 * This function is useful to copy of Object or Array.
 * This function returns any type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * If passed argument contains valid dat then it will be copied otherwise returns null.
 * @param args may be object | Array<any> | json.
 */
const toCopy = (args) => {
    try {
        if ((0, exports.isBlankOrNull)(args)) {
            return null;
        }
        return args ? JSON.parse(JSON.stringify(args)) : null;
    }
    catch (error) {
        return null;
    }
};
exports.toCopy = toCopy;
function deepArrayEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    return JSON.stringify(array1) === JSON.stringify(array2);
}
function shallowArrayEqual(array1, array2) {
    return ((0, exports.isArray)(array1) &&
        (0, exports.isArray)(array2) &&
        array1.length === array2.length &&
        array1.every((val, index) => val === array2[index]));
}
function shallowObjectEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}
function deepObjectEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = (0, exports.isObject)(val1) && (0, exports.isObject)(val2);
        if ((areObjects && !deepObjectEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)) {
            return false;
        }
    }
    return true;
}
