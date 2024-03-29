/**
 * configmanager/service.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class BulkSetConfigsRequestConfig {
    'key': string;
    'value': string;
    'businessDomain'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "businessDomain",
            "baseName": "businessDomain",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BulkSetConfigsRequestConfig.attributeTypeMap;
    }

    public constructor() {
    }
}

