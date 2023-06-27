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
 * @interface UpdateOrganizationRequest
 */
export interface UpdateOrganizationRequest {
    /**
     * The organization's name.
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    name?: string;
    /**
     * The organization's ID.
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    externalId?: string;
    /**
     * The organization's brand settings - background color.
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    backgroundColor?: string;
    /**
     * The organization's brand settings - button color.
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    buttonColor?: string;
    /**
     * The organization's brand settings - button text color.
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    buttonTextColor?: string;
    /**
     * The organization's brand settings - link color.
     * @type {string}
     * @memberof UpdateOrganizationRequest
     */
    linkColor?: string;
}

/**
 * Check if a given object implements the UpdateOrganizationRequest interface.
 */
export function instanceOfUpdateOrganizationRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UpdateOrganizationRequestFromJSON(json: any): UpdateOrganizationRequest {
    return UpdateOrganizationRequestFromJSONTyped(json, false);
}

export function UpdateOrganizationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrganizationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'backgroundColor': !exists(json, 'background_color') ? undefined : json['background_color'],
        'buttonColor': !exists(json, 'button_color') ? undefined : json['button_color'],
        'buttonTextColor': !exists(json, 'button_text_color') ? undefined : json['button_text_color'],
        'linkColor': !exists(json, 'link_color') ? undefined : json['link_color'],
    };
}

export function UpdateOrganizationRequestToJSON(value?: UpdateOrganizationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'external_id': value.externalId,
        'background_color': value.backgroundColor,
        'button_color': value.buttonColor,
        'button_text_color': value.buttonTextColor,
        'link_color': value.linkColor,
    };
}
