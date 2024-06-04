import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BulkSetConfigsRequestConfig } from '../models/BulkSetConfigsRequestConfig';
import { ConfigmanagerBulkSetConfigsRequest } from '../models/ConfigmanagerBulkSetConfigsRequest';
import { ConfigmanagerConfigResponse } from '../models/ConfigmanagerConfigResponse';
import { ConfigmanagerGetConfigRequest } from '../models/ConfigmanagerGetConfigRequest';
import { ConfigmanagerGetTenantIdByCodeRequest } from '../models/ConfigmanagerGetTenantIdByCodeRequest';
import { ConfigmanagerGetTenantIdByCodeResponse } from '../models/ConfigmanagerGetTenantIdByCodeResponse';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';

import { ObservableConfigManagerApi } from "./ObservableAPI";
import { ConfigManagerApiRequestFactory, ConfigManagerApiResponseProcessor} from "../apis/ConfigManagerApi";

export interface ConfigManagerApiConfigManagerBulkSetConfigsRequest {
    /**
     * 
     * @type ConfigmanagerBulkSetConfigsRequest
     * @memberof ConfigManagerApiconfigManagerBulkSetConfigs
     */
    body: ConfigmanagerBulkSetConfigsRequest
}

export interface ConfigManagerApiConfigManagerGetConfigRequest {
    /**
     * 
     * @type ConfigmanagerGetConfigRequest
     * @memberof ConfigManagerApiconfigManagerGetConfig
     */
    body: ConfigmanagerGetConfigRequest
}

export interface ConfigManagerApiConfigManagerGetTenantIdByCodeRequest {
    /**
     * 
     * @type ConfigmanagerGetTenantIdByCodeRequest
     * @memberof ConfigManagerApiconfigManagerGetTenantIdByCode
     */
    body: ConfigmanagerGetTenantIdByCodeRequest
}

export class ObjectConfigManagerApi {
    private api: ObservableConfigManagerApi

    public constructor(configuration: Configuration, requestFactory?: ConfigManagerApiRequestFactory, responseProcessor?: ConfigManagerApiResponseProcessor) {
        this.api = new ObservableConfigManagerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk set configs
     * BulkSetConfigs
     * @param param the request object
     */
    public configManagerBulkSetConfigsWithHttpInfo(param: ConfigManagerApiConfigManagerBulkSetConfigsRequest, options?: Configuration): Promise<HttpInfo<any>> {
        return this.api.configManagerBulkSetConfigsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Bulk set configs
     * BulkSetConfigs
     * @param param the request object
     */
    public configManagerBulkSetConfigs(param: ConfigManagerApiConfigManagerBulkSetConfigsRequest, options?: Configuration): Promise<any> {
        return this.api.configManagerBulkSetConfigs(param.body,  options).toPromise();
    }

    /**
     * Get a config
     * GetConfig
     * @param param the request object
     */
    public configManagerGetConfigWithHttpInfo(param: ConfigManagerApiConfigManagerGetConfigRequest, options?: Configuration): Promise<HttpInfo<ConfigmanagerConfigResponse>> {
        return this.api.configManagerGetConfigWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Get a config
     * GetConfig
     * @param param the request object
     */
    public configManagerGetConfig(param: ConfigManagerApiConfigManagerGetConfigRequest, options?: Configuration): Promise<ConfigmanagerConfigResponse> {
        return this.api.configManagerGetConfig(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public configManagerGetTenantIdByCodeWithHttpInfo(param: ConfigManagerApiConfigManagerGetTenantIdByCodeRequest, options?: Configuration): Promise<HttpInfo<ConfigmanagerGetTenantIdByCodeResponse>> {
        return this.api.configManagerGetTenantIdByCodeWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public configManagerGetTenantIdByCode(param: ConfigManagerApiConfigManagerGetTenantIdByCodeRequest, options?: Configuration): Promise<ConfigmanagerGetTenantIdByCodeResponse> {
        return this.api.configManagerGetTenantIdByCode(param.body,  options).toPromise();
    }

}
