import { RequestContext } from "../http/http";

/**
 * Interface authentication schemes.
 */
export interface SecurityAuthentication {
    /*
     * @return returns the name of the security authentication as specified in OAI
     */
    getName(): string;

    /**
     * Applies the authentication scheme to the request context
     *
     * @params context the request context which should use this authentication scheme
     */
    applySecurityAuthentication(context: RequestContext): void | Promise<void>;
}

export interface TokenProvider {
  getToken(): Promise<string> | string;
}

/**
 * Applies apiKey authentication to the request context.
 */
export class GeminiAuthorizationAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "geminiAuthorization";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("X-Gem-Token", this.apiKey);
    }
}

/**
 * Applies apiKey authentication to the request context.
 */
export class StandardAuthorizationAuthentication implements SecurityAuthentication {
    /**
     * Configures this api key authentication with the necessary properties
     *
     * @param apiKey: The api key to be used for every request
     */
    public constructor(private apiKey: string) {}

    public getName(): string {
        return "standardAuthorization";
    }

    public applySecurityAuthentication(context: RequestContext) {
        context.setHeaderParam("Authorization", this.apiKey);
    }
}


export type AuthMethods = {
    "default"?: SecurityAuthentication,
    "geminiAuthorization"?: SecurityAuthentication,
    "standardAuthorization"?: SecurityAuthentication
}

export type ApiKeyConfiguration = string;
export type HttpBasicConfiguration = { "username": string, "password": string };
export type HttpBearerConfiguration = { tokenProvider: TokenProvider };
export type OAuth2Configuration = { accessToken: string };

export type AuthMethodsConfiguration = {
    "default"?: SecurityAuthentication,
    "geminiAuthorization"?: ApiKeyConfiguration,
    "standardAuthorization"?: ApiKeyConfiguration
}

/**
 * Creates the authentication methods from a swagger description.
 *
 */
export function configureAuthMethods(config: AuthMethodsConfiguration | undefined): AuthMethods {
    let authMethods: AuthMethods = {}

    if (!config) {
        return authMethods;
    }
    authMethods["default"] = config["default"]

    if (config["geminiAuthorization"]) {
        authMethods["geminiAuthorization"] = new GeminiAuthorizationAuthentication(
            config["geminiAuthorization"]
        );
    }

    if (config["standardAuthorization"]) {
        authMethods["standardAuthorization"] = new StandardAuthorizationAuthentication(
            config["standardAuthorization"]
        );
    }

    return authMethods;
}