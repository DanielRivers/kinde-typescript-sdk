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

import { exists, mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface OrganizationUserPermissionRolesInner
 */
export interface OrganizationUserPermissionRolesInner {
    /**
     * 
     * @type {string}
     * @memberof OrganizationUserPermissionRolesInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationUserPermissionRolesInner
     */
    key?: string;
}

/**
 * Check if a given object implements the OrganizationUserPermissionRolesInner interface.
 */
export function instanceOfOrganizationUserPermissionRolesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationUserPermissionRolesInnerFromJSON(json: any): OrganizationUserPermissionRolesInner {
    return OrganizationUserPermissionRolesInnerFromJSONTyped(json, false);
}

export function OrganizationUserPermissionRolesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationUserPermissionRolesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'key': !exists(json, 'key') ? undefined : json['key'],
    };
}

export function OrganizationUserPermissionRolesInnerToJSON(value?: OrganizationUserPermissionRolesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'key': value.key,
    };
}

