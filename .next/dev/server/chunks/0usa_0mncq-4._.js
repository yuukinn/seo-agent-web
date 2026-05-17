module.exports = [
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultSigninHttpAuthSchemeParametersProvider",
    ()=>defaultSigninHttpAuthSchemeParametersProvider,
    "defaultSigninHttpAuthSchemeProvider",
    ()=>defaultSigninHttpAuthSchemeProvider,
    "resolveHttpAuthSchemeConfig",
    ()=>resolveHttpAuthSchemeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js [app-route] (ecmascript)");
;
;
const defaultSigninHttpAuthSchemeParametersProvider = async (config, context, input)=>{
    return {
        operation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSmithyContext"])(context).operation,
        region: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeProvider"])(config.region)() || (()=>{
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "signin",
            region: authParameters.region
        },
        propertiesExtractor: (config, context)=>({
                signingProperties: {
                    config,
                    context
                }
            })
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth"
    };
}
const defaultSigninHttpAuthSchemeProvider = (authParameters)=>{
    const options = [];
    switch(authParameters.operation){
        case "CreateOAuth2Token":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                break;
            }
        default:
            {
                options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
            }
    }
    return options;
};
const resolveHttpAuthSchemeConfig = (config)=>{
    const config_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveAwsSdkSigV4Config"])(config);
    return Object.assign(config_0, {
        authSchemePreference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeProvider"])(config.authSchemePreference ?? [])
    });
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/EndpointParameters.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commonParams",
    ()=>commonParams,
    "resolveClientEndpointParameters",
    ()=>resolveClientEndpointParameters
]);
const resolveClientEndpointParameters = (options)=>{
    return Object.assign(options, {
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "signin"
    });
};
const commonParams = {
    UseFIPS: {
        type: "builtInParams",
        name: "useFipsEndpoint"
    },
    Endpoint: {
        type: "builtInParams",
        name: "endpoint"
    },
    Region: {
        type: "builtInParams",
        name: "region"
    },
    UseDualStack: {
        type: "builtInParams",
        name: "useDualstackEndpoint"
    }
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/package.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "name": "@aws-sdk/nested-clients",
    "version": "3.997.4",
    "description": "Nested clients for AWS SDK packages.",
    "main": "./dist-cjs/index.js",
    "module": "./dist-es/index.js",
    "types": "./dist-types/index.d.ts",
    "scripts": {
        "build": "yarn lint && concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline nested-clients",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "yarn g:turbo run build -F=\"$npm_package_name\"",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        "clean": "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
        "lint": "node ../../scripts/validation/submodules-linter.js --pkg nested-clients",
        "test": "yarn g:vitest run",
        "test:watch": "yarn g:vitest watch"
    },
    "engines": {
        "node": ">=20.0.0"
    },
    "sideEffects": false,
    "author": {
        "name": "AWS SDK for JavaScript Team",
        "url": "https://aws.amazon.com/javascript/"
    },
    "license": "Apache-2.0",
    "dependencies": {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.974.6",
        "@aws-sdk/middleware-host-header": "^3.972.10",
        "@aws-sdk/middleware-logger": "^3.972.10",
        "@aws-sdk/middleware-recursion-detection": "^3.972.11",
        "@aws-sdk/middleware-user-agent": "^3.972.36",
        "@aws-sdk/region-config-resolver": "^3.972.13",
        "@aws-sdk/signature-v4-multi-region": "^3.996.23",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@aws-sdk/util-user-agent-browser": "^3.972.10",
        "@aws-sdk/util-user-agent-node": "^3.973.22",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/core": "^3.23.17",
        "@smithy/fetch-http-handler": "^5.3.17",
        "@smithy/hash-node": "^4.2.14",
        "@smithy/invalid-dependency": "^4.2.14",
        "@smithy/middleware-content-length": "^4.2.14",
        "@smithy/middleware-endpoint": "^4.4.32",
        "@smithy/middleware-retry": "^4.5.6",
        "@smithy/middleware-serde": "^4.2.20",
        "@smithy/middleware-stack": "^4.2.14",
        "@smithy/node-config-provider": "^4.3.14",
        "@smithy/node-http-handler": "^4.6.1",
        "@smithy/protocol-http": "^5.3.14",
        "@smithy/smithy-client": "^4.12.13",
        "@smithy/types": "^4.14.1",
        "@smithy/url-parser": "^4.2.14",
        "@smithy/util-base64": "^4.3.2",
        "@smithy/util-body-length-browser": "^4.2.2",
        "@smithy/util-body-length-node": "^4.2.3",
        "@smithy/util-defaults-mode-browser": "^4.3.49",
        "@smithy/util-defaults-mode-node": "^4.2.54",
        "@smithy/util-endpoints": "^3.4.2",
        "@smithy/util-middleware": "^4.2.14",
        "@smithy/util-retry": "^4.3.5",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
    },
    "devDependencies": {
        "concurrently": "7.0.0",
        "downlevel-dts": "0.10.1",
        "premove": "4.0.0",
        "typescript": "~5.8.3"
    },
    "typesVersions": {
        "<4.5": {
            "dist-types/*": [
                "dist-types/ts3.4/*"
            ]
        }
    },
    "files": [
        "./cognito-identity.d.ts",
        "./cognito-identity.js",
        "./signin.d.ts",
        "./signin.js",
        "./sso-oidc.d.ts",
        "./sso-oidc.js",
        "./sso.d.ts",
        "./sso.js",
        "./sts.d.ts",
        "./sts.js",
        "dist-*/**"
    ],
    "browser": {
        "./dist-es/submodules/cognito-identity/runtimeConfig": "./dist-es/submodules/cognito-identity/runtimeConfig.browser",
        "./dist-es/submodules/signin/runtimeConfig": "./dist-es/submodules/signin/runtimeConfig.browser",
        "./dist-es/submodules/sso-oidc/runtimeConfig": "./dist-es/submodules/sso-oidc/runtimeConfig.browser",
        "./dist-es/submodules/sso/runtimeConfig": "./dist-es/submodules/sso/runtimeConfig.browser",
        "./dist-es/submodules/sts/runtimeConfig": "./dist-es/submodules/sts/runtimeConfig.browser"
    },
    "react-native": {},
    "homepage": "https://github.com/aws/aws-sdk-js-v3/tree/main/packages/nested-clients",
    "repository": {
        "type": "git",
        "url": "https://github.com/aws/aws-sdk-js-v3.git",
        "directory": "packages/nested-clients"
    },
    "exports": {
        "./package.json": "./package.json",
        "./sso-oidc": {
            "types": "./dist-types/submodules/sso-oidc/index.d.ts",
            "module": "./dist-es/submodules/sso-oidc/index.js",
            "node": "./dist-cjs/submodules/sso-oidc/index.js",
            "import": "./dist-es/submodules/sso-oidc/index.js",
            "require": "./dist-cjs/submodules/sso-oidc/index.js"
        },
        "./sts": {
            "types": "./dist-types/submodules/sts/index.d.ts",
            "module": "./dist-es/submodules/sts/index.js",
            "node": "./dist-cjs/submodules/sts/index.js",
            "import": "./dist-es/submodules/sts/index.js",
            "require": "./dist-cjs/submodules/sts/index.js"
        },
        "./signin": {
            "types": "./dist-types/submodules/signin/index.d.ts",
            "module": "./dist-es/submodules/signin/index.js",
            "node": "./dist-cjs/submodules/signin/index.js",
            "import": "./dist-es/submodules/signin/index.js",
            "require": "./dist-cjs/submodules/signin/index.js"
        },
        "./cognito-identity": {
            "types": "./dist-types/submodules/cognito-identity/index.d.ts",
            "module": "./dist-es/submodules/cognito-identity/index.js",
            "node": "./dist-cjs/submodules/cognito-identity/index.js",
            "import": "./dist-es/submodules/cognito-identity/index.js",
            "require": "./dist-cjs/submodules/cognito-identity/index.js"
        },
        "./sso": {
            "types": "./dist-types/submodules/sso/index.d.ts",
            "module": "./dist-es/submodules/sso/index.js",
            "node": "./dist-cjs/submodules/sso/index.js",
            "import": "./dist-es/submodules/sso/index.js",
            "require": "./dist-cjs/submodules/sso/index.js"
        }
    }
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NoAuthSigner",
    ()=>NoAuthSigner
]);
class NoAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/bdd.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bdd",
    ()=>bdd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$bdd$2f$BinaryDecisionDiagram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-endpoints/dist-es/bdd/BinaryDecisionDiagram.js [app-route] (ecmascript)");
