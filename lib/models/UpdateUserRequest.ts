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
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
    /**
     * User's first name.
     * @type {string}
     * @memberof UpdateUserRequest
     */
    givenName?: string;
    /**
     * User's last name.
     * @type {string}
     * @memberof UpdateUserRequest
     */
    familyName?: string;
    /**
     * Whether the user is currently suspended or not.
     * @type {boolean}
     * @memberof UpdateUserRequest
     */
    isSuspended?: boolean;
}

/**
 * Check if a given object implements the UpdateUserRequest interface.
 */
export function instanceOfUpdateUserRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateUserRequestFromJSON(json: any): UpdateUserRequest {
    return UpdateUserRequestFromJSONTyped(json, false);
}

export function UpdateUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateUserRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'givenName': !exists(json, 'given_name') ? undefined : json['given_name'],
        'familyName': !exists(json, 'family_name') ? undefined : json['family_name'],
        'isSuspended': !exists(json, 'is_suspended') ? undefined : json['is_suspended'],
    };
}

export function UpdateUserRequestToJSON(value?: UpdateUserRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'given_name': value.givenName,
        'family_name': value.familyName,
        'is_suspended': value.isSuspended,
    };
}
