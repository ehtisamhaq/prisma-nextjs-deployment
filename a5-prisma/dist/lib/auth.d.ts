export declare const auth: import("better-auth").Auth<{
    database: (options: import("better-auth").BetterAuthOptions) => import("better-auth").DBAdapter<import("better-auth").BetterAuthOptions>;
    baseURL: string | undefined;
    trustedOrigins: string[];
    emailAndPassword: {
        enabled: true;
    };
    socialProviders: {
        google: {
            clientId: string;
            clientSecret: string;
            prompt: "select_account";
        };
        github: {
            clientId: string;
            clientSecret: string;
        };
    };
    advanced: {
        cookies: {
            session_token: {
                name: string;
                attributes: {
                    httpOnly: true;
                    secure: true;
                    sameSite: "none";
                    partitioned: true;
                };
            };
            state: {
                name: string;
                attributes: {
                    httpOnly: true;
                    secure: true;
                    sameSite: "none";
                    partitioned: true;
                };
            };
        };
    };
    plugins: [{
        id: "oauth-proxy";
        options: NoInfer<import("better-auth/plugins").OAuthProxyOptions>;
        endpoints: {
            oAuthProxy: import("better-call").StrictEndpoint<"/oauth-proxy-callback", {
                method: "GET";
                operationId: string;
                query: import("zod").ZodObject<{
                    callbackURL: import("zod").ZodString;
                    profile: import("zod").ZodOptional<import("zod").ZodString>;
                }, import("better-auth").$strip>;
                use: ((inputContext: import("better-call").MiddlewareInputContext<import("better-call").MiddlewareOptions>) => Promise<void>)[];
                metadata: {
                    openapi: {
                        operationId: string;
                        description: string;
                        parameters: ({
                            in: "query";
                            name: string;
                            required: true;
                            description: string;
                        } | {
                            in: "query";
                            name: string;
                            required: false;
                            description: string;
                        })[];
                        responses: {
                            302: {
                                description: string;
                                headers: {
                                    Location: {
                                        description: string;
                                        schema: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            }, never>;
        };
        hooks: {
            before: {
                matcher(context: import("better-auth").HookEndpointContext): boolean;
                handler: (inputContext: import("better-call").MiddlewareInputContext<import("better-call").MiddlewareOptions>) => Promise<void>;
            }[];
            after: {
                matcher(context: import("better-auth").HookEndpointContext): boolean;
                handler: (inputContext: import("better-call").MiddlewareInputContext<import("better-call").MiddlewareOptions>) => Promise<void>;
            }[];
        };
    }];
}>;
//# sourceMappingURL=auth.d.ts.map