;
const m = "ref";
const a = -1, b = true, c = "isSet", d = "PartitionResult", e = "booleanEquals", f = "getAttr", g = "stringEquals", h = {
    [m]: "Endpoint"
}, i = {
    [m]: d
}, j = {
    fn: f,
    argv: [
        i,
        "name"
    ]
}, k = {}, l = [
    {
        [m]: "Region"
    }
];
const _data = {
    conditions: [
        [
            c,
            [
                h
            ]
        ],
        [
            c,
            l
        ],
        [
            "aws.partition",
            l,
            d
        ],
        [
            e,
            [
                {
                    [m]: "UseFIPS"
                },
                b
            ]
        ],
        [
            e,
            [
                {
                    [m]: "UseDualStack"
                },
                b
            ]
        ],
        [
            e,
            [
                {
                    fn: f,
                    argv: [
                        i,
                        "supportsDualStack"
                    ]
                },
                b
            ]
        ],
        [
            e,
            [
                {
                    fn: f,
                    argv: [
                        i,
                        "supportsFIPS"
                    ]
                },
                b
            ]
        ],
        [
            g,
            [
                j,
                "aws"
            ]
        ],
        [
            g,
            [
                j,
                "aws-cn"
            ]
        ],
        [
            g,
            [
                j,
                "aws-us-gov"
            ]
        ]
    ],
    results: [
        [
            a
        ],
        [
            a,
            "Invalid Configuration: FIPS and custom endpoint are not supported"
        ],
        [
            a,
            "Invalid Configuration: Dualstack and custom endpoint are not supported"
        ],
        [
            h,
            k
        ],
        [
            "https://{Region}.signin.aws.amazon.com",
            k
        ],
        [
            "https://{Region}.signin.amazonaws.cn",
            k
        ],
        [
            "https://{Region}.signin.amazonaws-us-gov.com",
            k
        ],
        [
            "https://signin-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
            k
        ],
        [
            a,
            "FIPS and DualStack are enabled, but this partition does not support one or both"
        ],
        [
            "https://signin-fips.{Region}.{PartitionResult#dnsSuffix}",
            k
        ],
        [
            a,
            "FIPS is enabled but this partition does not support FIPS"
        ],
        [
            "https://signin.{Region}.{PartitionResult#dualStackDnsSuffix}",
            k
        ],
        [
            a,
            "DualStack is enabled but this partition does not support DualStack"
        ],
        [
            "https://signin.{Region}.{PartitionResult#dnsSuffix}",
            k
        ],
        [
            a,
            "Invalid Configuration: Missing Region"
        ]
    ]
};
const root = 2;
const r = 100_000_000;
const nodes = new Int32Array([
    -1,
    1,
    -1,
    0,
    15,
    3,
    1,
    4,
    r + 14,
    2,
    5,
    r + 14,
    3,
    11,
    6,
    4,
    10,
    7,
    7,
    r + 4,
    8,
    8,
    r + 5,
    9,
    9,
    r + 6,
    r + 13,
    5,
    r + 11,
    r + 12,
    4,
    13,
    12,
    6,
    r + 9,
    r + 10,
    5,
    14,
    r + 8,
    6,
    r + 7,
    r + 8,
    3,
    r + 1,
    16,
    4,
    r + 2,
    r + 3
]);
const bdd = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$bdd$2f$BinaryDecisionDiagram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryDecisionDiagram"].from(nodes, root, _data.conditions, _data.results);
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/endpointResolver.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultEndpointResolver",
    ()=>defaultEndpointResolver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-endpoints/dist-es/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$aws$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-endpoints/dist-es/aws.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$utils$2f$customEndpointFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$decideEndpoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-endpoints/dist-es/decideEndpoint.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$cache$2f$EndpointCache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$bdd$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/bdd.js [app-route] (ecmascript)");
