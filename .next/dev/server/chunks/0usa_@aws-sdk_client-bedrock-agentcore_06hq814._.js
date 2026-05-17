module.exports = [
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultBedrockAgentCoreHttpAuthSchemeParametersProvider",
    ()=>defaultBedrockAgentCoreHttpAuthSchemeParametersProvider,
    "defaultBedrockAgentCoreHttpAuthSchemeProvider",
    ()=>defaultBedrockAgentCoreHttpAuthSchemeProvider,
    "resolveHttpAuthSchemeConfig",
    ()=>resolveHttpAuthSchemeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js [app-route] (ecmascript)");
;
;
const defaultBedrockAgentCoreHttpAuthSchemeParametersProvider = async (config, context, input)=>{
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
            name: "bedrock-agentcore",
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
const defaultBedrockAgentCoreHttpAuthSchemeProvider = (authParameters)=>{
    const options = [];
    switch(authParameters.operation){
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/EndpointParameters.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        defaultSigningName: "bedrock-agentcore"
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/package.json.[json].cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "name": "@aws-sdk/client-bedrock-agentcore",
    "description": "AWS SDK for JavaScript Bedrock Agentcore Client for Node.js, Browser and React Native",
    "version": "3.1038.0",
    "scripts": {
        "build": "concurrently 'yarn:build:types' 'yarn:build:es' && yarn build:cjs",
        "build:cjs": "node ../../scripts/compilation/inline client-bedrock-agentcore",
        "build:es": "tsc -p tsconfig.es.json",
        "build:include:deps": "yarn g:turbo run build -F=\"$npm_package_name\"",
        "build:types": "tsc -p tsconfig.types.json",
        "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
        "clean": "premove dist-cjs dist-es dist-types tsconfig.cjs.tsbuildinfo tsconfig.es.tsbuildinfo tsconfig.types.tsbuildinfo",
        "extract:docs": "api-extractor run --local",
        "generate:client": "node ../../scripts/generate-clients/single-service --solo bedrock-agentcore",
        "test:index": "tsc --noEmit ./test/index-types.ts && node ./test/index-objects.spec.mjs"
    },
    "main": "./dist-cjs/index.js",
    "types": "./dist-types/index.d.ts",
    "module": "./dist-es/index.js",
    "sideEffects": false,
    "dependencies": {
        "@aws-crypto/sha256-browser": "5.2.0",
        "@aws-crypto/sha256-js": "5.2.0",
        "@aws-sdk/core": "^3.974.6",
        "@aws-sdk/credential-provider-node": "^3.972.37",
        "@aws-sdk/middleware-host-header": "^3.972.10",
        "@aws-sdk/middleware-logger": "^3.972.10",
        "@aws-sdk/middleware-recursion-detection": "^3.972.11",
        "@aws-sdk/middleware-user-agent": "^3.972.36",
        "@aws-sdk/region-config-resolver": "^3.972.13",
        "@aws-sdk/types": "^3.973.8",
        "@aws-sdk/util-endpoints": "^3.996.8",
        "@aws-sdk/util-user-agent-browser": "^3.972.10",
        "@aws-sdk/util-user-agent-node": "^3.973.22",
        "@smithy/config-resolver": "^4.4.17",
        "@smithy/core": "^3.23.17",
        "@smithy/eventstream-serde-browser": "^4.2.14",
        "@smithy/eventstream-serde-config-resolver": "^4.3.14",
        "@smithy/eventstream-serde-node": "^4.2.14",
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
        "@smithy/util-stream": "^4.5.25",
        "@smithy/util-utf8": "^4.2.2",
        "tslib": "^2.6.2"
    },
    "devDependencies": {
        "@tsconfig/node20": "20.1.8",
        "@types/node": "^20.14.8",
        "concurrently": "7.0.0",
        "downlevel-dts": "0.10.1",
        "premove": "4.0.0",
        "typescript": "~5.8.3"
    },
    "engines": {
        "node": ">=20.0.0"
    },
    "typesVersions": {
        "<4.5": {
            "dist-types/*": [
                "dist-types/ts3.4/*"
            ]
        }
    },
    "files": [
        "dist-*/**"
    ],
    "author": {
        "name": "AWS SDK for JavaScript Team",
        "url": "https://aws.amazon.com/javascript/"
    },
    "license": "Apache-2.0",
    "browser": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
    },
    "react-native": {
        "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
    },
    "homepage": "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-bedrock-agentcore",
    "repository": {
        "type": "git",
        "url": "https://github.com/aws/aws-sdk-js-v3.git",
        "directory": "clients/client-bedrock-agentcore"
    }
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/bdd.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bdd",
    ()=>bdd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$bdd$2f$BinaryDecisionDiagram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-endpoints/dist-es/bdd/BinaryDecisionDiagram.js [app-route] (ecmascript)");
;
const k = "ref";
const a = -1, b = true, c = "isSet", d = "PartitionResult", e = "booleanEquals", f = "getAttr", g = {
    [k]: "Endpoint"
}, h = {
    [k]: d
}, i = {}, j = [
    {
        [k]: "Region"
    }
];
const _data = {
    conditions: [
        [
            c,
            [
                g
            ]
        ],
        [
            c,
            j
        ],
        [
            "aws.partition",
            j,
            d
        ],
        [
            e,
            [
                {
                    [k]: "UseFIPS"
                },
                b
            ]
        ],
        [
            e,
            [
                {
                    [k]: "UseDualStack"
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
                        h,
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
                        h,
                        "supportsFIPS"
                    ]
                },
                b
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
            g,
            i
        ],
        [
            "https://bedrock-agentcore-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
            i
        ],
        [
            a,
            "FIPS and DualStack are enabled, but this partition does not support one or both"
        ],
        [
            "https://bedrock-agentcore-fips.{Region}.{PartitionResult#dnsSuffix}",
            i
        ],
        [
            a,
            "FIPS is enabled but this partition does not support FIPS"
        ],
        [
            "https://bedrock-agentcore.{Region}.{PartitionResult#dualStackDnsSuffix}",
            i
        ],
        [
            a,
            "DualStack is enabled but this partition does not support DualStack"
        ],
        [
            "https://bedrock-agentcore.{Region}.{PartitionResult#dnsSuffix}",
            i
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
    12,
    3,
    1,
    4,
    r + 11,
    2,
    5,
    r + 11,
    3,
    8,
    6,
    4,
    7,
    r + 10,
    5,
    r + 8,
    r + 9,
    4,
    10,
    9,
    6,
    r + 6,
    r + 7,
    5,
    11,
    r + 5,
    6,
    r + 4,
    r + 5,
    3,
    r + 1,
    13,
    4,
    r + 2,
    r + 3
]);
const bdd = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$bdd$2f$BinaryDecisionDiagram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryDecisionDiagram"].from(nodes, root, _data.conditions, _data.results);
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/endpointResolver.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$bdd$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/bdd.js [app-route] (ecmascript)");
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
    return cache.get(endpointParams, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$decideEndpoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decideEndpoint"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$bdd$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bdd"], {
            endpointParams: endpointParams,
            logger: context.logger
        }));
};
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$utils$2f$customEndpointFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["customEndpointFunctions"].aws = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$aws$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["awsEndpointFunctions"];
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/models/BedrockAgentCoreServiceException.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BedrockAgentCoreServiceException",
    ()=>BedrockAgentCoreServiceException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/exceptions.js [app-route] (ecmascript)");
;
;
class BedrockAgentCoreServiceException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ServiceException"] {
    constructor(options){
        super(options);
        Object.setPrototypeOf(this, BedrockAgentCoreServiceException.prototype);
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/models/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccessDeniedException",
    ()=>AccessDeniedException,
    "ConflictException",
    ()=>ConflictException,
    "DuplicateIdException",
    ()=>DuplicateIdException,
    "InternalServerException",
    ()=>InternalServerException,
    "InvalidInputException",
    ()=>InvalidInputException,
    "ResourceNotFoundException",
    ()=>ResourceNotFoundException,
    "RetryableConflictException",
    ()=>RetryableConflictException,
    "RuntimeClientError",
    ()=>RuntimeClientError,
    "ServiceException",
    ()=>ServiceException,
    "ServiceQuotaExceededException",
    ()=>ServiceQuotaExceededException,
    "ThrottledException",
    ()=>ThrottledException,
    "ThrottlingException",
    ()=>ThrottlingException,
    "UnauthorizedException",
    ()=>UnauthorizedException,
    "ValidationException",
    ()=>ValidationException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/models/BedrockAgentCoreServiceException.js [app-route] (ecmascript) <locals>");
;
class AccessDeniedException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts){
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
class InternalServerException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "InternalServerException";
    $fault = "server";
    constructor(opts){
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts
        });
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
class ResourceNotFoundException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class RuntimeClientError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "RuntimeClientError";
    $fault = "client";
    constructor(opts){
        super({
            name: "RuntimeClientError",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, RuntimeClientError.prototype);
    }
}
class ServiceQuotaExceededException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    }
}
class ThrottlingException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "ThrottlingException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ThrottlingException.prototype);
    }
}
class ValidationException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "ValidationException";
    $fault = "client";
    reason;
    fieldList;
    constructor(opts){
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
        this.reason = opts.reason;
        this.fieldList = opts.fieldList;
    }
}
class ConflictException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "ConflictException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
    }
}
class UnauthorizedException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "UnauthorizedException";
    $fault = "client";
    constructor(opts){
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
class DuplicateIdException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "DuplicateIdException";
    $fault = "client";
    constructor(opts){
        super({
            name: "DuplicateIdException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, DuplicateIdException.prototype);
    }
}
class ServiceException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "ServiceException";
    $fault = "server";
    constructor(opts){
        super({
            name: "ServiceException",
            $fault: "server",
            ...opts
        });
        Object.setPrototypeOf(this, ServiceException.prototype);
    }
}
class ThrottledException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "ThrottledException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ThrottledException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ThrottledException.prototype);
    }
}
class InvalidInputException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "InvalidInputException";
    $fault = "client";
    constructor(opts){
        super({
            name: "InvalidInputException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, InvalidInputException.prototype);
    }
}
class RetryableConflictException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"] {
    name = "RetryableConflictException";
    $fault = "client";
    $retryable = {};
    constructor(opts){
        super({
            name: "RetryableConflictException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, RetryableConflictException.prototype);
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/schemas/schemas_0.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A2aDescriptor$",
    ()=>A2aDescriptor$,
    "AccessDeniedException$",
    ()=>AccessDeniedException$,
    "ActorSummary$",
    ()=>ActorSummary$,
    "AgentCardDefinition$",
    ()=>AgentCardDefinition$,
    "AgentSkillsDescriptor$",
    ()=>AgentSkillsDescriptor$,
    "AutomationStream$",
    ()=>AutomationStream$,
    "AutomationStreamUpdate$",
    ()=>AutomationStreamUpdate$,
    "BasicAuth$",
    ()=>BasicAuth$,
    "BatchCreateMemoryRecords$",
    ()=>BatchCreateMemoryRecords$,
    "BatchCreateMemoryRecordsInput$",
    ()=>BatchCreateMemoryRecordsInput$,
    "BatchCreateMemoryRecordsOutput$",
    ()=>BatchCreateMemoryRecordsOutput$,
    "BatchDeleteMemoryRecords$",
    ()=>BatchDeleteMemoryRecords$,
    "BatchDeleteMemoryRecordsInput$",
    ()=>BatchDeleteMemoryRecordsInput$,
    "BatchDeleteMemoryRecordsOutput$",
    ()=>BatchDeleteMemoryRecordsOutput$,
    "BatchUpdateMemoryRecords$",
    ()=>BatchUpdateMemoryRecords$,
    "BatchUpdateMemoryRecordsInput$",
    ()=>BatchUpdateMemoryRecordsInput$,
    "BatchUpdateMemoryRecordsOutput$",
    ()=>BatchUpdateMemoryRecordsOutput$,
    "BedrockAgentCoreServiceException$",
    ()=>BedrockAgentCoreServiceException$,
    "Branch$",
    ()=>Branch$,
    "BranchFilter$",
    ()=>BranchFilter$,
    "BrowserAction$",
    ()=>BrowserAction$,
    "BrowserActionResult$",
    ()=>BrowserActionResult$,
    "BrowserEnterprisePolicy$",
    ()=>BrowserEnterprisePolicy$,
    "BrowserExtension$",
    ()=>BrowserExtension$,
    "BrowserProfileConfiguration$",
    ()=>BrowserProfileConfiguration$,
    "BrowserSessionStream$",
    ()=>BrowserSessionStream$,
    "BrowserSessionSummary$",
    ()=>BrowserSessionSummary$,
    "Certificate$",
    ()=>Certificate$,
    "CertificateLocation$",
    ()=>CertificateLocation$,
    "CodeInterpreterResult$",
    ()=>CodeInterpreterResult$,
    "CodeInterpreterSessionSummary$",
    ()=>CodeInterpreterSessionSummary$,
    "CodeInterpreterStreamOutput$",
    ()=>CodeInterpreterStreamOutput$,
    "CompleteResourceTokenAuth$",
    ()=>CompleteResourceTokenAuth$,
    "CompleteResourceTokenAuthRequest$",
    ()=>CompleteResourceTokenAuthRequest$,
    "CompleteResourceTokenAuthResponse$",
    ()=>CompleteResourceTokenAuthResponse$,
    "ConflictException$",
    ()=>ConflictException$,
    "Content$",
    ()=>Content$,
    "ContentBlock$",
    ()=>ContentBlock$,
    "ContentDeltaEvent$",
    ()=>ContentDeltaEvent$,
    "ContentStartEvent$",
    ()=>ContentStartEvent$,
    "ContentStopEvent$",
    ()=>ContentStopEvent$,
    "Context$",
    ()=>Context$,
    "Conversational$",
    ()=>Conversational$,
    "CreateEvent$",
    ()=>CreateEvent$,
    "CreateEventInput$",
    ()=>CreateEventInput$,
    "CreateEventOutput$",
    ()=>CreateEventOutput$,
    "CustomDescriptor$",
    ()=>CustomDescriptor$,
    "DeleteEvent$",
    ()=>DeleteEvent$,
    "DeleteEventInput$",
    ()=>DeleteEventInput$,
    "DeleteEventOutput$",
    ()=>DeleteEventOutput$,
    "DeleteMemoryRecord$",
    ()=>DeleteMemoryRecord$,
    "DeleteMemoryRecordInput$",
    ()=>DeleteMemoryRecordInput$,
    "DeleteMemoryRecordOutput$",
    ()=>DeleteMemoryRecordOutput$,
    "Descriptors$",
    ()=>Descriptors$,
    "DuplicateIdException$",
    ()=>DuplicateIdException$,
    "Evaluate$",
    ()=>Evaluate$,
    "EvaluateRequest$",
    ()=>EvaluateRequest$,
    "EvaluateResponse$",
    ()=>EvaluateResponse$,
    "EvaluationContent$",
    ()=>EvaluationContent$,
    "EvaluationExpectedTrajectory$",
    ()=>EvaluationExpectedTrajectory$,
    "EvaluationInput$",
    ()=>EvaluationInput$,
    "EvaluationReferenceInput$",
    ()=>EvaluationReferenceInput$,
    "EvaluationResultContent$",
    ()=>EvaluationResultContent$,
    "EvaluationTarget$",
    ()=>EvaluationTarget$,
    "Event$",
    ()=>Event$,
    "EventMetadataFilterExpression$",
    ()=>EventMetadataFilterExpression$,
    "ExternalProxy$",
    ()=>ExternalProxy$,
    "ExtractionJob$",
    ()=>ExtractionJob$,
    "ExtractionJobFilterInput$",
    ()=>ExtractionJobFilterInput$,
    "ExtractionJobMessages$",
    ()=>ExtractionJobMessages$,
    "ExtractionJobMetadata$",
    ()=>ExtractionJobMetadata$,
    "FilterInput$",
    ()=>FilterInput$,
    "GetAgentCard$",
    ()=>GetAgentCard$,
    "GetAgentCardRequest$",
    ()=>GetAgentCardRequest$,
    "GetAgentCardResponse$",
    ()=>GetAgentCardResponse$,
    "GetBrowserSession$",
    ()=>GetBrowserSession$,
    "GetBrowserSessionRequest$",
    ()=>GetBrowserSessionRequest$,
    "GetBrowserSessionResponse$",
    ()=>GetBrowserSessionResponse$,
    "GetCodeInterpreterSession$",
    ()=>GetCodeInterpreterSession$,
    "GetCodeInterpreterSessionRequest$",
    ()=>GetCodeInterpreterSessionRequest$,
    "GetCodeInterpreterSessionResponse$",
    ()=>GetCodeInterpreterSessionResponse$,
    "GetEvent$",
    ()=>GetEvent$,
    "GetEventInput$",
    ()=>GetEventInput$,
    "GetEventOutput$",
    ()=>GetEventOutput$,
    "GetMemoryRecord$",
    ()=>GetMemoryRecord$,
    "GetMemoryRecordInput$",
    ()=>GetMemoryRecordInput$,
    "GetMemoryRecordOutput$",
    ()=>GetMemoryRecordOutput$,
    "GetResourceApiKey$",
    ()=>GetResourceApiKey$,
    "GetResourceApiKeyRequest$",
    ()=>GetResourceApiKeyRequest$,
    "GetResourceApiKeyResponse$",
    ()=>GetResourceApiKeyResponse$,
    "GetResourceOauth2Token$",
    ()=>GetResourceOauth2Token$,
    "GetResourceOauth2TokenRequest$",
    ()=>GetResourceOauth2TokenRequest$,
    "GetResourceOauth2TokenResponse$",
    ()=>GetResourceOauth2TokenResponse$,
    "GetWorkloadAccessToken$",
    ()=>GetWorkloadAccessToken$,
    "GetWorkloadAccessTokenForJWT$",
    ()=>GetWorkloadAccessTokenForJWT$,
    "GetWorkloadAccessTokenForJWTRequest$",
    ()=>GetWorkloadAccessTokenForJWTRequest$,
    "GetWorkloadAccessTokenForJWTResponse$",
    ()=>GetWorkloadAccessTokenForJWTResponse$,
    "GetWorkloadAccessTokenForUserId$",
    ()=>GetWorkloadAccessTokenForUserId$,
    "GetWorkloadAccessTokenForUserIdRequest$",
    ()=>GetWorkloadAccessTokenForUserIdRequest$,
    "GetWorkloadAccessTokenForUserIdResponse$",
    ()=>GetWorkloadAccessTokenForUserIdResponse$,
    "GetWorkloadAccessTokenRequest$",
    ()=>GetWorkloadAccessTokenRequest$,
    "GetWorkloadAccessTokenResponse$",
    ()=>GetWorkloadAccessTokenResponse$,
    "HarnessAgentCoreBrowserConfig$",
    ()=>HarnessAgentCoreBrowserConfig$,
    "HarnessAgentCoreCodeInterpreterConfig$",
    ()=>HarnessAgentCoreCodeInterpreterConfig$,
    "HarnessAgentCoreGatewayConfig$",
    ()=>HarnessAgentCoreGatewayConfig$,
    "HarnessBedrockModelConfig$",
    ()=>HarnessBedrockModelConfig$,
    "HarnessContentBlock$",
    ()=>HarnessContentBlock$,
    "HarnessContentBlockDelta$",
    ()=>HarnessContentBlockDelta$,
    "HarnessContentBlockDeltaEvent$",
    ()=>HarnessContentBlockDeltaEvent$,
    "HarnessContentBlockStart$",
    ()=>HarnessContentBlockStart$,
    "HarnessContentBlockStartEvent$",
    ()=>HarnessContentBlockStartEvent$,
    "HarnessContentBlockStopEvent$",
    ()=>HarnessContentBlockStopEvent$,
    "HarnessGatewayOutboundAuth$",
    ()=>HarnessGatewayOutboundAuth$,
    "HarnessGeminiModelConfig$",
    ()=>HarnessGeminiModelConfig$,
    "HarnessInlineFunctionConfig$",
    ()=>HarnessInlineFunctionConfig$,
    "HarnessMessage$",
    ()=>HarnessMessage$,
    "HarnessMessageStartEvent$",
    ()=>HarnessMessageStartEvent$,
    "HarnessMessageStopEvent$",
    ()=>HarnessMessageStopEvent$,
    "HarnessMetadataEvent$",
    ()=>HarnessMetadataEvent$,
    "HarnessModelConfiguration$",
    ()=>HarnessModelConfiguration$,
    "HarnessOpenAiModelConfig$",
    ()=>HarnessOpenAiModelConfig$,
    "HarnessReasoningContentBlock$",
    ()=>HarnessReasoningContentBlock$,
    "HarnessReasoningContentBlockDelta$",
    ()=>HarnessReasoningContentBlockDelta$,
    "HarnessReasoningTextBlock$",
    ()=>HarnessReasoningTextBlock$,
    "HarnessRemoteMcpConfig$",
    ()=>HarnessRemoteMcpConfig$,
    "HarnessSkill$",
    ()=>HarnessSkill$,
    "HarnessStreamMetrics$",
    ()=>HarnessStreamMetrics$,
    "HarnessSystemContentBlock$",
    ()=>HarnessSystemContentBlock$,
    "HarnessTokenUsage$",
    ()=>HarnessTokenUsage$,
    "HarnessTool$",
    ()=>HarnessTool$,
    "HarnessToolConfiguration$",
    ()=>HarnessToolConfiguration$,
    "HarnessToolResultBlock$",
    ()=>HarnessToolResultBlock$,
    "HarnessToolResultBlockDelta$",
    ()=>HarnessToolResultBlockDelta$,
    "HarnessToolResultBlockStart$",
    ()=>HarnessToolResultBlockStart$,
    "HarnessToolResultContentBlock$",
    ()=>HarnessToolResultContentBlock$,
    "HarnessToolUseBlock$",
    ()=>HarnessToolUseBlock$,
    "HarnessToolUseBlockDelta$",
    ()=>HarnessToolUseBlockDelta$,
    "HarnessToolUseBlockStart$",
    ()=>HarnessToolUseBlockStart$,
    "InputContentBlock$",
    ()=>InputContentBlock$,
    "InternalServerException$",
    ()=>InternalServerException$,
    "InvalidInputException$",
    ()=>InvalidInputException$,
    "InvokeAgentRuntime$",
    ()=>InvokeAgentRuntime$,
    "InvokeAgentRuntimeCommand$",
    ()=>InvokeAgentRuntimeCommand$,
    "InvokeAgentRuntimeCommandRequest$",
    ()=>InvokeAgentRuntimeCommandRequest$,
    "InvokeAgentRuntimeCommandRequestBody$",
    ()=>InvokeAgentRuntimeCommandRequestBody$,
    "InvokeAgentRuntimeCommandResponse$",
    ()=>InvokeAgentRuntimeCommandResponse$,
    "InvokeAgentRuntimeCommandStreamOutput$",
    ()=>InvokeAgentRuntimeCommandStreamOutput$,
    "InvokeAgentRuntimeRequest$",
    ()=>InvokeAgentRuntimeRequest$,
    "InvokeAgentRuntimeResponse$",
    ()=>InvokeAgentRuntimeResponse$,
    "InvokeBrowser$",
    ()=>InvokeBrowser$,
    "InvokeBrowserRequest$",
    ()=>InvokeBrowserRequest$,
    "InvokeBrowserResponse$",
    ()=>InvokeBrowserResponse$,
    "InvokeCodeInterpreter$",
    ()=>InvokeCodeInterpreter$,
    "InvokeCodeInterpreterRequest$",
    ()=>InvokeCodeInterpreterRequest$,
    "InvokeCodeInterpreterResponse$",
    ()=>InvokeCodeInterpreterResponse$,
    "InvokeHarness$",
    ()=>InvokeHarness$,
    "InvokeHarnessRequest$",
    ()=>InvokeHarnessRequest$,
    "InvokeHarnessResponse$",
    ()=>InvokeHarnessResponse$,
    "InvokeHarnessStreamOutput$",
    ()=>InvokeHarnessStreamOutput$,
    "KeyPressArguments$",
    ()=>KeyPressArguments$,
    "KeyPressResult$",
    ()=>KeyPressResult$,
    "KeyShortcutArguments$",
    ()=>KeyShortcutArguments$,
    "KeyShortcutResult$",
    ()=>KeyShortcutResult$,
    "KeyTypeArguments$",
    ()=>KeyTypeArguments$,
    "KeyTypeResult$",
    ()=>KeyTypeResult$,
    "LeftExpression$",
    ()=>LeftExpression$,
    "ListActors$",
    ()=>ListActors$,
    "ListActorsInput$",
    ()=>ListActorsInput$,
    "ListActorsOutput$",
    ()=>ListActorsOutput$,
    "ListBrowserSessions$",
    ()=>ListBrowserSessions$,
    "ListBrowserSessionsRequest$",
    ()=>ListBrowserSessionsRequest$,
    "ListBrowserSessionsResponse$",
    ()=>ListBrowserSessionsResponse$,
    "ListCodeInterpreterSessions$",
    ()=>ListCodeInterpreterSessions$,
    "ListCodeInterpreterSessionsRequest$",
    ()=>ListCodeInterpreterSessionsRequest$,
    "ListCodeInterpreterSessionsResponse$",
    ()=>ListCodeInterpreterSessionsResponse$,
    "ListEvents$",
    ()=>ListEvents$,
    "ListEventsInput$",
    ()=>ListEventsInput$,
    "ListEventsOutput$",
    ()=>ListEventsOutput$,
    "ListMemoryExtractionJobs$",
    ()=>ListMemoryExtractionJobs$,
    "ListMemoryExtractionJobsInput$",
    ()=>ListMemoryExtractionJobsInput$,
    "ListMemoryExtractionJobsOutput$",
    ()=>ListMemoryExtractionJobsOutput$,
    "ListMemoryRecords$",
    ()=>ListMemoryRecords$,
    "ListMemoryRecordsInput$",
    ()=>ListMemoryRecordsInput$,
    "ListMemoryRecordsOutput$",
    ()=>ListMemoryRecordsOutput$,
    "ListSessions$",
    ()=>ListSessions$,
    "ListSessionsInput$",
    ()=>ListSessionsInput$,
    "ListSessionsOutput$",
    ()=>ListSessionsOutput$,
    "LiveViewStream$",
    ()=>LiveViewStream$,
    "McpDescriptor$",
    ()=>McpDescriptor$,
    "MemoryContent$",
    ()=>MemoryContent$,
    "MemoryMetadataFilterExpression$",
    ()=>MemoryMetadataFilterExpression$,
    "MemoryRecord$",
    ()=>MemoryRecord$,
    "MemoryRecordCreateInput$",
    ()=>MemoryRecordCreateInput$,
    "MemoryRecordDeleteInput$",
    ()=>MemoryRecordDeleteInput$,
    "MemoryRecordOutput$",
    ()=>MemoryRecordOutput$,
    "MemoryRecordSummary$",
    ()=>MemoryRecordSummary$,
    "MemoryRecordUpdateInput$",
    ()=>MemoryRecordUpdateInput$,
    "MessageMetadata$",
    ()=>MessageMetadata$,
    "MetadataValue$",
    ()=>MetadataValue$,
    "MouseClickArguments$",
    ()=>MouseClickArguments$,
    "MouseClickResult$",
    ()=>MouseClickResult$,
    "MouseDragArguments$",
    ()=>MouseDragArguments$,
    "MouseDragResult$",
    ()=>MouseDragResult$,
    "MouseMoveArguments$",
    ()=>MouseMoveArguments$,
    "MouseMoveResult$",
    ()=>MouseMoveResult$,
    "MouseScrollArguments$",
    ()=>MouseScrollArguments$,
    "MouseScrollResult$",
    ()=>MouseScrollResult$,
    "OAuthCredentialProvider$",
    ()=>OAuthCredentialProvider$,
    "PayloadType$",
    ()=>PayloadType$,
    "Proxy$",
    ()=>Proxy$,
    "ProxyBypass$",
    ()=>ProxyBypass$,
    "ProxyConfiguration$",
    ()=>ProxyConfiguration$,
    "ProxyCredentials$",
    ()=>ProxyCredentials$,
    "RegistryRecordSummary$",
    ()=>RegistryRecordSummary$,
    "ResourceContent$",
    ()=>ResourceContent$,
    "ResourceLocation$",
    ()=>ResourceLocation$,
    "ResourceNotFoundException$",
    ()=>ResourceNotFoundException$,
    "ResponseChunk$",
    ()=>ResponseChunk$,
    "RetrieveMemoryRecords$",
    ()=>RetrieveMemoryRecords$,
    "RetrieveMemoryRecordsInput$",
    ()=>RetrieveMemoryRecordsInput$,
    "RetrieveMemoryRecordsOutput$",
    ()=>RetrieveMemoryRecordsOutput$,
    "RetryableConflictException$",
    ()=>RetryableConflictException$,
    "RightExpression$",
    ()=>RightExpression$,
    "RuntimeClientError$",
    ()=>RuntimeClientError$,
    "S3Location$",
    ()=>S3Location$,
    "SaveBrowserSessionProfile$",
    ()=>SaveBrowserSessionProfile$,
    "SaveBrowserSessionProfileRequest$",
    ()=>SaveBrowserSessionProfileRequest$,
    "SaveBrowserSessionProfileResponse$",
    ()=>SaveBrowserSessionProfileResponse$,
    "ScreenshotArguments$",
    ()=>ScreenshotArguments$,
    "ScreenshotResult$",
    ()=>ScreenshotResult$,
    "SearchCriteria$",
    ()=>SearchCriteria$,
    "SearchRegistryRecords$",
    ()=>SearchRegistryRecords$,
    "SearchRegistryRecordsRequest$",
    ()=>SearchRegistryRecordsRequest$,
    "SearchRegistryRecordsResponse$",
    ()=>SearchRegistryRecordsResponse$,
    "SecretsManagerLocation$",
    ()=>SecretsManagerLocation$,
    "ServerDefinition$",
    ()=>ServerDefinition$,
    "ServiceException$",
    ()=>ServiceException$,
    "ServiceQuotaExceededException$",
    ()=>ServiceQuotaExceededException$,
    "SessionFilter$",
    ()=>SessionFilter$,
    "SessionSummary$",
    ()=>SessionSummary$,
    "SkillDefinition$",
    ()=>SkillDefinition$,
    "SkillMdDefinition$",
    ()=>SkillMdDefinition$,
    "SpanContext$",
    ()=>SpanContext$,
    "StartBrowserSession$",
    ()=>StartBrowserSession$,
    "StartBrowserSessionRequest$",
    ()=>StartBrowserSessionRequest$,
    "StartBrowserSessionResponse$",
    ()=>StartBrowserSessionResponse$,
    "StartCodeInterpreterSession$",
    ()=>StartCodeInterpreterSession$,
    "StartCodeInterpreterSessionRequest$",
    ()=>StartCodeInterpreterSessionRequest$,
    "StartCodeInterpreterSessionResponse$",
    ()=>StartCodeInterpreterSessionResponse$,
    "StartMemoryExtractionJob$",
    ()=>StartMemoryExtractionJob$,
    "StartMemoryExtractionJobInput$",
    ()=>StartMemoryExtractionJobInput$,
    "StartMemoryExtractionJobOutput$",
    ()=>StartMemoryExtractionJobOutput$,
    "StopBrowserSession$",
    ()=>StopBrowserSession$,
    "StopBrowserSessionRequest$",
    ()=>StopBrowserSessionRequest$,
    "StopBrowserSessionResponse$",
    ()=>StopBrowserSessionResponse$,
    "StopCodeInterpreterSession$",
    ()=>StopCodeInterpreterSession$,
    "StopCodeInterpreterSessionRequest$",
    ()=>StopCodeInterpreterSessionRequest$,
    "StopCodeInterpreterSessionResponse$",
    ()=>StopCodeInterpreterSessionResponse$,
    "StopRuntimeSession$",
    ()=>StopRuntimeSession$,
    "StopRuntimeSessionRequest$",
    ()=>StopRuntimeSessionRequest$,
    "StopRuntimeSessionResponse$",
    ()=>StopRuntimeSessionResponse$,
    "StreamUpdate$",
    ()=>StreamUpdate$,
    "ThrottledException$",
    ()=>ThrottledException$,
    "ThrottlingException$",
    ()=>ThrottlingException$,
    "TokenUsage$",
    ()=>TokenUsage$,
    "ToolArguments$",
    ()=>ToolArguments$,
    "ToolResultStructuredContent$",
    ()=>ToolResultStructuredContent$,
    "ToolsDefinition$",
    ()=>ToolsDefinition$,
    "UnauthorizedException$",
    ()=>UnauthorizedException$,
    "UpdateBrowserStream$",
    ()=>UpdateBrowserStream$,
    "UpdateBrowserStreamRequest$",
    ()=>UpdateBrowserStreamRequest$,
    "UpdateBrowserStreamResponse$",
    ()=>UpdateBrowserStreamResponse$,
    "UserIdentifier$",
    ()=>UserIdentifier$,
    "ValidationException$",
    ()=>ValidationException$,
    "ValidationExceptionField$",
    ()=>ValidationExceptionField$,
    "ViewPort$",
    ()=>ViewPort$,
    "errorTypeRegistries",
    ()=>errorTypeRegistries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/models/BedrockAgentCoreServiceException.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/models/errors.js [app-route] (ecmascript)");
const _A = "Accept";
const _ACD = "AgentCardDefinition";
const _AD = "A2aDescriptor";
const _ADE = "AccessDeniedException";
const _AKT = "ApiKeyType";
const _AS = "ActorSummary";
const _ASD = "AgentSkillsDescriptor";
const _ASL = "ActorSummaryList";
const _ASU = "AutomationStreamUpdate";
const _ASu = "AutomationStream";
const _ATT = "AccessTokenType";
const _AUT = "AuthorizationUrlType";
const _B = "Body";
const _BA = "BasicAuth";
const _BAR = "BrowserActionResult";
const _BAr = "BrowserAction";
const _BCMR = "BatchCreateMemoryRecords";
const _BCMRI = "BatchCreateMemoryRecordsInput";
const _BCMRO = "BatchCreateMemoryRecordsOutput";
const _BDMR = "BatchDeleteMemoryRecords";
const _BDMRI = "BatchDeleteMemoryRecordsInput";
const _BDMRO = "BatchDeleteMemoryRecordsOutput";
const _BE = "BrowserExtension";
const _BEP = "BrowserEnterprisePolicy";
const _BEPr = "BrowserEnterprisePolicies";
const _BEr = "BrowserExtensions";
const _BF = "BranchFilter";
const _BPC = "BrowserProfileConfiguration";
const _BSS = "BrowserSessionStream";
const _BSSr = "BrowserSessionSummary";
const _BSSro = "BrowserSessionSummaries";
const _BUMR = "BatchUpdateMemoryRecords";
const _BUMRI = "BatchUpdateMemoryRecordsInput";
const _BUMRO = "BatchUpdateMemoryRecordsOutput";
const _Br = "Branch";
const _C = "Certificate";
const _CB = "ContentBlock";
const _CBL = "ContentBlockList";
const _CD = "CustomDescriptor";
const _CDE = "ContentDeltaEvent";
const _CE = "ConflictException";
const _CEI = "CreateEventInput";
const _CEO = "CreateEventOutput";
const _CEr = "CreateEvent";
const _CIR = "CodeInterpreterResult";
const _CISO = "CodeInterpreterStreamOutput";
const _CISS = "CodeInterpreterSessionSummary";
const _CISSo = "CodeInterpreterSessionSummaries";
const _CL = "CertificateLocation";
const _CRPT = "CustomRequestParametersType";
const _CRTA = "CompleteResourceTokenAuth";
const _CRTAR = "CompleteResourceTokenAuthRequest";
const _CRTARo = "CompleteResourceTokenAuthResponse";
const _CRVT = "CustomRequestValueType";
const _CSE = "ContentStartEvent";
const _CSEo = "ContentStopEvent";
const _CT = "Content-Type";
const _Ce = "Certificates";
const _Co = "Conversational";
const _Con = "Content";
const _Cont = "Context";
const _D = "Description";
const _DE = "DeleteEvent";
const _DEI = "DeleteEventInput";
const _DEO = "DeleteEventOutput";
const _DIE = "DuplicateIdException";
const _DMR = "DeleteMemoryRecord";
const _DMRI = "DeleteMemoryRecordInput";
const _DMRO = "DeleteMemoryRecordOutput";
const _De = "Descriptors";
const _Do = "Document";
const _E = "Event";
const _EC = "EvaluationContent";
const _ECL = "EvaluationContentList";
const _EE = "EvaluationExplanation";
const _EET = "EvaluationExpectedTrajectory";
const _EI = "EvaluationInput";
const _EJ = "ExtractionJob";
const _EJFI = "ExtractionJobFilterInput";
const _EJM = "ExtractionJobMetadata";
const _EJML = "ExtractionJobMetadataList";
const _EJMx = "ExtractionJobMessages";
const _EL = "EventList";
const _EMFE = "EventMetadataFilterExpression";
const _EMFL = "EventMetadataFilterList";
const _EP = "ExternalProxy";
const _ER = "EvaluateRequest";
const _ERC = "EvaluationResultContent";
const _ERI = "EvaluationReferenceInput";
const _ERIv = "EvaluationReferenceInputs";
const _ERv = "EvaluateResponse";
const _ERva = "EvaluationResults";
const _ET = "EvaluationTarget";
const _Ev = "Evaluate";
const _FI = "FilterInput";
const _GAC = "GetAgentCard";
const _GACR = "GetAgentCardRequest";
const _GACRe = "GetAgentCardResponse";
const _GBS = "GetBrowserSession";
const _GBSR = "GetBrowserSessionRequest";
const _GBSRe = "GetBrowserSessionResponse";
const _GCIS = "GetCodeInterpreterSession";
const _GCISR = "GetCodeInterpreterSessionRequest";
const _GCISRe = "GetCodeInterpreterSessionResponse";
const _GE = "GetEvent";
const _GEI = "GetEventInput";
const _GEO = "GetEventOutput";
const _GMR = "GetMemoryRecord";
const _GMRI = "GetMemoryRecordInput";
const _GMRO = "GetMemoryRecordOutput";
const _GRAK = "GetResourceApiKey";
const _GRAKR = "GetResourceApiKeyRequest";
const _GRAKRe = "GetResourceApiKeyResponse";
const _GROT = "GetResourceOauth2Token";
const _GROTR = "GetResourceOauth2TokenRequest";
const _GROTRe = "GetResourceOauth2TokenResponse";
const _GWAT = "GetWorkloadAccessToken";
const _GWATFJWT = "GetWorkloadAccessTokenForJWT";
const _GWATFJWTR = "GetWorkloadAccessTokenForJWTRequest";
const _GWATFJWTRe = "GetWorkloadAccessTokenForJWTResponse";
const _GWATFUI = "GetWorkloadAccessTokenForUserId";
const _GWATFUIR = "GetWorkloadAccessTokenForUserIdRequest";
const _GWATFUIRe = "GetWorkloadAccessTokenForUserIdResponse";
const _GWATR = "GetWorkloadAccessTokenRequest";
const _GWATRe = "GetWorkloadAccessTokenResponse";
const _HACBC = "HarnessAgentCoreBrowserConfig";
const _HACCIC = "HarnessAgentCoreCodeInterpreterConfig";
const _HACGC = "HarnessAgentCoreGatewayConfig";
const _HBMC = "HarnessBedrockModelConfig";
const _HCB = "HarnessContentBlocks";
const _HCBD = "HarnessContentBlockDelta";
const _HCBDE = "HarnessContentBlockDeltaEvent";
const _HCBS = "HarnessContentBlockStart";
const _HCBSE = "HarnessContentBlockStartEvent";
const _HCBSEa = "HarnessContentBlockStopEvent";
const _HCBa = "HarnessContentBlock";
const _HGMC = "HarnessGeminiModelConfig";
const _HGOA = "HarnessGatewayOutboundAuth";
const _HHM = "HttpHeadersMap";
const _HIFC = "HarnessInlineFunctionConfig";
const _HIFD = "HarnessInlineFunctionDescription";
const _HM = "HarnessMessage";
const _HMC = "HarnessModelConfiguration";
const _HME = "HarnessMetadataEvent";
const _HMSE = "HarnessMessageStartEvent";
const _HMSEa = "HarnessMessageStopEvent";
const _HMa = "HarnessMessages";
const _HOAMC = "HarnessOpenAiModelConfig";
const _HRCB = "HarnessReasoningContentBlock";
const _HRCBD = "HarnessReasoningContentBlockDelta";
const _HRMC = "HarnessRemoteMcpConfig";
const _HRMU = "HarnessRemoteMcpUrl";
const _HRTB = "HarnessReasoningTextBlock";
const _HS = "HarnessSkills";
const _HSCB = "HarnessSystemContentBlock";
const _HSM = "HarnessStreamMetrics";
const _HSP = "HarnessSystemPrompt";
const _HSa = "HarnessSkill";
const _HT = "HarnessTool";
const _HTC = "HarnessToolConfiguration";
const _HTRB = "HarnessToolResultBlock";
const _HTRBD = "HarnessToolResultBlocksDelta";
const _HTRBDa = "HarnessToolResultBlockDelta";
const _HTRBS = "HarnessToolResultBlockStart";
const _HTRCB = "HarnessToolResultContentBlocks";
const _HTRCBa = "HarnessToolResultContentBlock";
const _HTU = "HarnessTokenUsage";
const _HTUB = "HarnessToolUseBlock";
const _HTUBD = "HarnessToolUseBlockDelta";
const _HTUBS = "HarnessToolUseBlockStart";
const _HTa = "HarnessTools";
const _IAR = "InvokeAgentRuntime";
const _IARC = "InvokeAgentRuntimeCommand";
const _IARCR = "InvokeAgentRuntimeCommandRequest";
const _IARCRB = "InvokeAgentRuntimeCommandRequestBody";
const _IARCRn = "InvokeAgentRuntimeCommandResponse";
const _IARCSO = "InvokeAgentRuntimeCommandStreamOutput";
const _IARR = "InvokeAgentRuntimeRequest";
const _IARRn = "InvokeAgentRuntimeResponse";
const _IB = "InvokeBrowser";
const _IBR = "InvokeBrowserRequest";
const _IBRn = "InvokeBrowserResponse";
const _ICB = "InputContentBlock";
const _ICBL = "InputContentBlockList";
const _ICI = "InvokeCodeInterpreter";
const _ICIR = "InvokeCodeInterpreterRequest";
const _ICIRn = "InvokeCodeInterpreterResponse";
const _IH = "InvokeHarness";
const _IHR = "InvokeHarnessRequest";
const _IHRn = "InvokeHarnessResponse";
const _IHSO = "InvokeHarnessStreamOutput";
const _IIE = "InvalidInputException";
const _ISE = "InternalServerException";
const _KPA = "KeyPressArguments";
const _KPR = "KeyPressResult";
const _KSA = "KeyShortcutArguments";
const _KSR = "KeyShortcutResult";
const _KTA = "KeyTypeArguments";
const _KTR = "KeyTypeResult";
const _LA = "ListActors";
const _LAI = "ListActorsInput";
const _LAO = "ListActorsOutput";
const _LBS = "ListBrowserSessions";
const _LBSR = "ListBrowserSessionsRequest";
const _LBSRi = "ListBrowserSessionsResponse";
const _LCIS = "ListCodeInterpreterSessions";
const _LCISR = "ListCodeInterpreterSessionsRequest";
const _LCISRi = "ListCodeInterpreterSessionsResponse";
const _LE = "LeftExpression";
const _LEI = "ListEventsInput";
const _LEO = "ListEventsOutput";
const _LEi = "ListEvents";
const _LMEJ = "ListMemoryExtractionJobs";
const _LMEJI = "ListMemoryExtractionJobsInput";
const _LMEJO = "ListMemoryExtractionJobsOutput";
const _LMR = "ListMemoryRecords";
const _LMRI = "ListMemoryRecordsInput";
const _LMRO = "ListMemoryRecordsOutput";
const _LS = "ListSessions";
const _LSI = "ListSessionsInput";
const _LSO = "ListSessionsOutput";
const _LVS = "LiveViewStream";
const _MC = "MemoryContent";
const _MCA = "MouseClickArguments";
const _MCR = "MouseClickResult";
const _MD = "McpDescriptor";
const _MDA = "MouseDragArguments";
const _MDR = "MouseDragResult";
const _ML = "MessagesList";
const _MM = "MessageMetadata";
const _MMA = "MouseMoveArguments";
const _MMFE = "MemoryMetadataFilterExpression";
const _MMFL = "MemoryMetadataFilterList";
const _MMR = "MouseMoveResult";
const _MMe = "MetadataMap";
const _MPV = "Mcp-Protocol-Version";
const _MR = "MemoryRecord";
const _MRCI = "MemoryRecordCreateInput";
const _MRCIL = "MemoryRecordsCreateInputList";
const _MRDI = "MemoryRecordDeleteInput";
const _MRDIL = "MemoryRecordsDeleteInputList";
const _MRO = "MemoryRecordOutput";
const _MROL = "MemoryRecordsOutputList";
const _MRS = "MemoryRecordSummary";
const _MRSL = "MemoryRecordSummaryList";
const _MRUI = "MemoryRecordUpdateInput";
const _MRUIL = "MemoryRecordsUpdateInputList";
const _MSA = "MouseScrollArguments";
const _MSI = "Mcp-Session-Id";
const _MSR = "MouseScrollResult";
const _MV = "MetadataValue";
const _OACP = "OAuthCredentialProvider";
const _OACPV = "OAuthCustomParametersValue";
const _OACPu = "OAuthCustomParameters";
const _P = "Proxies";
const _PB = "ProxyBypass";
const _PC = "ProxyConfiguration";
const _PCr = "ProxyCredentials";
const _PT = "PayloadType";
const _PTL = "PayloadTypeList";
const _Pr = "Proxy";
const _RC = "ResourceContent";
const _RCE = "RetryableConflictException";
const _RCEu = "RuntimeClientError";
const _RCe = "ResponseChunk";
const _RE = "RightExpression";
const _RL = "ResourceLocation";
const _RMR = "RetrieveMemoryRecords";
const _RMRI = "RetrieveMemoryRecordsInput";
const _RMRO = "RetrieveMemoryRecordsOutput";
const _RNFE = "ResourceNotFoundException";
const _RRS = "RegistryRecordSummary";
const _RRSL = "RegistryRecordSummaryList";
const _RS = "ResponseStream";
const _S = "State";
const _SA = "ScreenshotArguments";
const _SBS = "StartBrowserSession";
const _SBSP = "SaveBrowserSessionProfile";
const _SBSPR = "SaveBrowserSessionProfileRequest";
const _SBSPRa = "SaveBrowserSessionProfileResponse";
const _SBSR = "StartBrowserSessionRequest";
const _SBSRt = "StartBrowserSessionResponse";
const _SBSRto = "StopBrowserSessionRequest";
const _SBSRtop = "StopBrowserSessionResponse";
const _SBSt = "StopBrowserSession";
const _SC = "SearchCriteria";
const _SCIS = "StartCodeInterpreterSession";
const _SCISR = "StartCodeInterpreterSessionRequest";
const _SCISRt = "StartCodeInterpreterSessionResponse";
const _SCISRto = "StopCodeInterpreterSessionRequest";
const _SCISRtop = "StopCodeInterpreterSessionResponse";
const _SCISt = "StopCodeInterpreterSession";
const _SCp = "SpanContext";
const _SD = "ServerDefinition";
const _SDk = "SkillDefinition";
const _SE = "ServiceException";
const _SF = "SessionFilter";
const _SJ = "SensitiveJson";
const _SL = "S3Location";
const _SMD = "SkillMdDefinition";
const _SMEJ = "StartMemoryExtractionJob";
const _SMEJI = "StartMemoryExtractionJobInput";
const _SMEJO = "StartMemoryExtractionJobOutput";
const _SML = "SecretsManagerLocation";
const _SQEE = "ServiceQuotaExceededException";
const _SR = "ScreenshotResult";
const _SRR = "SearchRegistryRecords";
const _SRRR = "SearchRegistryRecordsRequest";
const _SRRRe = "SearchRegistryRecordsResponse";
const _SRS = "StopRuntimeSession";
const _SRSR = "StopRuntimeSessionRequest";
const _SRSRt = "StopRuntimeSessionResponse";
const _SS = "SensitiveString";
const _SSL = "SessionSummaryList";
const _SSe = "SessionSummary";
const _ST = "SensitiveText";
const _SU = "StreamUpdate";
const _Sp = "Spans";
const _TA = "ToolArguments";
const _TD = "ToolsDefinition";
const _TE = "ThrottledException";
const _TEh = "ThrottlingException";
const _TRSC = "ToolResultStructuredContent";
const _TU = "TokenUsage";
const _UBS = "UpdateBrowserStream";
const _UBSR = "UpdateBrowserStreamRequest";
const _UBSRp = "UpdateBrowserStreamResponse";
const _UE = "UnauthorizedException";
const _UI = "UserIdentifier";
const _UTT = "UserTokenType";
const _VE = "ValidationException";
const _VEF = "ValidationExceptionField";
const _VEFL = "ValidationExceptionFieldList";
const _VP = "ViewPort";
const _WITT = "WorkloadIdentityTokenType";
const _XABARSI = "X-Amzn-Bedrock-AgentCore-Runtime-Session-Id";
const _XABARUI = "X-Amzn-Bedrock-AgentCore-Runtime-User-Id";
const _XATI = "X-Amzn-Trace-Id";
const _a = "a2a";
const _aC = "agentCard";
const _aCB = "agentCoreBrowser";
const _aCCI = "agentCoreCodeInterpreter";
const _aCG = "agentCoreGateway";
const _aDE = "accessDeniedException";
const _aI = "actorId";
const _aIc = "accountId";
const _aIw = "awsIam";
const _aK = "apiKey";
const _aKA = "apiKeyArn";
const _aRA = "agentRuntimeArn";
const _aS = "automationStream";
const _aSU = "automationStreamUpdate";
const _aSc = "actorSummaries";
const _aSg = "agentSkills";
const _aT = "accessToken";
const _aTl = "allowedTools";
const _aU = "authorizationUrl";
const _ac = "accept";
const _act = "action";
const _ar = "arguments";
const _as = "assertions";
const _b = "branch";
const _bA = "browserArn";
const _bAa = "basicAuth";
const _bI = "browserIdentifier";
const _bMC = "bedrockModelConfig";
const _ba = "baggage";
const _bl = "blob";
const _bo = "body";
const _bu = "button";
const _buc = "bucket";
const _by = "bypass";
const _c = "client";
const _cA = "createdAt";
const _cBD = "contentBlockDelta";
const _cBI = "contentBlockIndex";
const _cBS = "contentBlockStart";
const _cBSo = "contentBlockStop";
const _cC = "clickCount";
const _cCl = "clearContext";
const _cD = "contentDelta";
const _cE = "conflictException";
const _cIA = "codeInterpreterArn";
const _cII = "codeInterpreterIdentifier";
const _cP = "customParameters";
const _cRIT = "cacheReadInputTokens";
const _cS = "customState";
const _cSo = "contentStart";
const _cSon = "contentStop";
const _cT = "clientToken";
const _cTo = "contentType";
const _cWIT = "cacheWriteInputTokens";
const _ce = "certificates";
const _ch = "chunk";
const _co = "content";
const _cod = "code";
const _com = "command";
const _con = "context";
const _conf = "config";
const _conv = "conversational";
const _cr = "credentials";
const _cu = "custom";
const _d = "data";
const _dP = "domainPatterns";
const _dPi = "directoryPath";
const _dRU = "defaultReturnUrl";
const _dT = "descriptorType";
const _dX = "deltaX";
const _dY = "deltaY";
const _de = "description";
const _del = "delta";
const _des = "descriptors";
const _e = "error";
const _eA = "evaluatorArn";
const _eC = "exitCode";
const _eCr = "errorCode";
const _eF = "eventFilter";
const _eI = "eventId";
const _eIv = "evaluatorId";
const _eIva = "evaluationInput";
const _eJ = "extractionJob";
const _eM = "errorMessage";
const _eMv = "eventMetadata";
const _eN = "evaluatorName";
const _eP = "enterprisePolicies";
const _ePx = "externalProxy";
const _eR = "evaluationResults";
const _eRI = "evaluationReferenceInputs";
const _eRx = "expectedResponse";
const _eT = "eventTimestamp";
const _eTv = "evaluationTarget";
const _eTx = "expectedTrajectory";
const _eTxe = "executionTime";
const _eX = "endX";
const _eY = "endY";
const _ev = "event";
const _eve = "events";
const _ex = "explanation";
const _ext = "extensions";
const _f = "filter";
const _fA = "forceAuthentication";
const _fL = "fieldList";
const _fR = "failedRecords";
const _fRa = "failureReason";
const _fi = "filters";
const _fo = "format";
const _gA = "gatewayArn";
const _gMC = "geminiModelConfig";
const _gT = "grantType";
const _h = "headers";
const _hA = "harnessArn";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _he = "height";
const _ht = "http";
const _i = "input";
const _iC = "inlineContent";
const _iE = "isError";
const _iF = "inlineFunction";
const _iP = "includePayloads";
const _iPB = "includeParentBranches";
const _iRIF = "ignoredReferenceInputFields";
const _iS = "inputSchema";
const _iSE = "internalServerException";
const _iT = "idempotencyToken";
const _iTn = "inputTokens";
const _it = "items";
const _j = "jobs";
const _jI = "jobId";
const _jID = "jobID";
const _js = "json";
const _k = "key";
const _kP = "keyPress";
const _kS = "keyShortcut";
const _kT = "keyType";
const _ke = "keys";
const _l = "location";
const _lM = "latencyMs";
const _lUA = "lastUpdatedAt";
const _lVS = "liveViewStream";
const _la = "label";
const _lan = "language";
const _le = "left";
const _m = "message";
const _mC = "mouseClick";
const _mD = "mouseDrag";
const _mF = "metadataFilters";
const _mI = "memoryId";
const _mIa = "maxIterations";
const _mIe = "messageIndex";
const _mIo = "modelId";
const _mK = "metadataKey";
const _mL = "messagesList";
const _mM = "mouseMove";
const _mPV = "mcpProtocolVersion";
const _mR = "memoryRecord";
const _mRI = "memoryRecordId";
const _mRS = "memoryRecordSummaries";
const _mRa = "maxResults";
const _mS = "mouseScroll";
const _mSI = "mcpSessionId";
const _mSIe = "memoryStrategyId";
const _mSe = "messageStart";
const _mSes = "messageStop";
const _mT = "mimeType";
const _mTa = "maxTokens";
const _mV = "metadataValue";
const _mc = "mcp";
const _me = "metadata";
const _mes = "messages";
const _met = "metrics";
const _mo = "model";
const _n = "name";
const _nP = "namespacePath";
const _nT = "nextToken";
const _na = "namespace";
const _nam = "namespaces";
const _no = "none";
const _o = "operator";
const _oA = "outboundAuth";
const _oAMC = "openAiModelConfig";
const _oF = "oauth2Flow";
const _oT = "outputTokens";
const _oa = "oauth";
const _p = "payload";
const _pA = "providerArn";
const _pC = "profileConfiguration";
const _pCr = "proxyConfiguration";
const _pI = "profileIdentifier";
const _pV = "protocolVersion";
const _pa = "path";
const _pat = "paths";
const _po = "port";
const _pr = "presses";
const _pre = "prefix";
const _pro = "proxies";
const _q = "qualifier";
const _r = "reason";
const _rA = "registryArn";
const _rAe = "recordArn";
const _rC = "reasoningContent";
const _rCE = "runtimeClientError";
const _rCPN = "resourceCredentialProviderName";
const _rCe = "redactedContent";
const _rEI = "rootEventId";
const _rI = "requestIdentifier";
const _rIe = "recordId";
const _rIeg = "registryIds";
const _rM = "remoteMcp";
const _rNFE = "resourceNotFoundException";
const _rORU = "resourceOauth2ReturnUrl";
const _rR = "registryRecords";
const _rSI = "runtimeSessionId";
const _rT = "reasoningText";
const _rUI = "runtimeUserId";
const _re = "records";
const _res = "resource";
const _resp = "response";
const _resu = "result";
const _ri = "right";
const _ro = "role";
const _ru = "runtime";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.bedrockagentcore";
const _sA = "secretArn";
const _sC = "structuredContent";
const _sCe = "searchCriteria";
const _sCp = "spanContext";
const _sCt = "statusCode";
const _sD = "skillDefinition";
const _sE = "streamEndpoint";
const _sI = "sessionId";
const _sIp = "spanId";
const _sIpa = "spanIds";
const _sIt = "strategyId";
const _sM = "skillMd";
const _sMe = "secretsManager";
const _sN = "serverName";
const _sP = "systemPrompt";
const _sQ = "searchQuery";
const _sQEE = "serviceQuotaExceededException";
const _sR = "successfulRecords";
const _sRA = "sessionReplayArtifact";
const _sRt = "stopReason";
const _sS = "streamStatus";
const _sSe = "sessionStatus";
const _sSes = "sessionSummaries";
const _sSess = "sessionSpans";
const _sTS = "sessionTimeoutSeconds";
const _sU = "sessionUri";
const _sUt = "streamUpdate";
const _sV = "schemaVersion";
const _sVt = "stringValue";
const _sX = "startX";
const _sY = "startY";
const _s_ = "s3";
const _sc = "scopes";
const _sco = "score";
const _scr = "screenshot";
const _se = "server";
const _sen = "sensitive";
const _si = "size";
const _sig = "signature";
const _sk = "skills";
const _st = "streaming";
const _sta = "status";
const _star = "start";
const _std = "stdout";
const _stde = "stderr";
const _str = "streams";
const _stre = "stream";
const _t = "type";
const _tE = "throttlingException";
const _tI = "traceId";
const _tIa = "taskId";
const _tIr = "traceIds";
const _tK = "topK";
const _tN = "toolNames";
const _tP = "topP";
const _tPr = "traceParent";
const _tR = "toolResult";
const _tS = "traceState";
const _tSa = "taskStatus";
const _tSi = "timeoutSeconds";
const _tT = "totalTokens";
const _tU = "tokenUsage";
const _tUI = "toolUseId";
const _tUo = "toolUse";
const _te = "text";
const _tem = "temperature";
const _ti = "timeout";
const _tim = "timestamp";
const _to = "tools";
const _tr = "traceparent";
const _tra = "tracestate";
const _u = "uri";
const _uA = "updatedAt";
const _uI = "userIdentifier";
const _uIs = "userId";
const _uT = "userToken";
const _ur = "url";
const _us = "usage";
const _v = "value";
const _vE = "validationException";
const _vI = "versionId";
const _vP = "viewPort";
const _ve = "version";
const _w = "width";
const _wAT = "workloadAccessToken";
const _wIT = "workloadIdentityToken";
const _wN = "workloadName";
const _x = "x";
const _xabsi = "x-amzn-browser-session-id";
const _xacisi = "x-amzn-code-interpreter-session-id";
const _y = "y";
const n0 = "com.amazonaws.bedrockagentcore";
;
;
;
const _s_registry = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeRegistry"].for(_s);
var BedrockAgentCoreServiceException$ = [
    -3,
    _s,
    "BedrockAgentCoreServiceException",
    0,
    [],
    []
];
_s_registry.registerError(BedrockAgentCoreServiceException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$BedrockAgentCoreServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BedrockAgentCoreServiceException"]);
const n0_registry = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0);
var AccessDeniedException$ = [
    -3,
    n0,
    _ADE,
    {
        [_e]: _c,
        [_hE]: 403
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(AccessDeniedException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AccessDeniedException"]);
var ConflictException$ = [
    -3,
    n0,
    _CE,
    {
        [_e]: _c,
        [_hE]: 409
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(ConflictException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ConflictException"]);
var DuplicateIdException$ = [
    -3,
    n0,
    _DIE,
    {
        [_e]: _c,
        [_hE]: 409
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(DuplicateIdException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DuplicateIdException"]);
var InternalServerException$ = [
    -3,
    n0,
    _ISE,
    {
        [_e]: _se,
        [_hE]: 500
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(InternalServerException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InternalServerException"]);
var InvalidInputException$ = [
    -3,
    n0,
    _IIE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ],
    1
];
n0_registry.registerError(InvalidInputException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidInputException"]);
var ResourceNotFoundException$ = [
    -3,
    n0,
    _RNFE,
    {
        [_e]: _c,
        [_hE]: 404
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(ResourceNotFoundException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ResourceNotFoundException"]);
var RetryableConflictException$ = [
    -3,
    n0,
    _RCE,
    {
        [_e]: _c,
        [_hE]: 409
    },
    [
        _m
    ],
    [
        0
    ],
    1
];
n0_registry.registerError(RetryableConflictException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RetryableConflictException"]);
var RuntimeClientError$ = [
    -3,
    n0,
    _RCEu,
    {
        [_e]: _c,
        [_hE]: 424
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(RuntimeClientError$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RuntimeClientError"]);
var ServiceException$ = [
    -3,
    n0,
    _SE,
    {
        [_e]: _se,
        [_hE]: 500
    },
    [
        _m
    ],
    [
        0
    ],
    1
];
n0_registry.registerError(ServiceException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ServiceException"]);
var ServiceQuotaExceededException$ = [
    -3,
    n0,
    _SQEE,
    {
        [_e]: _c,
        [_hE]: 402
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(ServiceQuotaExceededException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ServiceQuotaExceededException"]);
var ThrottledException$ = [
    -3,
    n0,
    _TE,
    {
        [_e]: _c,
        [_hE]: 429
    },
    [
        _m
    ],
    [
        0
    ],
    1
];
n0_registry.registerError(ThrottledException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ThrottledException"]);
var ThrottlingException$ = [
    -3,
    n0,
    _TEh,
    {
        [_e]: _c,
        [_hE]: 429
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(ThrottlingException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ThrottlingException"]);
var UnauthorizedException$ = [
    -3,
    n0,
    _UE,
    {
        [_e]: _c,
        [_hE]: 401
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(UnauthorizedException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnauthorizedException"]);
var ValidationException$ = [
    -3,
    n0,
    _VE,
    {
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m,
        _r,
        _fL
    ],
    [
        0,
        0,
        ()=>ValidationExceptionFieldList
    ],
    2
];
n0_registry.registerError(ValidationException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ValidationException"]);
const errorTypeRegistries = [
    _s_registry,
    n0_registry
];
var AccessTokenType = [
    0,
    n0,
    _ATT,
    8,
    0
];
var ApiKeyType = [
    0,
    n0,
    _AKT,
    8,
    0
];
var AuthorizationUrlType = [
    0,
    n0,
    _AUT,
    8,
    0
];
var Body = [
    0,
    n0,
    _B,
    8,
    21
];
var CustomRequestValueType = [
    0,
    n0,
    _CRVT,
    8,
    0
];
var Description = [
    0,
    n0,
    _D,
    8,
    0
];
var Document = [
    0,
    n0,
    _Do,
    8,
    15
];
var EvaluationExplanation = [
    0,
    n0,
    _EE,
    8,
    0
];
var HarnessInlineFunctionDescription = [
    0,
    n0,
    _HIFD,
    8,
    0
];
var HarnessRemoteMcpUrl = [
    0,
    n0,
    _HRMU,
    8,
    0
];
var OAuthCustomParametersValue = [
    0,
    n0,
    _OACPV,
    8,
    0
];
var ResponseStream = [
    0,
    n0,
    _RS,
    {
        [_sen]: 1,
        [_st]: 1
    },
    42
];
var SensitiveJson = [
    0,
    n0,
    _SJ,
    8,
    15
];
var SensitiveString = [
    0,
    n0,
    _SS,
    8,
    0
];
var SensitiveText = [
    0,
    n0,
    _ST,
    8,
    0
];
var State = [
    0,
    n0,
    _S,
    8,
    0
];
var UserTokenType = [
    0,
    n0,
    _UTT,
    8,
    0
];
var WorkloadIdentityTokenType = [
    0,
    n0,
    _WITT,
    8,
    0
];
var A2aDescriptor$ = [
    3,
    n0,
    _AD,
    0,
    [
        _aC
    ],
    [
        ()=>AgentCardDefinition$
    ],
    1
];
var ActorSummary$ = [
    3,
    n0,
    _AS,
    0,
    [
        _aI
    ],
    [
        0
    ],
    1
];
var AgentCardDefinition$ = [
    3,
    n0,
    _ACD,
    0,
    [
        _sV,
        _iC
    ],
    [
        0,
        0
    ]
];
var AgentSkillsDescriptor$ = [
    3,
    n0,
    _ASD,
    0,
    [
        _sM,
        _sD
    ],
    [
        ()=>SkillMdDefinition$,
        ()=>SkillDefinition$
    ],
    1
];
var AutomationStream$ = [
    3,
    n0,
    _ASu,
    0,
    [
        _sE,
        _sS
    ],
    [
        0,
        0
    ],
    2
];
var AutomationStreamUpdate$ = [
    3,
    n0,
    _ASU,
    0,
    [
        _sS
    ],
    [
        0
    ]
];
var BasicAuth$ = [
    3,
    n0,
    _BA,
    0,
    [
        _sA
    ],
    [
        0
    ],
    1
];
var BatchCreateMemoryRecordsInput$ = [
    3,
    n0,
    _BCMRI,
    0,
    [
        _mI,
        _re,
        _cT
    ],
    [
        [
            0,
            1
        ],
        [
            ()=>MemoryRecordsCreateInputList,
            0
        ],
        [
            0,
            4
        ]
    ],
    2
];
var BatchCreateMemoryRecordsOutput$ = [
    3,
    n0,
    _BCMRO,
    0,
    [
        _sR,
        _fR
    ],
    [
        ()=>MemoryRecordsOutputList,
        ()=>MemoryRecordsOutputList
    ],
    2
];
var BatchDeleteMemoryRecordsInput$ = [
    3,
    n0,
    _BDMRI,
    0,
    [
        _mI,
        _re
    ],
    [
        [
            0,
            1
        ],
        ()=>MemoryRecordsDeleteInputList
    ],
    2
];
var BatchDeleteMemoryRecordsOutput$ = [
    3,
    n0,
    _BDMRO,
    0,
    [
        _sR,
        _fR
    ],
    [
        ()=>MemoryRecordsOutputList,
        ()=>MemoryRecordsOutputList
    ],
    2
];
var BatchUpdateMemoryRecordsInput$ = [
    3,
    n0,
    _BUMRI,
    0,
    [
        _mI,
        _re
    ],
    [
        [
            0,
            1
        ],
        [
            ()=>MemoryRecordsUpdateInputList,
            0
        ]
    ],
    2
];
var BatchUpdateMemoryRecordsOutput$ = [
    3,
    n0,
    _BUMRO,
    0,
    [
        _sR,
        _fR
    ],
    [
        ()=>MemoryRecordsOutputList,
        ()=>MemoryRecordsOutputList
    ],
    2
];
var Branch$ = [
    3,
    n0,
    _Br,
    0,
    [
        _n,
        _rEI
    ],
    [
        0,
        0
    ],
    1
];
var BranchFilter$ = [
    3,
    n0,
    _BF,
    0,
    [
        _n,
        _iPB
    ],
    [
        0,
        2
    ],
    1
];
var BrowserEnterprisePolicy$ = [
    3,
    n0,
    _BEP,
    0,
    [
        _l,
        _t
    ],
    [
        ()=>ResourceLocation$,
        0
    ],
    1
];
var BrowserExtension$ = [
    3,
    n0,
    _BE,
    0,
    [
        _l
    ],
    [
        ()=>ResourceLocation$
    ],
    1
];
var BrowserProfileConfiguration$ = [
    3,
    n0,
    _BPC,
    0,
    [
        _pI
    ],
    [
        0
    ],
    1
];
var BrowserSessionStream$ = [
    3,
    n0,
    _BSS,
    0,
    [
        _aS,
        _lVS
    ],
    [
        ()=>AutomationStream$,
        ()=>LiveViewStream$
    ],
    1
];
var BrowserSessionSummary$ = [
    3,
    n0,
    _BSSr,
    0,
    [
        _bI,
        _sI,
        _sta,
        _cA,
        _n,
        _lUA
    ],
    [
        0,
        0,
        0,
        5,
        0,
        5
    ],
    4
];
var Certificate$ = [
    3,
    n0,
    _C,
    0,
    [
        _l
    ],
    [
        ()=>CertificateLocation$
    ],
    1
];
var CodeInterpreterResult$ = [
    3,
    n0,
    _CIR,
    0,
    [
        _co,
        _sC,
        _iE
    ],
    [
        ()=>ContentBlockList,
        ()=>ToolResultStructuredContent$,
        2
    ],
    1
];
var CodeInterpreterSessionSummary$ = [
    3,
    n0,
    _CISS,
    0,
    [
        _cII,
        _sI,
        _sta,
        _cA,
        _n,
        _lUA
    ],
    [
        0,
        0,
        0,
        5,
        0,
        5
    ],
    4
];
var CompleteResourceTokenAuthRequest$ = [
    3,
    n0,
    _CRTAR,
    0,
    [
        _uI,
        _sU
    ],
    [
        [
            ()=>UserIdentifier$,
            0
        ],
        0
    ],
    2
];
var CompleteResourceTokenAuthResponse$ = [
    3,
    n0,
    _CRTARo,
    0,
    [],
    []
];
var ContentBlock$ = [
    3,
    n0,
    _CB,
    0,
    [
        _t,
        _te,
        _d,
        _mT,
        _u,
        _n,
        _de,
        _si,
        _res
    ],
    [
        0,
        0,
        21,
        0,
        0,
        0,
        0,
        1,
        ()=>ResourceContent$
    ],
    1
];
var ContentDeltaEvent$ = [
    3,
    n0,
    _CDE,
    0,
    [
        _std,
        _stde
    ],
    [
        0,
        0
    ]
];
var ContentStartEvent$ = [
    3,
    n0,
    _CSE,
    0,
    [],
    []
];
var ContentStopEvent$ = [
    3,
    n0,
    _CSEo,
    0,
    [
        _eC,
        _sta
    ],
    [
        1,
        0
    ],
    2
];
var Conversational$ = [
    3,
    n0,
    _Co,
    0,
    [
        _co,
        _ro
    ],
    [
        [
            ()=>Content$,
            0
        ],
        0
    ],
    2
];
var CreateEventInput$ = [
    3,
    n0,
    _CEI,
    0,
    [
        _mI,
        _aI,
        _eT,
        _p,
        _sI,
        _b,
        _cT,
        _me
    ],
    [
        [
            0,
            1
        ],
        0,
        4,
        [
            ()=>PayloadTypeList,
            0
        ],
        0,
        ()=>Branch$,
        [
            0,
            4
        ],
        ()=>MetadataMap
    ],
    4
];
var CreateEventOutput$ = [
    3,
    n0,
    _CEO,
    0,
    [
        _ev
    ],
    [
        [
            ()=>Event$,
            0
        ]
    ],
    1
];
var CustomDescriptor$ = [
    3,
    n0,
    _CD,
    0,
    [
        _iC
    ],
    [
        0
    ]
];
var DeleteEventInput$ = [
    3,
    n0,
    _DEI,
    0,
    [
        _mI,
        _sI,
        _eI,
        _aI
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            1
        ],
        [
            0,
            1
        ],
        [
            0,
            1
        ]
    ],
    4
];
var DeleteEventOutput$ = [
    3,
    n0,
    _DEO,
    0,
    [
        _eI
    ],
    [
        0
    ],
    1
];
var DeleteMemoryRecordInput$ = [
    3,
    n0,
    _DMRI,
    0,
    [
        _mI,
        _mRI
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            1
        ]
    ],
    2
];
var DeleteMemoryRecordOutput$ = [
    3,
    n0,
    _DMRO,
    0,
    [
        _mRI
    ],
    [
        0
    ],
    1
];
var Descriptors$ = [
    3,
    n0,
    _De,
    0,
    [
        _mc,
        _a,
        _cu,
        _aSg
    ],
    [
        ()=>McpDescriptor$,
        ()=>A2aDescriptor$,
        ()=>CustomDescriptor$,
        ()=>AgentSkillsDescriptor$
    ]
];
var EvaluateRequest$ = [
    3,
    n0,
    _ER,
    0,
    [
        _eIv,
        _eIva,
        _eTv,
        _eRI
    ],
    [
        [
            0,
            1
        ],
        [
            ()=>EvaluationInput$,
            0
        ],
        ()=>EvaluationTarget$,
        [
            ()=>EvaluationReferenceInputs,
            0
        ]
    ],
    2
];
var EvaluateResponse$ = [
    3,
    n0,
    _ERv,
    0,
    [
        _eR
    ],
    [
        [
            ()=>EvaluationResults,
            0
        ]
    ],
    1
];
var EvaluationExpectedTrajectory$ = [
    3,
    n0,
    _EET,
    0,
    [
        _tN
    ],
    [
        64 | 0
    ]
];
var EvaluationReferenceInput$ = [
    3,
    n0,
    _ERI,
    0,
    [
        _con,
        _eRx,
        _as,
        _eTx
    ],
    [
        ()=>Context$,
        ()=>EvaluationContent$,
        ()=>EvaluationContentList,
        ()=>EvaluationExpectedTrajectory$
    ],
    1
];
var EvaluationResultContent$ = [
    3,
    n0,
    _ERC,
    0,
    [
        _eA,
        _eIv,
        _eN,
        _con,
        _ex,
        _v,
        _la,
        _tU,
        _eM,
        _eCr,
        _iRIF
    ],
    [
        0,
        0,
        0,
        ()=>Context$,
        [
            ()=>EvaluationExplanation,
            0
        ],
        1,
        0,
        ()=>TokenUsage$,
        0,
        0,
        64 | 0
    ],
    4
];
var Event$ = [
    3,
    n0,
    _E,
    0,
    [
        _mI,
        _aI,
        _sI,
        _eI,
        _eT,
        _p,
        _b,
        _me
    ],
    [
        0,
        0,
        0,
        0,
        4,
        [
            ()=>PayloadTypeList,
            0
        ],
        ()=>Branch$,
        ()=>MetadataMap
    ],
    6
];
var EventMetadataFilterExpression$ = [
    3,
    n0,
    _EMFE,
    0,
    [
        _le,
        _o,
        _ri
    ],
    [
        ()=>LeftExpression$,
        0,
        ()=>RightExpression$
    ],
    2
];
var ExternalProxy$ = [
    3,
    n0,
    _EP,
    0,
    [
        _se,
        _po,
        _dP,
        _cr
    ],
    [
        0,
        1,
        64 | 0,
        ()=>ProxyCredentials$
    ],
    2
];
var ExtractionJob$ = [
    3,
    n0,
    _EJ,
    0,
    [
        _jI
    ],
    [
        0
    ],
    1
];
var ExtractionJobFilterInput$ = [
    3,
    n0,
    _EJFI,
    0,
    [
        _sIt,
        _sI,
        _aI,
        _sta
    ],
    [
        0,
        0,
        0,
        0
    ]
];
var ExtractionJobMetadata$ = [
    3,
    n0,
    _EJM,
    0,
    [
        _jID,
        _mes,
        _sta,
        _fRa,
        _sIt,
        _sI,
        _aI
    ],
    [
        0,
        ()=>ExtractionJobMessages$,
        0,
        0,
        0,
        0,
        0
    ],
    2
];
var FilterInput$ = [
    3,
    n0,
    _FI,
    0,
    [
        _b,
        _eMv
    ],
    [
        ()=>BranchFilter$,
        ()=>EventMetadataFilterList
    ]
];
var GetAgentCardRequest$ = [
    3,
    n0,
    _GACR,
    0,
    [
        _aRA,
        _rSI,
        _q
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hH]: _XABARSI,
                [_iT]: 1
            }
        ],
        [
            0,
            {
                [_hQ]: _q
            }
        ]
    ],
    1
];
var GetAgentCardResponse$ = [
    3,
    n0,
    _GACRe,
    0,
    [
        _aC,
        _rSI,
        _sCt
    ],
    [
        [
            15,
            16
        ],
        [
            0,
            {
                [_hH]: _XABARSI
            }
        ],
        [
            1,
            32
        ]
    ],
    1
];
var GetBrowserSessionRequest$ = [
    3,
    n0,
    _GBSR,
    0,
    [
        _bI,
        _sI
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hQ]: _sI
            }
        ]
    ],
    2
];
var GetBrowserSessionResponse$ = [
    3,
    n0,
    _GBSRe,
    0,
    [
        _bI,
        _sI,
        _cA,
        _n,
        _vP,
        _ext,
        _eP,
        _pC,
        _sTS,
        _sta,
        _str,
        _pCr,
        _ce,
        _sRA,
        _lUA
    ],
    [
        0,
        0,
        5,
        0,
        ()=>ViewPort$,
        ()=>BrowserExtensions,
        ()=>BrowserEnterprisePolicies,
        ()=>BrowserProfileConfiguration$,
        1,
        0,
        ()=>BrowserSessionStream$,
        ()=>ProxyConfiguration$,
        ()=>Certificates,
        0,
        5
    ],
    3
];
var GetCodeInterpreterSessionRequest$ = [
    3,
    n0,
    _GCISR,
    0,
    [
        _cII,
        _sI
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hQ]: _sI
            }
        ]
    ],
    2
];
var GetCodeInterpreterSessionResponse$ = [
    3,
    n0,
    _GCISRe,
    0,
    [
        _cII,
        _sI,
        _cA,
        _n,
        _sTS,
        _sta,
        _ce
    ],
    [
        0,
        0,
        5,
        0,
        1,
        0,
        ()=>Certificates
    ],
    3
];
var GetEventInput$ = [
    3,
    n0,
    _GEI,
    0,
    [
        _mI,
        _sI,
        _aI,
        _eI
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            1
        ],
        [
            0,
            1
        ],
        [
            0,
            1
        ]
    ],
    4
];
var GetEventOutput$ = [
    3,
    n0,
    _GEO,
    0,
    [
        _ev
    ],
    [
        [
            ()=>Event$,
            0
        ]
    ],
    1
];
var GetMemoryRecordInput$ = [
    3,
    n0,
    _GMRI,
    0,
    [
        _mI,
        _mRI
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            1
        ]
    ],
    2
];
var GetMemoryRecordOutput$ = [
    3,
    n0,
    _GMRO,
    0,
    [
        _mR
    ],
    [
        [
            ()=>MemoryRecord$,
            0
        ]
    ],
    1
];
var GetResourceApiKeyRequest$ = [
    3,
    n0,
    _GRAKR,
    0,
    [
        _wIT,
        _rCPN
    ],
    [
        [
            ()=>WorkloadIdentityTokenType,
            0
        ],
        0
    ],
    2
];
var GetResourceApiKeyResponse$ = [
    3,
    n0,
    _GRAKRe,
    0,
    [
        _aK
    ],
    [
        [
            ()=>ApiKeyType,
            0
        ]
    ],
    1
];
var GetResourceOauth2TokenRequest$ = [
    3,
    n0,
    _GROTR,
    0,
    [
        _wIT,
        _rCPN,
        _sc,
        _oF,
        _sU,
        _rORU,
        _fA,
        _cP,
        _cS
    ],
    [
        [
            ()=>WorkloadIdentityTokenType,
            0
        ],
        0,
        64 | 0,
        0,
        0,
        0,
        2,
        [
            ()=>CustomRequestParametersType,
            0
        ],
        [
            ()=>State,
            0
        ]
    ],
    4
];
var GetResourceOauth2TokenResponse$ = [
    3,
    n0,
    _GROTRe,
    0,
    [
        _aU,
        _aT,
        _sU,
        _sSe
    ],
    [
        [
            ()=>AuthorizationUrlType,
            0
        ],
        [
            ()=>AccessTokenType,
            0
        ],
        0,
        0
    ]
];
var GetWorkloadAccessTokenForJWTRequest$ = [
    3,
    n0,
    _GWATFJWTR,
    0,
    [
        _wN,
        _uT
    ],
    [
        0,
        [
            ()=>UserTokenType,
            0
        ]
    ],
    2
];
var GetWorkloadAccessTokenForJWTResponse$ = [
    3,
    n0,
    _GWATFJWTRe,
    0,
    [
        _wAT
    ],
    [
        [
            ()=>WorkloadIdentityTokenType,
            0
        ]
    ],
    1
];
var GetWorkloadAccessTokenForUserIdRequest$ = [
    3,
    n0,
    _GWATFUIR,
    0,
    [
        _wN,
        _uIs
    ],
    [
        0,
        0
    ],
    2
];
var GetWorkloadAccessTokenForUserIdResponse$ = [
    3,
    n0,
    _GWATFUIRe,
    0,
    [
        _wAT
    ],
    [
        [
            ()=>WorkloadIdentityTokenType,
            0
        ]
    ],
    1
];
var GetWorkloadAccessTokenRequest$ = [
    3,
    n0,
    _GWATR,
    0,
    [
        _wN
    ],
    [
        0
    ],
    1
];
var GetWorkloadAccessTokenResponse$ = [
    3,
    n0,
    _GWATRe,
    0,
    [
        _wAT
    ],
    [
        [
            ()=>WorkloadIdentityTokenType,
            0
        ]
    ],
    1
];
var HarnessAgentCoreBrowserConfig$ = [
    3,
    n0,
    _HACBC,
    0,
    [
        _bA
    ],
    [
        0
    ]
];
var HarnessAgentCoreCodeInterpreterConfig$ = [
    3,
    n0,
    _HACCIC,
    0,
    [
        _cIA
    ],
    [
        0
    ]
];
var HarnessAgentCoreGatewayConfig$ = [
    3,
    n0,
    _HACGC,
    0,
    [
        _gA,
        _oA
    ],
    [
        0,
        [
            ()=>HarnessGatewayOutboundAuth$,
            0
        ]
    ],
    1
];
var HarnessBedrockModelConfig$ = [
    3,
    n0,
    _HBMC,
    0,
    [
        _mIo,
        _mTa,
        _tem,
        _tP
    ],
    [
        0,
        1,
        1,
        1
    ],
    1
];
var HarnessContentBlockDeltaEvent$ = [
    3,
    n0,
    _HCBDE,
    0,
    [
        _cBI,
        _del
    ],
    [
        1,
        [
            ()=>HarnessContentBlockDelta$,
            0
        ]
    ],
    2
];
var HarnessContentBlockStartEvent$ = [
    3,
    n0,
    _HCBSE,
    0,
    [
        _cBI,
        _star
    ],
    [
        1,
        ()=>HarnessContentBlockStart$
    ],
    2
];
var HarnessContentBlockStopEvent$ = [
    3,
    n0,
    _HCBSEa,
    0,
    [
        _cBI
    ],
    [
        1
    ],
    1
];
var HarnessGeminiModelConfig$ = [
    3,
    n0,
    _HGMC,
    0,
    [
        _mIo,
        _aKA,
        _mTa,
        _tem,
        _tP,
        _tK
    ],
    [
        0,
        0,
        1,
        1,
        1,
        1
    ],
    2
];
var HarnessInlineFunctionConfig$ = [
    3,
    n0,
    _HIFC,
    0,
    [
        _de,
        _iS
    ],
    [
        [
            ()=>HarnessInlineFunctionDescription,
            0
        ],
        [
            ()=>SensitiveJson,
            0
        ]
    ],
    2
];
var HarnessMessage$ = [
    3,
    n0,
    _HM,
    0,
    [
        _ro,
        _co
    ],
    [
        0,
        [
            ()=>HarnessContentBlocks,
            0
        ]
    ],
    2
];
var HarnessMessageStartEvent$ = [
    3,
    n0,
    _HMSE,
    0,
    [
        _ro
    ],
    [
        0
    ],
    1
];
var HarnessMessageStopEvent$ = [
    3,
    n0,
    _HMSEa,
    0,
    [
        _sRt
    ],
    [
        0
    ],
    1
];
var HarnessMetadataEvent$ = [
    3,
    n0,
    _HME,
    0,
    [
        _us,
        _met
    ],
    [
        ()=>HarnessTokenUsage$,
        ()=>HarnessStreamMetrics$
    ],
    2
];
var HarnessOpenAiModelConfig$ = [
    3,
    n0,
    _HOAMC,
    0,
    [
        _mIo,
        _aKA,
        _mTa,
        _tem,
        _tP
    ],
    [
        0,
        0,
        1,
        1,
        1
    ],
    2
];
var HarnessReasoningTextBlock$ = [
    3,
    n0,
    _HRTB,
    8,
    [
        _te,
        _sig
    ],
    [
        0,
        0
    ],
    1
];
var HarnessRemoteMcpConfig$ = [
    3,
    n0,
    _HRMC,
    0,
    [
        _ur,
        _h
    ],
    [
        [
            ()=>HarnessRemoteMcpUrl,
            0
        ],
        [
            ()=>HttpHeadersMap,
            0
        ]
    ],
    1
];
var HarnessStreamMetrics$ = [
    3,
    n0,
    _HSM,
    0,
    [
        _lM
    ],
    [
        1
    ],
    1
];
var HarnessTokenUsage$ = [
    3,
    n0,
    _HTU,
    0,
    [
        _iTn,
        _oT,
        _tT,
        _cRIT,
        _cWIT
    ],
    [
        1,
        1,
        1,
        1,
        1
    ],
    3
];
var HarnessTool$ = [
    3,
    n0,
    _HT,
    0,
    [
        _t,
        _n,
        _conf
    ],
    [
        0,
        0,
        [
            ()=>HarnessToolConfiguration$,
            0
        ]
    ],
    1
];
var HarnessToolResultBlock$ = [
    3,
    n0,
    _HTRB,
    0,
    [
        _tUI,
        _co,
        _sta,
        _t
    ],
    [
        0,
        [
            ()=>HarnessToolResultContentBlocks,
            0
        ],
        0,
        0
    ],
    2
];
var HarnessToolResultBlockStart$ = [
    3,
    n0,
    _HTRBS,
    0,
    [
        _tUI,
        _sta
    ],
    [
        0,
        0
    ],
    1
];
var HarnessToolUseBlock$ = [
    3,
    n0,
    _HTUB,
    0,
    [
        _n,
        _tUI,
        _i,
        _t,
        _sN
    ],
    [
        0,
        0,
        [
            ()=>SensitiveJson,
            0
        ],
        0,
        0
    ],
    3
];
var HarnessToolUseBlockDelta$ = [
    3,
    n0,
    _HTUBD,
    0,
    [
        _i
    ],
    [
        [
            ()=>SensitiveText,
            0
        ]
    ],
    1
];
var HarnessToolUseBlockStart$ = [
    3,
    n0,
    _HTUBS,
    0,
    [
        _tUI,
        _n,
        _t,
        _sN
    ],
    [
        0,
        0,
        0,
        0
    ],
    2
];
var InputContentBlock$ = [
    3,
    n0,
    _ICB,
    0,
    [
        _pa,
        _te,
        _bl
    ],
    [
        0,
        0,
        [
            ()=>Body,
            0
        ]
    ],
    1
];
var InvokeAgentRuntimeCommandRequest$ = [
    3,
    n0,
    _IARCR,
    0,
    [
        _aRA,
        _bo,
        _cTo,
        _ac,
        _rSI,
        _tI,
        _tPr,
        _tS,
        _ba,
        _q,
        _aIc
    ],
    [
        [
            0,
            1
        ],
        [
            ()=>InvokeAgentRuntimeCommandRequestBody$,
            16
        ],
        [
            0,
            {
                [_hH]: _CT
            }
        ],
        [
            0,
            {
                [_hH]: _A
            }
        ],
        [
            0,
            {
                [_hH]: _XABARSI,
                [_iT]: 1
            }
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            0,
            {
                [_hH]: _tra
            }
        ],
        [
            0,
            {
                [_hH]: _ba
            }
        ],
        [
            0,
            {
                [_hQ]: _q
            }
        ],
        [
            0,
            {
                [_hQ]: _aIc
            }
        ]
    ],
    2
];
var InvokeAgentRuntimeCommandRequestBody$ = [
    3,
    n0,
    _IARCRB,
    0,
    [
        _com,
        _ti
    ],
    [
        0,
        1
    ],
    1
];
var InvokeAgentRuntimeCommandResponse$ = [
    3,
    n0,
    _IARCRn,
    0,
    [
        _cTo,
        _stre,
        _rSI,
        _tI,
        _tPr,
        _tS,
        _ba,
        _sCt
    ],
    [
        [
            0,
            {
                [_hH]: _CT
            }
        ],
        [
            ()=>InvokeAgentRuntimeCommandStreamOutput$,
            16
        ],
        [
            0,
            {
                [_hH]: _XABARSI
            }
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            0,
            {
                [_hH]: _tra
            }
        ],
        [
            0,
            {
                [_hH]: _ba
            }
        ],
        [
            1,
            32
        ]
    ],
    2
];
var InvokeAgentRuntimeRequest$ = [
    3,
    n0,
    _IARR,
    0,
    [
        _aRA,
        _p,
        _cTo,
        _ac,
        _mSI,
        _rSI,
        _mPV,
        _rUI,
        _tI,
        _tPr,
        _tS,
        _ba,
        _q,
        _aIc
    ],
    [
        [
            0,
            1
        ],
        [
            ()=>Body,
            16
        ],
        [
            0,
            {
                [_hH]: _CT
            }
        ],
        [
            0,
            {
                [_hH]: _A
            }
        ],
        [
            0,
            {
                [_hH]: _MSI
            }
        ],
        [
            0,
            {
                [_hH]: _XABARSI,
                [_iT]: 1
            }
        ],
        [
            0,
            {
                [_hH]: _MPV
            }
        ],
        [
            0,
            {
                [_hH]: _XABARUI
            }
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            0,
            {
                [_hH]: _tra
            }
        ],
        [
            0,
            {
                [_hH]: _ba
            }
        ],
        [
            0,
            {
                [_hQ]: _q
            }
        ],
        [
            0,
            {
                [_hQ]: _aIc
            }
        ]
    ],
    2
];
var InvokeAgentRuntimeResponse$ = [
    3,
    n0,
    _IARRn,
    0,
    [
        _cTo,
        _rSI,
        _mSI,
        _mPV,
        _tI,
        _tPr,
        _tS,
        _ba,
        _resp,
        _sCt
    ],
    [
        [
            0,
            {
                [_hH]: _CT
            }
        ],
        [
            0,
            {
                [_hH]: _XABARSI
            }
        ],
        [
            0,
            {
                [_hH]: _MSI
            }
        ],
        [
            0,
            {
                [_hH]: _MPV
            }
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            0,
            {
                [_hH]: _tra
            }
        ],
        [
            0,
            {
                [_hH]: _ba
            }
        ],
        [
            ()=>ResponseStream,
            16
        ],
        [
            1,
            32
        ]
    ],
    1
];
var InvokeBrowserRequest$ = [
    3,
    n0,
    _IBR,
    0,
    [
        _bI,
        _sI,
        _act
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hH]: _xabsi
            }
        ],
        ()=>BrowserAction$
    ],
    3
];
var InvokeBrowserResponse$ = [
    3,
    n0,
    _IBRn,
    0,
    [
        _resu,
        _sI
    ],
    [
        ()=>BrowserActionResult$,
        [
            0,
            {
                [_hH]: _xabsi
            }
        ]
    ],
    2
];
var InvokeCodeInterpreterRequest$ = [
    3,
    n0,
    _ICIR,
    0,
    [
        _cII,
        _n,
        _sI,
        _tI,
        _tPr,
        _ar
    ],
    [
        [
            0,
            1
        ],
        0,
        [
            0,
            {
                [_hH]: _xacisi
            }
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            ()=>ToolArguments$,
            0
        ]
    ],
    2
];
var InvokeCodeInterpreterResponse$ = [
    3,
    n0,
    _ICIRn,
    0,
    [
        _stre,
        _sI
    ],
    [
        [
            ()=>CodeInterpreterStreamOutput$,
            16
        ],
        [
            0,
            {
                [_hH]: _xacisi
            }
        ]
    ],
    1
];
var InvokeHarnessRequest$ = [
    3,
    n0,
    _IHR,
    0,
    [
        _hA,
        _rSI,
        _mes,
        _mo,
        _sP,
        _to,
        _sk,
        _aTl,
        _mIa,
        _mTa,
        _tSi,
        _aI
    ],
    [
        [
            0,
            {
                [_hQ]: _hA
            }
        ],
        [
            0,
            {
                [_hH]: _XABARSI
            }
        ],
        [
            ()=>HarnessMessages,
            0
        ],
        ()=>HarnessModelConfiguration$,
        [
            ()=>HarnessSystemPrompt,
            0
        ],
        [
            ()=>HarnessTools,
            0
        ],
        ()=>HarnessSkills,
        64 | 0,
        1,
        1,
        1,
        0
    ],
    3
];
var InvokeHarnessResponse$ = [
    3,
    n0,
    _IHRn,
    0,
    [
        _stre
    ],
    [
        [
            ()=>InvokeHarnessStreamOutput$,
            16
        ]
    ],
    1
];
var KeyPressArguments$ = [
    3,
    n0,
    _KPA,
    0,
    [
        _k,
        _pr
    ],
    [
        0,
        1
    ],
    1
];
var KeyPressResult$ = [
    3,
    n0,
    _KPR,
    0,
    [
        _sta,
        _e
    ],
    [
        0,
        0
    ],
    1
];
var KeyShortcutArguments$ = [
    3,
    n0,
    _KSA,
    0,
    [
        _ke
    ],
    [
        64 | 0
    ],
    1
];
var KeyShortcutResult$ = [
    3,
    n0,
    _KSR,
    0,
    [
        _sta,
        _e
    ],
    [
        0,
        0
    ],
    1
];
var KeyTypeArguments$ = [
    3,
    n0,
    _KTA,
    0,
    [
        _te
    ],
    [
        0
    ],
    1
];
var KeyTypeResult$ = [
    3,
    n0,
    _KTR,
    0,
    [
        _sta,
        _e
    ],
    [
        0,
        0
    ],
    1
];
var ListActorsInput$ = [
    3,
    n0,
    _LAI,
    0,
    [
        _mI,
        _mRa,
        _nT
    ],
    [
        [
            0,
            1
        ],
        1,
        0
    ],
    1
];
var ListActorsOutput$ = [
    3,
    n0,
    _LAO,
    0,
    [
        _aSc,
        _nT
    ],
    [
        ()=>ActorSummaryList,
        0
    ],
    1
];
var ListBrowserSessionsRequest$ = [
    3,
    n0,
    _LBSR,
    0,
    [
        _bI,
        _mRa,
        _nT,
        _sta
    ],
    [
        [
            0,
            1
        ],
        1,
        0,
        0
    ],
    1
];
var ListBrowserSessionsResponse$ = [
    3,
    n0,
    _LBSRi,
    0,
    [
        _it,
        _nT
    ],
    [
        ()=>BrowserSessionSummaries,
        0
    ],
    1
];
var ListCodeInterpreterSessionsRequest$ = [
    3,
    n0,
    _LCISR,
    0,
    [
        _cII,
        _mRa,
        _nT,
        _sta
    ],
    [
        [
            0,
            1
        ],
        1,
        0,
        0
    ],
    1
];
var ListCodeInterpreterSessionsResponse$ = [
    3,
    n0,
    _LCISRi,
    0,
    [
        _it,
        _nT
    ],
    [
        ()=>CodeInterpreterSessionSummaries,
        0
    ],
    1
];
var ListEventsInput$ = [
    3,
    n0,
    _LEI,
    0,
    [
        _mI,
        _sI,
        _aI,
        _iP,
        _f,
        _mRa,
        _nT
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            1
        ],
        [
            0,
            1
        ],
        2,
        ()=>FilterInput$,
        1,
        0
    ],
    3
];
var ListEventsOutput$ = [
    3,
    n0,
    _LEO,
    0,
    [
        _eve,
        _nT
    ],
    [
        [
            ()=>EventList,
            0
        ],
        0
    ],
    1
];
var ListMemoryExtractionJobsInput$ = [
    3,
    n0,
    _LMEJI,
    0,
    [
        _mI,
        _mRa,
        _f,
        _nT
    ],
    [
        [
            0,
            1
        ],
        1,
        ()=>ExtractionJobFilterInput$,
        0
    ],
    1
];
var ListMemoryExtractionJobsOutput$ = [
    3,
    n0,
    _LMEJO,
    0,
    [
        _j,
        _nT
    ],
    [
        ()=>ExtractionJobMetadataList,
        0
    ],
    1
];
var ListMemoryRecordsInput$ = [
    3,
    n0,
    _LMRI,
    0,
    [
        _mI,
        _na,
        _nP,
        _mSIe,
        _mRa,
        _nT
    ],
    [
        [
            0,
            1
        ],
        0,
        0,
        0,
        1,
        0
    ],
    1
];
var ListMemoryRecordsOutput$ = [
    3,
    n0,
    _LMRO,
    0,
    [
        _mRS,
        _nT
    ],
    [
        [
            ()=>MemoryRecordSummaryList,
            0
        ],
        0
    ],
    1
];
var ListSessionsInput$ = [
    3,
    n0,
    _LSI,
    0,
    [
        _mI,
        _aI,
        _mRa,
        _nT,
        _f
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            1
        ],
        1,
        0,
        ()=>SessionFilter$
    ],
    2
];
var ListSessionsOutput$ = [
    3,
    n0,
    _LSO,
    0,
    [
        _sSes,
        _nT
    ],
    [
        ()=>SessionSummaryList,
        0
    ],
    1
];
var LiveViewStream$ = [
    3,
    n0,
    _LVS,
    0,
    [
        _sE
    ],
    [
        0
    ]
];
var McpDescriptor$ = [
    3,
    n0,
    _MD,
    0,
    [
        _se,
        _to
    ],
    [
        ()=>ServerDefinition$,
        ()=>ToolsDefinition$
    ],
    2
];
var MemoryMetadataFilterExpression$ = [
    3,
    n0,
    _MMFE,
    0,
    [
        _le,
        _o,
        _ri
    ],
    [
        ()=>LeftExpression$,
        0,
        ()=>RightExpression$
    ],
    2
];
var MemoryRecord$ = [
    3,
    n0,
    _MR,
    0,
    [
        _mRI,
        _co,
        _mSIe,
        _nam,
        _cA,
        _me
    ],
    [
        0,
        [
            ()=>MemoryContent$,
            0
        ],
        0,
        64 | 0,
        4,
        ()=>MetadataMap
    ],
    5
];
var MemoryRecordCreateInput$ = [
    3,
    n0,
    _MRCI,
    0,
    [
        _rI,
        _nam,
        _co,
        _tim,
        _mSIe
    ],
    [
        0,
        64 | 0,
        [
            ()=>MemoryContent$,
            0
        ],
        4,
        0
    ],
    4
];
var MemoryRecordDeleteInput$ = [
    3,
    n0,
    _MRDI,
    0,
    [
        _mRI
    ],
    [
        0
    ],
    1
];
var MemoryRecordOutput$ = [
    3,
    n0,
    _MRO,
    0,
    [
        _mRI,
        _sta,
        _rI,
        _eCr,
        _eM
    ],
    [
        0,
        0,
        0,
        1,
        0
    ],
    2
];
var MemoryRecordSummary$ = [
    3,
    n0,
    _MRS,
    0,
    [
        _mRI,
        _co,
        _mSIe,
        _nam,
        _cA,
        _sco,
        _me
    ],
    [
        0,
        [
            ()=>MemoryContent$,
            0
        ],
        0,
        64 | 0,
        4,
        1,
        ()=>MetadataMap
    ],
    5
];
var MemoryRecordUpdateInput$ = [
    3,
    n0,
    _MRUI,
    0,
    [
        _mRI,
        _tim,
        _co,
        _nam,
        _mSIe
    ],
    [
        0,
        4,
        [
            ()=>MemoryContent$,
            0
        ],
        64 | 0,
        0
    ],
    2
];
var MessageMetadata$ = [
    3,
    n0,
    _MM,
    0,
    [
        _eI,
        _mIe
    ],
    [
        0,
        1
    ],
    2
];
var MouseClickArguments$ = [
    3,
    n0,
    _MCA,
    0,
    [
        _x,
        _y,
        _bu,
        _cC
    ],
    [
        1,
        1,
        0,
        1
    ],
    2
];
var MouseClickResult$ = [
    3,
    n0,
    _MCR,
    0,
    [
        _sta,
        _e
    ],
    [
        0,
        0
    ],
    1
];
var MouseDragArguments$ = [
    3,
    n0,
    _MDA,
    0,
    [
        _eX,
        _eY,
        _sX,
        _sY,
        _bu
    ],
    [
        1,
        1,
        1,
        1,
        0
    ],
    4
];
var MouseDragResult$ = [
    3,
    n0,
    _MDR,
    0,
    [
        _sta,
        _e
    ],
    [
        0,
        0
    ],
    1
];
var MouseMoveArguments$ = [
    3,
    n0,
    _MMA,
    0,
    [
        _x,
        _y
    ],
    [
        1,
        1
    ],
    2
];
var MouseMoveResult$ = [
    3,
    n0,
    _MMR,
    0,
    [
        _sta,
        _e
    ],
    [
        0,
        0
    ],
    1
];
var MouseScrollArguments$ = [
    3,
    n0,
    _MSA,
    0,
    [
        _x,
        _y,
        _dX,
        _dY
    ],
    [
        1,
        1,
        1,
        1
    ],
    2
];
var MouseScrollResult$ = [
    3,
    n0,
    _MSR,
    0,
    [
        _sta,
        _e
    ],
    [
        0,
        0
    ],
    1
];
var OAuthCredentialProvider$ = [
    3,
    n0,
    _OACP,
    0,
    [
        _pA,
        _sc,
        _cP,
        _gT,
        _dRU
    ],
    [
        0,
        64 | 0,
        [
            ()=>OAuthCustomParameters,
            0
        ],
        0,
        0
    ],
    2
];
var ProxyBypass$ = [
    3,
    n0,
    _PB,
    0,
    [
        _dP
    ],
    [
        64 | 0
    ]
];
var ProxyConfiguration$ = [
    3,
    n0,
    _PC,
    0,
    [
        _pro,
        _by
    ],
    [
        ()=>Proxies,
        ()=>ProxyBypass$
    ],
    1
];
var RegistryRecordSummary$ = [
    3,
    n0,
    _RRS,
    0,
    [
        _rA,
        _rAe,
        _rIe,
        _n,
        _dT,
        _des,
        _ve,
        _sta,
        _cA,
        _uA,
        _de
    ],
    [
        0,
        0,
        0,
        0,
        0,
        ()=>Descriptors$,
        0,
        0,
        5,
        5,
        [
            ()=>Description,
            0
        ]
    ],
    10
];
var ResourceContent$ = [
    3,
    n0,
    _RC,
    0,
    [
        _t,
        _u,
        _mT,
        _te,
        _bl
    ],
    [
        0,
        0,
        0,
        0,
        21
    ],
    1
];
var ResponseChunk$ = [
    3,
    n0,
    _RCe,
    0,
    [
        _cSo,
        _cD,
        _cSon
    ],
    [
        ()=>ContentStartEvent$,
        ()=>ContentDeltaEvent$,
        ()=>ContentStopEvent$
    ]
];
var RetrieveMemoryRecordsInput$ = [
    3,
    n0,
    _RMRI,
    0,
    [
        _mI,
        _sCe,
        _na,
        _nP,
        _nT,
        _mRa
    ],
    [
        [
            0,
            1
        ],
        [
            ()=>SearchCriteria$,
            0
        ],
        0,
        0,
        0,
        1
    ],
    2
];
var RetrieveMemoryRecordsOutput$ = [
    3,
    n0,
    _RMRO,
    0,
    [
        _mRS,
        _nT
    ],
    [
        [
            ()=>MemoryRecordSummaryList,
            0
        ],
        0
    ],
    1
];
var S3Location$ = [
    3,
    n0,
    _SL,
    0,
    [
        _buc,
        _pre,
        _vI
    ],
    [
        0,
        0,
        0
    ],
    2
];
var SaveBrowserSessionProfileRequest$ = [
    3,
    n0,
    _SBSPR,
    0,
    [
        _pI,
        _bI,
        _sI,
        _tI,
        _tPr,
        _cT
    ],
    [
        [
            0,
            1
        ],
        0,
        0,
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            0,
            4
        ]
    ],
    3
];
var SaveBrowserSessionProfileResponse$ = [
    3,
    n0,
    _SBSPRa,
    0,
    [
        _pI,
        _bI,
        _sI,
        _lUA
    ],
    [
        0,
        0,
        0,
        5
    ],
    4
];
var ScreenshotArguments$ = [
    3,
    n0,
    _SA,
    0,
    [
        _fo
    ],
    [
        0
    ]
];
var ScreenshotResult$ = [
    3,
    n0,
    _SR,
    0,
    [
        _sta,
        _e,
        _d
    ],
    [
        0,
        0,
        21
    ],
    1
];
var SearchCriteria$ = [
    3,
    n0,
    _SC,
    0,
    [
        _sQ,
        _mSIe,
        _tK,
        _mF
    ],
    [
        [
            ()=>SensitiveString,
            0
        ],
        0,
        1,
        ()=>MemoryMetadataFilterList
    ],
    1
];
var SearchRegistryRecordsRequest$ = [
    3,
    n0,
    _SRRR,
    0,
    [
        _sQ,
        _rIeg,
        _mRa,
        _fi
    ],
    [
        0,
        64 | 0,
        1,
        15
    ],
    2
];
var SearchRegistryRecordsResponse$ = [
    3,
    n0,
    _SRRRe,
    0,
    [
        _rR
    ],
    [
        [
            ()=>RegistryRecordSummaryList,
            0
        ]
    ],
    1
];
var SecretsManagerLocation$ = [
    3,
    n0,
    _SML,
    0,
    [
        _sA
    ],
    [
        0
    ],
    1
];
var ServerDefinition$ = [
    3,
    n0,
    _SD,
    0,
    [
        _sV,
        _iC
    ],
    [
        0,
        0
    ]
];
var SessionFilter$ = [
    3,
    n0,
    _SF,
    0,
    [
        _eF
    ],
    [
        0
    ]
];
var SessionSummary$ = [
    3,
    n0,
    _SSe,
    0,
    [
        _sI,
        _aI,
        _cA
    ],
    [
        0,
        0,
        4
    ],
    3
];
var SkillDefinition$ = [
    3,
    n0,
    _SDk,
    0,
    [
        _sV,
        _iC
    ],
    [
        0,
        0
    ]
];
var SkillMdDefinition$ = [
    3,
    n0,
    _SMD,
    0,
    [
        _iC
    ],
    [
        0
    ]
];
var SpanContext$ = [
    3,
    n0,
    _SCp,
    0,
    [
        _sI,
        _tI,
        _sIp
    ],
    [
        0,
        0,
        0
    ],
    1
];
var StartBrowserSessionRequest$ = [
    3,
    n0,
    _SBSR,
    0,
    [
        _bI,
        _tI,
        _tPr,
        _n,
        _sTS,
        _vP,
        _ext,
        _pC,
        _pCr,
        _eP,
        _ce,
        _cT
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        0,
        1,
        ()=>ViewPort$,
        ()=>BrowserExtensions,
        ()=>BrowserProfileConfiguration$,
        ()=>ProxyConfiguration$,
        ()=>BrowserEnterprisePolicies,
        ()=>Certificates,
        [
            0,
            4
        ]
    ],
    1
];
var StartBrowserSessionResponse$ = [
    3,
    n0,
    _SBSRt,
    0,
    [
        _bI,
        _sI,
        _cA,
        _str
    ],
    [
        0,
        0,
        5,
        ()=>BrowserSessionStream$
    ],
    3
];
var StartCodeInterpreterSessionRequest$ = [
    3,
    n0,
    _SCISR,
    0,
    [
        _cII,
        _tI,
        _tPr,
        _n,
        _sTS,
        _ce,
        _cT
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        0,
        1,
        ()=>Certificates,
        [
            0,
            4
        ]
    ],
    1
];
var StartCodeInterpreterSessionResponse$ = [
    3,
    n0,
    _SCISRt,
    0,
    [
        _cII,
        _sI,
        _cA
    ],
    [
        0,
        0,
        5
    ],
    3
];
var StartMemoryExtractionJobInput$ = [
    3,
    n0,
    _SMEJI,
    0,
    [
        _mI,
        _eJ,
        _cT
    ],
    [
        [
            0,
            1
        ],
        ()=>ExtractionJob$,
        [
            0,
            4
        ]
    ],
    2
];
var StartMemoryExtractionJobOutput$ = [
    3,
    n0,
    _SMEJO,
    0,
    [
        _jI
    ],
    [
        0
    ],
    1
];
var StopBrowserSessionRequest$ = [
    3,
    n0,
    _SBSRto,
    0,
    [
        _bI,
        _sI,
        _tI,
        _tPr,
        _cT
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hQ]: _sI
            }
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            0,
            4
        ]
    ],
    2
];
var StopBrowserSessionResponse$ = [
    3,
    n0,
    _SBSRtop,
    0,
    [
        _bI,
        _sI,
        _lUA
    ],
    [
        0,
        0,
        5
    ],
    3
];
var StopCodeInterpreterSessionRequest$ = [
    3,
    n0,
    _SCISRto,
    0,
    [
        _cII,
        _sI,
        _tI,
        _tPr,
        _cT
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hQ]: _sI
            }
        ],
        [
            0,
            {
                [_hH]: _XATI
            }
        ],
        [
            0,
            {
                [_hH]: _tr
            }
        ],
        [
            0,
            4
        ]
    ],
    2
];
var StopCodeInterpreterSessionResponse$ = [
    3,
    n0,
    _SCISRtop,
    0,
    [
        _cII,
        _sI,
        _lUA
    ],
    [
        0,
        0,
        5
    ],
    3
];
var StopRuntimeSessionRequest$ = [
    3,
    n0,
    _SRSR,
    0,
    [
        _rSI,
        _aRA,
        _q,
        _cT
    ],
    [
        [
            0,
            {
                [_hH]: _XABARSI
            }
        ],
        [
            0,
            1
        ],
        [
            0,
            {
                [_hQ]: _q
            }
        ],
        [
            0,
            4
        ]
    ],
    2
];
var StopRuntimeSessionResponse$ = [
    3,
    n0,
    _SRSRt,
    0,
    [
        _rSI,
        _sCt
    ],
    [
        [
            0,
            {
                [_hH]: _XABARSI
            }
        ],
        [
            1,
            32
        ]
    ]
];
var TokenUsage$ = [
    3,
    n0,
    _TU,
    0,
    [
        _iTn,
        _oT,
        _tT
    ],
    [
        1,
        1,
        1
    ]
];
var ToolArguments$ = [
    3,
    n0,
    _TA,
    0,
    [
        _cod,
        _lan,
        _cCl,
        _com,
        _pa,
        _pat,
        _co,
        _dPi,
        _tIa,
        _ru
    ],
    [
        0,
        0,
        2,
        0,
        0,
        64 | 0,
        [
            ()=>InputContentBlockList,
            0
        ],
        0,
        0,
        0
    ]
];
var ToolResultStructuredContent$ = [
    3,
    n0,
    _TRSC,
    0,
    [
        _tIa,
        _tSa,
        _std,
        _stde,
        _eC,
        _eTxe
    ],
    [
        0,
        0,
        0,
        0,
        1,
        1
    ]
];
var ToolsDefinition$ = [
    3,
    n0,
    _TD,
    0,
    [
        _pV,
        _iC
    ],
    [
        0,
        0
    ]
];
var UpdateBrowserStreamRequest$ = [
    3,
    n0,
    _UBSR,
    0,
    [
        _bI,
        _sI,
        _sUt,
        _cT
    ],
    [
        [
            0,
            1
        ],
        [
            0,
            {
                [_hQ]: _sI
            }
        ],
        ()=>StreamUpdate$,
        [
            0,
            4
        ]
    ],
    3
];
var UpdateBrowserStreamResponse$ = [
    3,
    n0,
    _UBSRp,
    0,
    [
        _bI,
        _sI,
        _str,
        _uA
    ],
    [
        0,
        0,
        ()=>BrowserSessionStream$,
        5
    ],
    4
];
var ValidationExceptionField$ = [
    3,
    n0,
    _VEF,
    0,
    [
        _n,
        _m
    ],
    [
        0,
        0
    ],
    2
];
var ViewPort$ = [
    3,
    n0,
    _VP,
    0,
    [
        _w,
        _he
    ],
    [
        1,
        1
    ],
    2
];
var __Unit = "unit";
var ActorSummaryList = [
    1,
    n0,
    _ASL,
    0,
    ()=>ActorSummary$
];
var BrowserEnterprisePolicies = [
    1,
    n0,
    _BEPr,
    0,
    ()=>BrowserEnterprisePolicy$
];
var BrowserExtensions = [
    1,
    n0,
    _BEr,
    0,
    ()=>BrowserExtension$
];
var BrowserSessionSummaries = [
    1,
    n0,
    _BSSro,
    0,
    ()=>BrowserSessionSummary$
];
var Certificates = [
    1,
    n0,
    _Ce,
    0,
    ()=>Certificate$
];
var CodeInterpreterSessionSummaries = [
    1,
    n0,
    _CISSo,
    0,
    ()=>CodeInterpreterSessionSummary$
];
var ContentBlockList = [
    1,
    n0,
    _CBL,
    0,
    ()=>ContentBlock$
];
var DomainPatterns = 64 | 0;
var EvaluationContentList = [
    1,
    n0,
    _ECL,
    0,
    ()=>EvaluationContent$
];
var EvaluationReferenceInputs = [
    1,
    n0,
    _ERIv,
    8,
    ()=>EvaluationReferenceInput$
];
var EvaluationResults = [
    1,
    n0,
    _ERva,
    0,
    [
        ()=>EvaluationResultContent$,
        0
    ]
];
var EvaluationToolNames = 64 | 0;
var EventList = [
    1,
    n0,
    _EL,
    0,
    [
        ()=>Event$,
        0
    ]
];
var EventMetadataFilterList = [
    1,
    n0,
    _EMFL,
    0,
    ()=>EventMetadataFilterExpression$
];
var ExtractionJobMetadataList = [
    1,
    n0,
    _EJML,
    0,
    ()=>ExtractionJobMetadata$
];
var HarnessAllowedTools = 64 | 0;
var HarnessContentBlocks = [
    1,
    n0,
    _HCB,
    0,
    [
        ()=>HarnessContentBlock$,
        0
    ]
];
var HarnessMessages = [
    1,
    n0,
    _HMa,
    0,
    [
        ()=>HarnessMessage$,
        0
    ]
];
var HarnessSkills = [
    1,
    n0,
    _HS,
    0,
    ()=>HarnessSkill$
];
var HarnessSystemPrompt = [
    1,
    n0,
    _HSP,
    0,
    [
        ()=>HarnessSystemContentBlock$,
        0
    ]
];
var HarnessToolResultBlocksDelta = [
    1,
    n0,
    _HTRBD,
    0,
    [
        ()=>HarnessToolResultBlockDelta$,
        0
    ]
];
var HarnessToolResultContentBlocks = [
    1,
    n0,
    _HTRCB,
    0,
    [
        ()=>HarnessToolResultContentBlock$,
        0
    ]
];
var HarnessTools = [
    1,
    n0,
    _HTa,
    0,
    [
        ()=>HarnessTool$,
        0
    ]
];
var IgnoredReferenceInputFields = 64 | 0;
var InputContentBlockList = [
    1,
    n0,
    _ICBL,
    0,
    [
        ()=>InputContentBlock$,
        0
    ]
];
var KeyList = 64 | 0;
var MemoryMetadataFilterList = [
    1,
    n0,
    _MMFL,
    0,
    ()=>MemoryMetadataFilterExpression$
];
var MemoryRecordsCreateInputList = [
    1,
    n0,
    _MRCIL,
    0,
    [
        ()=>MemoryRecordCreateInput$,
        0
    ]
];
var MemoryRecordsDeleteInputList = [
    1,
    n0,
    _MRDIL,
    0,
    ()=>MemoryRecordDeleteInput$
];
var MemoryRecordsOutputList = [
    1,
    n0,
    _MROL,
    0,
    ()=>MemoryRecordOutput$
];
var MemoryRecordSummaryList = [
    1,
    n0,
    _MRSL,
    0,
    [
        ()=>MemoryRecordSummary$,
        0
    ]
];
var MemoryRecordsUpdateInputList = [
    1,
    n0,
    _MRUIL,
    0,
    [
        ()=>MemoryRecordUpdateInput$,
        0
    ]
];
var MessagesList = [
    1,
    n0,
    _ML,
    0,
    ()=>MessageMetadata$
];
var NamespacesList = 64 | 0;
var OAuthScopes = 64 | 0;
var PayloadTypeList = [
    1,
    n0,
    _PTL,
    0,
    [
        ()=>PayloadType$,
        0
    ]
];
var Proxies = [
    1,
    n0,
    _P,
    0,
    ()=>Proxy$
];
var RegistryIdList = 64 | 0;
var RegistryRecordSummaryList = [
    1,
    n0,
    _RRSL,
    0,
    [
        ()=>RegistryRecordSummary$,
        0
    ]
];
var ScopesListType = 64 | 0;
var SessionSummaryList = [
    1,
    n0,
    _SSL,
    0,
    ()=>SessionSummary$
];
var SpanIds = 64 | 0;
var Spans = [
    1,
    n0,
    _Sp,
    8,
    15
];
var StringList = 64 | 0;
var TraceIds = 64 | 0;
var ValidationExceptionFieldList = [
    1,
    n0,
    _VEFL,
    0,
    ()=>ValidationExceptionField$
];
var CustomRequestParametersType = [
    2,
    n0,
    _CRPT,
    0,
    [
        0,
        0
    ],
    [
        ()=>CustomRequestValueType,
        0
    ]
];
var HttpHeadersMap = [
    2,
    n0,
    _HHM,
    8,
    0,
    0
];
var MetadataMap = [
    2,
    n0,
    _MMe,
    0,
    0,
    ()=>MetadataValue$
];
var OAuthCustomParameters = [
    2,
    n0,
    _OACPu,
    0,
    [
        0,
        0
    ],
    [
        ()=>OAuthCustomParametersValue,
        0
    ]
];
var BrowserAction$ = [
    4,
    n0,
    _BAr,
    0,
    [
        _mC,
        _mM,
        _mD,
        _mS,
        _kT,
        _kP,
        _kS,
        _scr
    ],
    [
        ()=>MouseClickArguments$,
        ()=>MouseMoveArguments$,
        ()=>MouseDragArguments$,
        ()=>MouseScrollArguments$,
        ()=>KeyTypeArguments$,
        ()=>KeyPressArguments$,
        ()=>KeyShortcutArguments$,
        ()=>ScreenshotArguments$
    ]
];
var BrowserActionResult$ = [
    4,
    n0,
    _BAR,
    0,
    [
        _mC,
        _mM,
        _mD,
        _mS,
        _kT,
        _kP,
        _kS,
        _scr
    ],
    [
        ()=>MouseClickResult$,
        ()=>MouseMoveResult$,
        ()=>MouseDragResult$,
        ()=>MouseScrollResult$,
        ()=>KeyTypeResult$,
        ()=>KeyPressResult$,
        ()=>KeyShortcutResult$,
        ()=>ScreenshotResult$
    ]
];
var CertificateLocation$ = [
    4,
    n0,
    _CL,
    0,
    [
        _sMe
    ],
    [
        ()=>SecretsManagerLocation$
    ]
];
var CodeInterpreterStreamOutput$ = [
    4,
    n0,
    _CISO,
    {
        [_st]: 1
    },
    [
        _resu,
        _aDE,
        _cE,
        _iSE,
        _rNFE,
        _sQEE,
        _tE,
        _vE
    ],
    [
        ()=>CodeInterpreterResult$,
        [
            ()=>AccessDeniedException$,
            0
        ],
        [
            ()=>ConflictException$,
            0
        ],
        [
            ()=>InternalServerException$,
            0
        ],
        [
            ()=>ResourceNotFoundException$,
            0
        ],
        [
            ()=>ServiceQuotaExceededException$,
            0
        ],
        [
            ()=>ThrottlingException$,
            0
        ],
        [
            ()=>ValidationException$,
            0
        ]
    ]
];
var Content$ = [
    4,
    n0,
    _Con,
    0,
    [
        _te
    ],
    [
        [
            ()=>SensitiveString,
            0
        ]
    ]
];
var Context$ = [
    4,
    n0,
    _Cont,
    0,
    [
        _sCp
    ],
    [
        ()=>SpanContext$
    ]
];
var EvaluationContent$ = [
    4,
    n0,
    _EC,
    0,
    [
        _te
    ],
    [
        0
    ]
];
var EvaluationInput$ = [
    4,
    n0,
    _EI,
    0,
    [
        _sSess
    ],
    [
        [
            ()=>Spans,
            0
        ]
    ]
];
var EvaluationTarget$ = [
    4,
    n0,
    _ET,
    0,
    [
        _sIpa,
        _tIr
    ],
    [
        64 | 0,
        64 | 0
    ]
];
var ExtractionJobMessages$ = [
    4,
    n0,
    _EJMx,
    0,
    [
        _mL
    ],
    [
        ()=>MessagesList
    ]
];
var HarnessContentBlock$ = [
    4,
    n0,
    _HCBa,
    0,
    [
        _te,
        _tUo,
        _tR,
        _rC
    ],
    [
        [
            ()=>SensitiveText,
            0
        ],
        [
            ()=>HarnessToolUseBlock$,
            0
        ],
        [
            ()=>HarnessToolResultBlock$,
            0
        ],
        [
            ()=>HarnessReasoningContentBlock$,
            0
        ]
    ]
];
var HarnessContentBlockDelta$ = [
    4,
    n0,
    _HCBD,
    0,
    [
        _te,
        _tUo,
        _tR,
        _rC
    ],
    [
        [
            ()=>SensitiveText,
            0
        ],
        [
            ()=>HarnessToolUseBlockDelta$,
            0
        ],
        [
            ()=>HarnessToolResultBlocksDelta,
            0
        ],
        [
            ()=>HarnessReasoningContentBlockDelta$,
            0
        ]
    ]
];
var HarnessContentBlockStart$ = [
    4,
    n0,
    _HCBS,
    0,
    [
        _tUo,
        _tR
    ],
    [
        ()=>HarnessToolUseBlockStart$,
        ()=>HarnessToolResultBlockStart$
    ]
];
var HarnessGatewayOutboundAuth$ = [
    4,
    n0,
    _HGOA,
    0,
    [
        _aIw,
        _no,
        _oa
    ],
    [
        ()=>__Unit,
        ()=>__Unit,
        [
            ()=>OAuthCredentialProvider$,
            0
        ]
    ]
];
var HarnessModelConfiguration$ = [
    4,
    n0,
    _HMC,
    0,
    [
        _bMC,
        _oAMC,
        _gMC
    ],
    [
        ()=>HarnessBedrockModelConfig$,
        ()=>HarnessOpenAiModelConfig$,
        ()=>HarnessGeminiModelConfig$
    ]
];
var HarnessReasoningContentBlock$ = [
    4,
    n0,
    _HRCB,
    8,
    [
        _rT,
        _rCe
    ],
    [
        [
            ()=>HarnessReasoningTextBlock$,
            0
        ],
        21
    ]
];
var HarnessReasoningContentBlockDelta$ = [
    4,
    n0,
    _HRCBD,
    8,
    [
        _te,
        _rCe,
        _sig
    ],
    [
        0,
        [
            ()=>Body,
            0
        ],
        0
    ]
];
var HarnessSkill$ = [
    4,
    n0,
    _HSa,
    0,
    [
        _pa
    ],
    [
        0
    ]
];
var HarnessSystemContentBlock$ = [
    4,
    n0,
    _HSCB,
    0,
    [
        _te
    ],
    [
        [
            ()=>SensitiveText,
            0
        ]
    ]
];
var HarnessToolConfiguration$ = [
    4,
    n0,
    _HTC,
    0,
    [
        _rM,
        _aCB,
        _aCG,
        _iF,
        _aCCI
    ],
    [
        [
            ()=>HarnessRemoteMcpConfig$,
            0
        ],
        ()=>HarnessAgentCoreBrowserConfig$,
        [
            ()=>HarnessAgentCoreGatewayConfig$,
            0
        ],
        [
            ()=>HarnessInlineFunctionConfig$,
            0
        ],
        ()=>HarnessAgentCoreCodeInterpreterConfig$
    ]
];
var HarnessToolResultBlockDelta$ = [
    4,
    n0,
    _HTRBDa,
    0,
    [
        _te,
        _js
    ],
    [
        [
            ()=>SensitiveText,
            0
        ],
        [
            ()=>SensitiveJson,
            0
        ]
    ]
];
var HarnessToolResultContentBlock$ = [
    4,
    n0,
    _HTRCBa,
    0,
    [
        _te,
        _js
    ],
    [
        [
            ()=>SensitiveText,
            0
        ],
        [
            ()=>SensitiveJson,
            0
        ]
    ]
];
var InvokeAgentRuntimeCommandStreamOutput$ = [
    4,
    n0,
    _IARCSO,
    {
        [_st]: 1
    },
    [
        _ch,
        _aDE,
        _iSE,
        _rNFE,
        _sQEE,
        _tE,
        _vE,
        _rCE
    ],
    [
        ()=>ResponseChunk$,
        [
            ()=>AccessDeniedException$,
            0
        ],
        [
            ()=>InternalServerException$,
            0
        ],
        [
            ()=>ResourceNotFoundException$,
            0
        ],
        [
            ()=>ServiceQuotaExceededException$,
            0
        ],
        [
            ()=>ThrottlingException$,
            0
        ],
        [
            ()=>ValidationException$,
            0
        ],
        [
            ()=>RuntimeClientError$,
            0
        ]
    ]
];
var InvokeHarnessStreamOutput$ = [
    4,
    n0,
    _IHSO,
    {
        [_st]: 1
    },
    [
        _mSe,
        _cBS,
        _cBD,
        _cBSo,
        _mSes,
        _me,
        _iSE,
        _vE,
        _rCE
    ],
    [
        ()=>HarnessMessageStartEvent$,
        ()=>HarnessContentBlockStartEvent$,
        [
            ()=>HarnessContentBlockDeltaEvent$,
            0
        ],
        ()=>HarnessContentBlockStopEvent$,
        ()=>HarnessMessageStopEvent$,
        ()=>HarnessMetadataEvent$,
        [
            ()=>InternalServerException$,
            0
        ],
        [
            ()=>ValidationException$,
            0
        ],
        [
            ()=>RuntimeClientError$,
            0
        ]
    ]
];
var LeftExpression$ = [
    4,
    n0,
    _LE,
    0,
    [
        _mK
    ],
    [
        0
    ]
];
var MemoryContent$ = [
    4,
    n0,
    _MC,
    0,
    [
        _te
    ],
    [
        [
            ()=>SensitiveString,
            0
        ]
    ]
];
var MetadataValue$ = [
    4,
    n0,
    _MV,
    0,
    [
        _sVt
    ],
    [
        0
    ]
];
var PayloadType$ = [
    4,
    n0,
    _PT,
    0,
    [
        _conv,
        _bl
    ],
    [
        [
            ()=>Conversational$,
            0
        ],
        [
            ()=>Document,
            0
        ]
    ]
];
var Proxy$ = [
    4,
    n0,
    _Pr,
    0,
    [
        _ePx
    ],
    [
        ()=>ExternalProxy$
    ]
];
var ProxyCredentials$ = [
    4,
    n0,
    _PCr,
    0,
    [
        _bAa
    ],
    [
        ()=>BasicAuth$
    ]
];
var ResourceLocation$ = [
    4,
    n0,
    _RL,
    0,
    [
        _s_
    ],
    [
        ()=>S3Location$
    ]
];
var RightExpression$ = [
    4,
    n0,
    _RE,
    0,
    [
        _mV
    ],
    [
        ()=>MetadataValue$
    ]
];
var StreamUpdate$ = [
    4,
    n0,
    _SU,
    0,
    [
        _aSU
    ],
    [
        ()=>AutomationStreamUpdate$
    ]
];
var UserIdentifier$ = [
    4,
    n0,
    _UI,
    0,
    [
        _uT,
        _uIs
    ],
    [
        [
            ()=>UserTokenType,
            0
        ],
        0
    ]
];
var BatchCreateMemoryRecords$ = [
    9,
    n0,
    _BCMR,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/memoryRecords/batchCreate",
            201
        ]
    },
    ()=>BatchCreateMemoryRecordsInput$,
    ()=>BatchCreateMemoryRecordsOutput$
];
var BatchDeleteMemoryRecords$ = [
    9,
    n0,
    _BDMR,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/memoryRecords/batchDelete",
            200
        ]
    },
    ()=>BatchDeleteMemoryRecordsInput$,
    ()=>BatchDeleteMemoryRecordsOutput$
];
var BatchUpdateMemoryRecords$ = [
    9,
    n0,
    _BUMR,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/memoryRecords/batchUpdate",
            200
        ]
    },
    ()=>BatchUpdateMemoryRecordsInput$,
    ()=>BatchUpdateMemoryRecordsOutput$
];
var CompleteResourceTokenAuth$ = [
    9,
    n0,
    _CRTA,
    {
        [_ht]: [
            "POST",
            "/identities/CompleteResourceTokenAuth",
            200
        ]
    },
    ()=>CompleteResourceTokenAuthRequest$,
    ()=>CompleteResourceTokenAuthResponse$
];
var CreateEvent$ = [
    9,
    n0,
    _CEr,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/events",
            201
        ]
    },
    ()=>CreateEventInput$,
    ()=>CreateEventOutput$
];
var DeleteEvent$ = [
    9,
    n0,
    _DE,
    {
        [_ht]: [
            "DELETE",
            "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
            200
        ]
    },
    ()=>DeleteEventInput$,
    ()=>DeleteEventOutput$
];
var DeleteMemoryRecord$ = [
    9,
    n0,
    _DMR,
    {
        [_ht]: [
            "DELETE",
            "/memories/{memoryId}/memoryRecords/{memoryRecordId}",
            200
        ]
    },
    ()=>DeleteMemoryRecordInput$,
    ()=>DeleteMemoryRecordOutput$
];
var Evaluate$ = [
    9,
    n0,
    _Ev,
    {
        [_ht]: [
            "POST",
            "/evaluations/evaluate/{evaluatorId}",
            200
        ]
    },
    ()=>EvaluateRequest$,
    ()=>EvaluateResponse$
];
var GetAgentCard$ = [
    9,
    n0,
    _GAC,
    {
        [_ht]: [
            "GET",
            "/runtimes/{agentRuntimeArn}/invocations/.well-known/agent-card.json",
            200
        ]
    },
    ()=>GetAgentCardRequest$,
    ()=>GetAgentCardResponse$
];
var GetBrowserSession$ = [
    9,
    n0,
    _GBS,
    {
        [_ht]: [
            "GET",
            "/browsers/{browserIdentifier}/sessions/get",
            200
        ]
    },
    ()=>GetBrowserSessionRequest$,
    ()=>GetBrowserSessionResponse$
];
var GetCodeInterpreterSession$ = [
    9,
    n0,
    _GCIS,
    {
        [_ht]: [
            "GET",
            "/code-interpreters/{codeInterpreterIdentifier}/sessions/get",
            200
        ]
    },
    ()=>GetCodeInterpreterSessionRequest$,
    ()=>GetCodeInterpreterSessionResponse$
];
var GetEvent$ = [
    9,
    n0,
    _GE,
    {
        [_ht]: [
            "GET",
            "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
            200
        ]
    },
    ()=>GetEventInput$,
    ()=>GetEventOutput$
];
var GetMemoryRecord$ = [
    9,
    n0,
    _GMR,
    {
        [_ht]: [
            "GET",
            "/memories/{memoryId}/memoryRecord/{memoryRecordId}",
            200
        ]
    },
    ()=>GetMemoryRecordInput$,
    ()=>GetMemoryRecordOutput$
];
var GetResourceApiKey$ = [
    9,
    n0,
    _GRAK,
    {
        [_ht]: [
            "POST",
            "/identities/api-key",
            200
        ]
    },
    ()=>GetResourceApiKeyRequest$,
    ()=>GetResourceApiKeyResponse$
];
var GetResourceOauth2Token$ = [
    9,
    n0,
    _GROT,
    {
        [_ht]: [
            "POST",
            "/identities/oauth2/token",
            200
        ]
    },
    ()=>GetResourceOauth2TokenRequest$,
    ()=>GetResourceOauth2TokenResponse$
];
var GetWorkloadAccessToken$ = [
    9,
    n0,
    _GWAT,
    {
        [_ht]: [
            "POST",
            "/identities/GetWorkloadAccessToken",
            200
        ]
    },
    ()=>GetWorkloadAccessTokenRequest$,
    ()=>GetWorkloadAccessTokenResponse$
];
var GetWorkloadAccessTokenForJWT$ = [
    9,
    n0,
    _GWATFJWT,
    {
        [_ht]: [
            "POST",
            "/identities/GetWorkloadAccessTokenForJWT",
            200
        ]
    },
    ()=>GetWorkloadAccessTokenForJWTRequest$,
    ()=>GetWorkloadAccessTokenForJWTResponse$
];
var GetWorkloadAccessTokenForUserId$ = [
    9,
    n0,
    _GWATFUI,
    {
        [_ht]: [
            "POST",
            "/identities/GetWorkloadAccessTokenForUserId",
            200
        ]
    },
    ()=>GetWorkloadAccessTokenForUserIdRequest$,
    ()=>GetWorkloadAccessTokenForUserIdResponse$
];
var InvokeAgentRuntime$ = [
    9,
    n0,
    _IAR,
    {
        [_ht]: [
            "POST",
            "/runtimes/{agentRuntimeArn}/invocations",
            200
        ]
    },
    ()=>InvokeAgentRuntimeRequest$,
    ()=>InvokeAgentRuntimeResponse$
];
var InvokeAgentRuntimeCommand$ = [
    9,
    n0,
    _IARC,
    {
        [_ht]: [
            "POST",
            "/runtimes/{agentRuntimeArn}/commands",
            200
        ]
    },
    ()=>InvokeAgentRuntimeCommandRequest$,
    ()=>InvokeAgentRuntimeCommandResponse$
];
var InvokeBrowser$ = [
    9,
    n0,
    _IB,
    {
        [_ht]: [
            "POST",
            "/browsers/{browserIdentifier}/sessions/invoke",
            200
        ]
    },
    ()=>InvokeBrowserRequest$,
    ()=>InvokeBrowserResponse$
];
var InvokeCodeInterpreter$ = [
    9,
    n0,
    _ICI,
    {
        [_ht]: [
            "POST",
            "/code-interpreters/{codeInterpreterIdentifier}/tools/invoke",
            200
        ]
    },
    ()=>InvokeCodeInterpreterRequest$,
    ()=>InvokeCodeInterpreterResponse$
];
var InvokeHarness$ = [
    9,
    n0,
    _IH,
    {
        [_ht]: [
            "POST",
            "/harnesses/invoke",
            200
        ]
    },
    ()=>InvokeHarnessRequest$,
    ()=>InvokeHarnessResponse$
];
var ListActors$ = [
    9,
    n0,
    _LA,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/actors",
            200
        ]
    },
    ()=>ListActorsInput$,
    ()=>ListActorsOutput$
];
var ListBrowserSessions$ = [
    9,
    n0,
    _LBS,
    {
        [_ht]: [
            "POST",
            "/browsers/{browserIdentifier}/sessions/list",
            200
        ]
    },
    ()=>ListBrowserSessionsRequest$,
    ()=>ListBrowserSessionsResponse$
];
var ListCodeInterpreterSessions$ = [
    9,
    n0,
    _LCIS,
    {
        [_ht]: [
            "POST",
            "/code-interpreters/{codeInterpreterIdentifier}/sessions/list",
            200
        ]
    },
    ()=>ListCodeInterpreterSessionsRequest$,
    ()=>ListCodeInterpreterSessionsResponse$
];
var ListEvents$ = [
    9,
    n0,
    _LEi,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}",
            200
        ]
    },
    ()=>ListEventsInput$,
    ()=>ListEventsOutput$
];
var ListMemoryExtractionJobs$ = [
    9,
    n0,
    _LMEJ,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/extractionJobs",
            200
        ]
    },
    ()=>ListMemoryExtractionJobsInput$,
    ()=>ListMemoryExtractionJobsOutput$
];
var ListMemoryRecords$ = [
    9,
    n0,
    _LMR,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/memoryRecords",
            200
        ]
    },
    ()=>ListMemoryRecordsInput$,
    ()=>ListMemoryRecordsOutput$
];
var ListSessions$ = [
    9,
    n0,
    _LS,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/actor/{actorId}/sessions",
            200
        ]
    },
    ()=>ListSessionsInput$,
    ()=>ListSessionsOutput$
];
var RetrieveMemoryRecords$ = [
    9,
    n0,
    _RMR,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/retrieve",
            200
        ]
    },
    ()=>RetrieveMemoryRecordsInput$,
    ()=>RetrieveMemoryRecordsOutput$
];
var SaveBrowserSessionProfile$ = [
    9,
    n0,
    _SBSP,
    {
        [_ht]: [
            "PUT",
            "/browser-profiles/{profileIdentifier}/save",
            200
        ]
    },
    ()=>SaveBrowserSessionProfileRequest$,
    ()=>SaveBrowserSessionProfileResponse$
];
var SearchRegistryRecords$ = [
    9,
    n0,
    _SRR,
    {
        [_ht]: [
            "POST",
            "/registry-records/search",
            200
        ]
    },
    ()=>SearchRegistryRecordsRequest$,
    ()=>SearchRegistryRecordsResponse$
];
var StartBrowserSession$ = [
    9,
    n0,
    _SBS,
    {
        [_ht]: [
            "PUT",
            "/browsers/{browserIdentifier}/sessions/start",
            200
        ]
    },
    ()=>StartBrowserSessionRequest$,
    ()=>StartBrowserSessionResponse$
];
var StartCodeInterpreterSession$ = [
    9,
    n0,
    _SCIS,
    {
        [_ht]: [
            "PUT",
            "/code-interpreters/{codeInterpreterIdentifier}/sessions/start",
            200
        ]
    },
    ()=>StartCodeInterpreterSessionRequest$,
    ()=>StartCodeInterpreterSessionResponse$
];
var StartMemoryExtractionJob$ = [
    9,
    n0,
    _SMEJ,
    {
        [_ht]: [
            "POST",
            "/memories/{memoryId}/extractionJobs/start",
            200
        ]
    },
    ()=>StartMemoryExtractionJobInput$,
    ()=>StartMemoryExtractionJobOutput$
];
var StopBrowserSession$ = [
    9,
    n0,
    _SBSt,
    {
        [_ht]: [
            "PUT",
            "/browsers/{browserIdentifier}/sessions/stop",
            200
        ]
    },
    ()=>StopBrowserSessionRequest$,
    ()=>StopBrowserSessionResponse$
];
var StopCodeInterpreterSession$ = [
    9,
    n0,
    _SCISt,
    {
        [_ht]: [
            "PUT",
            "/code-interpreters/{codeInterpreterIdentifier}/sessions/stop",
            200
        ]
    },
    ()=>StopCodeInterpreterSessionRequest$,
    ()=>StopCodeInterpreterSessionResponse$
];
var StopRuntimeSession$ = [
    9,
    n0,
    _SRS,
    {
        [_ht]: [
            "POST",
            "/runtimes/{agentRuntimeArn}/stopruntimesession",
            200
        ]
    },
    ()=>StopRuntimeSessionRequest$,
    ()=>StopRuntimeSessionResponse$
];
var UpdateBrowserStream$ = [
    9,
    n0,
    _UBS,
    {
        [_ht]: [
            "PUT",
            "/browsers/{browserIdentifier}/sessions/streams/update",
            200
        ]
    },
    ()=>UpdateBrowserStreamRequest$,
    ()=>UpdateBrowserStreamResponse$
];
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.shared.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$json$2f$AwsRestJsonProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/json/AwsRestJsonProtocol.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/url-parser/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-base64/dist-es/fromBase64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-base64/dist-es/toBase64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$sdk$2d$stream$2d$mixin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-utf8/dist-es/toUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/endpointResolver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/schemas/schemas_0.js [app-route] (ecmascript)");
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
        apiVersion: "2024-02-28",
        base64Decoder: config?.base64Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromBase64"],
        base64Encoder: config?.base64Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase64"],
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultEndpointResolver"],
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultBedrockAgentCoreHttpAuthSchemeProvider"],
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc)=>ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsSdkSigV4Signer"]()
            }
        ],
        logger: config?.logger ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoOpLogger"](),
        protocol: config?.protocol ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$json$2f$AwsRestJsonProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsRestJsonProtocol"],
        protocolSettings: config?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.bedrockagentcore",
            errorTypeRegistries: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorTypeRegistries"],
            version: "2024-02-28",
            serviceTarget: "AmazonBedrockAgentCore"
        },
        sdkStreamMixin: config?.sdkStreamMixin ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$stream$2f$dist$2d$es$2f$sdk$2d$stream$2d$mixin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sdkStreamMixin"],
        serviceId: config?.serviceId ?? "Bedrock AgentCore",
        urlParser: config?.urlParser ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUrl"],
        utf8Decoder: config?.utf8Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromUtf8"],
        utf8Encoder: config?.utf8Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toUtf8"]
    };
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$package$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/package.json.[json].cjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$emitWarningIfUnsupportedVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$NODE_AUTH_SCHEME_PREFERENCE_OPTIONS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$node$2f$dist$2d$es$2f$defaultProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$defaultUserAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$nodeAppIdConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-user-agent-node/dist-es/nodeAppIdConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseDualstackEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseFipsEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$eventstream$2d$serde$2d$node$2f$dist$2d$es$2f$provider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/eventstream-serde-node/dist-es/provider.js [app-route] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.shared.js [app-route] (ecmascript)");
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
const getRuntimeConfig = (config)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$emitWarningIfUnsupportedVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emitWarningIfUnsupportedVersion"])(process.version);
    const defaultsMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$defaults$2d$mode$2d$node$2f$dist$2d$es$2f$resolveDefaultsModeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveDefaultsModeConfig"])(config);
    const defaultConfigProvider = ()=>defaultsMode().then(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$defaults$2d$mode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfigsForDefaultMode"]);
    const clientSharedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(config);
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
        credentialDefaultProvider: config?.credentialDefaultProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$credential$2d$provider$2d$node$2f$dist$2d$es$2f$defaultProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultProvider"],
        defaultUserAgentProvider: config?.defaultUserAgentProvider ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$defaultUserAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDefaultUserAgentProvider"])({
            serviceId: clientSharedValues.serviceId,
            clientVersion: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$package$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].version
        }),
        eventStreamSerdeProvider: config?.eventStreamSerdeProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$eventstream$2d$serde$2d$node$2f$dist$2d$es$2f$provider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eventStreamSerdeProvider"],
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/auth/httpAuthExtensionConfiguration.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeExtensions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveRuntimeExtensions",
    ()=>resolveRuntimeExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/auth/httpAuthExtensionConfiguration.js [app-route] (ecmascript)");
