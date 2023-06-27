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
 * @interface ConnectedAppsAuthUrl
 */
export interface ConnectedAppsAuthUrl {
    /**
     * A URL that is used to authenticate an end-user against a connected app.
     * @type {string}
     * @memberof ConnectedAppsAuthUrl
     */
    url?: string;
    /**
     * A unique identifier for the login session.
     * @type {string}
     * @memberof ConnectedAppsAuthUrl
     */
    sessionId?: string;
}

/**
 * Check if a given object implements the ConnectedAppsAuthUrl interface.
 */
export function instanceOfConnectedAppsAuthUrl(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConnectedAppsAuthUrlFromJSON(json: any): ConnectedAppsAuthUrl {
    return ConnectedAppsAuthUrlFromJSONTyped(json, false);
}

export function ConnectedAppsAuthUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectedAppsAuthUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'sessionId': !exists(json, 'session_id') ? undefined : json['session_id'],
    };
}

export function ConnectedAppsAuthUrlToJSON(value?: ConnectedAppsAuthUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'session_id': value.sessionId,
    };
}
