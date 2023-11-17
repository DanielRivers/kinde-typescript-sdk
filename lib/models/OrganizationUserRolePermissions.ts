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
import type { OrganizationUserRolePermissionsPermissions } from './OrganizationUserRolePermissionsPermissions.js';
import {
    OrganizationUserRolePermissionsPermissionsFromJSON,
    OrganizationUserRolePermissionsPermissionsFromJSONTyped,
    OrganizationUserRolePermissionsPermissionsToJSON,
} from './OrganizationUserRolePermissionsPermissions.js';

/**
 * 
 * @export
 * @interface OrganizationUserRolePermissions
 */
export interface OrganizationUserRolePermissions {
    /**
     * 
     * @type {string}
     * @memberof OrganizationUserRolePermissions
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrganizationUserRolePermissions
     */
    role?: string;
    /**
     * 
     * @type {OrganizationUserRolePermissionsPermissions}
     * @memberof OrganizationUserRolePermissions
     */
    permissions?: OrganizationUserRolePermissionsPermissions;
}

/**
 * Check if a given object implements the OrganizationUserRolePermissions interface.
 */
export function instanceOfOrganizationUserRolePermissions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrganizationUserRolePermissionsFromJSON(json: any): OrganizationUserRolePermissions {
    return OrganizationUserRolePermissionsFromJSONTyped(json, false);
}

export function OrganizationUserRolePermissionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationUserRolePermissions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'permissions': !exists(json, 'permissions') ? undefined : OrganizationUserRolePermissionsPermissionsFromJSON(json['permissions']),
    };
}

export function OrganizationUserRolePermissionsToJSON(value?: OrganizationUserRolePermissions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'role': value.role,
        'permissions': OrganizationUserRolePermissionsPermissionsToJSON(value.permissions),
    };
}
