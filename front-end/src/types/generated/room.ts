/* tslint:disable */
/* eslint-disable */
/**
 * Hotel Room Reservation API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Room
 */
export interface Room {
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    'room_id': number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    'hotel': string;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    'guest_capacity': number;
    /**
     * 
     * @type {string}
     * @memberof Room
     */
    'type': string;
    /**
     * 
     * @type {boolean}
     * @memberof Room
     */
    'availability': boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Room
     */
    'facilities': Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Room
     */
    'price': number;
}

