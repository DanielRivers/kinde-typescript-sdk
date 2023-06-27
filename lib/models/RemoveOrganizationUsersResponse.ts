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
 * @interface RemoveOrganizationUsersResponse
 */
export interface RemoveOrganizationUsersResponse {
    /**
     * 
     * @type {string}
     * @memberof RemoveOrganizationUsersResponse
     */
    message?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RemoveOrganizationUsersResponse
     */
    usersAdded?: Array<string>;
}

/**
 * Check if a given object implements the RemoveOrganizationUsersResponse interface.
 */
export function instanceOfRemoveOrganizationUsersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RemoveOrganizationUsersResponseFromJSON(json: any): RemoveOrganizationUsersResponse {
    return RemoveOrganizationUsersResponseFromJSONTyped(json, false);
}

export function RemoveOrganizationUsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RemoveOrganizationUsersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
        'usersAdded': !exists(json, 'users_added') ? undefined : json['users_added'],
    };
}

export function RemoveOrganizationUsersResponseToJSON(value?: RemoveOrganizationUsersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'users_added': value.usersAdded,
    };
}
