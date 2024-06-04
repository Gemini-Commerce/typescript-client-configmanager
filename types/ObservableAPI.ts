import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { BulkSetConfigsRequestConfig } from '../models/BulkSetConfigsRequestConfig';
import { ConfigmanagerBulkSetConfigsRequest } from '../models/ConfigmanagerBulkSetConfigsRequest';
import { ConfigmanagerConfigResponse } from '../models/ConfigmanagerConfigResponse';
import { ConfigmanagerGetConfigRequest } from '../models/ConfigmanagerGetConfigRequest';
import { ConfigmanagerGetTenantIdByCodeRequest } from '../models/ConfigmanagerGetTenantIdByCodeRequest';
import { ConfigmanagerGetTenantIdByCodeResponse } from '../models/ConfigmanagerGetTenantIdByCodeResponse';
import { ProtobufAny } from '../models/ProtobufAny';
import { RpcStatus } from '../models/RpcStatus';

import { ConfigManagerApiRequestFactory, ConfigManagerApiResponseProcessor} from "../apis/ConfigManagerApi";
export class ObservableConfigManagerApi {
    private requestFactory: ConfigManagerApiRequestFactory;
    private responseProcessor: ConfigManagerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ConfigManagerApiRequestFactory,
        responseProcessor?: ConfigManagerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ConfigManagerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ConfigManagerApiResponseProcessor();
    }

    /**
     * @param body 
     */
    public configManagerBulkSetConfigsWithHttpInfo(body: ConfigmanagerBulkSetConfigsRequest, _options?: Configuration): Observable<HttpInfo<any>> {
        const requestContextPromise = this.requestFactory.configManagerBulkSetConfigs(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configManagerBulkSetConfigsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public configManagerBulkSetConfigs(body: ConfigmanagerBulkSetConfigsRequest, _options?: Configuration): Observable<any> {
        return this.configManagerBulkSetConfigsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<any>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public configManagerGetConfigWithHttpInfo(body: ConfigmanagerGetConfigRequest, _options?: Configuration): Observable<HttpInfo<ConfigmanagerConfigResponse>> {
        const requestContextPromise = this.requestFactory.configManagerGetConfig(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configManagerGetConfigWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public configManagerGetConfig(body: ConfigmanagerGetConfigRequest, _options?: Configuration): Observable<ConfigmanagerConfigResponse> {
        return this.configManagerGetConfigWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ConfigmanagerConfigResponse>) => apiResponse.data));
    }

    /**
     * @param body 
     */
    public configManagerGetTenantIdByCodeWithHttpInfo(body: ConfigmanagerGetTenantIdByCodeRequest, _options?: Configuration): Observable<HttpInfo<ConfigmanagerGetTenantIdByCodeResponse>> {
        const requestContextPromise = this.requestFactory.configManagerGetTenantIdByCode(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.configManagerGetTenantIdByCodeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     */
    public configManagerGetTenantIdByCode(body: ConfigmanagerGetTenantIdByCodeRequest, _options?: Configuration): Observable<ConfigmanagerGetTenantIdByCodeResponse> {
        return this.configManagerGetTenantIdByCodeWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<ConfigmanagerGetTenantIdByCodeResponse>) => apiResponse.data));
    }

}