;
;
;
;
const resolveRuntimeExtensions = (runtimeConfig, extensions)=>{
    const extensionConfiguration = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAwsRegionExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpHandlerExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpAuthExtensionConfiguration"])(runtimeConfig));
    extensions.forEach((extension)=>extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveAwsRegionExtensionConfiguration"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveDefaultRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpHandlerRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpAuthRuntimeConfig"])(extensionConfiguration));
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/BedrockAgentCoreClient.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BedrockAgentCoreClient",
    ()=>BedrockAgentCoreClient
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$eventstream$2d$serde$2d$config$2d$resolver$2f$dist$2d$es$2f$EventStreamSerdeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/eventstream-serde-config-resolver/dist-es/EventStreamSerdeConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$content$2d$length$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-content-length/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$resolveEndpointConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$retryMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-retry/dist-es/configurations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/EndpointParameters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$runtimeExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/runtimeExtensions.js [app-route] (ecmascript)");
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
;
class BedrockAgentCoreClient extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"] {
    config;
    constructor(...[configuration]){
        const _config_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$runtimeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveClientEndpointParameters"])(_config_0);
        const _config_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveUserAgentConfig"])(_config_1);
        const _config_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRetryConfig"])(_config_2);
        const _config_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$resolveRegionConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRegionConfig"])(_config_3);
        const _config_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHostHeaderConfig"])(_config_4);
        const _config_6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$resolveEndpointConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveEndpointConfig"])(_config_5);
        const _config_7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$eventstream$2d$serde$2d$config$2d$resolver$2f$dist$2d$es$2f$EventStreamSerdeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveEventStreamSerdeConfig"])(_config_6);
        const _config_8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpAuthSchemeConfig"])(_config_7);
        const _config_9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$runtimeExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRuntimeExtensions"])(_config_8, configuration?.extensions || []);
        this.config = _config_9;
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$getSchemaSerdePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaSerdePlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$user$2d$agent$2d$middleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAgentPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$retryMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRetryPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$content$2d$length$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContentLengthPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHostHeaderPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$logger$2f$dist$2d$es$2f$loggerMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoggerPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$recursion$2d$detection$2f$dist$2d$es$2f$getRecursionDetectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRecursionDetectionPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$getHttpAuthSchemeEndpointRuleSetPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpAuthSchemeEndpointRuleSetPlugin"])(this.config, {
            httpAuthSchemeParametersProvider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultBedrockAgentCoreHttpAuthSchemeParametersProvider"],
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/commands/InvokeAgentRuntimeCommand.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvokeAgentRuntimeCommand",
    ()=>InvokeAgentRuntimeCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/command.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/endpoint/EndpointParameters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/client-bedrock-agentcore/dist-es/schemas/schemas_0.js [app-route] (ecmascript)");
;
;
;
;
;
class InvokeAgentRuntimeCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].classBuilder().ep(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commonParams"]).m(function(Command, cs, config, o) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEndpointPlugin"])(config, Command.getEndpointParameterInstructions())
    ];
}).s("AmazonBedrockAgentCore", "InvokeAgentRuntime", {}).n("BedrockAgentCoreClient", "InvokeAgentRuntimeCommand").sc(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$client$2d$bedrock$2d$agentcore$2f$dist$2d$es$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvokeAgentRuntime$"]).build() {
}
}),
];

//# sourceMappingURL=0usa_%40aws-sdk_client-bedrock-agentcore_06hq814._.js.map