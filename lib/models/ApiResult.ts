/* tslint:disable */
/* eslint-disable */
/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApiResult
 */
export interface ApiResult {
    /**
     * The result of the api operation.
     * @type {string}
     * @memberof ApiResult
     */
    result?: string;
}

/**
 * Check if a given object implements the ApiResult interface.
 */
export function instanceOfApiResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApiResultFromJSON(json: any): ApiResult {
    return ApiResultFromJSONTyped(json, false);
}

export function ApiResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : json['result'],
    };
}

export function ApiResultToJSON(value?: ApiResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
    };
}
