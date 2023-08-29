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
import type { UpdateRolePermissionsRequestPermissionsInner } from './UpdateRolePermissionsRequestPermissionsInner';
import {
    UpdateRolePermissionsRequestPermissionsInnerFromJSON,
    UpdateRolePermissionsRequestPermissionsInnerFromJSONTyped,
    UpdateRolePermissionsRequestPermissionsInnerToJSON,
} from './UpdateRolePermissionsRequestPermissionsInner';

/**
 * 
 * @export
 * @interface UpdateRolePermissionsRequest
 */
export interface UpdateRolePermissionsRequest {
    /**
     * Permissions to add or remove from the role.
     * @type {Array<UpdateRolePermissionsRequestPermissionsInner>}
     * @memberof UpdateRolePermissionsRequest
     */
    permissions?: Array<UpdateRolePermissionsRequestPermissionsInner>;
}

/**
 * Check if a given object implements the UpdateRolePermissionsRequest interface.
 */
export function instanceOfUpdateRolePermissionsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateRolePermissionsRequestFromJSON(json: any): UpdateRolePermissionsRequest {
    return UpdateRolePermissionsRequestFromJSONTyped(json, false);
}

export function UpdateRolePermissionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateRolePermissionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permissions': !exists(json, 'permissions') ? undefined : ((json['permissions'] as Array<any>).map(UpdateRolePermissionsRequestPermissionsInnerFromJSON)),
    };
}

export function UpdateRolePermissionsRequestToJSON(value?: UpdateRolePermissionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permissions': value.permissions === undefined ? undefined : ((value.permissions as Array<any>).map(UpdateRolePermissionsRequestPermissionsInnerToJSON)),
    };
}
