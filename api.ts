/* tslint:disable */
/* eslint-disable */
/**
 * Config Manager Service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@gemini-commerce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface BulkSetConfigsRequestConfig
 */
export interface BulkSetConfigsRequestConfig {
    /**
     * 
     * @type {string}
     * @memberof BulkSetConfigsRequestConfig
     */
    'key': string;
    /**
     * 
     * @type {string}
     * @memberof BulkSetConfigsRequestConfig
     */
    'value': string;
    /**
     * 
     * @type {string}
     * @memberof BulkSetConfigsRequestConfig
     */
    'businessDomain'?: string;
}
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
/**
 * 
 * @export
 * @interface ConfigmanagerConfigResponse
 */
export interface ConfigmanagerConfigResponse {
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerConfigResponse
     */
    'value'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerConfigResponse
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerConfigResponse
     */
    'updatedAt'?: string;
}
/**
 * 
 * @export
 * @interface ConfigmanagerGetConfigRequest
 */
export interface ConfigmanagerGetConfigRequest {
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerGetConfigRequest
     */
    'tenantId': string;
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerGetConfigRequest
     */
    'key': string;
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerGetConfigRequest
     */
    'businessDomain'?: string;
}
/**
 * 
 * @export
 * @interface ConfigmanagerGetTenantIdByCodeRequest
 */
export interface ConfigmanagerGetTenantIdByCodeRequest {
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerGetTenantIdByCodeRequest
     */
    'code': string;
}
/**
 * 
 * @export
 * @interface ConfigmanagerGetTenantIdByCodeResponse
 */
export interface ConfigmanagerGetTenantIdByCodeResponse {
    /**
     * 
     * @type {string}
     * @memberof ConfigmanagerGetTenantIdByCodeResponse
     */
    'tenantId': string;
}
/**
 * 
 * @export
 * @interface ProtobufAny
 */
export interface ProtobufAny {
    [key: string]: any;

    /**
     * 
     * @type {string}
     * @memberof ProtobufAny
     */
    '@type'?: string;
}
/**
 * 
 * @export
 * @interface RpcStatus
 */
export interface RpcStatus {
    /**
     * 
     * @type {number}
     * @memberof RpcStatus
     */
    'code'?: number;
    /**
     * 
     * @type {string}
     * @memberof RpcStatus
     */
    'message'?: string;
    /**
     * 
     * @type {Array<ProtobufAny>}
     * @memberof RpcStatus
     */
    'details'?: Array<ProtobufAny>;
}

/**
 * ConfigManagerApi - axios parameter creator
 * @export
 */
export const ConfigManagerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Bulk set configs
         * @summary BulkSetConfigs
         * @param {ConfigmanagerBulkSetConfigsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configManagerBulkSetConfigs: async (body: ConfigmanagerBulkSetConfigsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('configManagerBulkSetConfigs', 'body', body)
            const localVarPath = `/configmanager.ConfigManager/BulkSetConfigs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication standardAuthorization required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "standardAuthorization", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a config
         * @summary GetConfig
         * @param {ConfigmanagerGetConfigRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configManagerGetConfig: async (body: ConfigmanagerGetConfigRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('configManagerGetConfig', 'body', body)
            const localVarPath = `/configmanager.ConfigManager/GetConfig`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication standardAuthorization required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "standardAuthorization", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {ConfigmanagerGetTenantIdByCodeRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configManagerGetTenantIdByCode: async (body: ConfigmanagerGetTenantIdByCodeRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('configManagerGetTenantIdByCode', 'body', body)
            const localVarPath = `/configmanager.ConfigManager/GetTenantIdByCode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Authorization required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ConfigManagerApi - functional programming interface
 * @export
 */
export const ConfigManagerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ConfigManagerApiAxiosParamCreator(configuration)
    return {
        /**
         * Bulk set configs
         * @summary BulkSetConfigs
         * @param {ConfigmanagerBulkSetConfigsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configManagerBulkSetConfigs(body: ConfigmanagerBulkSetConfigsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configManagerBulkSetConfigs(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigManagerApi.configManagerBulkSetConfigs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get a config
         * @summary GetConfig
         * @param {ConfigmanagerGetConfigRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configManagerGetConfig(body: ConfigmanagerGetConfigRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigmanagerConfigResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configManagerGetConfig(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigManagerApi.configManagerGetConfig']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {ConfigmanagerGetTenantIdByCodeRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async configManagerGetTenantIdByCode(body: ConfigmanagerGetTenantIdByCodeRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigmanagerGetTenantIdByCodeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.configManagerGetTenantIdByCode(body, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ConfigManagerApi.configManagerGetTenantIdByCode']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ConfigManagerApi - factory interface
 * @export
 */
export const ConfigManagerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ConfigManagerApiFp(configuration)
    return {
        /**
         * Bulk set configs
         * @summary BulkSetConfigs
         * @param {ConfigmanagerBulkSetConfigsRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configManagerBulkSetConfigs(body: ConfigmanagerBulkSetConfigsRequest, options?: RawAxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.configManagerBulkSetConfigs(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a config
         * @summary GetConfig
         * @param {ConfigmanagerGetConfigRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configManagerGetConfig(body: ConfigmanagerGetConfigRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigmanagerConfigResponse> {
            return localVarFp.configManagerGetConfig(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {ConfigmanagerGetTenantIdByCodeRequest} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        configManagerGetTenantIdByCode(body: ConfigmanagerGetTenantIdByCodeRequest, options?: RawAxiosRequestConfig): AxiosPromise<ConfigmanagerGetTenantIdByCodeResponse> {
            return localVarFp.configManagerGetTenantIdByCode(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ConfigManagerApi - object-oriented interface
 * @export
 * @class ConfigManagerApi
 * @extends {BaseAPI}
 */
export class ConfigManagerApi extends BaseAPI {
    /**
     * Bulk set configs
     * @summary BulkSetConfigs
     * @param {ConfigmanagerBulkSetConfigsRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigManagerApi
     */
    public configManagerBulkSetConfigs(body: ConfigmanagerBulkSetConfigsRequest, options?: RawAxiosRequestConfig) {
        return ConfigManagerApiFp(this.configuration).configManagerBulkSetConfigs(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a config
     * @summary GetConfig
     * @param {ConfigmanagerGetConfigRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigManagerApi
     */
    public configManagerGetConfig(body: ConfigmanagerGetConfigRequest, options?: RawAxiosRequestConfig) {
        return ConfigManagerApiFp(this.configuration).configManagerGetConfig(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {ConfigmanagerGetTenantIdByCodeRequest} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigManagerApi
     */
    public configManagerGetTenantIdByCode(body: ConfigmanagerGetTenantIdByCodeRequest, options?: RawAxiosRequestConfig) {
        return ConfigManagerApiFp(this.configuration).configManagerGetTenantIdByCode(body, options).then((request) => request(this.axios, this.basePath));
    }
}



