/**
 * This type is a user defined type. We can use this type as json
 * such as boolean, number, string, object, array, any
 */
export type json =
  | boolean
  | number
  | string
  | { [x: string]: json }
  | JSONObject
  | JSONArray
  | Array<json>;

/**
 * This type is a user defined type. We can use this type as json object
 */
export interface JSONObject {
  [x: string]: json;
}

/**
 * This type is a user defined type. We can use this type as json array
 */
export interface JSONArray extends Array<json> {}

/*export type Json =
    | { [x: string]: Json }
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray
    | Array<Json>;

export type JSON =
    | { [x: string]: JSON }
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray
    | Array<JSON>;

export type json =
    | string
    | number
    | boolean
    | { [x: string]: json }
    | Array<json>;*/