;
;
;
const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$cache$2f$EndpointCache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndpointCache"]({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS"
    ]
});
const defaultEndpointResolver = (endpointParams, context = {})=>{
    return cache.get(endpointParams, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$decideEndpoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decideEndpoint"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$bdd$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bdd"], {
            endpointParams: endpointParams,
            logger: context.logger
        }));
};
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$utils$2f$customEndpointFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["customEndpointFunctions"].aws = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$aws$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["awsEndpointFunctions"];
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SigninServiceException",
    ()=>SigninServiceException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/exceptions.js [app-route] (ecmascript)");
;
;
class SigninServiceException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ServiceException"] {
    constructor(options){
        super(options);
        Object.setPrototypeOf(this, SigninServiceException.prototype);
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessDeniedException",
    ()=>AccessDeniedException,
    "InternalServerException",
    ()=>InternalServerException,
    "TooManyRequestsError",
    ()=>TooManyRequestsError,
    "ValidationException",
    ()=>ValidationException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js [app-route] (ecmascript) <locals>");
;
class AccessDeniedException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninServiceException"] {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    constructor(opts){
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
    }
}
class InternalServerException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninServiceException"] {
    name = "InternalServerException";
    $fault = "server";
    error;
    constructor(opts){
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts
        });
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
    }
}
class TooManyRequestsError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninServiceException"] {
    name = "TooManyRequestsError";
    $fault = "client";
    error;
    constructor(opts){
        super({
            name: "TooManyRequestsError",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, TooManyRequestsError.prototype);
        this.error = opts.error;
    }
}
class ValidationException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninServiceException"] {
    name = "ValidationException";
    $fault = "client";
    error;
    constructor(opts){
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.error = opts.error;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessDeniedException$",
    ()=>AccessDeniedException$,
    "AccessToken$",
    ()=>AccessToken$,
    "CreateOAuth2Token$",
    ()=>CreateOAuth2Token$,
    "CreateOAuth2TokenRequest$",
    ()=>CreateOAuth2TokenRequest$,
    "CreateOAuth2TokenRequestBody$",
    ()=>CreateOAuth2TokenRequestBody$,
    "CreateOAuth2TokenResponse$",
    ()=>CreateOAuth2TokenResponse$,
    "CreateOAuth2TokenResponseBody$",
    ()=>CreateOAuth2TokenResponseBody$,
    "InternalServerException$",
    ()=>InternalServerException$,
    "SigninServiceException$",
    ()=>SigninServiceException$,
    "TooManyRequestsError$",
    ()=>TooManyRequestsError$,
    "ValidationException$",
    ()=>ValidationException$,
    "errorTypeRegistries",
    ()=>errorTypeRegistries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js [app-route] (ecmascript) <locals>");
const _ADE = "AccessDeniedException";
const _AT = "AccessToken";
const _COAT = "CreateOAuth2Token";
const _COATR = "CreateOAuth2TokenRequest";
const _COATRB = "CreateOAuth2TokenRequestBody";
const _COATRBr = "CreateOAuth2TokenResponseBody";
const _COATRr = "CreateOAuth2TokenResponse";
const _ISE = "InternalServerException";
const _RT = "RefreshToken";
const _TMRE = "TooManyRequestsError";
const _VE = "ValidationException";
const _aKI = "accessKeyId";
const _aT = "accessToken";
const _c = "client";
const _cI = "clientId";
const _cV = "codeVerifier";
const _co = "code";
const _e = "error";
const _eI = "expiresIn";
const _gT = "grantType";
const _h = "http";
const _hE = "httpError";
const _iT = "idToken";
const _jN = "jsonName";
const _m = "message";
const _rT = "refreshToken";
const _rU = "redirectUri";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.signin";
const _sAK = "secretAccessKey";
const _sT = "sessionToken";
const _se = "server";
const _tI = "tokenInput";
const _tO = "tokenOutput";
const _tT = "tokenType";
const n0 = "com.amazonaws.signin";
;
;
;
const _s_registry = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeRegistry"].for(_s);
var SigninServiceException$ = [
    -3,
    _s,
    "SigninServiceException",
    0,
    [],
    []
];
_s_registry.registerError(SigninServiceException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninServiceException"]);
const n0_registry = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0);
var AccessDeniedException$ = [
    -3,
    n0,
    _ADE,
    {
        [_e]: _c
    },
    [
        _e,
        _m
    ],
    [
        0,
        0
    ],
    2
];
n0_registry.registerError(AccessDeniedException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccessDeniedException"]);
var InternalServerException$ = [
    -3,
    n0,
    _ISE,
    {
        [_e]: _se,
        [_hE]: 500
    },
    [
        _e,
        _m
    ],
    [
        0,
        0
    ],
    2
];
n0_registry.registerError(InternalServerException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalServerException"]);
var TooManyRequestsError$ = [
    -3,
    n0,
    _TMRE,
    {
        [_e]: _c,
        [_hE]: 429
    },
    [
        _e,
        _m
    ],
    [
        0,
        0
    ],
    2
];
n0_registry.registerError(TooManyRequestsError$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TooManyRequestsError"]);
var ValidationException$ = [
    -3,
    n0,
    _VE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _e,
        _m
    ],
    [
        0,
        0
    ],
    2
];
n0_registry.registerError(ValidationException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationException"]);
const errorTypeRegistries = [
    _s_registry,
    n0_registry
];
var RefreshToken = [
    0,
    n0,
    _RT,
    8,
    0
];
var AccessToken$ = [
    3,
    n0,
    _AT,
    8,
    [
        _aKI,
        _sAK,
        _sT
    ],
    [
        [
            0,
            {
                [_jN]: _aKI
            }
        ],
        [
            0,
            {
                [_jN]: _sAK
            }
        ],
        [
            0,
            {
                [_jN]: _sT
            }
        ]
    ],
    3
];
var CreateOAuth2TokenRequest$ = [
    3,
    n0,
    _COATR,
    0,
    [
        _tI
    ],
    [
        [
            ()=>CreateOAuth2TokenRequestBody$,
            16
        ]
    ],
    1
];
var CreateOAuth2TokenRequestBody$ = [
    3,
    n0,
    _COATRB,
    0,
    [
        _cI,
        _gT,
        _co,
        _rU,
        _cV,
        _rT
    ],
    [
        [
            0,
            {
                [_jN]: _cI
            }
        ],
        [
            0,
            {
                [_jN]: _gT
            }
        ],
        0,
        [
            0,
            {
                [_jN]: _rU
            }
        ],
        [
            0,
            {
                [_jN]: _cV
            }
        ],
        [
            ()=>RefreshToken,
            {
                [_jN]: _rT
            }
        ]
    ],
    2
];
var CreateOAuth2TokenResponse$ = [
    3,
    n0,
    _COATRr,
    0,
    [
        _tO
    ],
    [
        [
            ()=>CreateOAuth2TokenResponseBody$,
            16
        ]
    ],
    1
];
var CreateOAuth2TokenResponseBody$ = [
    3,
    n0,
    _COATRBr,
    0,
    [
        _aT,
        _tT,
        _eI,
        _rT,
        _iT
    ],
    [
        [
            ()=>AccessToken$,
            {
                [_jN]: _aT
            }
        ],
        [
            0,
            {
                [_jN]: _tT
            }
        ],
        [
            1,
            {
                [_jN]: _eI
            }
        ],
        [
            ()=>RefreshToken,
            {
                [_jN]: _rT
            }
        ],
        [
            0,
            {
                [_jN]: _iT
            }
        ]
    ],
    4
];
var CreateOAuth2Token$ = [
    9,
    n0,
    _COAT,
    {
        [_h]: [
            "POST",
            "/v1/token",
            200
        ]
    },
    ()=>CreateOAuth2TokenRequest$,
    ()=>CreateOAuth2TokenResponse$
];
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.shared.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$json$2f$AwsRestJsonProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/url-parser/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-base64/dist-es/fromBase64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-base64/dist-es/toBase64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-utf8/dist-es/toUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/endpointResolver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const getRuntimeConfig = (config)=>{
    return {
        apiVersion: "2023-01-01",
        base64Decoder: config?.base64Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromBase64"],
        base64Encoder: config?.base64Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase64"],
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultEndpointResolver"],
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultSigninHttpAuthSchemeProvider"],
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc)=>ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsSdkSigV4Signer"]()
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc)=>ipc.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoAuthSigner"]()
            }
        ],
        logger: config?.logger ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoOpLogger"](),
        protocol: config?.protocol ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$json$2f$AwsRestJsonProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsRestJsonProtocol"],
        protocolSettings: config?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.signin",
            errorTypeRegistries: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorTypeRegistries"],
            version: "2023-01-01",
            serviceTarget: "Signin"
        },
        serviceId: config?.serviceId ?? "Signin",
        urlParser: config?.urlParser ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUrl"],
        utf8Decoder: config?.utf8Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromUtf8"],
        utf8Encoder: config?.utf8Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toUtf8"]
    };
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$package$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/package.json.[json].cjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$emitWarningIfUnsupportedVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$NODE_AUTH_SCHEME_PREFERENCE_OPTIONS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$defaultUserAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$nodeAppIdConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-user-agent-node/dist-es/nodeAppIdConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseDualstackEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseFipsEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$hash$2d$node$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/hash-node/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-retry/dist-es/configurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/node-config-provider/dist-es/configLoader.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$http$2d$handler$2f$dist$2d$es$2f$node$2d$http$2d$handler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$http$2d$handler$2f$dist$2d$es$2f$stream$2d$collector$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$emitWarningIfUnsupportedVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$defaults$2d$mode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/defaults-mode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$body$2d$length$2d$node$2f$dist$2d$es$2f$calculateBodyLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$defaults$2d$mode$2d$node$2f$dist$2d$es$2f$resolveDefaultsModeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$retry$2f$dist$2d$es$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-retry/dist-es/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.shared.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const getRuntimeConfig = (config)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$emitWarningIfUnsupportedVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emitWarningIfUnsupportedVersion"])(process.version);
    const defaultsMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$defaults$2d$mode$2d$node$2f$dist$2d$es$2f$resolveDefaultsModeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveDefaultsModeConfig"])(config);
    const defaultConfigProvider = ()=>defaultsMode().then(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$defaults$2d$mode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfigsForDefaultMode"]);
    const clientSharedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$emitWarningIfUnsupportedVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emitWarningIfUnsupportedVersion"])(process.version);
    const loaderConfig = {
        profile: config?.profile,
        logger: clientSharedValues.logger
    };
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        authSchemePreference: config?.authSchemePreference ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$NODE_AUTH_SCHEME_PREFERENCE_OPTIONS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_AUTH_SCHEME_PREFERENCE_OPTIONS"], loaderConfig),
        bodyLengthChecker: config?.bodyLengthChecker ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$body$2d$length$2d$node$2f$dist$2d$es$2f$calculateBodyLength$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateBodyLength"],
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$defaultUserAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDefaultUserAgentProvider"])({
            serviceId: clientSharedValues.serviceId,
            clientVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$package$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].version
        }),
        maxAttempts: config?.maxAttempts ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_MAX_ATTEMPT_CONFIG_OPTIONS"], config),
        region: config?.region ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_REGION_CONFIG_OPTIONS"], {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_REGION_CONFIG_FILE_OPTIONS"],
            ...loaderConfig
        }),
        requestHandler: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$http$2d$handler$2f$dist$2d$es$2f$node$2d$http$2d$handler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NodeHttpHandler"].create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_RETRY_MODE_CONFIG_OPTIONS"],
            default: async ()=>(await defaultConfigProvider()).retryMode || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$retry$2f$dist$2d$es$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_RETRY_MODE"]
        }, config),
        sha256: config?.sha256 ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$hash$2d$node$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Hash"].bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$http$2d$handler$2f$dist$2d$es$2f$stream$2d$collector$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamCollector"],
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseDualstackEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS"], loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseFipsEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS"], loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$nodeAppIdConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_APP_ID_CONFIG_OPTIONS"], loaderConfig)
    };
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthExtensionConfiguration.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getHttpAuthExtensionConfiguration",
    ()=>getHttpAuthExtensionConfiguration,
    "resolveHttpAuthRuntimeConfig",
    ()=>resolveHttpAuthRuntimeConfig
]);
const getHttpAuthExtensionConfiguration = (runtimeConfig)=>{
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme (httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme)=>scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            } else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes () {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider (httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider () {
            return _httpAuthSchemeProvider;
        },
        setCredentials (credentials) {
            _credentials = credentials;
        },
        credentials () {
            return _credentials;
        }
    };
};
const resolveHttpAuthRuntimeConfig = (config)=>{
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials()
    };
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeExtensions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveRuntimeExtensions",
    ()=>resolveRuntimeExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthExtensionConfiguration.js [app-route] (ecmascript)");
