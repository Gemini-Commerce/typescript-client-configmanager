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
import { ObservableConfigManagerApi } from './ObservableAPI';

import { ConfigManagerApiRequestFactory, ConfigManagerApiResponseProcessor} from "../apis/ConfigManagerApi";
export class PromiseConfigManagerApi {
    private api: ObservableConfigManagerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigManagerApiRequestFactory,
        responseProcessor?: ConfigManagerApiResponseProcessor
    ) {
        this.api = new ObservableConfigManagerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk set configs
     * BulkSetConfigs
     * @param body 
     */
    public configManagerBulkSetConfigsWithHttpInfo(body: ConfigmanagerBulkSetConfigsRequest, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.configManagerBulkSetConfigsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Bulk set configs
     * BulkSetConfigs
     * @param body 
     */
    public configManagerBulkSetConfigs(body: ConfigmanagerBulkSetConfigsRequest, _options?: Configuration): Promise<any> {
        const result = this.api.configManagerBulkSetConfigs(body, _options);
        return result.toPromise();
    }

    /**
     * Get a config
     * GetConfig
     * @param body 
     */
    public configManagerGetConfigWithHttpInfo(body: ConfigmanagerGetConfigRequest, _options?: Configuration): Promise<HttpInfo<ConfigmanagerConfigResponse>> {
        const result = this.api.configManagerGetConfigWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Get a config
     * GetConfig
     * @param body 
     */
    public configManagerGetConfig(body: ConfigmanagerGetConfigRequest, _options?: Configuration): Promise<ConfigmanagerConfigResponse> {
        const result = this.api.configManagerGetConfig(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public configManagerGetTenantIdByCodeWithHttpInfo(body: ConfigmanagerGetTenantIdByCodeRequest, _options?: Configuration): Promise<HttpInfo<ConfigmanagerGetTenantIdByCodeResponse>> {
        const result = this.api.configManagerGetTenantIdByCodeWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     */
    public configManagerGetTenantIdByCode(body: ConfigmanagerGetTenantIdByCodeRequest, _options?: Configuration): Promise<ConfigmanagerGetTenantIdByCodeResponse> {
        const result = this.api.configManagerGetTenantIdByCode(body, _options);
        return result.toPromise();
    }


}



