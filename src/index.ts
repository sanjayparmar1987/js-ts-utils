import { json } from "./data-type";

export * from "./data-type";

/**
 * This function is useful to check that var contains blank or empty.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns true else false.
 * @param args may be any types of datatype.
 */
export const isBlankOrNull = (args: any) => {
  try {
    if (args === undefined || args === null || args === "") {
      return true;
    } else if (typeof args === "string" && JSON.parse(args) === null) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that both arguments are equel or not.
 * This function returns Boolean value.
 * @param args1 may be boolean, number, string, object, array, date, null or any.
 * @param args2 may be boolean, number, string, object, array, date, null or any.
 * @param option is used for passing option - such as if we want to compare string as case ignore then we pass caseIgnore true in option. By default caseIgnore is false.
 */
export const isEqual = (
  args1: any,
  args2: any,
  option = { caseIgnore: false }
) => {
  try {
    if (!isNull(args1) && !isNull(args2)) {
      if (typeof args1 === typeof args2) {
        if (isBoolean(args1) && isBoolean(args2)) {
          return toBoolean(args1) === toBoolean(args2);
        } else if (isString(args1) && isString(args2)) {
          if (option.caseIgnore) {
            return (
              toString(args1).toLocaleLowerCase() ===
              toString(args2).toLocaleLowerCase()
            );
          }
          return toString(args1) === toString(args2);
        } else if (isNumber(args1) && isNumber(args2)) {
          return toNumber(args1) === toNumber(args2);
        } else if (isObject(args1) && isObject(args2)) {
          return deepObjectEqual(args1, args2);
        } else if (isArray(args1) && isArray(args2)) {
          return deepArrayEqual(args1, args2);
        } else if (isDate(args1) && isDate(args2)) {
          const date1 = new Date(args1);
          const date2 = new Date(args2);
          return date1.getDate() === date2.getDate();
        }
      }
      return JSON.stringify(args1) === JSON.stringify(args2);
    }
    return args1 === args2;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var contains blank / empty value or object is empty or array is empty.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank then this function returns true.
 * @param args may be string | object | Array.
 */
export const isEmpty = (args: string | object | Array<any>) => {
  try {
    if (args !== undefined && args !== null && args === "") {
      return true;
    } else if (isString(args) && args === "") {
      return true;
    } else if (isObject(args)) {
      return Object.keys(args).length === 0 && args.constructor === Object;
    } else if (isArray(args)) {
      return Array.isArray(args) && !args.length;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is available / undefined type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined then returns true else false.
 * @param args may be any types of datatype.
 */
export const isUndefined = (args: any) => {
  if (args === undefined) {
    return true;
  }
  return false;
};

/**
 * This function is useful to check that var is null / Null type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined / null / "null" then returns true else false.
 * @param args may be any types of datatype.
 */
export const isNull = (args: any) => {
  try {
    if (args === undefined || args === null) {
      return true;
    } else if (typeof args === "string" && JSON.parse(args) === null) {
      return true;
    } else if (Object.is(args, null)) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Array type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isArray = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    return typeof args === "object" && Array.isArray(args) && args !== null
      ? true
      : false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Object type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isObject = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    return typeof args === "object" && !Array.isArray(args) && args !== null
      ? true
      : false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Number type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isNumber = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    return /^-?[\d.]+(?:e-?\d+)?$/.test(args);
  } catch (error) {
    return false;
  }
};

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
export const isInteger = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    if (!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(args)) {
      return false;
    }
    return !(args - parseInt(args));
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Floating point number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isFloat = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    if (!/^["|']{0,1}[-]{0,1}\d{0,}(\.{0,1}\d+)["|']{0,1}$/.test(args)) {
      return false;
    }
    return args - parseInt(args) ? true : false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Hexa decimal or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isHex = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    let regex = /[0-9A-Fa-f]{6}/g;
    if (args.match(regex)) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Binary number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isBinary = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    let isBinary = true;
    for (let i = 0; i < args.length; i++) {
      if (args[i] != "0" && args[i] != "1") {
        isBinary = false;
      }
    }
    return isBinary;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Octal number or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isOctal = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    if (/^(0o)?[0-7]+$/i.test(args)) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is String type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null then this function returns false.
 * @param args may be any types of datatype.
 */
export const isString = (args: any) => {
  if (args === undefined || args === null) {
    return false;
  }
  return typeof args === "string" ? true : false;
};

/**
 * This function is useful to check that var is Boolean type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isBoolean = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    return typeof args === "boolean" ? true : false;
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Date type or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isDate = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    } else if (isBoolean(args)) {
      return false;
    } else if (isString(args)) {
      return (
        Object.prototype.toString.call(args) === "[object Date]" &&
        !isNaN(Date.parse(args))
      );
    } else {
      return new Date(args).toString() !== "Invalid Date";
    }
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to check that var is Json or not.
 * This function returns Boolean value.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * @param args may be any types of datatype.
 */
export const isJson = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    } else if (typeof args === "string") {
      if (
        /^[\],:{}\s]*$/.test(
          args
            .replace(/\\["\\\/bfnrtu]/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      ) {
        return true;
      }
      return false;
    } else {
      let value = typeof args !== "string" ? JSON.stringify(args) : args;
      const result = JSON.parse(value);
      const type = Object.prototype.toString.call(result);
      return type === "[object Object]" || type === "[object Array]";
    }
  } catch (e) {
    return false;
  }
};

/**
 * This function is useful to parse in Json from any type.
 * This function returns any or Json type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * @param args may be any types of datatype.
 */
export const toJson = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return null;
    } else if (isString(args)) {
      if (isJson(args)) {
        return JSON.parse(args as string);
      }
      return null;
    } else {
      return args ? JSON.parse(JSON.stringify(args)) : null;
    }
  } catch (error) {
    return null;
  }
};

/**
 * This function is useful to parse in String from any type.
 * This function returns String type.
 * If passed argument contains undefined or null or blank or "null" then this function returns blank.
 * If passed argument contains Object type value or Array type value then this function returns stringify value.
 * If passed argument contains Date type value then this function returns toISOString.
 * @param args may be any types of datatype.
 */
export const toString = (args: any) => {
  try {
    if (isBlankOrNull(args)) {
      return "";
    } else if (isObject(args)) {
      return JSON.stringify(args);
    } else if (isArray(args)) {
      return JSON.stringify(args);
    } else if (isDate(args)) {
      return new Date(args as Date).toISOString();
    }
    return String(args);
  } catch (error) {
    return "";
  }
};

/**
 * This function is useful to parse in Number from any type.
 * This function returns Number type.
 * If passed argument contains undefined or null or blank or "null" then this function returns 0.
 * If passed argument contains Boolean type then it will be parsed as 1 means true or 0 means false.
 * If passed argument contains valid Number type of data then it will be parsed as Number otherwise returns 0.
 * @param args may be boolean | number | string type.
 */
export const toNumber = (args: boolean | number | string) => {
  try {
    if (isBlankOrNull(args)) {
      return 0;
    } else if (args === true) {
      return 1;
    } else if (args === false) {
      return 0;
    } else if (isNumber(args)) {
      return Number(args);
    }
    return 0;
  } catch (error) {
    return 0;
  }
};

/**
 * This function is useful to parse in Date from any type.
 * This function returns Date type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * If passed argument contains valid Date type of data then it will be parsed as Date otherwise returns null.
 * @param args may be number as long | string | Date type.
 */
export const toDate = (args: number | string | Date) => {
  try {
    if (isBlankOrNull(args)) {
      return null;
    } else if (isDate(args)) {
      return new Date(args);
    }
    return null;
  } catch (error) {
    return null;
  }
};

/**
 * This function is useful to parse in Boolean from any type.
 * This function returns Boolean type.
 * If passed argument contains undefined or null or blank or "null" then this function returns false.
 * If passed argument contains valid Boolean type of data then it will be parsed as Boolean otherwise returns false.
 * If we pass yes or 1 then this function returns true.
 * If we pass no or 0 then this function returns false.
 * @param args may be boolean | number | string.
 */
export const toBoolean = (args: boolean | number | string) => {
  try {
    if (isBlankOrNull(args)) {
      return false;
    }
    if (args === true || args === 1) {
      return true;
    }
    if (args === false || args === 0) {
      false;
    }
    switch (toString(args).toLowerCase()?.trim()) {
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
  } catch (error) {
    return false;
  }
};

/**
 * This function is useful to copy of Object or Array.
 * This function returns any type.
 * If passed argument contains undefined or null or blank or "null" then this function returns null.
 * If passed argument contains valid dat then it will be copied otherwise returns null.
 * @param args may be object | Array<any> | json.
 */
export const toCopy = (args: object | Array<any> | json) => {
  try {
    if (isBlankOrNull(args)) {
      return null;
    }
    return args ? JSON.parse(JSON.stringify(args)) : null;
  } catch (error) {
    return null;
  }
};

function deepArrayEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return JSON.stringify(array1) === JSON.stringify(array2);
}

function shallowArrayEqual(array1, array2) {
  return (
    isArray(array1) &&
    isArray(array2) &&
    array1.length === array2.length &&
    array1.every((val, index) => val === array2[index])
  );
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
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepObjectEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}