;
;
;
;
const resolveRuntimeExtensions = (runtimeConfig, extensions)=>{
    const extensionConfiguration = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAwsRegionExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpHandlerExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpAuthExtensionConfiguration"])(runtimeConfig));
    extensions.forEach((extension)=>extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveAwsRegionExtensionConfiguration"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveDefaultRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpHandlerRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpAuthRuntimeConfig"])(extensionConfiguration));
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SigninClient",
    ()=>SigninClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-host-header/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$logger$2f$dist$2d$es$2f$loggerMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$recursion$2d$detection$2f$dist$2d$es$2f$getRecursionDetectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-recursion-detection/dist-es/getRecursionDetectionPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$user$2d$agent$2d$middleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$resolveRegionConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$DefaultIdentityProviderConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$getHttpAuthSchemeEndpointRuleSetPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$signing$2f$getHttpSigningMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$getSchemaSerdePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/middleware/getSchemaSerdePlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$content$2d$length$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-content-length/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$resolveEndpointConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$retryMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-retry/dist-es/configurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/EndpointParameters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$runtimeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$runtimeExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/runtimeExtensions.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
class SigninClient extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"] {
    config;
    constructor(...[configuration]){
        const _config_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$runtimeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveClientEndpointParameters"])(_config_0);
        const _config_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveUserAgentConfig"])(_config_1);
        const _config_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRetryConfig"])(_config_2);
        const _config_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$resolveRegionConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRegionConfig"])(_config_3);
        const _config_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHostHeaderConfig"])(_config_4);
        const _config_6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$resolveEndpointConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveEndpointConfig"])(_config_5);
        const _config_7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpAuthSchemeConfig"])(_config_6);
        const _config_8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$runtimeExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRuntimeExtensions"])(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$getSchemaSerdePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaSerdePlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$user$2d$agent$2d$middleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAgentPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$retryMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRetryPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$content$2d$length$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContentLengthPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHostHeaderPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$logger$2f$dist$2d$es$2f$loggerMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoggerPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$recursion$2d$detection$2f$dist$2d$es$2f$getRecursionDetectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRecursionDetectionPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$getHttpAuthSchemeEndpointRuleSetPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpAuthSchemeEndpointRuleSetPlugin"])(this.config, {
            httpAuthSchemeParametersProvider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultSigninHttpAuthSchemeParametersProvider"],
            identityProviderConfigProvider: async (config)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$DefaultIdentityProviderConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultIdentityProviderConfig"]({
                    "aws.auth#sigv4": config.credentials
                })
        }));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$signing$2f$getHttpSigningMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpSigningPlugin"])(this.config));
    }
    destroy() {
        super.destroy();
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SigninClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$SigninClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninClient"],
    "__Client",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$SigninClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/client.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAggregatedClient",
    ()=>createAggregatedClient
]);
const createAggregatedClient = (commands, Client, options)=>{
    for (const [command, CommandCtor] of Object.entries(commands)){
        const methodImpl = async function(args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            } else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object") throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            } else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
    const { paginators = {}, waiters = {} } = options ?? {};
    for (const [paginatorName, paginatorFn] of Object.entries(paginators)){
        if (Client.prototype[paginatorName] === void 0) {
            Client.prototype[paginatorName] = function(commandInput = {}, paginationConfiguration, ...rest) {
                return paginatorFn({
                    ...paginationConfiguration,
                    client: this
                }, commandInput, ...rest);
            };
        }
    }
    for (const [waiterName, waiterFn] of Object.entries(waiters)){
        if (Client.prototype[waiterName] === void 0) {
            Client.prototype[waiterName] = async function(commandInput = {}, waiterConfiguration, ...rest) {
                let config = waiterConfiguration;
                if (typeof waiterConfiguration === "number") {
                    config = {
                        maxWaitTime: waiterConfiguration
                    };
                }
                return waiterFn({
                    ...config,
                    client: this
                }, commandInput, ...rest);
            };
        }
    }
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateOAuth2TokenCommand",
    ()=>CreateOAuth2TokenCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/command.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/endpoint/EndpointParameters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js [app-route] (ecmascript)");
;
;
;
;
;
class CreateOAuth2TokenCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].classBuilder().ep(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commonParams"]).m(function(Command, cs, config, o) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEndpointPlugin"])(config, Command.getEndpointParameterInstructions())
    ];
}).s("Signin", "CreateOAuth2Token", {}).n("SigninClient", "CreateOAuth2TokenCommand").sc(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2Token$"]).build() {
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/Signin.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Signin",
    ()=>Signin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$create$2d$aggregated$2d$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$CreateOAuth2TokenCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$SigninClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js [app-route] (ecmascript) <locals>");
;
;
;
const commands = {
    CreateOAuth2TokenCommand: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$CreateOAuth2TokenCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CreateOAuth2TokenCommand"]
};
class Signin extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$SigninClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninClient"] {
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$create$2d$aggregated$2d$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAggregatedClient"])(commands, Signin);
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"],
    "CreateOAuth2TokenCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$CreateOAuth2TokenCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CreateOAuth2TokenCommand"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$CreateOAuth2TokenCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/command.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$CreateOAuth2TokenCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$Command"],
    "CreateOAuth2TokenCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$CreateOAuth2TokenCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2TokenCommand"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$CreateOAuth2TokenCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/CreateOAuth2TokenCommand.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/enums.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OAuth2ErrorCode",
    ()=>OAuth2ErrorCode
]);
const OAuth2ErrorCode = {
    AUTHCODE_EXPIRED: "AUTHCODE_EXPIRED",
    INSUFFICIENT_PERMISSIONS: "INSUFFICIENT_PERMISSIONS",
    INVALID_REQUEST: "INVALID_REQUEST",
    SERVER_ERROR: "server_error",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
    USER_CREDENTIALS_CHANGED: "USER_CREDENTIALS_CHANGED"
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/models_0.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$Command"],
    "AccessDeniedException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccessDeniedException"],
    "AccessDeniedException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccessDeniedException$"],
    "AccessToken$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccessToken$"],
    "CreateOAuth2Token$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2Token$"],
    "CreateOAuth2TokenCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2TokenCommand"],
    "CreateOAuth2TokenRequest$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2TokenRequest$"],
    "CreateOAuth2TokenRequestBody$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2TokenRequestBody$"],
    "CreateOAuth2TokenResponse$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2TokenResponse$"],
    "CreateOAuth2TokenResponseBody$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CreateOAuth2TokenResponseBody$"],
    "InternalServerException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalServerException"],
    "InternalServerException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalServerException$"],
    "OAuth2ErrorCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$enums$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OAuth2ErrorCode"],
    "Signin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$Signin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Signin"],
    "SigninClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$SigninClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SigninClient"],
    "SigninServiceException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SigninServiceException"],
    "SigninServiceException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SigninServiceException$"],
    "TooManyRequestsError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TooManyRequestsError"],
    "TooManyRequestsError$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TooManyRequestsError$"],
    "ValidationException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationException"],
    "ValidationException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationException$"],
    "__Client",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$SigninClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__Client"],
    "errorTypeRegistries",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorTypeRegistries"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$SigninClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/SigninClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$Signin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/Signin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/commands/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/schemas/schemas_0.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$enums$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/enums.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$models_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/models_0.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$signin$2f$models$2f$SigninServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/signin/models/SigninServiceException.js [app-route] (ecmascript) <locals>");
}),
];

//# sourceMappingURL=0usa_0mncq-4._.js.map