/* tslint:disable */
/* eslint-disable */
/**
 * configmanager/service.proto
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @interface ConfigmanagerBulkSetConfigsRequest
 */
export interface ConfigmanagerBulkSetConfigsRequest {
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerBulkSetConfigsRequest
     */
    'tenantId': string;
    /**
     * 
     * @type {Array<BulkSetConfigsRequestConfig>}
     * @memberof ConfigmanagerBulkSetConfigsRequest
     */
    'configs': Array<BulkSetConfigsRequestConfig>;
}