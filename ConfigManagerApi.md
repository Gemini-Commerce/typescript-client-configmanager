# .ConfigManagerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configManagerBulkSetConfigs**](ConfigManagerApi.md#configManagerBulkSetConfigs) | **POST** /configmanager.ConfigManager/BulkSetConfigs | 
[**configManagerGetConfig**](ConfigManagerApi.md#configManagerGetConfig) | **POST** /configmanager.ConfigManager/GetConfig | 
[**configManagerGetTenantIdByCode**](ConfigManagerApi.md#configManagerGetTenantIdByCode) | **POST** /configmanager.ConfigManager/GetTenantIdByCode | 


# **configManagerBulkSetConfigs**
> any configManagerBulkSetConfigs(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfigManagerApi(configuration);

let body:.ConfigManagerApiConfigManagerBulkSetConfigsRequest = {
  // ConfigmanagerBulkSetConfigsRequest
  body: {
    tenantId: "tenantId_example",
    configs: [
      {
        key: "key_example",
        value: "value_example",
        businessDomain: "businessDomain_example",
      },
    ],
  },
};

apiInstance.configManagerBulkSetConfigs(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ConfigmanagerBulkSetConfigsRequest**|  |


### Return type

**any**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **configManagerGetConfig**
> ConfigmanagerConfigResponse configManagerGetConfig(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfigManagerApi(configuration);

let body:.ConfigManagerApiConfigManagerGetConfigRequest = {
  // ConfigmanagerGetConfigRequest
  body: {
    tenantId: "tenantId_example",
    key: "key_example",
    businessDomain: "businessDomain_example",
  },
};

apiInstance.configManagerGetConfig(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ConfigmanagerGetConfigRequest**|  |


### Return type

**ConfigmanagerConfigResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **configManagerGetTenantIdByCode**
> ConfigmanagerGetTenantIdByCodeResponse configManagerGetTenantIdByCode(body)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ConfigManagerApi(configuration);

let body:.ConfigManagerApiConfigManagerGetTenantIdByCodeRequest = {
  // ConfigmanagerGetTenantIdByCodeRequest
  body: {
    code: "code_example",
  },
};

apiInstance.configManagerGetTenantIdByCode(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ConfigmanagerGetTenantIdByCodeRequest**|  |


### Return type

**ConfigmanagerGetTenantIdByCodeResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful response. |  -  |
**0** | An unexpected error response. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


