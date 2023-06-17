/**
 * This type is a user defined type. We can use this type as json
 * such as boolean, number, string, object, array, any
 */
export type json = boolean | number | string | {
    [x: string]: json;
} | JSONObject | JSONArray | Array<json>;
/**
 * This type is a user defined type. We can use this type as json object
 */
export interface JSONObject {
    [x: string]: json;
}
/**
 * This type is a user defined type. We can use this type as json array
 */
export interface JSONArray extends Array<json> {
}
