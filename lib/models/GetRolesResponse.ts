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
import type { Roles } from './Roles';
import {
    RolesFromJSON,
    RolesFromJSONTyped,
    RolesToJSON,
} from './Roles';

/**
 * 
 * @export
 * @interface GetRolesResponse
 */
export interface GetRolesResponse {
    /**
     * Response code.
     * @type {string}
     * @memberof GetRolesResponse
     */
    code?: string;
    /**
     * Response message.
     * @type {string}
     * @memberof GetRolesResponse
     */
    message?: string;
    /**
     * 
     * @type {Array<Roles>}
     * @memberof GetRolesResponse
     */
    roles?: Array<Roles>;
    /**
     * Pagination token.
     * @type {string}
     * @memberof GetRolesResponse
     */
    nextToken?: string;
}

/**
 * Check if a given object implements the GetRolesResponse interface.
 */
export function instanceOfGetRolesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetRolesResponseFromJSON(json: any): GetRolesResponse {
    return GetRolesResponseFromJSONTyped(json, false);
}

export function GetRolesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRolesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'roles': !exists(json, 'roles') ? undefined : ((json['roles'] as Array<any>).map(RolesFromJSON)),
        'nextToken': !exists(json, 'next_token') ? undefined : json['next_token'],
    };
}

export function GetRolesResponseToJSON(value?: GetRolesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'roles': value.roles === undefined ? undefined : ((value.roles as Array<any>).map(RolesToJSON)),
        'next_token': value.nextToken,
    };
}
