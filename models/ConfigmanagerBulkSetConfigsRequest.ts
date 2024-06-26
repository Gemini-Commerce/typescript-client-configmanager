/**
 * Config Manager Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BulkSetConfigsRequestConfig } from '../models/BulkSetConfigsRequestConfig';
import { HttpFile } from '../http/http';

export class ConfigmanagerBulkSetConfigsRequest {
    'tenantId': string;
    'configs': Array<BulkSetConfigsRequestConfig>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tenantId",
            "baseName": "tenantId",
            "type": "string",
            "format": ""
        },
        {
            "name": "configs",
            "baseName": "configs",
            "type": "Array<BulkSetConfigsRequestConfig>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ConfigmanagerBulkSetConfigsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

