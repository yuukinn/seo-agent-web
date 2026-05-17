module.exports = [
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NODE_SIGV4A_CONFIG_OPTIONS",
    ()=>NODE_SIGV4A_CONFIG_OPTIONS,
    "resolveAwsSdkSigV4AConfig",
    ()=>resolveAwsSdkSigV4AConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/normalizeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$ProviderError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/property-provider/dist-es/ProviderError.js [app-route] (ecmascript)");
;
;
const resolveAwsSdkSigV4AConfig = (config)=>{
    config.sigv4aSigningRegionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeProvider"])(config.sigv4aSigningRegionSet);
    return config;
};
const NODE_SIGV4A_CONFIG_OPTIONS = {
    environmentVariableSelector (env) {
        if (env.AWS_SIGV4A_SIGNING_REGION_SET) {
            return env.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((_)=>_.trim());
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$ProviderError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProviderError"]("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", {
            tryNextLink: true
        });
    },
    configFileSelector (profile) {
        if (profile.sigv4a_signing_region_set) {
            return (profile.sigv4a_signing_region_set ?? "").split(",").map((_)=>_.trim());
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$property$2d$provider$2f$dist$2d$es$2f$ProviderError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProviderError"]("sigv4a_signing_region_set not set in profile.", {
            tryNextLink: true
        });
    },
    default: undefined
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME",
    ()=>NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME,
    "NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME",
    ()=>NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME,
    "NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS",
    ()=>NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS,
    "S3_EXPRESS_AUTH_SCHEME",
    ()=>S3_EXPRESS_AUTH_SCHEME,
    "S3_EXPRESS_BACKEND",
    ()=>S3_EXPRESS_BACKEND,
    "S3_EXPRESS_BUCKET_TYPE",
    ()=>S3_EXPRESS_BUCKET_TYPE,
    "SESSION_TOKEN_HEADER",
    ()=>SESSION_TOKEN_HEADER,
    "SESSION_TOKEN_QUERY_PARAM",
    ()=>SESSION_TOKEN_QUERY_PARAM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$config$2d$provider$2f$dist$2d$es$2f$booleanSelector$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$config$2d$provider$2f$dist$2d$es$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-config-provider/dist-es/types.js [app-route] (ecmascript)");
;
const S3_EXPRESS_BUCKET_TYPE = "Directory";
const S3_EXPRESS_BACKEND = "S3Express";
const S3_EXPRESS_AUTH_SCHEME = "sigv4-s3express";
const SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";
const SESSION_TOKEN_HEADER = SESSION_TOKEN_QUERY_PARAM.toLowerCase();
const NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH";
const NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME = "s3_disable_express_session_auth";
const NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = {
    environmentVariableSelector: (env)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$config$2d$provider$2f$dist$2d$es$2f$booleanSelector$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["booleanSelector"])(env, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_ENV_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$config$2d$provider$2f$dist$2d$es$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectorType"].ENV),
    configFileSelector: (profile)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$config$2d$provider$2f$dist$2d$es$2f$booleanSelector$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["booleanSelector"])(profile, NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_INI_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$config$2d$provider$2f$dist$2d$es$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SelectorType"].CONFIG),
    default: false
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignatureV4S3Express",
    ()=>SignatureV4S3Express
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$SignatureV4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/signature-v4/dist-es/SignatureV4.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$sdk$2d$s3$2f$dist$2d$es$2f$s3$2d$express$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/constants.js [app-route] (ecmascript)");
;
;
class SignatureV4S3Express extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$SignatureV4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureV4"] {
    async signWithCredentials(requestToSign, credentials, options) {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        requestToSign.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$sdk$2d$s3$2f$dist$2d$es$2f$s3$2d$express$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_TOKEN_HEADER"]] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return privateAccess.signRequest(requestToSign, options ?? {});
    }
    async presignWithCredentials(requestToSign, credentials, options) {
        const credentialsWithoutSessionToken = getCredentialsWithoutSessionToken(credentials);
        delete requestToSign.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$sdk$2d$s3$2f$dist$2d$es$2f$s3$2d$express$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_TOKEN_HEADER"]];
        requestToSign.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$sdk$2d$s3$2f$dist$2d$es$2f$s3$2d$express$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_TOKEN_QUERY_PARAM"]] = credentials.sessionToken;
        requestToSign.query = requestToSign.query ?? {};
        requestToSign.query[__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$sdk$2d$s3$2f$dist$2d$es$2f$s3$2d$express$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SESSION_TOKEN_QUERY_PARAM"]] = credentials.sessionToken;
        const privateAccess = this;
        setSingleOverride(privateAccess, credentialsWithoutSessionToken);
        return this.presign(requestToSign, options);
    }
}
function getCredentialsWithoutSessionToken(credentials) {
    const credentialsWithoutSessionToken = {
        accessKeyId: credentials.accessKeyId,
        secretAccessKey: credentials.secretAccessKey,
        expiration: credentials.expiration
    };
    return credentialsWithoutSessionToken;
}
function setSingleOverride(privateAccess, credentialsWithoutSessionToken) {
    const id = setTimeout(()=>{
        throw new Error("SignatureV4S3Express credential override was created but not called.");
    }, 10);
    const currentCredentialProvider = privateAccess.credentialProvider;
    const overrideCredentialsProviderOnce = ()=>{
        clearTimeout(id);
        privateAccess.credentialProvider = currentCredentialProvider;
        return Promise.resolve(credentialsWithoutSessionToken);
    };
    privateAccess.credentialProvider = overrideCredentialsProviderOnce;
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signatureV4aContainer",
    ()=>signatureV4aContainer
]);
const signatureV4aContainer = {
    SignatureV4a: null
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signatureV4CrtContainer",
    ()=>signatureV4CrtContainer
]);
const signatureV4CrtContainer = {
    CrtSignerV4: null
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SignatureV4MultiRegion",
    ()=>SignatureV4MultiRegion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$sdk$2d$s3$2f$dist$2d$es$2f$s3$2d$express$2f$classes$2f$SignatureV4S3Express$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/middleware-sdk-s3/dist-es/s3-express/classes/SignatureV4S3Express.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$signature$2d$v4a$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/signature-v4-crt-container.js [app-route] (ecmascript)");
;
;
;
class SignatureV4MultiRegion {
    sigv4aSigner;
    sigv4Signer;
    signerOptions;
    static sigv4aDependency() {
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4 === "function") {
            return "crt";
        } else if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$signature$2d$v4a$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signatureV4aContainer"].SignatureV4a === "function") {
            return "js";
        }
        return "none";
    }
    constructor(options){
        this.sigv4Signer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$sdk$2d$s3$2f$dist$2d$es$2f$s3$2d$express$2f$classes$2f$SignatureV4S3Express$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureV4S3Express"](options);
        this.signerOptions = options;
    }
    async sign(requestToSign, options = {}) {
        if (options.signingRegion === "*") {
            return this.getSigv4aSigner().sign(requestToSign, options);
        }
        return this.sigv4Signer.sign(requestToSign, options);
    }
    async signWithCredentials(requestToSign, credentials, options = {}) {
        if (options.signingRegion === "*") {
            const signer = this.getSigv4aSigner();
            const CrtSignerV4 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4;
            if (CrtSignerV4 && signer instanceof CrtSignerV4) {
                return signer.signWithCredentials(requestToSign, credentials, options);
            } else {
                throw new Error(`signWithCredentials with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
            }
        }
        return this.sigv4Signer.signWithCredentials(requestToSign, credentials, options);
    }
    async presign(originalRequest, options = {}) {
        if (options.signingRegion === "*") {
            const signer = this.getSigv4aSigner();
            const CrtSignerV4 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4;
            if (CrtSignerV4 && signer instanceof CrtSignerV4) {
                return signer.presign(originalRequest, options);
            } else {
                throw new Error(`presign with signingRegion '*' is only supported when using the CRT dependency @aws-sdk/signature-v4-crt. ` + `Please check whether you have installed the "@aws-sdk/signature-v4-crt" package explicitly. ` + `You must also register the package by calling [require("@aws-sdk/signature-v4-crt");] ` + `or an ESM equivalent such as [import "@aws-sdk/signature-v4-crt";]. ` + `For more information please go to https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt`);
            }
        }
        return this.sigv4Signer.presign(originalRequest, options);
    }
    async presignWithCredentials(originalRequest, credentials, options = {}) {
        if (options.signingRegion === "*") {
            throw new Error("Method presignWithCredentials is not supported for [signingRegion=*].");
        }
        return this.sigv4Signer.presignWithCredentials(originalRequest, credentials, options);
    }
    getSigv4aSigner() {
        if (!this.sigv4aSigner) {
            const CrtSignerV4 = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$signature$2d$v4$2d$crt$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signatureV4CrtContainer"].CrtSignerV4;
            const JsSigV4aSigner = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$signature$2d$v4$2f$dist$2d$es$2f$signature$2d$v4a$2d$container$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["signatureV4aContainer"].SignatureV4a;
            if (this.signerOptions.runtime === "node") {
                if (!CrtSignerV4 && !JsSigV4aSigner) {
                    throw new Error("Neither CRT nor JS SigV4a implementation is available. " + "Please load either @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a. " + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
                }
                if (CrtSignerV4 && typeof CrtSignerV4 === "function") {
                    this.sigv4aSigner = new CrtSignerV4({
                        ...this.signerOptions,
                        signingAlgorithm: 1
                    });
                } else if (JsSigV4aSigner && typeof JsSigV4aSigner === "function") {
                    this.sigv4aSigner = new JsSigV4aSigner({
                        ...this.signerOptions
                    });
                } else {
                    throw new Error("Available SigV4a implementation is not a valid constructor. " + "Please ensure you've properly imported @aws-sdk/signature-v4-crt or @aws-sdk/signature-v4a." + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#functionality-requiring-aws-common-runtime-crt");
                }
            } else {
                if (!JsSigV4aSigner || typeof JsSigV4aSigner !== "function") {
                    throw new Error("JS SigV4a implementation is not available or not a valid constructor. " + "Please check whether you have installed the @aws-sdk/signature-v4a package explicitly. The CRT implementation is not available for browsers. " + "You must also register the package by calling [require('@aws-sdk/signature-v4a');] " + "or an ESM equivalent such as [import '@aws-sdk/signature-v4a';]. " + "For more information please go to " + "https://github.com/aws/aws-sdk-js-v3#using-javascript-non-crt-implementation-of-sigv4a");
                }
                this.sigv4aSigner = new JsSigV4aSigner({
                    ...this.signerOptions
                });
            }
        }
        return this.sigv4aSigner;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/bdd.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bdd",
    ()=>bdd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$bdd$2f$BinaryDecisionDiagram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-endpoints/dist-es/bdd/BinaryDecisionDiagram.js [app-route] (ecmascript)");
;
const q = "ref";
const a = -1, b = true, c = "isSet", d = "PartitionResult", e = "booleanEquals", f = "stringEquals", g = "getAttr", h = "us-east-1", i = "sigv4", j = "sts", k = "https://sts.{Region}.{PartitionResult#dnsSuffix}", l = {
    [q]: "Endpoint"
}, m = {
    [q]: "Region"
}, n = {
    [q]: d
}, o = {}, p = [
    m
];
const _data = {
    conditions: [
        [
            c,
            [
                l
            ]
        ],
        [
            c,
            p
        ],
        [
            "aws.partition",
            p,
            d
        ],
        [
            e,
            [
                {
                    [q]: "UseFIPS"
                },
                b
            ]
        ],
        [
            e,
            [
                {
                    [q]: "UseDualStack"
                },
                b
            ]
        ],
        [
            f,
            [
                m,
                "aws-global"
            ]
        ],
        [
            e,
            [
                {
                    [q]: "UseGlobalEndpoint"
                },
                b
            ]
        ],
        [
            f,
            [
                m,
                "eu-central-1"
            ]
        ],
        [
            e,
            [
                {
                    fn: g,
                    argv: [
                        n,
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
                    fn: g,
                    argv: [
                        n,
                        "supportsFIPS"
                    ]
                },
                b
            ]
        ],
        [
            f,
            [
                m,
                "ap-south-1"
            ]
        ],
        [
            f,
            [
                m,
                "eu-north-1"
            ]
        ],
        [
            f,
            [
                m,
                "eu-west-1"
            ]
        ],
        [
            f,
            [
                m,
                "eu-west-2"
            ]
        ],
        [
            f,
            [
                m,
                "eu-west-3"
            ]
        ],
        [
            f,
            [
                m,
                "sa-east-1"
            ]
        ],
        [
            f,
            [
                m,
                h
            ]
        ],
        [
            f,
            [
                m,
                "us-east-2"
            ]
        ],
        [
            f,
            [
                m,
                "us-west-2"
            ]
        ],
        [
            f,
            [
                m,
                "us-west-1"
            ]
        ],
        [
            f,
            [
                m,
                "ca-central-1"
            ]
        ],
        [
            f,
            [
                m,
                "ap-southeast-1"
            ]
        ],
        [
            f,
            [
                m,
                "ap-northeast-1"
            ]
        ],
        [
            f,
            [
                m,
                "ap-southeast-2"
            ]
        ],
        [
            f,
            [
                {
                    fn: g,
                    argv: [
                        n,
                        "name"
                    ]
                },
                "aws-us-gov"
            ]
        ]
    ],
    results: [
        [
            a
        ],
        [
            "https://sts.amazonaws.com",
            {
                authSchemes: [
                    {
                        name: i,
                        signingName: j,
                        signingRegion: h
                    }
                ]
            }
        ],
        [
            k,
            {
                authSchemes: [
                    {
                        name: i,
                        signingName: j,
                        signingRegion: "{Region}"
                    }
                ]
            }
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
            l,
            o
        ],
        [
            "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
            o
        ],
        [
            a,
            "FIPS and DualStack are enabled, but this partition does not support one or both"
        ],
        [
            "https://sts.{Region}.amazonaws.com",
            o
        ],
        [
            "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
            o
        ],
        [
            a,
            "FIPS is enabled but this partition does not support FIPS"
        ],
        [
            "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
            o
        ],
        [
            a,
            "DualStack is enabled but this partition does not support DualStack"
        ],
        [
            k,
            o
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
    30,
    3,
    1,
    4,
    r + 14,
    2,
    5,
    r + 14,
    3,
    25,
    6,
    4,
    24,
    7,
    5,
    r + 1,
    8,
    6,
    9,
    r + 13,
    7,
    r + 1,
    10,
    10,
    r + 1,
    11,
    11,
    r + 1,
    12,
    12,
    r + 1,
    13,
    13,
    r + 1,
    14,
    14,
    r + 1,
    15,
    15,
    r + 1,
    16,
    16,
    r + 1,
    17,
    17,
    r + 1,
    18,
    18,
    r + 1,
    19,
    19,
    r + 1,
    20,
    20,
    r + 1,
    21,
    21,
    r + 1,
    22,
    22,
    r + 1,
    23,
    23,
    r + 1,
    r + 2,
    8,
    r + 11,
    r + 12,
    4,
    28,
    26,
    9,
    27,
    r + 10,
    24,
    r + 8,
    r + 9,
    8,
    29,
    r + 7,
    9,
    r + 6,
    r + 7,
    3,
    r + 3,
    31,
    4,
    r + 4,
    r + 5
]);
const bdd = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$bdd$2f$BinaryDecisionDiagram$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BinaryDecisionDiagram"].from(nodes, root, _data.conditions, _data.results);
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$bdd$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/bdd.js [app-route] (ecmascript)");
;
;
;
const cache = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$cache$2f$EndpointCache$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EndpointCache"]({
    size: 50,
    params: [
        "Endpoint",
        "Region",
        "UseDualStack",
        "UseFIPS",
        "UseGlobalEndpoint"
    ]
});
const defaultEndpointResolver = (endpointParams, context = {})=>{
    return cache.get(endpointParams, ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$decideEndpoint$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decideEndpoint"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$bdd$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["bdd"], {
            endpointParams: endpointParams,
            logger: context.logger
        }));
};
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$endpoints$2f$dist$2d$es$2f$utils$2f$customEndpointFunctions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["customEndpointFunctions"].aws = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$endpoints$2f$dist$2d$es$2f$aws$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["awsEndpointFunctions"];
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultSTSHttpAuthSchemeParametersProvider",
    ()=>defaultSTSHttpAuthSchemeParametersProvider,
    "defaultSTSHttpAuthSchemeProvider",
    ()=>defaultSTSHttpAuthSchemeProvider,
    "resolveHttpAuthSchemeConfig",
    ()=>resolveHttpAuthSchemeConfig,
    "resolveStsAuthConfig",
    ()=>resolveStsAuthConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4AConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4MultiRegion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$adaptors$2f$getEndpointFromInstructions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js [app-route] (ecmascript) <locals>");
;
;
;
;
;
;
const createEndpointRuleSetHttpAuthSchemeParametersProvider = (defaultHttpAuthSchemeParametersProvider)=>async (config, context, input)=>{
        if (!input) {
            throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
        }
        const defaultParameters = await defaultHttpAuthSchemeParametersProvider(config, context, input);
        const instructionsFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSmithyContext"])(context)?.commandInstance?.constructor?.getEndpointParameterInstructions;
        if (!instructionsFn) {
            throw new Error(`getEndpointParameterInstructions() is not defined on '${context.commandName}'`);
        }
        const endpointParameters = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$adaptors$2f$getEndpointFromInstructions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveParams"])(input, {
            getEndpointParameterInstructions: instructionsFn
        }, config);
        return Object.assign(defaultParameters, endpointParameters);
    };
const _defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input)=>{
    return {
        operation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$getSmithyContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSmithyContext"])(context).operation,
        region: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeProvider"])(config.region)() || (()=>{
            throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })()
    };
};
const defaultSTSHttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(_defaultSTSHttpAuthSchemeParametersProvider);
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "sts",
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
function createAwsAuthSigv4aHttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4a",
        signingProperties: {
            name: "sts",
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
const createEndpointRuleSetHttpAuthSchemeProvider = (defaultEndpointResolver, defaultHttpAuthSchemeResolver, createHttpAuthOptionFunctions)=>{
    const endpointRuleSetHttpAuthSchemeProvider = (authParameters)=>{
        const endpoint = defaultEndpointResolver(authParameters);
        const authSchemes = endpoint.properties?.authSchemes;
        if (!authSchemes) {
            return defaultHttpAuthSchemeResolver(authParameters);
        }
        const options = [];
        for (const scheme of authSchemes){
            const { name: resolvedName, properties = {}, ...rest } = scheme;
            const name = resolvedName.toLowerCase();
            if (resolvedName !== name) {
                console.warn(`HttpAuthScheme has been normalized with lowercasing: '${resolvedName}' to '${name}'`);
            }
            let schemeId;
            if (name === "sigv4a") {
                schemeId = "aws.auth#sigv4a";
                const sigv4Present = authSchemes.find((s)=>{
                    const name = s.name.toLowerCase();
                    return name !== "sigv4a" && name.startsWith("sigv4");
                });
                if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4MultiRegion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureV4MultiRegion"].sigv4aDependency() === "none" && sigv4Present) {
                    continue;
                }
            } else if (name.startsWith("sigv4")) {
                schemeId = "aws.auth#sigv4";
            } else {
                throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${name}'`);
            }
            const createOption = createHttpAuthOptionFunctions[schemeId];
            if (!createOption) {
                throw new Error(`Could not find HttpAuthOption create function for '${schemeId}'`);
            }
            const option = createOption(authParameters);
            option.schemeId = schemeId;
            option.signingProperties = {
                ...option.signingProperties || {},
                ...rest,
                ...properties
            };
            options.push(option);
        }
        return options;
    };
    return endpointRuleSetHttpAuthSchemeProvider;
};
const _defaultSTSHttpAuthSchemeProvider = (authParameters)=>{
    const options = [];
    switch(authParameters.operation){
        case "AssumeRoleWithWebIdentity":
            {
                options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
                options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
                break;
            }
        default:
            {
                options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
                options.push(createAwsAuthSigv4aHttpAuthOption(authParameters));
            }
    }
    return options;
};
const defaultSTSHttpAuthSchemeProvider = createEndpointRuleSetHttpAuthSchemeProvider(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultEndpointResolver"], _defaultSTSHttpAuthSchemeProvider, {
    "aws.auth#sigv4": createAwsAuthSigv4HttpAuthOption,
    "aws.auth#sigv4a": createAwsAuthSigv4aHttpAuthOption,
    "smithy.api#noAuth": createSmithyApiNoAuthHttpAuthOption
});
const resolveStsAuthConfig = (input)=>Object.assign(input, {
        stsClientCtor: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSClient"]
    });
const resolveHttpAuthSchemeConfig = (config)=>{
    const config_0 = resolveStsAuthConfig(config);
    const config_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4Config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveAwsSdkSigV4Config"])(config_0);
    const config_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4AConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveAwsSdkSigV4AConfig"])(config_1);
    return Object.assign(config_2, {
        authSchemePreference: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$middleware$2f$dist$2d$es$2f$normalizeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeProvider"])(config.authSchemePreference ?? [])
    });
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts"
    });
};
const commonParams = {
    UseGlobalEndpoint: {
        type: "builtInParams",
        name: "useGlobalEndpoint"
    },
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AwsSdkSigV4ASigner",
    ()=>AwsSdkSigV4ASigner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/protocol-http/dist-es/httpRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$utils$2f$getSkewCorrectedDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js [app-route] (ecmascript)");
;
;
;
class AwsSdkSigV4ASigner extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsSdkSigV4Signer"] {
    async sign(httpRequest, identity, signingProperties) {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpRequest"].isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingRegionSet, signingName } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateSigningProperties"])(signingProperties);
        const configResolvedSigningRegionSet = await config.sigv4aSigningRegionSet?.();
        const multiRegionOverride = (configResolvedSigningRegionSet ?? signingRegionSet ?? [
            signingRegion
        ]).join(",");
        const signedRequest = await signer.sign(httpRequest, {
            signingDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$utils$2f$getSkewCorrectedDate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSkewCorrectedDate"])(config.systemClockOffset),
            signingRegion: multiRegionOverride,
            signingService: signingName
        });
        return signedRequest;
    }
}
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RpcProtocol",
    ()=>RpcProtocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/protocol-http/dist-es/httpRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$HttpProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/HttpProtocol.js [app-route] (ecmascript)");
;
;
;
;
class RpcProtocol extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$HttpProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpProtocol"] {
    async serializeRequest(operationSchema, _input, context) {
        const serializer = this.serializer;
        const query = {};
        const headers = {};
        const endpoint = await context.endpoint();
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(operationSchema?.input);
        const schema = ns.getSchema();
        let payload;
        const input = _input && typeof _input === "object" ? _input : {};
        const request = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$httpRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["HttpRequest"]({
            protocol: "",
            hostname: "",
            port: undefined,
            path: "/",
            fragment: undefined,
            query: query,
            headers: headers,
            body: undefined
        });
        if (endpoint) {
            this.updateServiceEndpoint(request, endpoint);
            this.setHostPrefix(request, operationSchema, input);
        }
        if (input) {
            const eventStreamMember = ns.getEventStreamMember();
            if (eventStreamMember) {
                if (input[eventStreamMember]) {
                    const initialRequest = {};
                    for (const [memberName, memberSchema] of ns.structIterator()){
                        if (memberName !== eventStreamMember && input[memberName]) {
                            serializer.write(memberSchema, input[memberName]);
                            initialRequest[memberName] = serializer.flush();
                        }
                    }
                    payload = await this.serializeEventStream({
                        eventStream: input[eventStreamMember],
                        requestSchema: ns,
                        initialRequest
                    });
                }
            } else {
                serializer.write(schema, input);
                payload = serializer.flush();
            }
        }
        request.headers = Object.assign(request.headers, headers);
        request.query = query;
        request.body = payload;
        request.method = "POST";
        return request;
    }
    async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
            const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(15, bytes));
            }
            await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
            throw new Error("@smithy/core/protocols - RPC Protocol error handler failed to throw.");
        }
        for(const header in response.headers){
            const value = response.headers[header];
            delete response.headers[header];
            response.headers[header.toLowerCase()] = value;
        }
        const eventStreamMember = ns.getEventStreamMember();
        if (eventStreamMember) {
            dataObject[eventStreamMember] = await this.deserializeEventStream({
                response,
                responseSchema: ns,
                initialResponseContainer: dataObject
            });
        } else {
            const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(ns, bytes));
            }
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DANGEROUS_PROPERTY_NAMES",
    ()=>DANGEROUS_PROPERTY_NAMES,
    "criticalProperties",
    ()=>criticalProperties,
    "getAllMatches",
    ()=>getAllMatches,
    "getValue",
    ()=>getValue,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isExist",
    ()=>isExist,
    "isName",
    ()=>isName,
    "nameRegexp",
    ()=>nameRegexp
]);
'use strict';
const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*';
const regexName = new RegExp('^' + nameRegexp + '$');
function getAllMatches(string, regex) {
    const matches = [];
    let match = regex.exec(string);
    while(match){
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for(let index = 0; index < len; index++){
            allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
    }
    return matches;
}
const isName = function(string) {
    const match = regexName.exec(string);
    return !(match === null || typeof match === 'undefined');
};
function isExist(v) {
    return typeof v !== 'undefined';
}
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}
function getValue(v) {
    if (exports.isExist(v)) {
        return v;
    } else {
        return '';
    }
}
const DANGEROUS_PROPERTY_NAMES = [
    // '__proto__',
    // 'constructor',
    // 'prototype',
    'hasOwnProperty',
    'toString',
    'valueOf',
    '__defineGetter__',
    '__defineSetter__',
    '__lookupGetter__',
    '__lookupSetter__'
];
const criticalProperties = [
    "__proto__",
    "constructor",
    "prototype"
];
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildOptions",
    ()=>buildOptions,
    "defaultOptions",
    ()=>defaultOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)");
;
;
const defaultOnDangerousProperty = (name)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DANGEROUS_PROPERTY_NAMES"].includes(name)) {
        return "__" + name;
    }
    return name;
};
const defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false,
    allowBooleanAttributes: false,
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataPropName: false,
    numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
        return val;
    },
    attributeValueProcessor: function(attrName, val) {
        return val;
    },
    stopNodes: [],
    alwaysCreateTextNode: false,
    isArray: ()=>false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    entityDecoder: null,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs) {
        return tagName;
    },
    // skipEmptyListItem: false
    captureMetaData: false,
    maxNestedTags: 100,
    strictReservedNames: true,
    jPath: true,
    onDangerousProperty: defaultOnDangerousProperty
};
/**
 * Validates that a property name is safe to use
 * @param {string} propertyName - The property name to validate
 * @param {string} optionName - The option field name (for error message)
 * @throws {Error} If property name is dangerous
 */ function validatePropertyName(propertyName, optionName) {
    if (typeof propertyName !== 'string') {
        return; // Only validate string property names
    }
    const normalized = propertyName.toLowerCase();
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DANGEROUS_PROPERTY_NAMES"].some((dangerous)=>normalized === dangerous.toLowerCase())) {
        throw new Error(`[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`);
    }
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["criticalProperties"].some((dangerous)=>normalized === dangerous.toLowerCase())) {
        throw new Error(`[SECURITY] Invalid ${optionName}: "${propertyName}" is a reserved JavaScript keyword that could cause prototype pollution`);
    }
}
/**
 * Normalizes processEntities option for backward compatibility
 * @param {boolean|object} value 
 * @returns {object} Always returns normalized object
 */ function normalizeProcessEntities(value, htmlEntities) {
    // Boolean backward compatibility
    if (typeof value === 'boolean') {
        return {
            enabled: value,
            maxEntitySize: 10000,
            maxExpansionDepth: 10000,
            maxTotalExpansions: Infinity,
            maxExpandedLength: 100000,
            maxEntityCount: 1000,
            allowedTags: null,
            tagFilter: null,
            appliesTo: "all"
        };
    }
    // Object config - merge with defaults
    if (typeof value === 'object' && value !== null) {
        return {
            enabled: value.enabled !== false,
            maxEntitySize: Math.max(1, value.maxEntitySize ?? 10000),
            maxExpansionDepth: Math.max(1, value.maxExpansionDepth ?? 10000),
            maxTotalExpansions: Math.max(1, value.maxTotalExpansions ?? Infinity),
            maxExpandedLength: Math.max(1, value.maxExpandedLength ?? 100000),
            maxEntityCount: Math.max(1, value.maxEntityCount ?? 1000),
            allowedTags: value.allowedTags ?? null,
            tagFilter: value.tagFilter ?? null,
            appliesTo: value.appliesTo ?? "all"
        };
    }
    // Default to enabled with limits
    return normalizeProcessEntities(true);
}
const buildOptions = function(options) {
    const built = Object.assign({}, defaultOptions, options);
    // Validate property names to prevent prototype pollution
    const propertyNameOptions = [
        {
            value: built.attributeNamePrefix,
            name: 'attributeNamePrefix'
        },
        {
            value: built.attributesGroupName,
            name: 'attributesGroupName'
        },
        {
            value: built.textNodeName,
            name: 'textNodeName'
        },
        {
            value: built.cdataPropName,
            name: 'cdataPropName'
        },
        {
            value: built.commentPropName,
            name: 'commentPropName'
        }
    ];
    for (const { value, name } of propertyNameOptions){
        if (value) {
            validatePropertyName(value, name);
        }
    }
    if (built.onDangerousProperty === null) {
        built.onDangerousProperty = defaultOnDangerousProperty;
    }
    // Always normalize processEntities for backward compatibility and validation
    built.processEntities = normalizeProcessEntities(built.processEntities, built.htmlEntities);
    built.unpairedTagsSet = new Set(built.unpairedTags);
    // Convert old-style stopNodes for backward compatibility
    if (built.stopNodes && Array.isArray(built.stopNodes)) {
        built.stopNodes = built.stopNodes.map((node)=>{
            if (typeof node === 'string' && node.startsWith('*.')) {
                // Old syntax: *.tagname meant "tagname anywhere"
                // Convert to new syntax: ..tagname
                return '..' + node.substring(2);
            }
            return node;
        });
    }
    //console.debug(built.processEntities)
    return built;
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>XmlNode
]);
'use strict';
let METADATA_SYMBOL;
if (typeof Symbol !== "function") {
    METADATA_SYMBOL = "@@xmlMetadata";
} else {
    METADATA_SYMBOL = Symbol("XML Node Metadata");
}
class XmlNode {
    constructor(tagname){
        this.tagname = tagname;
        this.child = []; //nested tags, text, cdata, comments in order
        this[":@"] = Object.create(null); //attributes map
    }
    add(key, val) {
        // this.child.push( {name : key, val: val, isCdata: isCdata });
        if (key === "__proto__") key = "#__proto__";
        this.child.push({
            [key]: val
        });
    }
    addChild(node, startIndex) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
            this.child.push({
                [node.tagname]: node.child,
                [":@"]: node[":@"]
            });
        } else {
            this.child.push({
                [node.tagname]: node.child
            });
        }
        // if requested, add the startIndex
        if (startIndex !== undefined) {
            // Note: for now we just overwrite the metadata. If we had more complex metadata,
            // we might need to do an object append here:  metadata = { ...metadata, startIndex }
            this.child[this.child.length - 1][METADATA_SYMBOL] = {
                startIndex
            };
        }
    }
    /** symbol used for metadata */ static getMetaDataSymbol() {
        return METADATA_SYMBOL;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DocTypeReader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)");
;
class DocTypeReader {
    constructor(options){
        this.suppressValidationErr = !options;
        this.options = options;
    }
    readDocType(xmlData, i) {
        const entities = Object.create(null);
        let entityCount = 0;
        if (xmlData[i + 3] === 'O' && xmlData[i + 4] === 'C' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'Y' && xmlData[i + 7] === 'P' && xmlData[i + 8] === 'E') {
            i = i + 9;
            let angleBracketsCount = 1;
            let hasBody = false, comment = false;
            let exp = "";
            for(; i < xmlData.length; i++){
                if (xmlData[i] === '<' && !comment) {
                    if (hasBody && hasSeq(xmlData, "!ENTITY", i)) {
                        i += 7;
                        let entityName, val;
                        [entityName, val, i] = this.readEntityExp(xmlData, i + 1, this.suppressValidationErr);
                        if (val.indexOf("&") === -1) {
                            if (this.options.enabled !== false && this.options.maxEntityCount != null && entityCount >= this.options.maxEntityCount) {
                                throw new Error(`Entity count (${entityCount + 1}) exceeds maximum allowed (${this.options.maxEntityCount})`);
                            }
                            //const escaped = entityName.replace(/[.\-+*:]/g, '\\.');
                            //const escaped = entityName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                            entities[entityName] = val;
                            entityCount++;
                        }
                    } else if (hasBody && hasSeq(xmlData, "!ELEMENT", i)) {
                        i += 8; //Not supported
                        const { index } = this.readElementExp(xmlData, i + 1);
                        i = index;
                    } else if (hasBody && hasSeq(xmlData, "!ATTLIST", i)) {
                        i += 8; //Not supported
                    // const {index} = this.readAttlistExp(xmlData,i+1);
                    // i = index;
                    } else if (hasBody && hasSeq(xmlData, "!NOTATION", i)) {
                        i += 9; //Not supported
                        const { index } = this.readNotationExp(xmlData, i + 1, this.suppressValidationErr);
                        i = index;
                    } else if (hasSeq(xmlData, "!--", i)) comment = true;
                    else throw new Error(`Invalid DOCTYPE`);
                    angleBracketsCount++;
                    exp = "";
                } else if (xmlData[i] === '>') {
                    if (comment) {
                        if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
                            comment = false;
                            angleBracketsCount--;
                        }
                    } else {
                        angleBracketsCount--;
                    }
                    if (angleBracketsCount === 0) {
                        break;
                    }
                } else if (xmlData[i] === '[') {
                    hasBody = true;
                } else {
                    exp += xmlData[i];
                }
            }
            if (angleBracketsCount !== 0) {
                throw new Error(`Unclosed DOCTYPE`);
            }
        } else {
            throw new Error(`Invalid Tag instead of DOCTYPE`);
        }
        return {
            entities,
            i
        };
    }
    readEntityExp(xmlData, i) {
        //External entities are not supported
        //    <!ENTITY ext SYSTEM "http://normal-website.com" >
        //Parameter entities are not supported
        //    <!ENTITY entityname "&anotherElement;">
        //Internal entities are supported
        //    <!ENTITY entityname "replacement text">
        // Skip leading whitespace after <!ENTITY
        i = skipWhitespace(xmlData, i);
        // Read entity name
        const startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i]) && xmlData[i] !== '"' && xmlData[i] !== "'"){
            i++;
        }
        let entityName = xmlData.substring(startIndex, i);
        validateEntityName(entityName);
        // Skip whitespace after entity name
        i = skipWhitespace(xmlData, i);
        // Check for unsupported constructs (external entities or parameter entities)
        if (!this.suppressValidationErr) {
            if (xmlData.substring(i, i + 6).toUpperCase() === "SYSTEM") {
                throw new Error("External entities are not supported");
            } else if (xmlData[i] === "%") {
                throw new Error("Parameter entities are not supported");
            }
        }
        // Read entity value (internal entity)
        let entityValue = "";
        [i, entityValue] = this.readIdentifierVal(xmlData, i, "entity");
        // Validate entity size
        if (this.options.enabled !== false && this.options.maxEntitySize != null && entityValue.length > this.options.maxEntitySize) {
            throw new Error(`Entity "${entityName}" size (${entityValue.length}) exceeds maximum allowed size (${this.options.maxEntitySize})`);
        }
        i--;
        return [
            entityName,
            entityValue,
            i
        ];
    }
    readNotationExp(xmlData, i) {
        // Skip leading whitespace after <!NOTATION
        i = skipWhitespace(xmlData, i);
        // Read notation name
        const startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let notationName = xmlData.substring(startIndex, i);
        !this.suppressValidationErr && validateEntityName(notationName);
        // Skip whitespace after notation name
        i = skipWhitespace(xmlData, i);
        // Check identifier type (SYSTEM or PUBLIC)
        const identifierType = xmlData.substring(i, i + 6).toUpperCase();
        if (!this.suppressValidationErr && identifierType !== "SYSTEM" && identifierType !== "PUBLIC") {
            throw new Error(`Expected SYSTEM or PUBLIC, found "${identifierType}"`);
        }
        i += identifierType.length;
        // Skip whitespace after identifier type
        i = skipWhitespace(xmlData, i);
        // Read public identifier (if PUBLIC)
        let publicIdentifier = null;
        let systemIdentifier = null;
        if (identifierType === "PUBLIC") {
            [i, publicIdentifier] = this.readIdentifierVal(xmlData, i, "publicIdentifier");
            // Skip whitespace after public identifier
            i = skipWhitespace(xmlData, i);
            // Optionally read system identifier
            if (xmlData[i] === '"' || xmlData[i] === "'") {
                [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
            }
        } else if (identifierType === "SYSTEM") {
            // Read system identifier (mandatory for SYSTEM)
            [i, systemIdentifier] = this.readIdentifierVal(xmlData, i, "systemIdentifier");
            if (!this.suppressValidationErr && !systemIdentifier) {
                throw new Error("Missing mandatory system identifier for SYSTEM notation");
            }
        }
        return {
            notationName,
            publicIdentifier,
            systemIdentifier,
            index: --i
        };
    }
    readIdentifierVal(xmlData, i, type) {
        let identifierVal = "";
        const startChar = xmlData[i];
        if (startChar !== '"' && startChar !== "'") {
            throw new Error(`Expected quoted string, found "${startChar}"`);
        }
        i++;
        const startIndex = i;
        while(i < xmlData.length && xmlData[i] !== startChar){
            i++;
        }
        identifierVal = xmlData.substring(startIndex, i);
        if (xmlData[i] !== startChar) {
            throw new Error(`Unterminated ${type} value`);
        }
        i++;
        return [
            i,
            identifierVal
        ];
    }
    readElementExp(xmlData, i) {
        // <!ELEMENT br EMPTY>
        // <!ELEMENT div ANY>
        // <!ELEMENT title (#PCDATA)>
        // <!ELEMENT book (title, author+)>
        // <!ELEMENT name (content-model)>
        // Skip leading whitespace after <!ELEMENT
        i = skipWhitespace(xmlData, i);
        // Read element name
        const startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let elementName = xmlData.substring(startIndex, i);
        // Validate element name
        if (!this.suppressValidationErr && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isName"])(elementName)) {
            throw new Error(`Invalid element name: "${elementName}"`);
        }
        // Skip whitespace after element name
        i = skipWhitespace(xmlData, i);
        let contentModel = "";
        // Expect '(' to start content model
        if (xmlData[i] === "E" && hasSeq(xmlData, "MPTY", i)) i += 4;
        else if (xmlData[i] === "A" && hasSeq(xmlData, "NY", i)) i += 2;
        else if (xmlData[i] === "(") {
            i++; // Move past '('
            // Read content model
            const startIndex = i;
            while(i < xmlData.length && xmlData[i] !== ")"){
                i++;
            }
            contentModel = xmlData.substring(startIndex, i);
            if (xmlData[i] !== ")") {
                throw new Error("Unterminated content model");
            }
        } else if (!this.suppressValidationErr) {
            throw new Error(`Invalid Element Expression, found "${xmlData[i]}"`);
        }
        return {
            elementName,
            contentModel: contentModel.trim(),
            index: i
        };
    }
    readAttlistExp(xmlData, i) {
        // Skip leading whitespace after <!ATTLIST
        i = skipWhitespace(xmlData, i);
        // Read element name
        let startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let elementName = xmlData.substring(startIndex, i);
        // Validate element name
        validateEntityName(elementName);
        // Skip whitespace after element name
        i = skipWhitespace(xmlData, i);
        // Read attribute name
        startIndex = i;
        while(i < xmlData.length && !/\s/.test(xmlData[i])){
            i++;
        }
        let attributeName = xmlData.substring(startIndex, i);
        // Validate attribute name
        if (!validateEntityName(attributeName)) {
            throw new Error(`Invalid attribute name: "${attributeName}"`);
        }
        // Skip whitespace after attribute name
        i = skipWhitespace(xmlData, i);
        // Read attribute type
        let attributeType = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "NOTATION") {
            attributeType = "NOTATION";
            i += 8; // Move past "NOTATION"
            // Skip whitespace after "NOTATION"
            i = skipWhitespace(xmlData, i);
            // Expect '(' to start the list of notations
            if (xmlData[i] !== "(") {
                throw new Error(`Expected '(', found "${xmlData[i]}"`);
            }
            i++; // Move past '('
            // Read the list of allowed notations
            let allowedNotations = [];
            while(i < xmlData.length && xmlData[i] !== ")"){
                const startIndex = i;
                while(i < xmlData.length && xmlData[i] !== "|" && xmlData[i] !== ")"){
                    i++;
                }
                let notation = xmlData.substring(startIndex, i);
                // Validate notation name
                notation = notation.trim();
                if (!validateEntityName(notation)) {
                    throw new Error(`Invalid notation name: "${notation}"`);
                }
                allowedNotations.push(notation);
                // Skip '|' separator or exit loop
                if (xmlData[i] === "|") {
                    i++; // Move past '|'
                    i = skipWhitespace(xmlData, i); // Skip optional whitespace after '|'
                }
            }
            if (xmlData[i] !== ")") {
                throw new Error("Unterminated list of notations");
            }
            i++; // Move past ')'
            // Store the allowed notations as part of the attribute type
            attributeType += " (" + allowedNotations.join("|") + ")";
        } else {
            // Handle simple types (e.g., CDATA, ID, IDREF, etc.)
            const startIndex = i;
            while(i < xmlData.length && !/\s/.test(xmlData[i])){
                i++;
            }
            attributeType += xmlData.substring(startIndex, i);
            // Validate simple attribute type
            const validTypes = [
                "CDATA",
                "ID",
                "IDREF",
                "IDREFS",
                "ENTITY",
                "ENTITIES",
                "NMTOKEN",
                "NMTOKENS"
            ];
            if (!this.suppressValidationErr && !validTypes.includes(attributeType.toUpperCase())) {
                throw new Error(`Invalid attribute type: "${attributeType}"`);
            }
        }
        // Skip whitespace after attribute type
        i = skipWhitespace(xmlData, i);
        // Read default value
        let defaultValue = "";
        if (xmlData.substring(i, i + 8).toUpperCase() === "#REQUIRED") {
            defaultValue = "#REQUIRED";
            i += 8;
        } else if (xmlData.substring(i, i + 7).toUpperCase() === "#IMPLIED") {
            defaultValue = "#IMPLIED";
            i += 7;
        } else {
            [i, defaultValue] = this.readIdentifierVal(xmlData, i, "ATTLIST");
        }
        return {
            elementName,
            attributeName,
            attributeType,
            defaultValue,
            index: i
        };
    }
}
const skipWhitespace = (data, index)=>{
    while(index < data.length && /\s/.test(data[index])){
        index++;
    }
    return index;
};
function hasSeq(data, seq, i) {
    for(let j = 0; j < seq.length; j++){
        if (seq[j] !== data[i + j + 1]) return false;
    }
    return true;
}
function validateEntityName(name) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isName"])(name)) return name;
    else throw new Error(`Invalid entity name ${name}`);
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/strnum/strnum.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>toNumber
]);
const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
// const octRegex = /^0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;
const consider = {
    hex: true,
    // oct: false,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true,
    //skipLike: /regex/,
    infinity: "original"
};
function toNumber(str, options = {}) {
    options = Object.assign({}, consider, options);
    if (!str || typeof str !== "string") return str;
    let trimmedStr = str.trim();
    if (trimmedStr.length === 0) return str;
    else if (options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (trimmedStr === "0") return 0;
    else if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
    // }else if (options.oct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    } else if (!isFinite(trimmedStr)) {
        return handleInfinity(str, Number(trimmedStr), options);
    } else if (trimmedStr.includes('e') || trimmedStr.includes('E')) {
        return resolveEnotation(str, trimmedStr, options);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
    } else {
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        // +00.123 => [ , '+', '00', '.123', ..
        if (match) {
            const sign = match[1] || "";
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            const decimalAdjacentToLeadingZeros = sign ? str[leadingZeros.length + 1] === "." : str[leadingZeros.length] === ".";
            //trim ending zeros for floating number
            if (!options.leadingZeros //leading zeros are not allowed
             && (leadingZeros.length > 1 || leadingZeros.length === 1 && !decimalAdjacentToLeadingZeros)) {
                // 00, 00.3, +03.24, 03, 03.24
                return str;
            } else {
                const num = Number(trimmedStr);
                const parsedStr = String(num);
                if (num === 0) return num;
                if (parsedStr.search(/[eE]/) !== -1) {
                    if (options.eNotation) return num;
                    else return str;
                } else if (trimmedStr.indexOf(".") !== -1) {
                    if (parsedStr === "0") return num; //0.0
                    else if (parsedStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if (parsedStr === `${sign}${numTrimmedByZeros}`) return num;
                    else return str;
                }
                let n = leadingZeros ? numTrimmedByZeros : trimmedStr;
                if (leadingZeros) {
                    // -009 => -9
                    return n === parsedStr || sign + n === parsedStr ? num : str;
                } else {
                    // +9
                    return n === parsedStr || n === sign + parsedStr ? num : str;
                }
            }
        } else {
            return str;
        }
    }
}
const eNotationRegx = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
function resolveEnotation(str, trimmedStr, options) {
    if (!options.eNotation) return str;
    const notation = trimmedStr.match(eNotationRegx);
    if (notation) {
        let sign = notation[1] || "";
        const eChar = notation[3].indexOf("e") === -1 ? "E" : "e";
        const leadingZeros = notation[2];
        const eAdjacentToLeadingZeros = sign ? str[leadingZeros.length + 1] === eChar : str[leadingZeros.length] === eChar;
        if (leadingZeros.length > 1 && eAdjacentToLeadingZeros) return str;
        else if (leadingZeros.length === 1 && (notation[3].startsWith(`.${eChar}`) || notation[3][0] === eChar)) {
            return Number(trimmedStr);
        } else if (leadingZeros.length > 0) {
            // Has leading zeros — only accept if leadingZeros option allows it
            if (options.leadingZeros && !eAdjacentToLeadingZeros) {
                trimmedStr = (notation[1] || "") + notation[3];
                return Number(trimmedStr);
            } else return str;
        } else {
            // No leading zeros — always valid e-notation, parse it
            return Number(trimmedStr);
        }
    } else {
        return str;
    }
}
/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */ function trimZeros(numStr) {
    if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substring(0, numStr.length - 1);
        return numStr;
    }
    return numStr;
}
function parse_int(numStr, base) {
    //polyfill
    if (parseInt) return parseInt(numStr, base);
    else if (Number.parseInt) return Number.parseInt(numStr, base);
    else if (window && window.parseInt) return window.parseInt(numStr, base);
    else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
/**
 * Handle infinite values based on user option
 * @param {string} str - original input string
 * @param {number} num - parsed number (Infinity or -Infinity)
 * @param {object} options - user options
 * @returns {string|number|null} based on infinity option
 */ function handleInfinity(str, num, options) {
    const isPositive = num === Infinity;
    switch(options.infinity.toLowerCase()){
        case "null":
            return null;
        case "infinity":
            return num; // Return Infinity or -Infinity
        case "string":
            return isPositive ? "Infinity" : "-Infinity";
        case "original":
        default:
            return str; // Return original string like "1e1000"
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/ignoreAttributes.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getIgnoreAttributesFn
]);
function getIgnoreAttributesFn(ignoreAttributes) {
    if (typeof ignoreAttributes === 'function') {
        return ignoreAttributes;
    }
    if (Array.isArray(ignoreAttributes)) {
        return (attrName)=>{
            for (const pattern of ignoreAttributes){
                if (typeof pattern === 'string' && attrName === pattern) {
                    return true;
                }
                if (pattern instanceof RegExp && pattern.test(attrName)) {
                    return true;
                }
            }
        };
    }
    return ()=>false;
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Expression - Parses and stores a tag pattern expression
 * 
 * Patterns are parsed once and stored in an optimized structure for fast matching.
 * 
 * @example
 * const expr = new Expression("root.users.user");
 * const expr2 = new Expression("..user[id]:first");
 * const expr3 = new Expression("root/users/user", { separator: '/' });
 */ __turbopack_context__.s([
    "default",
    ()=>Expression
]);
class Expression {
    /**
   * Create a new Expression
   * @param {string} pattern - Pattern string (e.g., "root.users.user", "..user[id]")
   * @param {Object} options - Configuration options
   * @param {string} options.separator - Path separator (default: '.')
   */ constructor(pattern, options = {}, data){
        this.pattern = pattern;
        this.separator = options.separator || '.';
        this.segments = this._parse(pattern);
        this.data = data;
        // Cache expensive checks for performance (O(1) instead of O(n))
        this._hasDeepWildcard = this.segments.some((seg)=>seg.type === 'deep-wildcard');
        this._hasAttributeCondition = this.segments.some((seg)=>seg.attrName !== undefined);
        this._hasPositionSelector = this.segments.some((seg)=>seg.position !== undefined);
    }
    /**
   * Parse pattern string into segments
   * @private
   * @param {string} pattern - Pattern to parse
   * @returns {Array} Array of segment objects
   */ _parse(pattern) {
        const segments = [];
        // Split by separator but handle ".." specially
        let i = 0;
        let currentPart = '';
        while(i < pattern.length){
            if (pattern[i] === this.separator) {
                // Check if next char is also separator (deep wildcard)
                if (i + 1 < pattern.length && pattern[i + 1] === this.separator) {
                    // Flush current part if any
                    if (currentPart.trim()) {
                        segments.push(this._parseSegment(currentPart.trim()));
                        currentPart = '';
                    }
                    // Add deep wildcard
                    segments.push({
                        type: 'deep-wildcard'
                    });
                    i += 2; // Skip both separators
                } else {
                    // Regular separator
                    if (currentPart.trim()) {
                        segments.push(this._parseSegment(currentPart.trim()));
                    }
                    currentPart = '';
                    i++;
                }
            } else {
                currentPart += pattern[i];
                i++;
            }
        }
        // Flush remaining part
        if (currentPart.trim()) {
            segments.push(this._parseSegment(currentPart.trim()));
        }
        return segments;
    }
    /**
   * Parse a single segment
   * @private
   * @param {string} part - Segment string (e.g., "user", "ns::user", "user[id]", "ns::user:first")
   * @returns {Object} Segment object
   */ _parseSegment(part) {
        const segment = {
            type: 'tag'
        };
        // NEW NAMESPACE SYNTAX (v2.0):
        // ============================
        // Namespace uses DOUBLE colon (::)
        // Position uses SINGLE colon (:)
        // 
        // Examples:
        //   "user"              → tag
        //   "user:first"        → tag + position
        //   "user[id]"          → tag + attribute
        //   "user[id]:first"    → tag + attribute + position
        //   "ns::user"          → namespace + tag
        //   "ns::user:first"    → namespace + tag + position
        //   "ns::user[id]"      → namespace + tag + attribute
        //   "ns::user[id]:first" → namespace + tag + attribute + position
        //   "ns::first"         → namespace + tag named "first" (NO ambiguity!)
        //
        // This eliminates all ambiguity:
        //   :: = namespace separator
        //   :  = position selector
        //   [] = attributes
        // Step 1: Extract brackets [attr] or [attr=value]
        let bracketContent = null;
        let withoutBrackets = part;
        const bracketMatch = part.match(/^([^\[]+)(\[[^\]]*\])(.*)$/);
        if (bracketMatch) {
            withoutBrackets = bracketMatch[1] + bracketMatch[3];
            if (bracketMatch[2]) {
                const content = bracketMatch[2].slice(1, -1);
                if (content) {
                    bracketContent = content;
                }
            }
        }
        // Step 2: Check for namespace (double colon ::)
        let namespace = undefined;
        let tagAndPosition = withoutBrackets;
        if (withoutBrackets.includes('::')) {
            const nsIndex = withoutBrackets.indexOf('::');
            namespace = withoutBrackets.substring(0, nsIndex).trim();
            tagAndPosition = withoutBrackets.substring(nsIndex + 2).trim(); // Skip ::
            if (!namespace) {
                throw new Error(`Invalid namespace in pattern: ${part}`);
            }
        }
        // Step 3: Parse tag and position (single colon :)
        let tag = undefined;
        let positionMatch = null;
        if (tagAndPosition.includes(':')) {
            const colonIndex = tagAndPosition.lastIndexOf(':'); // Use last colon for position
            const tagPart = tagAndPosition.substring(0, colonIndex).trim();
            const posPart = tagAndPosition.substring(colonIndex + 1).trim();
            // Verify position is a valid keyword
            const isPositionKeyword = [
                'first',
                'last',
                'odd',
                'even'
            ].includes(posPart) || /^nth\(\d+\)$/.test(posPart);
            if (isPositionKeyword) {
                tag = tagPart;
                positionMatch = posPart;
            } else {
                // Not a valid position keyword, treat whole thing as tag
                tag = tagAndPosition;
            }
        } else {
            tag = tagAndPosition;
        }
        if (!tag) {
            throw new Error(`Invalid segment pattern: ${part}`);
        }
        segment.tag = tag;
        if (namespace) {
            segment.namespace = namespace;
        }
        // Step 4: Parse attributes
        if (bracketContent) {
            if (bracketContent.includes('=')) {
                const eqIndex = bracketContent.indexOf('=');
                segment.attrName = bracketContent.substring(0, eqIndex).trim();
                segment.attrValue = bracketContent.substring(eqIndex + 1).trim();
            } else {
                segment.attrName = bracketContent.trim();
            }
        }
        // Step 5: Parse position selector
        if (positionMatch) {
            const nthMatch = positionMatch.match(/^nth\((\d+)\)$/);
            if (nthMatch) {
                segment.position = 'nth';
                segment.positionValue = parseInt(nthMatch[1], 10);
            } else {
                segment.position = positionMatch;
            }
        }
        return segment;
    }
    /**
   * Get the number of segments
   * @returns {number}
   */ get length() {
        return this.segments.length;
    }
    /**
   * Check if expression contains deep wildcard
   * @returns {boolean}
   */ hasDeepWildcard() {
        return this._hasDeepWildcard;
    }
    /**
   * Check if expression has attribute conditions
   * @returns {boolean}
   */ hasAttributeCondition() {
        return this._hasAttributeCondition;
    }
    /**
   * Check if expression has position selectors
   * @returns {boolean}
   */ hasPositionSelector() {
        return this._hasPositionSelector;
    }
    /**
   * Get string representation
   * @returns {string}
   */ toString() {
        return this.pattern;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript) <export default as Expression>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Expression",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MatcherView",
    ()=>MatcherView,
    "default",
    ()=>Matcher
]);
;
class MatcherView {
    /**
   * @param {Matcher} matcher - The parent Matcher instance to read from.
   */ constructor(matcher){
        this._matcher = matcher;
    }
    /**
   * Get the path separator used by the parent matcher.
   * @returns {string}
   */ get separator() {
        return this._matcher.separator;
    }
    /**
   * Get current tag name.
   * @returns {string|undefined}
   */ getCurrentTag() {
        const path = this._matcher.path;
        return path.length > 0 ? path[path.length - 1].tag : undefined;
    }
    /**
   * Get current namespace.
   * @returns {string|undefined}
   */ getCurrentNamespace() {
        const path = this._matcher.path;
        return path.length > 0 ? path[path.length - 1].namespace : undefined;
    }
    /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */ getAttrValue(attrName) {
        const path = this._matcher.path;
        if (path.length === 0) return undefined;
        return path[path.length - 1].values?.[attrName];
    }
    /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */ hasAttr(attrName) {
        const path = this._matcher.path;
        if (path.length === 0) return false;
        const current = path[path.length - 1];
        return current.values !== undefined && attrName in current.values;
    }
    /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */ getPosition() {
        const path = this._matcher.path;
        if (path.length === 0) return -1;
        return path[path.length - 1].position ?? 0;
    }
    /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */ getCounter() {
        const path = this._matcher.path;
        if (path.length === 0) return -1;
        return path[path.length - 1].counter ?? 0;
    }
    /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */ getIndex() {
        return this.getPosition();
    }
    /**
   * Get current path depth.
   * @returns {number}
   */ getDepth() {
        return this._matcher.path.length;
    }
    /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */ toString(separator, includeNamespace = true) {
        return this._matcher.toString(separator, includeNamespace);
    }
    /**
   * Get path as array of tag names.
   * @returns {string[]}
   */ toArray() {
        return this._matcher.path.map((n)=>n.tag);
    }
    /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */ matches(expression) {
        return this._matcher.matches(expression);
    }
    /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */ matchesAny(exprSet) {
        return exprSet.matchesAny(this._matcher);
    }
}
class Matcher {
    /**
   * Create a new Matcher.
   * @param {Object} [options={}]
   * @param {string} [options.separator='.'] - Default path separator
   */ constructor(options = {}){
        this.separator = options.separator || '.';
        this.path = [];
        this.siblingStacks = [];
        // Each path node: { tag, values, position, counter, namespace? }
        // values only present for current (last) node
        // Each siblingStacks entry: Map<tagName, count> tracking occurrences at each level
        this._pathStringCache = null;
        this._view = new MatcherView(this);
    }
    /**
   * Push a new tag onto the path.
   * @param {string} tagName
   * @param {Object|null} [attrValues=null]
   * @param {string|null} [namespace=null]
   */ push(tagName, attrValues = null, namespace = null) {
        this._pathStringCache = null;
        // Remove values from previous current node (now becoming ancestor)
        if (this.path.length > 0) {
            this.path[this.path.length - 1].values = undefined;
        }
        // Get or create sibling tracking for current level
        const currentLevel = this.path.length;
        if (!this.siblingStacks[currentLevel]) {
            this.siblingStacks[currentLevel] = new Map();
        }
        const siblings = this.siblingStacks[currentLevel];
        // Create a unique key for sibling tracking that includes namespace
        const siblingKey = namespace ? `${namespace}:${tagName}` : tagName;
        // Calculate counter (how many times this tag appeared at this level)
        const counter = siblings.get(siblingKey) || 0;
        // Calculate position (total children at this level so far)
        let position = 0;
        for (const count of siblings.values()){
            position += count;
        }
        // Update sibling count for this tag
        siblings.set(siblingKey, counter + 1);
        // Create new node
        const node = {
            tag: tagName,
            position: position,
            counter: counter
        };
        if (namespace !== null && namespace !== undefined) {
            node.namespace = namespace;
        }
        if (attrValues !== null && attrValues !== undefined) {
            node.values = attrValues;
        }
        this.path.push(node);
    }
    /**
   * Pop the last tag from the path.
   * @returns {Object|undefined} The popped node
   */ pop() {
        if (this.path.length === 0) return undefined;
        this._pathStringCache = null;
        const node = this.path.pop();
        if (this.siblingStacks.length > this.path.length + 1) {
            this.siblingStacks.length = this.path.length + 1;
        }
        return node;
    }
    /**
   * Update current node's attribute values.
   * Useful when attributes are parsed after push.
   * @param {Object} attrValues
   */ updateCurrent(attrValues) {
        if (this.path.length > 0) {
            const current = this.path[this.path.length - 1];
            if (attrValues !== null && attrValues !== undefined) {
                current.values = attrValues;
            }
        }
    }
    /**
   * Get current tag name.
   * @returns {string|undefined}
   */ getCurrentTag() {
        return this.path.length > 0 ? this.path[this.path.length - 1].tag : undefined;
    }
    /**
   * Get current namespace.
   * @returns {string|undefined}
   */ getCurrentNamespace() {
        return this.path.length > 0 ? this.path[this.path.length - 1].namespace : undefined;
    }
    /**
   * Get current node's attribute value.
   * @param {string} attrName
   * @returns {*}
   */ getAttrValue(attrName) {
        if (this.path.length === 0) return undefined;
        return this.path[this.path.length - 1].values?.[attrName];
    }
    /**
   * Check if current node has an attribute.
   * @param {string} attrName
   * @returns {boolean}
   */ hasAttr(attrName) {
        if (this.path.length === 0) return false;
        const current = this.path[this.path.length - 1];
        return current.values !== undefined && attrName in current.values;
    }
    /**
   * Get current node's sibling position (child index in parent).
   * @returns {number}
   */ getPosition() {
        if (this.path.length === 0) return -1;
        return this.path[this.path.length - 1].position ?? 0;
    }
    /**
   * Get current node's repeat counter (occurrence count of this tag name).
   * @returns {number}
   */ getCounter() {
        if (this.path.length === 0) return -1;
        return this.path[this.path.length - 1].counter ?? 0;
    }
    /**
   * Get current node's sibling index (alias for getPosition).
   * @returns {number}
   * @deprecated Use getPosition() or getCounter() instead
   */ getIndex() {
        return this.getPosition();
    }
    /**
   * Get current path depth.
   * @returns {number}
   */ getDepth() {
        return this.path.length;
    }
    /**
   * Get path as string.
   * @param {string} [separator] - Optional separator (uses default if not provided)
   * @param {boolean} [includeNamespace=true]
   * @returns {string}
   */ toString(separator, includeNamespace = true) {
        const sep = separator || this.separator;
        const isDefault = sep === this.separator && includeNamespace === true;
        if (isDefault) {
            if (this._pathStringCache !== null) {
                return this._pathStringCache;
            }
            const result = this.path.map((n)=>n.namespace ? `${n.namespace}:${n.tag}` : n.tag).join(sep);
            this._pathStringCache = result;
            return result;
        }
        return this.path.map((n)=>includeNamespace && n.namespace ? `${n.namespace}:${n.tag}` : n.tag).join(sep);
    }
    /**
   * Get path as array of tag names.
   * @returns {string[]}
   */ toArray() {
        return this.path.map((n)=>n.tag);
    }
    /**
   * Reset the path to empty.
   */ reset() {
        this._pathStringCache = null;
        this.path = [];
        this.siblingStacks = [];
    }
    /**
   * Match current path against an Expression.
   * @param {Expression} expression
   * @returns {boolean}
   */ matches(expression) {
        const segments = expression.segments;
        if (segments.length === 0) {
            return false;
        }
        if (expression.hasDeepWildcard()) {
            return this._matchWithDeepWildcard(segments);
        }
        return this._matchSimple(segments);
    }
    /**
   * @private
   */ _matchSimple(segments) {
        if (this.path.length !== segments.length) {
            return false;
        }
        for(let i = 0; i < segments.length; i++){
            if (!this._matchSegment(segments[i], this.path[i], i === this.path.length - 1)) {
                return false;
            }
        }
        return true;
    }
    /**
   * @private
   */ _matchWithDeepWildcard(segments) {
        let pathIdx = this.path.length - 1;
        let segIdx = segments.length - 1;
        while(segIdx >= 0 && pathIdx >= 0){
            const segment = segments[segIdx];
            if (segment.type === 'deep-wildcard') {
                segIdx--;
                if (segIdx < 0) {
                    return true;
                }
                const nextSeg = segments[segIdx];
                let found = false;
                for(let i = pathIdx; i >= 0; i--){
                    if (this._matchSegment(nextSeg, this.path[i], i === this.path.length - 1)) {
                        pathIdx = i - 1;
                        segIdx--;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return false;
                }
            } else {
                if (!this._matchSegment(segment, this.path[pathIdx], pathIdx === this.path.length - 1)) {
                    return false;
                }
                pathIdx--;
                segIdx--;
            }
        }
        return segIdx < 0;
    }
    /**
   * @private
   */ _matchSegment(segment, node, isCurrentNode) {
        if (segment.tag !== '*' && segment.tag !== node.tag) {
            return false;
        }
        if (segment.namespace !== undefined) {
            if (segment.namespace !== '*' && segment.namespace !== node.namespace) {
                return false;
            }
        }
        if (segment.attrName !== undefined) {
            if (!isCurrentNode) {
                return false;
            }
            if (!node.values || !(segment.attrName in node.values)) {
                return false;
            }
            if (segment.attrValue !== undefined) {
                if (String(node.values[segment.attrName]) !== String(segment.attrValue)) {
                    return false;
                }
            }
        }
        if (segment.position !== undefined) {
            if (!isCurrentNode) {
                return false;
            }
            const counter = node.counter ?? 0;
            if (segment.position === 'first' && counter !== 0) {
                return false;
            } else if (segment.position === 'odd' && counter % 2 !== 1) {
                return false;
            } else if (segment.position === 'even' && counter % 2 !== 0) {
                return false;
            } else if (segment.position === 'nth' && counter !== segment.positionValue) {
                return false;
            }
        }
        return true;
    }
    /**
   * Match any expression in the given set against the current path.
   * @param {ExpressionSet} exprSet
   * @returns {boolean}
   */ matchesAny(exprSet) {
        return exprSet.matchesAny(this);
    }
    /**
   * Create a snapshot of current state.
   * @returns {Object}
   */ snapshot() {
        return {
            path: this.path.map((node)=>({
                    ...node
                })),
            siblingStacks: this.siblingStacks.map((map)=>new Map(map))
        };
    }
    /**
   * Restore state from snapshot.
   * @param {Object} snapshot
   */ restore(snapshot) {
        this._pathStringCache = null;
        this.path = snapshot.path.map((node)=>({
                ...node
            }));
        this.siblingStacks = snapshot.siblingStacks.map((map)=>new Map(map));
    }
    /**
   * Return the read-only {@link MatcherView} for this matcher.
   *
   * The same instance is returned on every call — no allocation occurs.
   * It always reflects the current parser state and is safe to pass to
   * user callbacks without risk of accidental mutation.
   *
   * @returns {MatcherView}
   *
   * @example
   * const view = matcher.readOnly();
   * // pass view to callbacks — it stays in sync automatically
   * view.matches(expr);       // ✓
   * view.getCurrentTag();     // ✓
   * // view.push(...)         // ✗ method does not exist — caught by TypeScript
   */ readOnly() {
        return this._view;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript) <export default as Matcher>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Matcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ExpressionSet - An indexed collection of Expressions for efficient bulk matching
 *
 * Instead of iterating all expressions on every tag, ExpressionSet pre-indexes
 * them at insertion time by depth and terminal tag name. At match time, only
 * the relevant bucket is evaluated — typically reducing checks from O(E) to O(1)
 * lookup plus O(small bucket) matches.
 *
 * Three buckets are maintained:
 *  - `_byDepthAndTag`  — exact depth + exact tag name  (tightest, used first)
 *  - `_wildcardByDepth` — exact depth + wildcard tag `*` (depth-matched only)
 *  - `_deepWildcards`  — expressions containing `..`  (cannot be depth-indexed)
 *
 * @example
 * import { Expression, ExpressionSet } from 'fast-xml-tagger';
 *
 * // Build once at config time
 * const stopNodes = new ExpressionSet();
 * stopNodes.add(new Expression('root.users.user'));
 * stopNodes.add(new Expression('root.config.setting'));
 * stopNodes.add(new Expression('..script'));
 *
 * // Query on every tag — hot path
 * if (stopNodes.matchesAny(matcher)) { ... }
 */ __turbopack_context__.s([
    "default",
    ()=>ExpressionSet
]);
class ExpressionSet {
    constructor(){
        /** @type {Map<string, import('./Expression.js').default[]>} depth:tag → expressions */ this._byDepthAndTag = new Map();
        /** @type {Map<number, import('./Expression.js').default[]>} depth → wildcard-tag expressions */ this._wildcardByDepth = new Map();
        /** @type {import('./Expression.js').default[]} expressions containing deep wildcard (..) */ this._deepWildcards = [];
        /** @type {Set<string>} pattern strings already added — used for deduplication */ this._patterns = new Set();
        /** @type {boolean} whether the set is sealed against further additions */ this._sealed = false;
    }
    /**
   * Add an Expression to the set.
   * Duplicate patterns (same pattern string) are silently ignored.
   *
   * @param {import('./Expression.js').default} expression - A pre-constructed Expression instance
   * @returns {this} for chaining
   * @throws {TypeError} if called after seal()
   *
   * @example
   * set.add(new Expression('root.users.user'));
   * set.add(new Expression('..script'));
   */ add(expression) {
        if (this._sealed) {
            throw new TypeError('ExpressionSet is sealed. Create a new ExpressionSet to add more expressions.');
        }
        // Deduplicate by pattern string
        if (this._patterns.has(expression.pattern)) return this;
        this._patterns.add(expression.pattern);
        if (expression.hasDeepWildcard()) {
            this._deepWildcards.push(expression);
            return this;
        }
        const depth = expression.length;
        const lastSeg = expression.segments[expression.segments.length - 1];
        const tag = lastSeg?.tag;
        if (!tag || tag === '*') {
            // Can index by depth but not by tag
            if (!this._wildcardByDepth.has(depth)) this._wildcardByDepth.set(depth, []);
            this._wildcardByDepth.get(depth).push(expression);
        } else {
            // Tightest bucket: depth + tag
            const key = `${depth}:${tag}`;
            if (!this._byDepthAndTag.has(key)) this._byDepthAndTag.set(key, []);
            this._byDepthAndTag.get(key).push(expression);
        }
        return this;
    }
    /**
   * Add multiple expressions at once.
   *
   * @param {import('./Expression.js').default[]} expressions - Array of Expression instances
   * @returns {this} for chaining
   *
   * @example
   * set.addAll([
   *   new Expression('root.users.user'),
   *   new Expression('root.config.setting'),
   * ]);
   */ addAll(expressions) {
        for (const expr of expressions)this.add(expr);
        return this;
    }
    /**
   * Check whether a pattern string is already present in the set.
   *
   * @param {import('./Expression.js').default} expression
   * @returns {boolean}
   */ has(expression) {
        return this._patterns.has(expression.pattern);
    }
    /**
   * Number of expressions in the set.
   * @type {number}
   */ get size() {
        return this._patterns.size;
    }
    /**
   * Seal the set against further modifications.
   * Useful to prevent accidental mutations after config is built.
   * Calling add() or addAll() on a sealed set throws a TypeError.
   *
   * @returns {this}
   */ seal() {
        this._sealed = true;
        return this;
    }
    /**
   * Whether the set has been sealed.
   * @type {boolean}
   */ get isSealed() {
        return this._sealed;
    }
    /**
   * Test whether the matcher's current path matches any expression in the set.
   *
   * Evaluation order (cheapest → most expensive):
   *  1. Exact depth + tag bucket  — O(1) lookup, typically 0–2 expressions
   *  2. Depth-only wildcard bucket — O(1) lookup, rare
   *  3. Deep-wildcard list         — always checked, but usually small
   *
   * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
   * @returns {boolean} true if any expression matches the current path
   *
   * @example
   * if (stopNodes.matchesAny(matcher)) {
   *   // handle stop node
   * }
   */ matchesAny(matcher) {
        return this.findMatch(matcher) !== null;
    }
    /**
 * Find and return the first Expression that matches the matcher's current path.
 *
 * Uses the same evaluation order as matchesAny (cheapest → most expensive):
 *  1. Exact depth + tag bucket
 *  2. Depth-only wildcard bucket
 *  3. Deep-wildcard list
 *
 * @param {import('./Matcher.js').default} matcher - Matcher instance (or readOnly view)
 * @returns {import('./Expression.js').default | null} the first matching Expression, or null
 *
 * @example
 * const expr = stopNodes.findMatch(matcher);
 * if (expr) {
 *   // access expr.config, expr.pattern, etc.
 * }
 */ findMatch(matcher) {
        const depth = matcher.getDepth();
        const tag = matcher.getCurrentTag();
        // 1. Tightest bucket — most expressions live here
        const exactKey = `${depth}:${tag}`;
        const exactBucket = this._byDepthAndTag.get(exactKey);
        if (exactBucket) {
            for(let i = 0; i < exactBucket.length; i++){
                if (matcher.matches(exactBucket[i])) return exactBucket[i];
            }
        }
        // 2. Depth-matched wildcard-tag expressions
        const wildcardBucket = this._wildcardByDepth.get(depth);
        if (wildcardBucket) {
            for(let i = 0; i < wildcardBucket.length; i++){
                if (matcher.matches(wildcardBucket[i])) return wildcardBucket[i];
            }
        }
        // 3. Deep wildcards — cannot be pre-filtered by depth or tag
        for(let i = 0; i < this._deepWildcards.length; i++){
            if (matcher.matches(this._deepWildcards[i])) return this._deepWildcards[i];
        }
        return null;
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript) <export default as ExpressionSet>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpressionSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@nodable/entities/src/entities.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ---------------------------------------------------------------------------
// Complete HTML5 named entity reference
// Organized by logical categories for easy maintenance and selective importing
// ---------------------------------------------------------------------------
/**
 * Basic Latin & Special Characters
 * @type {Record<string, string>}
 */ __turbopack_context__.s([
    "ALL_ENTITIES",
    ()=>ALL_ENTITIES,
    "ARROWS",
    ()=>ARROWS,
    "BASIC_LATIN",
    ()=>BASIC_LATIN,
    "COMMON_HTML",
    ()=>COMMON_HTML,
    "CURRENCY",
    ()=>CURRENCY,
    "CYRILLIC",
    ()=>CYRILLIC,
    "FRACTIONS",
    ()=>FRACTIONS,
    "GREEK",
    ()=>GREEK,
    "LATIN_ACCENTS",
    ()=>LATIN_ACCENTS,
    "LATIN_EXTENDED",
    ()=>LATIN_EXTENDED,
    "MATH",
    ()=>MATH,
    "MATH_ADVANCED",
    ()=>MATH_ADVANCED,
    "MISC_SYMBOLS",
    ()=>MISC_SYMBOLS,
    "PUNCTUATION",
    ()=>PUNCTUATION,
    "SHAPES",
    ()=>SHAPES,
    "XML",
    ()=>XML
]);
const BASIC_LATIN = {
    amp: '&',
    AMP: '&',
    lt: '<',
    LT: '<',
    gt: '>',
    GT: '>',
    quot: '"',
    QUOT: '"',
    apos: "'",
    lsquo: '‘',
    rsquo: '’',
    ldquo: '“',
    rdquo: '”',
    lsquor: '‚',
    rsquor: '’',
    ldquor: '„',
    bdquo: '„',
    comma: ',',
    period: '.',
    colon: ':',
    semi: ';',
    excl: '!',
    quest: '?',
    num: '#',
    dollar: '$',
    percent: '%',
    amp: '&',
    ast: '*',
    commat: '@',
    lowbar: '_',
    verbar: '|',
    vert: '|',
    sol: '/',
    bsol: '\\',
    lbrace: '{',
    rbrace: '}',
    lbrack: '[',
    rbrack: ']',
    lpar: '(',
    rpar: ')',
    nbsp: '\u00a0',
    iexcl: '¡',
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    COPY: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '\u00ad',
    reg: '®',
    REG: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    half: '½',
    frac34: '¾',
    iquest: '¿',
    times: '×',
    div: '÷',
    divide: '÷'
};
const LATIN_ACCENTS = {
    Agrave: 'À',
    agrave: 'à',
    Aacute: 'Á',
    aacute: 'á',
    Acirc: 'Â',
    acirc: 'â',
    Atilde: 'Ã',
    atilde: 'ã',
    Auml: 'Ä',
    auml: 'ä',
    Aring: 'Å',
    aring: 'å',
    AElig: 'Æ',
    aelig: 'æ',
    Ccedil: 'Ç',
    ccedil: 'ç',
    Egrave: 'È',
    egrave: 'è',
    Eacute: 'É',
    eacute: 'é',
    Ecirc: 'Ê',
    ecirc: 'ê',
    Euml: 'Ë',
    euml: 'ë',
    Igrave: 'Ì',
    igrave: 'ì',
    Iacute: 'Í',
    iacute: 'í',
    Icirc: 'Î',
    icirc: 'î',
    Iuml: 'Ï',
    iuml: 'ï',
    ETH: 'Ð',
    eth: 'ð',
    Ntilde: 'Ñ',
    ntilde: 'ñ',
    Ograve: 'Ò',
    ograve: 'ò',
    Oacute: 'Ó',
    oacute: 'ó',
    Ocirc: 'Ô',
    ocirc: 'ô',
    Otilde: 'Õ',
    otilde: 'õ',
    Ouml: 'Ö',
    ouml: 'ö',
    Oslash: 'Ø',
    oslash: 'ø',
    Ugrave: 'Ù',
    ugrave: 'ù',
    Uacute: 'Ú',
    uacute: 'ú',
    Ucirc: 'Û',
    ucirc: 'û',
    Uuml: 'Ü',
    uuml: 'ü',
    Yacute: 'Ý',
    yacute: 'ý',
    THORN: 'Þ',
    thorn: 'þ',
    szlig: 'ß',
    yuml: 'ÿ',
    Yuml: 'Ÿ'
};
const LATIN_EXTENDED = {
    Amacr: 'Ā',
    amacr: 'ā',
    Abreve: 'Ă',
    abreve: 'ă',
    Aogon: 'Ą',
    aogon: 'ą',
    Cacute: 'Ć',
    cacute: 'ć',
    Ccirc: 'Ĉ',
    ccirc: 'ĉ',
    Cdot: 'Ċ',
    cdot: 'ċ',
    Ccaron: 'Č',
    ccaron: 'č',
    Dcaron: 'Ď',
    dcaron: 'ď',
    Dstrok: 'Đ',
    dstrok: 'đ',
    Emacr: 'Ē',
    emacr: 'ē',
    Ecaron: 'Ě',
    ecaron: 'ě',
    Edot: 'Ė',
    edot: 'ė',
    Eogon: 'Ę',
    eogon: 'ę',
    Gcirc: 'Ĝ',
    gcirc: 'ĝ',
    Gbreve: 'Ğ',
    gbreve: 'ğ',
    Gdot: 'Ġ',
    gdot: 'ġ',
    Gcedil: 'Ģ',
    Hcirc: 'Ĥ',
    hcirc: 'ĥ',
    Hstrok: 'Ħ',
    hstrok: 'ħ',
    Itilde: 'Ĩ',
    itilde: 'ĩ',
    Imacr: 'Ī',
    imacr: 'ī',
    Iogon: 'Į',
    iogon: 'į',
    Idot: 'İ',
    IJlig: 'Ĳ',
    ijlig: 'ĳ',
    Jcirc: 'Ĵ',
    jcirc: 'ĵ',
    Kcedil: 'Ķ',
    kcedil: 'ķ',
    kgreen: 'ĸ',
    Lacute: 'Ĺ',
    lacute: 'ĺ',
    Lcedil: 'Ļ',
    lcedil: 'ļ',
    Lcaron: 'Ľ',
    lcaron: 'ľ',
    Lmidot: 'Ŀ',
    lmidot: 'ŀ',
    Lstrok: 'Ł',
    lstrok: 'ł',
    Nacute: 'Ń',
    nacute: 'ń',
    Ncaron: 'Ň',
    ncaron: 'ň',
    Ncedil: 'Ņ',
    ncedil: 'ņ',
    ENG: 'Ŋ',
    eng: 'ŋ',
    Omacr: 'Ō',
    omacr: 'ō',
    Odblac: 'Ő',
    odblac: 'ő',
    OElig: 'Œ',
    oelig: 'œ',
    Racute: 'Ŕ',
    racute: 'ŕ',
    Rcaron: 'Ř',
    rcaron: 'ř',
    Rcedil: 'Ŗ',
    rcedil: 'ŗ',
    Sacute: 'Ś',
    sacute: 'ś',
    Scirc: 'Ŝ',
    scirc: 'ŝ',
    Scedil: 'Ş',
    scedil: 'ş',
    Scaron: 'Š',
    scaron: 'š',
    Tcedil: 'Ţ',
    tcedil: 'ţ',
    Tcaron: 'Ť',
    tcaron: 'ť',
    Tstrok: 'Ŧ',
    tstrok: 'ŧ',
    Utilde: 'Ũ',
    utilde: 'ũ',
    Umacr: 'Ū',
    umacr: 'ū',
    Ubreve: 'Ŭ',
    ubreve: 'ŭ',
    Uring: 'Ů',
    uring: 'ů',
    Udblac: 'Ű',
    udblac: 'ű',
    Uogon: 'Ų',
    uogon: 'ų',
    Wcirc: 'Ŵ',
    wcirc: 'ŵ',
    Ycirc: 'Ŷ',
    ycirc: 'ŷ',
    Zacute: 'Ź',
    zacute: 'ź',
    Zdot: 'Ż',
    zdot: 'ż',
    Zcaron: 'Ž',
    zcaron: 'ž'
};
const GREEK = {
    Alpha: 'Α',
    alpha: 'α',
    Beta: 'Β',
    beta: 'β',
    Gamma: 'Γ',
    gamma: 'γ',
    Delta: 'Δ',
    delta: 'δ',
    Epsilon: 'Ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    varepsilon: 'ϵ',
    Zeta: 'Ζ',
    zeta: 'ζ',
    Eta: 'Η',
    eta: 'η',
    Theta: 'Θ',
    theta: 'θ',
    thetasym: 'ϑ',
    vartheta: 'ϑ',
    Iota: 'Ι',
    iota: 'ι',
    Kappa: 'Κ',
    kappa: 'κ',
    kappav: 'ϰ',
    varkappa: 'ϰ',
    Lambda: 'Λ',
    lambda: 'λ',
    Mu: 'Μ',
    mu: 'μ',
    Nu: 'Ν',
    nu: 'ν',
    Xi: 'Ξ',
    xi: 'ξ',
    Omicron: 'Ο',
    omicron: 'ο',
    Pi: 'Π',
    pi: 'π',
    piv: 'ϖ',
    varpi: 'ϖ',
    Rho: 'Ρ',
    rho: 'ρ',
    rhov: 'ϱ',
    varrho: 'ϱ',
    Sigma: 'Σ',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    varsigma: 'ς',
    Tau: 'Τ',
    tau: 'τ',
    Upsilon: 'Υ',
    upsilon: 'υ',
    upsi: 'υ',
    Upsi: 'ϒ',
    upsih: 'ϒ',
    Phi: 'Φ',
    phi: 'φ',
    phiv: 'ϕ',
    varphi: 'ϕ',
    Chi: 'Χ',
    chi: 'χ',
    Psi: 'Ψ',
    psi: 'ψ',
    Omega: 'Ω',
    omega: 'ω',
    ohm: 'Ω',
    Gammad: 'Ϝ',
    gammad: 'ϝ',
    digamma: 'ϝ'
};
const CYRILLIC = {
    Afr: '𝔄',
    afr: '𝔞',
    Acy: 'А',
    acy: 'а',
    Bcy: 'Б',
    bcy: 'б',
    Vcy: 'В',
    vcy: 'в',
    Gcy: 'Г',
    gcy: 'г',
    Dcy: 'Д',
    dcy: 'д',
    IEcy: 'Е',
    iecy: 'е',
    IOcy: 'Ё',
    iocy: 'ё',
    ZHcy: 'Ж',
    zhcy: 'ж',
    Zcy: 'З',
    zcy: 'з',
    Icy: 'И',
    icy: 'и',
    Jcy: 'Й',
    jcy: 'й',
    Kcy: 'К',
    kcy: 'к',
    Lcy: 'Л',
    lcy: 'л',
    Mcy: 'М',
    mcy: 'м',
    Ncy: 'Н',
    ncy: 'н',
    Ocy: 'О',
    ocy: 'о',
    Pcy: 'П',
    pcy: 'п',
    Rcy: 'Р',
    rcy: 'р',
    Scy: 'С',
    scy: 'с',
    Tcy: 'Т',
    tcy: 'т',
    Ucy: 'У',
    ucy: 'у',
    Fcy: 'Ф',
    fcy: 'ф',
    KHcy: 'Х',
    khcy: 'х',
    TScy: 'Ц',
    tscy: 'ц',
    CHcy: 'Ч',
    chcy: 'ч',
    SHcy: 'Ш',
    shcy: 'ш',
    SHCHcy: 'Щ',
    shchcy: 'щ',
    HARDcy: 'Ъ',
    hardcy: 'ъ',
    Ycy: 'Ы',
    ycy: 'ы',
    SOFTcy: 'Ь',
    softcy: 'ь',
    Ecy: 'Э',
    ecy: 'э',
    YUcy: 'Ю',
    yucy: 'ю',
    YAcy: 'Я',
    yacy: 'я',
    DJcy: 'Ђ',
    djcy: 'ђ',
    GJcy: 'Ѓ',
    gjcy: 'ѓ',
    Jukcy: 'Є',
    jukcy: 'є',
    DScy: 'Ѕ',
    dscy: 'ѕ',
    Iukcy: 'І',
    iukcy: 'і',
    YIcy: 'Ї',
    yicy: 'ї',
    Jsercy: 'Ј',
    jsercy: 'ј',
    LJcy: 'Љ',
    ljcy: 'љ',
    NJcy: 'Њ',
    njcy: 'њ',
    TSHcy: 'Ћ',
    tshcy: 'ћ',
    KJcy: 'Ќ',
    kjcy: 'ќ',
    Ubrcy: 'Ў',
    ubrcy: 'ў',
    DZcy: 'Џ',
    dzcy: 'џ'
};
const MATH = {
    plus: '+',
    minus: '−',
    mnplus: '∓',
    mp: '∓',
    pm: '±',
    times: '×',
    div: '÷',
    divide: '÷',
    sdot: '⋅',
    star: '☆',
    starf: '★',
    bigstar: '★',
    lowast: '∗',
    ast: '*',
    midast: '*',
    compfn: '∘',
    smallcircle: '∘',
    bullet: '•',
    bull: '•',
    nbsp: '\u00a0',
    hellip: '…',
    mldr: '…',
    prime: '′',
    Prime: '″',
    tprime: '‴',
    bprime: '‵',
    backprime: '‵',
    minus: '−',
    minusd: '∸',
    dotminus: '∸',
    plusdo: '∔',
    dotplus: '∔',
    plusmn: '±',
    minusplus: '∓',
    mnplus: '∓',
    mp: '∓',
    setminus: '∖',
    smallsetminus: '∖',
    Backslash: '∖',
    setmn: '∖',
    ssetmn: '∖',
    lowbar: '_',
    verbar: '|',
    vert: '|',
    VerticalLine: '|',
    colon: ':',
    Colon: '∷',
    Proportion: '∷',
    ratio: '∶',
    equals: '=',
    ne: '≠',
    nequiv: '≢',
    equiv: '≡',
    Congruent: '≡',
    sim: '∼',
    thicksim: '∼',
    thksim: '∼',
    sime: '≃',
    simeq: '≃',
    TildeEqual: '≃',
    asymp: '≈',
    approx: '≈',
    thickapprox: '≈',
    thkap: '≈',
    TildeTilde: '≈',
    ncong: '≇',
    cong: '≅',
    TildeFullEqual: '≅',
    asympeq: '≍',
    CupCap: '≍',
    bump: '≎',
    Bumpeq: '≎',
    HumpDownHump: '≎',
    bumpe: '≏',
    bumpeq: '≏',
    HumpEqual: '≏',
    dotminus: '∸',
    minusd: '∸',
    plusdo: '∔',
    dotplus: '∔',
    le: '≤',
    LessEqual: '≤',
    ge: '≥',
    GreaterEqual: '≥',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    greater: '>',
    less: '<'
};
const MATH_ADVANCED = {
    alefsym: 'ℵ',
    aleph: 'ℵ',
    beth: 'ℶ',
    gimel: 'ℷ',
    daleth: 'ℸ',
    forall: '∀',
    ForAll: '∀',
    part: '∂',
    PartialD: '∂',
    exist: '∃',
    Exists: '∃',
    nexist: '∄',
    nexists: '∄',
    empty: '∅',
    emptyset: '∅',
    emptyv: '∅',
    varnothing: '∅',
    nabla: '∇',
    Del: '∇',
    isin: '∈',
    isinv: '∈',
    in: '∈',
    Element: '∈',
    notin: '∉',
    notinva: '∉',
    ni: '∋',
    niv: '∋',
    SuchThat: '∋',
    ReverseElement: '∋',
    notni: '∌',
    notniva: '∌',
    prod: '∏',
    Product: '∏',
    coprod: '∐',
    Coproduct: '∐',
    sum: '∑',
    Sum: '∑',
    minus: '−',
    mp: '∓',
    plusdo: '∔',
    dotplus: '∔',
    setminus: '∖',
    lowast: '∗',
    radic: '√',
    Sqrt: '√',
    prop: '∝',
    propto: '∝',
    Proportional: '∝',
    varpropto: '∝',
    infin: '∞',
    infintie: '⧝',
    ang: '∠',
    angle: '∠',
    angmsd: '∡',
    measuredangle: '∡',
    angsph: '∢',
    mid: '∣',
    VerticalBar: '∣',
    nmid: '∤',
    nsmid: '∤',
    npar: '∦',
    parallel: '∥',
    spar: '∥',
    nparallel: '∦',
    nspar: '∦',
    and: '∧',
    wedge: '∧',
    or: '∨',
    vee: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    Integral: '∫',
    conint: '∮',
    ContourIntegral: '∮',
    Conint: '∯',
    DoubleContourIntegral: '∯',
    Cconint: '∰',
    there4: '∴',
    therefore: '∴',
    Therefore: '∴',
    becaus: '∵',
    because: '∵',
    Because: '∵',
    ratio: '∶',
    Proportion: '∷',
    minusd: '∸',
    dotminus: '∸',
    mDDot: '∺',
    homtht: '∻',
    sim: '∼',
    bsimg: '∽',
    backsim: '∽',
    ac: '∾',
    mstpos: '∾',
    acd: '∿',
    VerticalTilde: '≀',
    wr: '≀',
    wreath: '≀',
    nsime: '≄',
    nsimeq: '≄',
    nsimeq: '≄',
    ncong: '≇',
    simne: '≆',
    ncongdot: '⩭̸',
    ngsim: '≵',
    nsim: '≁',
    napprox: '≉',
    nap: '≉',
    ngeq: '≱',
    nge: '≱',
    nleq: '≰',
    nle: '≰',
    ngtr: '≯',
    ngt: '≯',
    nless: '≮',
    nlt: '≮',
    nprec: '⊀',
    npr: '⊀',
    nsucc: '⊁',
    nsc: '⊁'
};
const ARROWS = {
    larr: '←',
    leftarrow: '←',
    LeftArrow: '←',
    uarr: '↑',
    uparrow: '↑',
    UpArrow: '↑',
    rarr: '→',
    rightarrow: '→',
    RightArrow: '→',
    darr: '↓',
    downarrow: '↓',
    DownArrow: '↓',
    harr: '↔',
    leftrightarrow: '↔',
    LeftRightArrow: '↔',
    varr: '↕',
    updownarrow: '↕',
    UpDownArrow: '↕',
    nwarr: '↖',
    nwarrow: '↖',
    UpperLeftArrow: '↖',
    nearr: '↗',
    nearrow: '↗',
    UpperRightArrow: '↗',
    searr: '↘',
    searrow: '↘',
    LowerRightArrow: '↘',
    swarr: '↙',
    swarrow: '↙',
    LowerLeftArrow: '↙',
    lArr: '⇐',
    Leftarrow: '⇐',
    uArr: '⇑',
    Uparrow: '⇑',
    rArr: '⇒',
    Rightarrow: '⇒',
    dArr: '⇓',
    Downarrow: '⇓',
    hArr: '⇔',
    Leftrightarrow: '⇔',
    iff: '⇔',
    vArr: '⇕',
    Updownarrow: '⇕',
    lAarr: '⇚',
    Lleftarrow: '⇚',
    rAarr: '⇛',
    Rrightarrow: '⇛',
    lrarr: '⇆',
    leftrightarrows: '⇆',
    rlarr: '⇄',
    rightleftarrows: '⇄',
    lrhar: '⇋',
    leftrightharpoons: '⇋',
    ReverseEquilibrium: '⇋',
    rlhar: '⇌',
    rightleftharpoons: '⇌',
    Equilibrium: '⇌',
    udarr: '⇅',
    UpArrowDownArrow: '⇅',
    duarr: '⇵',
    DownArrowUpArrow: '⇵',
    llarr: '⇇',
    leftleftarrows: '⇇',
    rrarr: '⇉',
    rightrightarrows: '⇉',
    ddarr: '⇊',
    downdownarrows: '⇊',
    har: '↽',
    lhard: '↽',
    leftharpoondown: '↽',
    lharu: '↼',
    leftharpoonup: '↼',
    rhard: '⇁',
    rightharpoondown: '⇁',
    rharu: '⇀',
    rightharpoonup: '⇀',
    lsh: '↰',
    Lsh: '↰',
    rsh: '↱',
    Rsh: '↱',
    ldsh: '↲',
    rdsh: '↳',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    mapstoleft: '↤',
    mapstoup: '↥',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    crarr: '↵',
    nwarrow: '↖',
    nearrow: '↗',
    searrow: '↘',
    swarrow: '↙',
    nleftarrow: '↚',
    nleftrightarrow: '↮',
    nrightarrow: '↛',
    nrarr: '↛',
    larrtl: '↢',
    rarrtl: '↣',
    leftarrowtail: '↢',
    rightarrowtail: '↣',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    Larr: '↞',
    Rarr: '↠',
    larrhk: '↩',
    rarrhk: '↪',
    larrlp: '↫',
    looparrowleft: '↫',
    rarrlp: '↬',
    looparrowright: '↬',
    harrw: '↭',
    leftrightsquigarrow: '↭',
    nrarrw: '↝̸',
    rarrw: '↝',
    rightsquigarrow: '↝',
    larrbfs: '⤟',
    rarrbfs: '⤠',
    nvHarr: '⤄',
    nvlArr: '⤂',
    nvrArr: '⤃',
    larrfs: '⤝',
    rarrfs: '⤞',
    Map: '⤅',
    larrsim: '⥳',
    rarrsim: '⥴',
    harrcir: '⥈',
    Uarrocir: '⥉',
    lurdshar: '⥊',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    rdldhar: '⥩',
    lrhard: '⥭',
    rlhar: '⇌',
    uharr: '↾',
    uharl: '↿',
    dharr: '⇂',
    dharl: '⇃',
    Uarr: '↟',
    Darr: '↡',
    zigrarr: '⇝',
    nwArr: '⇖',
    neArr: '⇗',
    seArr: '⇘',
    swArr: '⇙',
    nharr: '↮',
    nhArr: '⇎',
    nlarr: '↚',
    nlArr: '⇍',
    nrarr: '↛',
    nrArr: '⇏',
    larrb: '⇤',
    LeftArrowBar: '⇤',
    rarrb: '⇥',
    RightArrowBar: '⇥'
};
const SHAPES = {
    square: '□',
    Square: '□',
    squ: '□',
    squf: '▪',
    squarf: '▪',
    blacksquar: '▪',
    blacksquare: '▪',
    FilledVerySmallSquare: '▪',
    blk34: '▓',
    blk12: '▒',
    blk14: '░',
    block: '█',
    srect: '▭',
    rect: '▭',
    sdot: '⋅',
    sdotb: '⊡',
    dotsquare: '⊡',
    triangle: '▵',
    tri: '▵',
    trine: '▵',
    utri: '▵',
    triangledown: '▿',
    dtri: '▿',
    tridown: '▿',
    triangleleft: '◃',
    ltri: '◃',
    triangleright: '▹',
    rtri: '▹',
    blacktriangle: '▴',
    utrif: '▴',
    blacktriangledown: '▾',
    dtrif: '▾',
    blacktriangleleft: '◂',
    ltrif: '◂',
    blacktriangleright: '▸',
    rtrif: '▸',
    loz: '◊',
    lozenge: '◊',
    blacklozenge: '⧫',
    lozf: '⧫',
    bigcirc: '◯',
    xcirc: '◯',
    circ: 'ˆ',
    Circle: '○',
    cir: '○',
    o: '○',
    bullet: '•',
    bull: '•',
    hellip: '…',
    mldr: '…',
    nldr: '‥',
    boxh: '─',
    HorizontalLine: '─',
    boxv: '│',
    boxdr: '┌',
    boxdl: '┐',
    boxur: '└',
    boxul: '┘',
    boxvr: '├',
    boxvl: '┤',
    boxhd: '┬',
    boxhu: '┴',
    boxvh: '┼',
    boxH: '═',
    boxV: '║',
    boxdR: '╒',
    boxDr: '╓',
    boxDR: '╔',
    boxDl: '╕',
    boxdL: '╖',
    boxDL: '╗',
    boxuR: '╘',
    boxUr: '╙',
    boxUR: '╚',
    boxUl: '╜',
    boxuL: '╛',
    boxUL: '╝',
    boxvR: '╞',
    boxVr: '╟',
    boxVR: '╠',
    boxVl: '╢',
    boxvL: '╡',
    boxVL: '╣',
    boxHd: '╤',
    boxhD: '╥',
    boxHD: '╦',
    boxHu: '╧',
    boxhU: '╨',
    boxHU: '╩',
    boxvH: '╪',
    boxVh: '╫',
    boxVH: '╬'
};
const PUNCTUATION = {
    excl: '!',
    iexcl: '¡',
    brvbar: '¦',
    sect: '§',
    uml: '¨',
    copy: '©',
    ordf: 'ª',
    laquo: '«',
    not: '¬',
    shy: '\u00ad',
    reg: '®',
    macr: '¯',
    deg: '°',
    plusmn: '±',
    sup2: '²',
    sup3: '³',
    acute: '´',
    micro: 'µ',
    para: '¶',
    middot: '·',
    cedil: '¸',
    sup1: '¹',
    ordm: 'º',
    raquo: '»',
    frac14: '¼',
    frac12: '½',
    frac34: '¾',
    iquest: '¿',
    nbsp: '\u00a0',
    comma: ',',
    period: '.',
    colon: ':',
    semi: ';',
    vert: '|',
    Verbar: '‖',
    verbar: '|',
    dblac: '˝',
    circ: 'ˆ',
    caron: 'ˇ',
    breve: '˘',
    dot: '˙',
    ring: '˚',
    ogon: '˛',
    tilde: '˜',
    DiacriticalGrave: '`',
    DiacriticalAcute: '´',
    DiacriticalTilde: '˜',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    grave: '`',
    acute: '´'
};
const CURRENCY = {
    cent: '¢',
    pound: '£',
    curren: '¤',
    yen: '¥',
    euro: '€',
    dollar: '$',
    euro: '€',
    fnof: 'ƒ',
    inr: '₹',
    af: '؋',
    birr: 'ብር',
    peso: '₱',
    rub: '₽',
    won: '₩',
    yuan: '¥',
    cedil: '¸'
};
const FRACTIONS = {
    frac12: '½',
    half: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄'
};
const MISC_SYMBOLS = {
    trade: '™',
    TRADE: '™',
    telrec: '⌕',
    target: '⌖',
    ulcorn: '⌜',
    ulcorner: '⌜',
    urcorn: '⌝',
    urcorner: '⌝',
    dlcorn: '⌞',
    llcorner: '⌞',
    drcorn: '⌟',
    lrcorner: '⌟',
    intercal: '⊺',
    intcal: '⊺',
    oplus: '⊕',
    CirclePlus: '⊕',
    ominus: '⊖',
    CircleMinus: '⊖',
    otimes: '⊗',
    CircleTimes: '⊗',
    osol: '⊘',
    odot: '⊙',
    CircleDot: '⊙',
    oast: '⊛',
    circledast: '⊛',
    odash: '⊝',
    circleddash: '⊝',
    ocirc: '⊚',
    circledcirc: '⊚',
    boxplus: '⊞',
    plusb: '⊞',
    boxminus: '⊟',
    minusb: '⊟',
    boxtimes: '⊠',
    timesb: '⊠',
    boxdot: '⊡',
    sdotb: '⊡',
    veebar: '⊻',
    vee: '∨',
    barvee: '⊽',
    and: '∧',
    wedge: '∧',
    Cap: '⋒',
    Cup: '⋓',
    Fork: '⋔',
    pitchfork: '⋔',
    epar: '⋕',
    ltlarr: '⥶',
    nvap: '≍⃒',
    nvsim: '∼⃒',
    nvge: '≥⃒',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvgt: '>⃒',
    nvltrie: '⊴⃒',
    nvrtrie: '⊵⃒',
    Vdash: '⊩',
    dashv: '⊣',
    vDash: '⊨',
    Vdash: '⊩',
    Vvdash: '⊪',
    nvdash: '⊬',
    nvDash: '⊭',
    nVdash: '⊮',
    nVDash: '⊯'
};
const ALL_ENTITIES = {
    ...BASIC_LATIN,
    ...LATIN_ACCENTS,
    ...LATIN_EXTENDED,
    ...GREEK,
    ...CYRILLIC,
    ...MATH,
    ...MATH_ADVANCED,
    ...ARROWS,
    ...SHAPES,
    ...PUNCTUATION,
    ...CURRENCY,
    ...FRACTIONS,
    ...MISC_SYMBOLS
};
const XML = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: "\""
};
const COMMON_HTML = {
    nbsp: '\u00a0',
    copy: '\u00a9',
    reg: '\u00ae',
    trade: '\u2122',
    mdash: '\u2014',
    ndash: '\u2013',
    hellip: '\u2026',
    laquo: '\u00ab',
    raquo: '\u00bb',
    lsquo: '\u2018',
    rsquo: '\u2019',
    ldquo: '\u201c',
    rdquo: '\u201d',
    bull: '\u2022',
    para: '\u00b6',
    sect: '\u00a7',
    deg: '\u00b0',
    frac12: '\u00bd',
    frac14: '\u00bc',
    frac34: '\u00be'
} // ---------------------------------------------------------------------------
 // Note: NUMERIC_ENTITIES (&#NNN; / &#xHH;) are handled by the scanner directly
 // via String.fromCodePoint() without any map lookup.
 // ---------------------------------------------------------------------------
;
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntityDecoder
]);
// ---------------------------------------------------------------------------
// Built-in named entity map  (name → replacement string)
// No regex, no {regex,val} objects — just flat key/value pairs.
// ---------------------------------------------------------------------------
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@nodable/entities/src/entities.js [app-route] (ecmascript)");
;
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const SPECIAL_CHARS = new Set('!?\\\\/[]$%{}^&*()<>|+');
/**
 * Validate that an entity name contains no dangerous characters.
 * @param {string} name
 * @returns {string} the name, unchanged
 * @throws {Error} on invalid characters
 */ function validateEntityName(name) {
    if (name[0] === '#') {
        throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${name}"`);
    }
    for (const ch of name){
        if (SPECIAL_CHARS.has(ch)) {
            throw new Error(`[EntityReplacer] Invalid character '${ch}' in entity name: "${name}"`);
        }
    }
    return name;
}
/**
 * Merge one or more entity maps into a flat name→string map.
 * Accepts either:
 *   - plain string values:             { amp: '&' }
 *   - legacy {regex,val} / {regx,val}: { lt: { regex: /.../, val: '<' } }
 *
 * Values containing '&' are skipped (recursive expansion risk).
 *
 * @param {...object} maps
 * @returns {Record<string, string>}
 */ function mergeEntityMaps(...maps) {
    const out = Object.create(null);
    for (const map of maps){
        if (!map) continue;
        for (const key of Object.keys(map)){
            const raw = map[key];
            if (typeof raw === 'string') {
                out[key] = raw;
            } else if (raw && typeof raw === 'object' && raw.val !== undefined) {
                // Legacy {regex,val} or {regx,val} — extract the string val only
                const val = raw.val;
                if (typeof val === 'string') {
                    out[key] = val;
                }
            // function vals are not supported in the scanner — skip
            }
        }
    }
    return out;
}
// ---------------------------------------------------------------------------
// applyLimitsTo helpers
// ---------------------------------------------------------------------------
const LIMIT_TIER_EXTERNAL = 'external'; // input/runtime + persistent external maps
const LIMIT_TIER_BASE = 'base'; // DEFAULT_XML_ENTITIES + namedEntities (system) maps
const LIMIT_TIER_ALL = 'all'; // every entity regardless of tier
/**
 * Resolve `applyLimitsTo` option into a normalised Set of tier strings.
 * Accepted values: 'external' | 'base' | 'all' | string[]
 * Default: 'external' (only untrusted injected entities are counted).
 * @param {string|string[]|undefined} raw
 * @returns {Set<string>}
 */ function parseLimitTiers(raw) {
    if (!raw || raw === LIMIT_TIER_EXTERNAL) return new Set([
        LIMIT_TIER_EXTERNAL
    ]);
    if (raw === LIMIT_TIER_ALL) return new Set([
        LIMIT_TIER_ALL
    ]);
    if (raw === LIMIT_TIER_BASE) return new Set([
        LIMIT_TIER_BASE
    ]);
    if (Array.isArray(raw)) return new Set(raw);
    return new Set([
        LIMIT_TIER_EXTERNAL
    ]); // safe default for unrecognised values
}
// ---------------------------------------------------------------------------
// NCR (Numeric Character Reference) classification
// ---------------------------------------------------------------------------
// Severity order — higher number = stricter action.
// Used to enforce minimum action levels for specific codepoint ranges.
const NCR_LEVEL = Object.freeze({
    allow: 0,
    leave: 1,
    remove: 2,
    throw: 3
});
// XML 1.0 §2.2: allowed chars are #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
// Restricted C0: U+0001–U+001F excluding U+0009, U+000A, U+000D
const XML10_ALLOWED_C0 = new Set([
    0x09,
    0x0A,
    0x0D
]);
/**
 * Parse the `ncr` constructor option into flat, hot-path-friendly fields.
 * @param {object|undefined} ncr
 * @returns {{ xmlVersion: number, onLevel: number, nullLevel: number }}
 */ function parseNCRConfig(ncr) {
    if (!ncr) {
        return {
            xmlVersion: 1.0,
            onLevel: NCR_LEVEL.allow,
            nullLevel: NCR_LEVEL.remove
        };
    }
    const xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1.0;
    const onLevel = NCR_LEVEL[ncr.onNCR] ?? NCR_LEVEL.allow;
    const nullLevel = NCR_LEVEL[ncr.nullNCR] ?? NCR_LEVEL.remove;
    // 'allow' is not meaningful for null — clamp to at least 'remove'
    const clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
    return {
        xmlVersion,
        onLevel,
        nullLevel: clampedNull
    };
}
class EntityDecoder {
    /**
   * @param {object} [options]
   * @param {object|null}  [options.namedEntities]        — extra named entities merged into base map
   * @param {object}  [options.limit]                 — security limits
   * @param {number}       [options.limit.maxTotalExpansions=0]  — 0 = unlimited
   * @param {number}       [options.limit.maxExpandedLength=0]   — 0 = unlimited
   * @param {'external'|'base'|'all'|string[]} [options.limit.applyLimitsTo='external']
   *   Which entity tiers count against the security limits:
   *   - 'external' (default) — only input/runtime + persistent external entities
   *   - 'base'               — only DEFAULT_XML_ENTITIES + namedEntities
   *   - 'all'                — every entity regardless of tier
   *   - string[]             — explicit combination, e.g. ['external', 'base']
   * @param {((resolved: string, original: string) => string)|null} [options.postCheck=null]
   * @param {string[]} [options.remove=[]] — entity names (e.g. ['nbsp', '#13']) to delete (replace with empty string)
   * @param {string[]} [options.leave=[]]  — entity names to keep as literal (unchanged in output)
   * @param {object}   [options.ncr]       — Numeric Character Reference controls
   * @param {1.0|1.1}  [options.ncr.xmlVersion=1.0]
   *   XML version governing which codepoint ranges are restricted:
   *   - 1.0 — C0 controls U+0001–U+001F (except U+0009/000A/000D) are prohibited
   *   - 1.1 — C0 controls are allowed when written as NCRs; C1 (U+007F–U+009F) decoded as-is
   * @param {'allow'|'leave'|'remove'|'throw'} [options.ncr.onNCR='allow']
   *   Base action for numeric references. Severity order: allow < leave < remove < throw.
   *   For codepoint ranges that carry a minimum level (surrogates → remove, XML 1.0 C0 → remove),
   *   the effective action is max(onNCR, rangeMinimum).
   * @param {'remove'|'throw'} [options.ncr.nullNCR='remove']
   *   Action for U+0000 (null). 'allow' and 'leave' are clamped to 'remove' since null is never safe.
   */ constructor(options = {}){
        this._limit = options.limit || {};
        this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
        this._maxExpandedLength = this._limit.maxExpandedLength || 0;
        this._postCheck = typeof options.postCheck === 'function' ? options.postCheck : (r)=>r;
        this._limitTiers = parseLimitTiers(this._limit.applyLimitsTo ?? LIMIT_TIER_EXTERNAL);
        this._numericAllowed = options.numericAllowed ?? true;
        // Base map: DEFAULT_XML_ENTITIES + user-supplied extras. Immutable after construction.
        this._baseMap = mergeEntityMaps(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XML"], options.namedEntities || null);
        // Persistent external entities — survive across documents.
        // Stored as a separate map so reset() never touches them.
        /** @type {Record<string, string>} */ this._externalMap = Object.create(null);
        // Input / runtime entities — current document only, wiped on reset().
        /** @type {Record<string, string>} */ this._inputMap = Object.create(null);
        // Per-document counters
        this._totalExpansions = 0;
        this._expandedLength = 0;
        // --- New: remove / leave sets ---
        /** @type {Set<string>} */ this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
        /** @type {Set<string>} */ this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);
        // --- NCR config (parsed into flat fields for hot-path speed) ---
        const ncrCfg = parseNCRConfig(options.ncr);
        this._ncrXmlVersion = ncrCfg.xmlVersion;
        this._ncrOnLevel = ncrCfg.onLevel;
        this._ncrNullLevel = ncrCfg.nullLevel;
    }
    // -------------------------------------------------------------------------
    // Persistent external entity registration
    // -------------------------------------------------------------------------
    /**
   * Replace the full set of persistent external entities.
   * All keys are validated — throws on invalid characters.
   * @param {Record<string, string | { regex?: RegExp, val: string }>} map
   */ setExternalEntities(map) {
        if (map) {
            for (const key of Object.keys(map)){
                validateEntityName(key);
            }
        }
        this._externalMap = mergeEntityMaps(map);
    }
    /**
   * Add a single persistent external entity.
   * @param {string} key
   * @param {string} value
   */ addExternalEntity(key, value) {
        validateEntityName(key);
        if (typeof value === 'string' && value.indexOf('&') === -1) {
            this._externalMap[key] = value;
        }
    }
    // -------------------------------------------------------------------------
    // Input / runtime entity registration (per document)
    // -------------------------------------------------------------------------
    /**
   * Inject DOCTYPE entities for the current document.
   * Also resets per-document expansion counters.
   * @param {Record<string, string | { regx?: RegExp, regex?: RegExp, val: string }>} map
   */ addInputEntities(map) {
        this._totalExpansions = 0;
        this._expandedLength = 0;
        this._inputMap = mergeEntityMaps(map);
    }
    // -------------------------------------------------------------------------
    // Per-document reset
    // -------------------------------------------------------------------------
    /**
   * Wipe input/runtime entities and reset counters.
   * Call this before processing each new document.
   * @returns {this}
   */ reset() {
        this._inputMap = Object.create(null);
        this._totalExpansions = 0;
        this._expandedLength = 0;
        return this;
    }
    // -------------------------------------------------------------------------
    // XML version (can be set after construction, e.g. once parser reads <?xml?>)
    // -------------------------------------------------------------------------
    /**
   * Update the XML version used for NCR classification.
   * Call this as soon as the document's `<?xml version="...">` declaration is parsed.
   * @param {1.0|1.1|number} version
   */ setXmlVersion(version) {
        this._ncrXmlVersion = version === 1.1 ? 1.1 : 1.0;
    }
    // -------------------------------------------------------------------------
    // Primary API
    // -------------------------------------------------------------------------
    /**
   * Replace all entity references in `str` in a single pass.
   *
   * @param {string} str
   * @returns {string}
   */ decode(str) {
        if (typeof str !== 'string' || str.length === 0) return str;
        //TODO: check if needed
        //if (str.indexOf('&') === -1) return str; // fast path — no entities at all
        const original = str;
        const chunks = [];
        const len = str.length;
        let last = 0; // start of next unprocessed literal chunk
        let i = 0;
        const limitExpansions = this._maxTotalExpansions > 0;
        const limitLength = this._maxExpandedLength > 0;
        const checkLimits = limitExpansions || limitLength;
        while(i < len){
            // Scan forward to next '&'
            if (str.charCodeAt(i) !== 38 /* '&' */ ) {
                i++;
                continue;
            }
            // --- Found '&' at position i ---
            // Scan forward to ';'
            let j = i + 1;
            while(j < len && str.charCodeAt(j) !== 59 /* ';' */  && j - i <= 32)j++;
            if (j >= len || str.charCodeAt(j) !== 59) {
                // No closing ';' within window — treat '&' as literal
                i++;
                continue;
            }
            // Raw token between '&' and ';' (exclusive)
            const token = str.slice(i + 1, j);
            if (token.length === 0) {
                i++;
                continue;
            }
            let replacement;
            let tier; // which limit tier this entity belongs to
            if (this._removeSet.has(token)) {
                // Remove entity: replace with empty string
                replacement = '';
                // If entity was unknown (replacement undefined), we still need a tier for limits.
                // Treat as external tier because it's user-directed removal of an unknown reference.
                if (tier === undefined) {
                    tier = LIMIT_TIER_EXTERNAL;
                }
            } else if (this._leaveSet.has(token)) {
                // Do not replace — keep original &token; as literal
                i++;
                continue;
            } else if (token.charCodeAt(0) === 35 /* '#' */ ) {
                // ---- Numeric / NCR reference ----
                // NCR classification always runs first — prohibited codepoints must be
                // caught regardless of numericAllowed.
                const ncrResult = this._resolveNCR(token);
                if (ncrResult === undefined) {
                    // 'leave' action — keep original &token; as-is
                    i++;
                    continue;
                }
                replacement = ncrResult; // '' for remove, char string for allow
                tier = LIMIT_TIER_BASE;
            } else {
                // ---- Named reference ----
                const resolved = this._resolveName(token);
                replacement = resolved?.value;
                tier = resolved?.tier;
            }
            if (replacement === undefined) {
                // Unknown entity — leave as-is, advance past '&' only
                i++;
                continue;
            }
            // Flush literal chunk before this entity
            if (i > last) chunks.push(str.slice(last, i));
            chunks.push(replacement);
            last = j + 1; // skip past ';'
            i = last;
            // Apply expansion limits only if this tier is being tracked
            if (checkLimits && this._tierCounts(tier)) {
                if (limitExpansions) {
                    this._totalExpansions++;
                    if (this._totalExpansions > this._maxTotalExpansions) {
                        throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ` + `${this._totalExpansions} > ${this._maxTotalExpansions}`);
                    }
                }
                if (limitLength) {
                    // delta: replacement.length minus the raw &token; length (token.length + 2 for '&' and ';')
                    const delta = replacement.length - (token.length + 2);
                    if (delta > 0) {
                        this._expandedLength += delta;
                        if (this._expandedLength > this._maxExpandedLength) {
                            throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ` + `${this._expandedLength} > ${this._maxExpandedLength}`);
                        }
                    }
                }
            }
        }
        // Flush trailing literal
        if (last < len) chunks.push(str.slice(last));
        // If nothing was replaced, chunks is empty — return original
        const result = chunks.length === 0 ? str : chunks.join('');
        return this._postCheck(result, original);
    }
    // -------------------------------------------------------------------------
    // Private: limit tier check
    // -------------------------------------------------------------------------
    /**
   * Returns true if a resolved entity of the given tier should count
   * against the expansion/length limits.
   * @param {string} tier  — LIMIT_TIER_EXTERNAL | LIMIT_TIER_BASE
   * @returns {boolean}
   */ _tierCounts(tier) {
        if (this._limitTiers.has(LIMIT_TIER_ALL)) return true;
        return this._limitTiers.has(tier);
    }
    // -------------------------------------------------------------------------
    // Private: entity resolution
    // -------------------------------------------------------------------------
    /**
   * Resolve a named entity token (without & and ;).
   * Priority: inputMap > externalMap > baseMap
   * Returns the resolved value tagged with its limit tier.
   *
   * @param {string} name
   * @returns {{ value: string, tier: string }|undefined}
   */ _resolveName(name) {
        // input and external both count as 'external' tier for limit purposes —
        // they are injected at runtime and are the untrusted surface.
        if (name in this._inputMap) return {
            value: this._inputMap[name],
            tier: LIMIT_TIER_EXTERNAL
        };
        if (name in this._externalMap) return {
            value: this._externalMap[name],
            tier: LIMIT_TIER_EXTERNAL
        };
        if (name in this._baseMap) return {
            value: this._baseMap[name],
            tier: LIMIT_TIER_BASE
        };
        return undefined;
    }
    /**
   * Classify a codepoint and return the minimum action level that must be applied.
   * Returns -1 when no minimum is imposed (normal allow path).
   *
   * Ranges checked (in priority order):
   *   1. U+0000            — null, governed by nullNCR (always ≥ remove)
   *   2. U+D800–U+DFFF     — surrogates, always prohibited (min: remove)
   *   3. U+0001–U+001F \ {0x09,0x0A,0x0D}  — XML 1.0 restricted C0 (min: remove)
   *      (skipped in XML 1.1 — C0 controls are allowed when written as NCRs)
   *
   * @param {number} cp  — codepoint
   * @returns {number}   — minimum NCR_LEVEL value, or -1 for no restriction
   */ _classifyNCR(cp) {
        // 1. Null
        if (cp === 0) return this._ncrNullLevel;
        // 2. Surrogates — always prohibited, minimum 'remove'
        if (cp >= 0xD800 && cp <= 0xDFFF) return NCR_LEVEL.remove;
        // 3. XML 1.0 restricted C0 controls
        if (this._ncrXmlVersion === 1.0) {
            if (cp >= 0x01 && cp <= 0x1F && !XML10_ALLOWED_C0.has(cp)) return NCR_LEVEL.remove;
        }
        return -1; // no restriction
    }
    /**
   * Execute a resolved NCR action.
   *
   * @param {number} action   — NCR_LEVEL value
   * @param {string} token    — raw token (e.g. '#38') for error messages
   * @param {number} cp       — codepoint, used only for error messages
   * @returns {string|undefined}
   *   - decoded character string  → 'allow'
   *   - ''                        → 'remove'
   *   - undefined                 → 'leave' (caller must skip past '&' only)
   *   - throws Error              → 'throw'
   */ _applyNCRAction(action, token, cp) {
        switch(action){
            case NCR_LEVEL.allow:
                return String.fromCodePoint(cp);
            case NCR_LEVEL.remove:
                return '';
            case NCR_LEVEL.leave:
                return undefined; // signal: keep literal
            case NCR_LEVEL.throw:
                throw new Error(`[EntityDecoder] Prohibited numeric character reference ` + `&${token}; (U+${cp.toString(16).toUpperCase().padStart(4, '0')})`);
            default:
                return String.fromCodePoint(cp);
        }
    }
    /**
   * Full NCR resolution pipeline for a numeric token.
   *
   * Steps:
   *   1. Parse the codepoint (decimal or hex).
   *   2. Validate the raw codepoint range (NaN, <0, >0x10FFFF).
   *   3. If numericAllowed is false and no minimum restriction applies → leave as-is.
   *   4. Classify the codepoint to find the minimum required action level.
   *   5. Resolve effective action = max(onNCR, minimum).
   *   6. Apply and return.
   *
   * @param {string} token  — e.g. '#38', '#x26', '#X26'
   * @returns {string|undefined}
   *   - string (incl. '')  — replacement ('' = remove)
   *   - undefined          — leave original &token; as-is
   */ _resolveNCR(token) {
        // Step 1: parse codepoint
        const second = token.charCodeAt(1);
        let cp;
        if (second === 120 /* x */  || second === 88 /* X */ ) {
            cp = parseInt(token.slice(2), 16);
        } else {
            cp = parseInt(token.slice(1), 10);
        }
        // Step 2: out-of-range → leave as-is unconditionally
        if (Number.isNaN(cp) || cp < 0 || cp > 0x10FFFF) return undefined;
        // Step 3: classify to get minimum action level
        const minimum = this._classifyNCR(cp);
        // Step 4: if numericAllowed is false and no hard minimum → leave
        if (!this._numericAllowed && minimum < NCR_LEVEL.remove) return undefined;
        // Step 5: effective action = max(configured onNCR, range minimum)
        const effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);
        // Step 6: apply
        return this._applyNCRAction(effective, token, cp);
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript) <export default as EntityDecoder>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntityDecoder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrderedObjParser
]);
///@ts-check
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$DocTypeReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$strnum$2f$strnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/strnum/strnum.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$ignoreAttributes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/ignoreAttributes.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Expression.js [app-route] (ecmascript) <export default as Expression>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/Matcher.js [app-route] (ecmascript) <export default as Matcher>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__ExpressionSet$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/path-expression-matcher/src/ExpressionSet.js [app-route] (ecmascript) <export default as ExpressionSet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__EntityDecoder$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@nodable/entities/src/EntityDecoder.js [app-route] (ecmascript) <export default as EntityDecoder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@nodable/entities/src/entities.js [app-route] (ecmascript)");
'use strict';
;
;
;
;
;
;
;
;
// const regx =
//   '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
//   .replace(/NAME/g, util.nameRegexp);
//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");
// Helper functions for attribute and namespace handling
/**
 * Extract raw attributes (without prefix) from prefixed attribute map
 * @param {object} prefixedAttrs - Attributes with prefix from buildAttributesMap
 * @param {object} options - Parser options containing attributeNamePrefix
 * @returns {object} Raw attributes for matcher
 */ function extractRawAttributes(prefixedAttrs, options) {
    if (!prefixedAttrs) return {};
    // Handle attributesGroupName option
    const attrs = options.attributesGroupName ? prefixedAttrs[options.attributesGroupName] : prefixedAttrs;
    if (!attrs) return {};
    const rawAttrs = {};
    for(const key in attrs){
        // Remove the attribute prefix to get raw name
        if (key.startsWith(options.attributeNamePrefix)) {
            const rawName = key.substring(options.attributeNamePrefix.length);
            rawAttrs[rawName] = attrs[key];
        } else {
            // Attribute without prefix (shouldn't normally happen, but be safe)
            rawAttrs[key] = attrs[key];
        }
    }
    return rawAttrs;
}
/**
 * Extract namespace from raw tag name
 * @param {string} rawTagName - Tag name possibly with namespace (e.g., "soap:Envelope")
 * @returns {string|undefined} Namespace or undefined
 */ function extractNamespace(rawTagName) {
    if (!rawTagName || typeof rawTagName !== 'string') return undefined;
    const colonIndex = rawTagName.indexOf(':');
    if (colonIndex !== -1 && colonIndex > 0) {
        const ns = rawTagName.substring(0, colonIndex);
        // Don't treat xmlns as a namespace
        if (ns !== 'xmlns') {
            return ns;
        }
    }
    return undefined;
}
class OrderedObjParser {
    constructor(options, externalEntities){
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
        this.ignoreAttributesFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$ignoreAttributes$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(this.options.ignoreAttributes);
        this.entityExpansionCount = 0;
        this.currentExpandedLength = 0;
        let namedEntities = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XML"]
        };
        if (this.options.entityDecoder) {
            this.entityDecoder = this.options.entityDecoder;
        } else {
            if (typeof this.options.htmlEntities === "object") namedEntities = this.options.htmlEntities;
            else if (this.options.htmlEntities === true) namedEntities = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COMMON_HTML"],
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURRENCY"]
            };
            this.entityDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$nodable$2f$entities$2f$src$2f$EntityDecoder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__EntityDecoder$3e$__["EntityDecoder"]({
                namedEntities: {
                    ...namedEntities,
                    ...externalEntities
                },
                numericAllowed: this.options.htmlEntities,
                limit: {
                    maxTotalExpansions: this.options.processEntities.maxTotalExpansions,
                    maxExpandedLength: this.options.processEntities.maxExpandedLength,
                    applyLimitsTo: this.options.processEntities.appliesTo
                }
            });
        }
        // Initialize path matcher for path-expression-matcher
        this.matcher = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Matcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Matcher$3e$__["Matcher"]();
        // Live read-only proxy of matcher — PEM creates and caches this internally.
        // All user callbacks receive this instead of the mutable matcher.
        this.readonlyMatcher = this.matcher.readOnly();
        // Flag to track if current node is a stop node (optimization)
        this.isCurrentNodeStopNode = false;
        // Pre-compile stopNodes expressions
        this.stopNodeExpressionsSet = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$ExpressionSet$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__ExpressionSet$3e$__["ExpressionSet"]();
        const stopNodesOpts = this.options.stopNodes;
        if (stopNodesOpts && stopNodesOpts.length > 0) {
            for(let i = 0; i < stopNodesOpts.length; i++){
                const stopNodeExp = stopNodesOpts[i];
                if (typeof stopNodeExp === 'string') {
                    // Convert string to Expression object
                    this.stopNodeExpressionsSet.add(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"](stopNodeExp));
                } else if (stopNodeExp instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$path$2d$expression$2d$matcher$2f$src$2f$Expression$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__Expression$3e$__["Expression"]) {
                    // Already an Expression object
                    this.stopNodeExpressionsSet.add(stopNodeExp);
                }
            }
            this.stopNodeExpressionsSet.seal();
        }
    }
}
/**
 * @param {string} val
 * @param {string} tagName
 * @param {string|Matcher} jPath - jPath string or Matcher instance based on options.jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */ function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
    const options = this.options;
    if (val !== undefined) {
        if (options.trimValues && !dontTrim) {
            val = val.trim();
        }
        if (val.length > 0) {
            if (!escapeEntities) val = this.replaceEntitiesValue(val, tagName, jPath);
            // Pass jPath string or matcher based on options.jPath setting
            const jPathOrMatcher = options.jPath ? jPath.toString() : jPath;
            const newval = options.tagValueProcessor(tagName, val, jPathOrMatcher, hasAttributes, isLeafNode);
            if (newval === null || newval === undefined) {
                //don't parse
                return val;
            } else if (typeof newval !== typeof val || newval !== val) {
                //overwrite
                return newval;
            } else if (options.trimValues) {
                return parseValue(val, options.parseTagValue, options.numberParseOptions);
            } else {
                const trimmedVal = val.trim();
                if (trimmedVal === val) {
                    return parseValue(val, options.parseTagValue, options.numberParseOptions);
                } else {
                    return val;
                }
            }
        }
    }
}
function resolveNameSpace(tagname) {
    if (this.options.removeNSPrefix) {
        const tags = tagname.split(':');
        const prefix = tagname.charAt(0) === '/' ? '/' : '';
        if (tags[0] === 'xmlns') {
            return '';
        }
        if (tags.length === 2) {
            tagname = prefix + tags[1];
        }
    }
    return tagname;
}
//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');
function buildAttributesMap(attrStr, jPath, tagName, force = false) {
    const options = this.options;
    if (force === true || options.ignoreAttributes !== true && typeof attrStr === 'string') {
        // attrStr = attrStr.replace(/\r?\n/g, ' ');
        //attrStr = attrStr || attrStr.trim();
        const matches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllMatches"])(attrStr, attrsRegx);
        const len = matches.length; //don't make it inline
        const attrs = {};
        // Pre-process values once: trim + entity replacement
        // Reused in both matcher update and second pass
        const processedVals = new Array(len);
        let hasRawAttrs = false;
        const rawAttrsForMatcher = {};
        for(let i = 0; i < len; i++){
            const attrName = this.resolveNameSpace(matches[i][1]);
            const oldVal = matches[i][4];
            if (attrName.length && oldVal !== undefined) {
                let val = oldVal;
                if (options.trimValues) val = val.trim();
                val = this.replaceEntitiesValue(val, tagName, this.readonlyMatcher);
                processedVals[i] = val;
                rawAttrsForMatcher[attrName] = val;
                hasRawAttrs = true;
            }
        }
        // Update matcher ONCE before second pass, if applicable
        if (hasRawAttrs && typeof jPath === 'object' && jPath.updateCurrent) {
            jPath.updateCurrent(rawAttrsForMatcher);
        }
        // Hoist toString() once — path doesn't change during attribute processing
        const jPathStr = options.jPath ? jPath.toString() : this.readonlyMatcher;
        // Second pass: apply processors, build final attrs
        let hasAttrs = false;
        for(let i = 0; i < len; i++){
            const attrName = this.resolveNameSpace(matches[i][1]);
            if (this.ignoreAttributesFn(attrName, jPathStr)) continue;
            let aName = options.attributeNamePrefix + attrName;
            if (attrName.length) {
                if (options.transformAttributeName) {
                    aName = options.transformAttributeName(aName);
                }
                aName = sanitizeName(aName, options);
                if (matches[i][4] !== undefined) {
                    // Reuse already-processed value — no double entity replacement
                    const oldVal = processedVals[i];
                    const newVal = options.attributeValueProcessor(attrName, oldVal, jPathStr);
                    if (newVal === null || newVal === undefined) {
                        attrs[aName] = oldVal;
                    } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                        attrs[aName] = newVal;
                    } else {
                        attrs[aName] = parseValue(oldVal, options.parseAttributeValue, options.numberParseOptions);
                    }
                    hasAttrs = true;
                } else if (options.allowBooleanAttributes) {
                    attrs[aName] = true;
                    hasAttrs = true;
                }
            }
        }
        if (!hasAttrs) return;
        if (options.attributesGroupName && !options.preserveOrder) {
            const attrCollection = {};
            attrCollection[options.attributesGroupName] = attrs;
            return attrCollection;
        }
        return attrs;
    }
}
const parseXml = function(xmlData) {
    xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
    const xmlObj = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]('!xml');
    let currentNode = xmlObj;
    let textData = "";
    // Reset matcher for new document
    this.matcher.reset();
    this.entityDecoder.reset();
    // Reset entity expansion counters for this document
    this.entityExpansionCount = 0;
    this.currentExpandedLength = 0;
    const options = this.options;
    const docTypeReader = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$DocTypeReader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](options.processEntities);
    const xmlLen = xmlData.length;
    for(let i = 0; i < xmlLen; i++){
        const ch = xmlData[i];
        if (ch === '<') {
            // const nextIndex = i+1;
            // const _2ndChar = xmlData[nextIndex];
            const c1 = xmlData.charCodeAt(i + 1);
            if (c1 === 47) {
                const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
                let tagName = xmlData.substring(i + 2, closeIndex).trim();
                if (options.removeNSPrefix) {
                    const colonIndex = tagName.indexOf(":");
                    if (colonIndex !== -1) {
                        tagName = tagName.substr(colonIndex + 1);
                    }
                }
                tagName = transformTagName(options.transformTagName, tagName, "", options).tagName;
                if (currentNode) {
                    textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                }
                //check if last tag of nested tag was unpaired tag
                const lastTagName = this.matcher.getCurrentTag();
                if (tagName && options.unpairedTagsSet.has(tagName)) {
                    throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
                }
                if (lastTagName && options.unpairedTagsSet.has(lastTagName)) {
                    // Pop the unpaired tag
                    this.matcher.pop();
                    this.tagsNodeStack.pop();
                }
                // Pop the closing tag
                this.matcher.pop();
                this.isCurrentNodeStopNode = false; // Reset flag when closing tag
                currentNode = this.tagsNodeStack.pop(); //avoid recursion, set the parent tag scope
                textData = "";
                i = closeIndex;
            } else if (c1 === 63) {
                let tagData = readTagExp(xmlData, i, false, "?>");
                if (!tagData) throw new Error("Pi Tag is not closed.");
                textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                const attsMap = this.buildAttributesMap(tagData.tagExp, this.matcher, tagData.tagName, true);
                if (attsMap) {
                    const ver = attsMap[this.options.attributeNamePrefix + "version"];
                    this.entityDecoder.setXmlVersion(Number(ver) || 1.0);
                }
                if (options.ignoreDeclaration && tagData.tagName === "?xml" || options.ignorePiTags) {
                //do nothing
                } else {
                    const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagData.tagName);
                    childNode.add(options.textNodeName, "");
                    if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent && options.ignoreAttributes !== true) {
                        childNode[":@"] = attsMap;
                    }
                    this.addChild(currentNode, childNode, this.readonlyMatcher, i);
                }
                i = tagData.closeIndex + 1;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
                const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
                if (options.commentPropName) {
                    const comment = xmlData.substring(i + 4, endIndex - 2);
                    textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                    currentNode.add(options.commentPropName, [
                        {
                            [options.textNodeName]: comment
                        }
                    ]);
                }
                i = endIndex;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 68) {
                const result = docTypeReader.readDocType(xmlData, i);
                this.entityDecoder.addInputEntities(result.entities);
                i = result.i;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
                const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
                const tagExp = xmlData.substring(i + 9, closeIndex);
                textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher);
                let val = this.parseTextData(tagExp, currentNode.tagname, this.readonlyMatcher, true, false, true, true);
                if (val == undefined) val = "";
                //cdata should be set even if it is 0 length string
                if (options.cdataPropName) {
                    currentNode.add(options.cdataPropName, [
                        {
                            [options.textNodeName]: tagExp
                        }
                    ]);
                } else {
                    currentNode.add(options.textNodeName, val);
                }
                i = closeIndex + 2;
            } else {
                let result = readTagExp(xmlData, i, options.removeNSPrefix);
                // Safety check: readTagExp can return undefined
                if (!result) {
                    // Log context for debugging
                    const context = xmlData.substring(Math.max(0, i - 50), Math.min(xmlLen, i + 50));
                    throw new Error(`readTagExp returned undefined at position ${i}. Context: "${context}"`);
                }
                let tagName = result.tagName;
                const rawTagName = result.rawTagName;
                let tagExp = result.tagExp;
                let attrExpPresent = result.attrExpPresent;
                let closeIndex = result.closeIndex;
                ({ tagName, tagExp } = transformTagName(options.transformTagName, tagName, tagExp, options));
                if (options.strictReservedNames && (tagName === options.commentPropName || tagName === options.cdataPropName || tagName === options.textNodeName || tagName === options.attributesGroupName)) {
                    throw new Error(`Invalid tag name: ${tagName}`);
                }
                //save text as child node
                if (currentNode && textData) {
                    if (currentNode.tagname !== '!xml') {
                        //when nested tag is found
                        textData = this.saveTextToParentTag(textData, currentNode, this.readonlyMatcher, false);
                    }
                }
                //check if last tag was unpaired tag
                const lastTag = currentNode;
                if (lastTag && options.unpairedTagsSet.has(lastTag.tagname)) {
                    currentNode = this.tagsNodeStack.pop();
                    this.matcher.pop();
                }
                // Clean up self-closing syntax BEFORE processing attributes
                // This is where tagExp gets the trailing / removed
                let isSelfClosing = false;
                if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                    isSelfClosing = true;
                    if (tagName[tagName.length - 1] === "/") {
                        tagName = tagName.substr(0, tagName.length - 1);
                        tagExp = tagName;
                    } else {
                        tagExp = tagExp.substr(0, tagExp.length - 1);
                    }
                    // Re-check attrExpPresent after cleaning
                    attrExpPresent = tagName !== tagExp;
                }
                // Now process attributes with CLEAN tagExp (no trailing /)
                let prefixedAttrs = null;
                let rawAttrs = {};
                let namespace = undefined;
                // Extract namespace from rawTagName
                namespace = extractNamespace(rawTagName);
                // Push tag to matcher FIRST (with empty attrs for now) so callbacks see correct path
                if (tagName !== xmlObj.tagname) {
                    this.matcher.push(tagName, {}, namespace);
                }
                // Now build attributes - callbacks will see correct matcher state
                if (tagName !== tagExp && attrExpPresent) {
                    // Build attributes (returns prefixed attributes for the tree)
                    // Note: buildAttributesMap now internally updates the matcher with raw attributes
                    prefixedAttrs = this.buildAttributesMap(tagExp, this.matcher, tagName);
                    if (prefixedAttrs) {
                        // Extract raw attributes (without prefix) for our use
                        //TODO: seems a performance overhead
                        rawAttrs = extractRawAttributes(prefixedAttrs, options);
                    }
                }
                // Now check if this is a stop node (after attributes are set)
                if (tagName !== xmlObj.tagname) {
                    this.isCurrentNodeStopNode = this.isItStopNode();
                }
                const startIndex = i;
                if (this.isCurrentNodeStopNode) {
                    let tagContent = "";
                    // For self-closing tags, content is empty
                    if (isSelfClosing) {
                        i = result.closeIndex;
                    } else if (options.unpairedTagsSet.has(tagName)) {
                        i = result.closeIndex;
                    } else {
                        //read until closing tag is found
                        const result = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                        if (!result) throw new Error(`Unexpected end of ${rawTagName}`);
                        i = result.i;
                        tagContent = result.tagContent;
                    }
                    const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                    if (prefixedAttrs) {
                        childNode[":@"] = prefixedAttrs;
                    }
                    // For stop nodes, store raw content as-is without any processing
                    childNode.add(options.textNodeName, tagContent);
                    this.matcher.pop(); // Pop the stop node tag
                    this.isCurrentNodeStopNode = false; // Reset flag
                    this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                } else {
                    //selfClosing tag
                    if (isSelfClosing) {
                        ({ tagName, tagExp } = transformTagName(options.transformTagName, tagName, tagExp, options));
                        const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                        if (prefixedAttrs) {
                            childNode[":@"] = prefixedAttrs;
                        }
                        this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                        this.matcher.pop(); // Pop self-closing tag
                        this.isCurrentNodeStopNode = false; // Reset flag
                    } else if (options.unpairedTagsSet.has(tagName)) {
                        const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                        if (prefixedAttrs) {
                            childNode[":@"] = prefixedAttrs;
                        }
                        this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                        this.matcher.pop(); // Pop unpaired tag
                        this.isCurrentNodeStopNode = false; // Reset flag
                        i = result.closeIndex;
                        continue;
                    } else {
                        const childNode = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](tagName);
                        if (this.tagsNodeStack.length > options.maxNestedTags) {
                            throw new Error("Maximum nested tags exceeded");
                        }
                        this.tagsNodeStack.push(currentNode);
                        if (prefixedAttrs) {
                            childNode[":@"] = prefixedAttrs;
                        }
                        this.addChild(currentNode, childNode, this.readonlyMatcher, startIndex);
                        currentNode = childNode;
                    }
                    textData = "";
                    i = closeIndex;
                }
            }
        } else {
            textData += xmlData[i];
        }
    }
    return xmlObj.child;
};
function addChild(currentNode, childNode, matcher, startIndex) {
    // unset startIndex if not requested
    if (!this.options.captureMetaData) startIndex = undefined;
    // Pass jPath string or matcher based on options.jPath setting
    const jPathOrMatcher = this.options.jPath ? matcher.toString() : matcher;
    const result = this.options.updateTag(childNode.tagname, jPathOrMatcher, childNode[":@"]);
    if (result === false) {
    //do nothing
    } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode, startIndex);
    } else {
        currentNode.addChild(childNode, startIndex);
    }
}
/**
 * @param {object} val - Entity object with regex and val properties
 * @param {string} tagName - Tag name
 * @param {string|Matcher} jPath - jPath string or Matcher instance based on options.jPath
 */ function replaceEntitiesValue(val, tagName, jPath) {
    const entityConfig = this.options.processEntities;
    if (!entityConfig || !entityConfig.enabled) {
        return val;
    }
    // Check if tag is allowed to contain entities
    if (entityConfig.allowedTags) {
        const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
        const allowed = Array.isArray(entityConfig.allowedTags) ? entityConfig.allowedTags.includes(tagName) : entityConfig.allowedTags(tagName, jPathOrMatcher);
        if (!allowed) {
            return val;
        }
    }
    // Apply custom tag filter if provided
    if (entityConfig.tagFilter) {
        const jPathOrMatcher = this.options.jPath ? jPath.toString() : jPath;
        if (!entityConfig.tagFilter(tagName, jPathOrMatcher)) {
            return val; // Skip based on custom filter
        }
    }
    return this.entityDecoder.decode(val);
}
function saveTextToParentTag(textData, parentNode, matcher, isLeafNode) {
    if (textData) {
        if (isLeafNode === undefined) isLeafNode = parentNode.child.length === 0;
        textData = this.parseTextData(textData, parentNode.tagname, matcher, false, parentNode[":@"] ? Object.keys(parentNode[":@"]).length !== 0 : false, isLeafNode);
        if (textData !== undefined && textData !== "") parentNode.add(this.options.textNodeName, textData);
        textData = "";
    }
    return textData;
}
/**
 * @param {Array<Expression>} stopNodeExpressions - Array of compiled Expression objects
 * @param {Matcher} matcher - Current path matcher
 */ function isItStopNode() {
    if (this.stopNodeExpressionsSet.size === 0) return false;
    return this.matcher.matchesAny(this.stopNodeExpressionsSet);
}
/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */ function tagExpWithClosingIndex(xmlData, i, closingChar = ">") {
    //TODO: ignore boolean attributes in tag expression
    //TODO: if ignore attributes, dont read full attribute expression but the end. But read for xml declaration
    let attrBoundary = 0;
    const len = xmlData.length;
    const closeCode0 = closingChar.charCodeAt(0);
    const closeCode1 = closingChar.length > 1 ? closingChar.charCodeAt(1) : -1;
    let result = '';
    let segmentStart = i;
    for(let index = i; index < len; index++){
        const code = xmlData.charCodeAt(index);
        if (attrBoundary) {
            if (code === attrBoundary) attrBoundary = 0;
        } else if (code === 34 || code === 39) {
            attrBoundary = code;
        } else if (code === closeCode0) {
            if (closeCode1 !== -1) {
                if (xmlData.charCodeAt(index + 1) === closeCode1) {
                    result += xmlData.substring(segmentStart, index);
                    return {
                        data: result,
                        index
                    };
                }
            } else {
                result += xmlData.substring(segmentStart, index);
                return {
                    data: result,
                    index
                };
            }
        } else if (code === 9 && !attrBoundary) {
            // Flush accumulated segment, add space, start new segment
            result += xmlData.substring(segmentStart, index) + ' ';
            segmentStart = index + 1;
        }
    }
}
function findClosingIndex(xmlData, str, i, errMsg) {
    const closingIndex = xmlData.indexOf(str, i);
    if (closingIndex === -1) {
        throw new Error(errMsg);
    } else {
        return closingIndex + str.length - 1;
    }
}
function findClosingChar(xmlData, char, i, errMsg) {
    const closingIndex = xmlData.indexOf(char, i);
    if (closingIndex === -1) throw new Error(errMsg);
    return closingIndex; // no offset needed
}
function readTagExp(xmlData, i, removeNSPrefix, closingChar = ">") {
    const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
    if (!result) return;
    let tagExp = result.data;
    const closeIndex = result.index;
    const separatorIndex = tagExp.search(/\s/);
    let tagName = tagExp;
    let attrExpPresent = true;
    if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
    }
    const rawTagName = tagName;
    if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
            tagName = tagName.substr(colonIndex + 1);
            attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
    }
    return {
        tagName: tagName,
        tagExp: tagExp,
        closeIndex: closeIndex,
        attrExpPresent: attrExpPresent,
        rawTagName: rawTagName
    };
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */ function readStopNodeData(xmlData, tagName, i) {
    const startIndex = i;
    // Starting at 1 since we already have an open tag
    let openTagCount = 1;
    const xmllen = xmlData.length;
    for(; i < xmllen; i++){
        if (xmlData[i] === "<") {
            const c1 = xmlData.charCodeAt(i + 1);
            if (c1 === 47) {
                const closeIndex = findClosingChar(xmlData, ">", i, `${tagName} is not closed`);
                let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
                if (closeTagName === tagName) {
                    openTagCount--;
                    if (openTagCount === 0) {
                        return {
                            tagContent: xmlData.substring(startIndex, i),
                            i: closeIndex
                        };
                    }
                }
                i = closeIndex;
            } else if (c1 === 63) {
                const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
                i = closeIndex;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 45 && xmlData.charCodeAt(i + 3) === 45) {
                const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
                i = closeIndex;
            } else if (c1 === 33 && xmlData.charCodeAt(i + 2) === 91) {
                const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
                i = closeIndex;
            } else {
                const tagData = readTagExp(xmlData, i, '>');
                if (tagData) {
                    const openTagName = tagData && tagData.tagName;
                    if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                        openTagCount++;
                    }
                    i = tagData.closeIndex;
                }
            }
        }
    } //end for loop
}
function parseValue(val, shouldParse, options) {
    if (shouldParse && typeof val === 'string') {
        //console.log(options)
        const newval = val.trim();
        if (newval === 'true') return true;
        else if (newval === 'false') return false;
        else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$strnum$2f$strnum$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(val, options);
    } else {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isExist"])(val)) {
            return val;
        } else {
            return '';
        }
    }
}
function fromCodePoint(str, base, prefix) {
    const codePoint = Number.parseInt(str, base);
    if (codePoint >= 0 && codePoint <= 0x10FFFF) {
        return String.fromCodePoint(codePoint);
    } else {
        return prefix + str + ";";
    }
}
function transformTagName(fn, tagName, tagExp, options) {
    if (fn) {
        const newTagName = fn(tagName);
        if (tagExp === tagName) {
            tagExp = newTagName;
        }
        tagName = newTagName;
    }
    tagName = sanitizeName(tagName, options);
    return {
        tagName,
        tagExp
    };
}
function sanitizeName(name, options) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["criticalProperties"].includes(name)) {
        throw new Error(`[SECURITY] Invalid name: "${name}" is a reserved JavaScript keyword that could cause prototype pollution`);
    } else if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DANGEROUS_PROPERTY_NAMES"].includes(name)) {
        return options.onDangerousProperty(name);
    }
    return name;
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/node2json.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>prettify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)");
'use strict';
;
;
const METADATA_SYMBOL = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getMetaDataSymbol();
/**
 * Helper function to strip attribute prefix from attribute map
 * @param {object} attrs - Attributes with prefix (e.g., {"@_class": "code"})
 * @param {string} prefix - Attribute prefix to remove (e.g., "@_")
 * @returns {object} Attributes without prefix (e.g., {"class": "code"})
 */ function stripAttributePrefix(attrs, prefix) {
    if (!attrs || typeof attrs !== 'object') return {};
    if (!prefix) return attrs;
    const rawAttrs = {};
    for(const key in attrs){
        if (key.startsWith(prefix)) {
            const rawName = key.substring(prefix.length);
            rawAttrs[rawName] = attrs[key];
        } else {
            // Attribute without prefix (shouldn't normally happen, but be safe)
            rawAttrs[key] = attrs[key];
        }
    }
    return rawAttrs;
}
function prettify(node, options, matcher, readonlyMatcher) {
    return compress(node, options, matcher, readonlyMatcher);
}
/**
 * @param {array} arr 
 * @param {object} options 
 * @param {Matcher} matcher - Path matcher instance
 * @returns object
 */ function compress(arr, options, matcher, readonlyMatcher) {
    let text;
    const compressedObj = {}; //This is intended to be a plain object
    for(let i = 0; i < arr.length; i++){
        const tagObj = arr[i];
        const property = propName(tagObj);
        // Push current property to matcher WITH RAW ATTRIBUTES (no prefix)
        if (property !== undefined && property !== options.textNodeName) {
            const rawAttrs = stripAttributePrefix(tagObj[":@"] || {}, options.attributeNamePrefix);
            matcher.push(property, rawAttrs);
        }
        if (property === options.textNodeName) {
            if (text === undefined) text = tagObj[property];
            else text += "" + tagObj[property];
        } else if (property === undefined) {
            continue;
        } else if (tagObj[property]) {
            let val = compress(tagObj[property], options, matcher, readonlyMatcher);
            const isLeaf = isLeafTag(val, options);
            if (tagObj[":@"]) {
                assignAttributes(val, tagObj[":@"], readonlyMatcher, options);
            } else if (Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) {
                val = val[options.textNodeName];
            } else if (Object.keys(val).length === 0) {
                if (options.alwaysCreateTextNode) val[options.textNodeName] = "";
                else val = "";
            }
            if (tagObj[METADATA_SYMBOL] !== undefined && typeof val === "object" && val !== null) {
                val[METADATA_SYMBOL] = tagObj[METADATA_SYMBOL]; // copy over metadata
            }
            if (compressedObj[property] !== undefined && Object.prototype.hasOwnProperty.call(compressedObj, property)) {
                if (!Array.isArray(compressedObj[property])) {
                    compressedObj[property] = [
                        compressedObj[property]
                    ];
                }
                compressedObj[property].push(val);
            } else {
                //TODO: if a node is not an array, then check if it should be an array
                //also determine if it is a leaf node
                // Pass jPath string or readonlyMatcher based on options.jPath setting
                const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() : readonlyMatcher;
                if (options.isArray(property, jPathOrMatcher, isLeaf)) {
                    compressedObj[property] = [
                        val
                    ];
                } else {
                    compressedObj[property] = val;
                }
            }
            // Pop property from matcher after processing
            if (property !== undefined && property !== options.textNodeName) {
                matcher.pop();
            }
        }
    }
    // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
    if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
    } else if (text !== undefined) compressedObj[options.textNodeName] = text;
    return compressedObj;
}
function propName(obj) {
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i];
        if (key !== ":@") return key;
    }
}
function assignAttributes(obj, attrMap, readonlyMatcher, options) {
    if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length; //don't make it inline
        for(let i = 0; i < len; i++){
            const atrrName = keys[i]; // This is the PREFIXED name (e.g., "@_class")
            // Strip prefix for matcher path (for isArray callback)
            const rawAttrName = atrrName.startsWith(options.attributeNamePrefix) ? atrrName.substring(options.attributeNamePrefix.length) : atrrName;
            // For attributes, we need to create a temporary path
            // Pass jPath string or matcher based on options.jPath setting
            const jPathOrMatcher = options.jPath ? readonlyMatcher.toString() + "." + rawAttrName : readonlyMatcher;
            if (options.isArray(atrrName, jPathOrMatcher, true, true)) {
                obj[atrrName] = [
                    attrMap[atrrName]
                ];
            } else {
                obj[atrrName] = attrMap[atrrName];
            }
        }
    }
}
function isLeafTag(obj, options) {
    const { textNodeName } = options;
    const propCount = Object.keys(obj).length;
    if (propCount === 0) {
        return true;
    }
    if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
    }
    return false;
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/validator.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validate",
    ()=>validate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/util.js [app-route] (ecmascript)");
'use strict';
;
const defaultOptions = {
    allowBooleanAttributes: false,
    unpairedTags: []
};
function validate(xmlData, options) {
    options = Object.assign({}, defaultOptions, options);
    //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
    //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
    //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
    const tags = [];
    let tagFound = false;
    //indicates that the root tag has been closed (aka. depth 0 has been reached)
    let reachedRoot = false;
    if (xmlData[0] === '\ufeff') {
        // check for byte order mark (BOM)
        xmlData = xmlData.substr(1);
    }
    for(let i = 0; i < xmlData.length; i++){
        if (xmlData[i] === '<' && xmlData[i + 1] === '?') {
            i += 2;
            i = readPI(xmlData, i);
            if (i.err) return i;
        } else if (xmlData[i] === '<') {
            //starting of tag
            //read until you reach to '>' avoiding any '>' in attribute value
            let tagStartPos = i;
            i++;
            if (xmlData[i] === '!') {
                i = readCommentAndCDATA(xmlData, i);
                continue;
            } else {
                let closingTag = false;
                if (xmlData[i] === '/') {
                    //closing tag
                    closingTag = true;
                    i++;
                }
                //read tagname
                let tagName = '';
                for(; i < xmlData.length && xmlData[i] !== '>' && xmlData[i] !== ' ' && xmlData[i] !== '\t' && xmlData[i] !== '\n' && xmlData[i] !== '\r'; i++){
                    tagName += xmlData[i];
                }
                tagName = tagName.trim();
                //console.log(tagName);
                if (tagName[tagName.length - 1] === '/') {
                    //self closing tag without attributes
                    tagName = tagName.substring(0, tagName.length - 1);
                    //continue;
                    i--;
                }
                if (!validateTagName(tagName)) {
                    let msg;
                    if (tagName.trim().length === 0) {
                        msg = "Invalid space after '<'.";
                    } else {
                        msg = "Tag '" + tagName + "' is an invalid name.";
                    }
                    return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
                }
                const result = readAttributeStr(xmlData, i);
                if (result === false) {
                    return getErrorObject('InvalidAttr', "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
                }
                let attrStr = result.value;
                i = result.index;
                if (attrStr[attrStr.length - 1] === '/') {
                    //self closing tag
                    const attrStrStart = i - attrStr.length;
                    attrStr = attrStr.substring(0, attrStr.length - 1);
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid === true) {
                        tagFound = true;
                    //continue; //text may presents after self closing tag
                    } else {
                        //the result from the nested function returns the position of the error within the attribute
                        //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                        //this gives us the absolute index in the entire xml, which we can use to find the line at last
                        return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
                    }
                } else if (closingTag) {
                    if (!result.tagClosed) {
                        return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
                    } else if (attrStr.trim().length > 0) {
                        return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
                    } else if (tags.length === 0) {
                        return getErrorObject('InvalidTag', "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
                    } else {
                        const otg = tags.pop();
                        if (tagName !== otg.tagName) {
                            let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                            return getErrorObject('InvalidTag', "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
                        }
                        //when there are no more tags, we reached the root level.
                        if (tags.length == 0) {
                            reachedRoot = true;
                        }
                    }
                } else {
                    const isValid = validateAttributeString(attrStr, options);
                    if (isValid !== true) {
                        //the result from the nested function returns the position of the error within the attribute
                        //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
                        //this gives us the absolute index in the entire xml, which we can use to find the line at last
                        return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
                    }
                    //if the root level has been reached before ...
                    if (reachedRoot === true) {
                        return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
                    } else if (options.unpairedTags.indexOf(tagName) !== -1) {
                    //don't push into stack
                    } else {
                        tags.push({
                            tagName,
                            tagStartPos
                        });
                    }
                    tagFound = true;
                }
                //skip tag text value
                //It may include comments and CDATA value
                for(i++; i < xmlData.length; i++){
                    if (xmlData[i] === '<') {
                        if (xmlData[i + 1] === '!') {
                            //comment or CADATA
                            i++;
                            i = readCommentAndCDATA(xmlData, i);
                            continue;
                        } else if (xmlData[i + 1] === '?') {
                            i = readPI(xmlData, ++i);
                            if (i.err) return i;
                        } else {
                            break;
                        }
                    } else if (xmlData[i] === '&') {
                        const afterAmp = validateAmpersand(xmlData, i);
                        if (afterAmp == -1) return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
                        i = afterAmp;
                    } else {
                        if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                            return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
                        }
                    }
                } //end of reading tag text value
                if (xmlData[i] === '<') {
                    i--;
                }
            }
        } else {
            if (isWhiteSpace(xmlData[i])) {
                continue;
            }
            return getErrorObject('InvalidChar', "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
        }
    }
    if (!tagFound) {
        return getErrorObject('InvalidXml', 'Start tag expected.', 1);
    } else if (tags.length == 1) {
        return getErrorObject('InvalidTag', "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
    } else if (tags.length > 0) {
        return getErrorObject('InvalidXml', "Invalid '" + JSON.stringify(tags.map((t)=>t.tagName), null, 4).replace(/\r?\n/g, '') + "' found.", {
            line: 1,
            col: 1
        });
    }
    return true;
}
;
function isWhiteSpace(char) {
    return char === ' ' || char === '\t' || char === '\n' || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */ function readPI(xmlData, i) {
    const start = i;
    for(; i < xmlData.length; i++){
        if (xmlData[i] == '?' || xmlData[i] == ' ') {
            //tagname
            const tagname = xmlData.substr(start, i - start);
            if (i > 5 && tagname === 'xml') {
                return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
            } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
                //check if valid attribut string
                i++;
                break;
            } else {
                continue;
            }
        }
    }
    return i;
}
function readCommentAndCDATA(xmlData, i) {
    if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
        //comment
        for(i += 3; i < xmlData.length; i++){
            if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
                i += 2;
                break;
            }
        }
    } else if (xmlData.length > i + 8 && xmlData[i + 1] === 'D' && xmlData[i + 2] === 'O' && xmlData[i + 3] === 'C' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'Y' && xmlData[i + 6] === 'P' && xmlData[i + 7] === 'E') {
        let angleBracketsCount = 1;
        for(i += 8; i < xmlData.length; i++){
            if (xmlData[i] === '<') {
                angleBracketsCount++;
            } else if (xmlData[i] === '>') {
                angleBracketsCount--;
                if (angleBracketsCount === 0) {
                    break;
                }
            }
        }
    } else if (xmlData.length > i + 9 && xmlData[i + 1] === '[' && xmlData[i + 2] === 'C' && xmlData[i + 3] === 'D' && xmlData[i + 4] === 'A' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'A' && xmlData[i + 7] === '[') {
        for(i += 8; i < xmlData.length; i++){
            if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
                i += 2;
                break;
            }
        }
    }
    return i;
}
const doubleQuote = '"';
const singleQuote = "'";
/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */ function readAttributeStr(xmlData, i) {
    let attrStr = '';
    let startChar = '';
    let tagClosed = false;
    for(; i < xmlData.length; i++){
        if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
            if (startChar === '') {
                startChar = xmlData[i];
            } else if (startChar !== xmlData[i]) {
            //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
            } else {
                startChar = '';
            }
        } else if (xmlData[i] === '>') {
            if (startChar === '') {
                tagClosed = true;
                break;
            }
        }
        attrStr += xmlData[i];
    }
    if (startChar !== '') {
        return false;
    }
    return {
        value: attrStr,
        index: i,
        tagClosed: tagClosed
    };
}
/**
 * Select all the attributes whether valid or invalid.
 */ const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');
//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""
function validateAttributeString(attrStr, options) {
    //console.log("start:"+attrStr+":end");
    //if(attrStr.trim().length === 0) return true; //empty string
    const matches = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllMatches"])(attrStr, validAttrStrRegxp);
    const attrNames = {};
    for(let i = 0; i < matches.length; i++){
        if (matches[i][1].length === 0) {
            //nospace before attribute name: a="sd"b="saf"
            return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
            return getErrorObject('InvalidAttr', "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
        } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
            //independent attribute: ab
            return getErrorObject('InvalidAttr', "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
        }
        /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */ const attrName = matches[i][2];
        if (!validateAttrName(attrName)) {
            return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
        }
        if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
            //check for duplicate attribute.
            attrNames[attrName] = 1;
        } else {
            return getErrorObject('InvalidAttr', "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
        }
    }
    return true;
}
function validateNumberAmpersand(xmlData, i) {
    let re = /\d/;
    if (xmlData[i] === 'x') {
        i++;
        re = /[\da-fA-F]/;
    }
    for(; i < xmlData.length; i++){
        if (xmlData[i] === ';') return i;
        if (!xmlData[i].match(re)) break;
    }
    return -1;
}
function validateAmpersand(xmlData, i) {
    // https://www.w3.org/TR/xml/#dt-charref
    i++;
    if (xmlData[i] === ';') return -1;
    if (xmlData[i] === '#') {
        i++;
        return validateNumberAmpersand(xmlData, i);
    }
    let count = 0;
    for(; i < xmlData.length; i++, count++){
        if (xmlData[i].match(/\w/) && count < 20) continue;
        if (xmlData[i] === ';') break;
        return -1;
    }
    return i;
}
function getErrorObject(code, message, lineNumber) {
    return {
        err: {
            code: code,
            msg: message,
            line: lineNumber.line || lineNumber,
            col: lineNumber.col
        }
    };
}
function validateAttrName(attrName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isName"])(attrName);
}
// const startsWithXML = /^xml/i;
function validateTagName(tagname) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$util$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isName"])(tagname) /* && !tagname.match(startsWithXML) */ ;
}
//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
    const lines = xmlData.substring(0, index).split(/\r?\n/);
    return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
    };
}
//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
    return match.startIndex + match[1].length;
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>XMLParser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OptionsBuilder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OrderedObjParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$node2json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/node2json.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/validator.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/xmlNode.js [app-route] (ecmascript)");
;
;
;
;
;
class XMLParser {
    constructor(options){
        this.externalEntities = {};
        this.options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OptionsBuilder$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildOptions"])(options);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Uint8Array} xmlData 
     * @param {boolean|Object} validationOption 
     */ parse(xmlData, validationOption) {
        if (typeof xmlData !== "string" && xmlData.toString) {
            xmlData = xmlData.toString();
        } else if (typeof xmlData !== "string") {
            throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
            if (validationOption === true) validationOption = {}; //validate with default options
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$validator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validate"])(xmlData, validationOption);
            if (result !== true) {
                throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
            }
        }
        const orderedObjParser = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$OrderedObjParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"](this.options, this.externalEntities);
        // orderedObjParser.entityDecoder.setExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$node2json$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(orderedResult, this.options, orderedObjParser.matcher, orderedObjParser.readonlyMatcher);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */ addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
            throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
            throw new Error("An entity with value '&' is not permitted");
        } else {
            this.externalEntities[key] = value;
        }
    }
    /**
     * Returns a Symbol that can be used to access the metadata
     * property on a node.
     * 
     * If Symbol is not available in the environment, an ordinary property is used
     * and the name of the property is here returned.
     * 
     * The XMLMetaData property is only present when `captureMetaData`
     * is true in the options.
     */ static getMetaDataSymbol() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$xmlNode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].getMetaDataSymbol();
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript) <export default as XMLParser>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XMLParser",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/xml-builder/dist-es/xml-external/nodable_entities.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMON_HTML",
    ()=>COMMON_HTML,
    "CURRENCY",
    ()=>CURRENCY,
    "EntityDecoderImpl",
    ()=>EntityDecoderImpl,
    "XML",
    ()=>XML
]);
const XML = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
};
const COMMON_HTML = {
    nbsp: "\u00a0",
    copy: "\u00a9",
    reg: "\u00ae",
    trade: "\u2122",
    mdash: "\u2014",
    ndash: "\u2013",
    hellip: "\u2026",
    laquo: "\u00ab",
    raquo: "\u00bb",
    lsquo: "\u2018",
    rsquo: "\u2019",
    ldquo: "\u201c",
    rdquo: "\u201d",
    bull: "\u2022",
    para: "\u00b6",
    sect: "\u00a7",
    deg: "\u00b0",
    frac12: "\u00bd",
    frac14: "\u00bc",
    frac34: "\u00be"
};
const CURRENCY = {
    cent: "\u00a2",
    pound: "\u00a3",
    curren: "\u00a4",
    yen: "\u00a5",
    euro: "\u20ac",
    dollar: "$",
    fnof: "\u0192",
    inr: "\u20b9",
    af: "\u060b",
    birr: "\u1265\u122d",
    peso: "\u20b1",
    rub: "\u20bd",
    won: "\u20a9",
    yuan: "\u00a5",
    cedil: "\u00b8"
};
const SPECIAL_CHARS = new Set("!?\\/[]$%{}^&*()<>|+");
function validateEntityName(name) {
    if (name[0] === "#") {
        throw new Error(`[EntityReplacer] Invalid character '#' in entity name: "${name}"`);
    }
    for (const ch of name){
        if (SPECIAL_CHARS.has(ch)) {
            throw new Error(`[EntityReplacer] Invalid character '${ch}' in entity name: "${name}"`);
        }
    }
    return name;
}
function mergeEntityMaps(...maps) {
    const out = Object.create(null);
    for (const map of maps){
        if (!map) {
            continue;
        }
        for (const key of Object.keys(map)){
            const raw = map[key];
            if (typeof raw === "string") {
                out[key] = raw;
            } else if (raw && typeof raw === "object" && raw.val !== undefined) {
                const val = raw.val;
                if (typeof val === "string") {
                    out[key] = val;
                }
            }
        }
    }
    return out;
}
const LIMIT_TIER_EXTERNAL = "external";
const LIMIT_TIER_BASE = "base";
const LIMIT_TIER_ALL = "all";
function parseLimitTiers(raw) {
    if (!raw || raw === LIMIT_TIER_EXTERNAL) {
        return new Set([
            LIMIT_TIER_EXTERNAL
        ]);
    }
    if (raw === LIMIT_TIER_ALL) {
        return new Set([
            LIMIT_TIER_ALL
        ]);
    }
    if (raw === LIMIT_TIER_BASE) {
        return new Set([
            LIMIT_TIER_BASE
        ]);
    }
    if (Array.isArray(raw)) {
        return new Set(raw);
    }
    return new Set([
        LIMIT_TIER_EXTERNAL
    ]);
}
const NCR_LEVEL = Object.freeze({
    allow: 0,
    leave: 1,
    remove: 2,
    throw: 3
});
const XML10_ALLOWED_C0 = new Set([
    0x09,
    0x0a,
    0x0d
]);
function parseNCRConfig(ncr) {
    if (!ncr) {
        return {
            xmlVersion: 1.0,
            onLevel: NCR_LEVEL.allow,
            nullLevel: NCR_LEVEL.remove
        };
    }
    const xmlVersion = ncr.xmlVersion === 1.1 ? 1.1 : 1.0;
    const onLevel = NCR_LEVEL[ncr.onNCR ?? "allow"] ?? NCR_LEVEL.allow;
    const nullLevel = NCR_LEVEL[ncr.nullNCR ?? "remove"] ?? NCR_LEVEL.remove;
    const clampedNull = Math.max(nullLevel, NCR_LEVEL.remove);
    return {
        xmlVersion,
        onLevel,
        nullLevel: clampedNull
    };
}
const EntityDecoderImpl = class EntityDecoderImpl {
    _limit;
    _maxTotalExpansions;
    _maxExpandedLength;
    _postCheck;
    _limitTiers;
    _numericAllowed;
    _baseMap;
    _externalMap;
    _inputMap;
    _totalExpansions;
    _expandedLength;
    _removeSet;
    _leaveSet;
    _ncrXmlVersion;
    _ncrOnLevel;
    _ncrNullLevel;
    constructor(options = {}){
        this._limit = options.limit || {};
        this._maxTotalExpansions = this._limit.maxTotalExpansions || 0;
        this._maxExpandedLength = this._limit.maxExpandedLength || 0;
        this._postCheck = typeof options.postCheck === "function" ? options.postCheck : (r)=>r;
        this._limitTiers = parseLimitTiers(this._limit.applyLimitsTo ?? LIMIT_TIER_EXTERNAL);
        this._numericAllowed = options.numericAllowed ?? true;
        this._baseMap = mergeEntityMaps(XML, options.namedEntities || null);
        this._externalMap = Object.create(null);
        this._inputMap = Object.create(null);
        this._totalExpansions = 0;
        this._expandedLength = 0;
        this._removeSet = new Set(options.remove && Array.isArray(options.remove) ? options.remove : []);
        this._leaveSet = new Set(options.leave && Array.isArray(options.leave) ? options.leave : []);
        const ncrCfg = parseNCRConfig(options.ncr);
        this._ncrXmlVersion = ncrCfg.xmlVersion;
        this._ncrOnLevel = ncrCfg.onLevel;
        this._ncrNullLevel = ncrCfg.nullLevel;
    }
    setExternalEntities(map) {
        if (map) {
            for (const key of Object.keys(map)){
                validateEntityName(key);
            }
        }
        this._externalMap = mergeEntityMaps(map);
    }
    addExternalEntity(key, value) {
        validateEntityName(key);
        if (typeof value === "string" && value.indexOf("&") === -1) {
            this._externalMap[key] = value;
        }
    }
    addInputEntities(map) {
        this._totalExpansions = 0;
        this._expandedLength = 0;
        this._inputMap = mergeEntityMaps(map);
    }
    reset() {
        this._inputMap = Object.create(null);
        this._totalExpansions = 0;
        this._expandedLength = 0;
        return this;
    }
    setXmlVersion(version) {
        this._ncrXmlVersion = version === "1.1" || version === 1.1 ? 1.1 : 1.0;
    }
    decode(str) {
        if (typeof str !== "string" || str.length === 0) {
            return str;
        }
        const original = str;
        const chunks = [];
        const len = str.length;
        let last = 0;
        let i = 0;
        const limitExpansions = this._maxTotalExpansions > 0;
        const limitLength = this._maxExpandedLength > 0;
        const checkLimits = limitExpansions || limitLength;
        while(i < len){
            if (str.charCodeAt(i) !== 38) {
                i++;
                continue;
            }
            let j = i + 1;
            while(j < len && str.charCodeAt(j) !== 59 && j - i <= 32){
                j++;
            }
            if (j >= len || str.charCodeAt(j) !== 59) {
                i++;
                continue;
            }
            const token = str.slice(i + 1, j);
            if (token.length === 0) {
                i++;
                continue;
            }
            let replacement;
            let tier;
            if (this._removeSet.has(token)) {
                replacement = "";
                if (tier === undefined) {
                    tier = LIMIT_TIER_EXTERNAL;
                }
            } else if (this._leaveSet.has(token)) {
                i++;
                continue;
            } else if (token.charCodeAt(0) === 35) {
                const ncrResult = this._resolveNCR(token);
                if (ncrResult === undefined) {
                    i++;
                    continue;
                }
                replacement = ncrResult;
                tier = LIMIT_TIER_BASE;
            } else {
                const resolved = this._resolveName(token);
                replacement = resolved?.value;
                tier = resolved?.tier;
            }
            if (replacement === undefined) {
                i++;
                continue;
            }
            if (i > last) {
                chunks.push(str.slice(last, i));
            }
            chunks.push(replacement);
            last = j + 1;
            i = last;
            if (checkLimits && this._tierCounts(tier)) {
                if (limitExpansions) {
                    this._totalExpansions++;
                    if (this._totalExpansions > this._maxTotalExpansions) {
                        throw new Error(`[EntityReplacer] Entity expansion count limit exceeded: ` + `${this._totalExpansions} > ${this._maxTotalExpansions}`);
                    }
                }
                if (limitLength) {
                    const delta = replacement.length - (token.length + 2);
                    if (delta > 0) {
                        this._expandedLength += delta;
                        if (this._expandedLength > this._maxExpandedLength) {
                            throw new Error(`[EntityReplacer] Expanded content length limit exceeded: ` + `${this._expandedLength} > ${this._maxExpandedLength}`);
                        }
                    }
                }
            }
        }
        if (last < len) {
            chunks.push(str.slice(last));
        }
        const result = chunks.length === 0 ? str : chunks.join("");
        return this._postCheck(result, original);
    }
    _tierCounts(tier) {
        if (this._limitTiers.has(LIMIT_TIER_ALL)) {
            return true;
        }
        return this._limitTiers.has(tier);
    }
    _resolveName(name) {
        if (name in this._inputMap) {
            return {
                value: this._inputMap[name],
                tier: LIMIT_TIER_EXTERNAL
            };
        }
        if (name in this._externalMap) {
            return {
                value: this._externalMap[name],
                tier: LIMIT_TIER_EXTERNAL
            };
        }
        if (name in this._baseMap) {
            return {
                value: this._baseMap[name],
                tier: LIMIT_TIER_BASE
            };
        }
        return undefined;
    }
    _classifyNCR(cp) {
        if (cp === 0) {
            return this._ncrNullLevel;
        }
        if (cp >= 0xd800 && cp <= 0xdfff) {
            return NCR_LEVEL.remove;
        }
        if (this._ncrXmlVersion === 1.0) {
            if (cp >= 0x01 && cp <= 0x1f && !XML10_ALLOWED_C0.has(cp)) {
                return NCR_LEVEL.remove;
            }
        }
        return -1;
    }
    _applyNCRAction(action, token, cp) {
        switch(action){
            case NCR_LEVEL.allow:
                return String.fromCodePoint(cp);
            case NCR_LEVEL.remove:
                return "";
            case NCR_LEVEL.leave:
                return undefined;
            case NCR_LEVEL.throw:
                throw new Error(`[EntityDecoder] Prohibited numeric character reference ` + `&${token}; (U+${cp.toString(16).toUpperCase().padStart(4, "0")})`);
            default:
                return String.fromCodePoint(cp);
        }
    }
    _resolveNCR(token) {
        const second = token.charCodeAt(1);
        let cp;
        if (second === 120 || second === 88) {
            cp = parseInt(token.slice(2), 16);
        } else {
            cp = parseInt(token.slice(1), 10);
        }
        if (Number.isNaN(cp) || cp < 0 || cp > 0x10ffff) {
            return undefined;
        }
        const minimum = this._classifyNCR(cp);
        if (!this._numericAllowed && minimum < NCR_LEVEL.remove) {
            return undefined;
        }
        const effective = minimum === -1 ? this._ncrOnLevel : Math.max(this._ncrOnLevel, minimum);
        return this._applyNCRAction(effective, token, cp);
    }
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/xml-builder/dist-es/xml-parser.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseXML",
    ()=>parseXML
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js [app-route] (ecmascript) <export default as XMLParser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$xml$2d$builder$2f$dist$2d$es$2f$xml$2d$external$2f$nodable_entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/xml-builder/dist-es/xml-external/nodable_entities.js [app-route] (ecmascript)");
;
;
const entityDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$xml$2d$builder$2f$dist$2d$es$2f$xml$2d$external$2f$nodable_entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EntityDecoderImpl"]({
    namedEntities: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$xml$2d$builder$2f$dist$2d$es$2f$xml$2d$external$2f$nodable_entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XML"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$xml$2d$builder$2f$dist$2d$es$2f$xml$2d$external$2f$nodable_entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COMMON_HTML"],
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$xml$2d$builder$2f$dist$2d$es$2f$xml$2d$external$2f$nodable_entities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CURRENCY"]
    },
    numericAllowed: true,
    limit: {
        maxTotalExpansions: Infinity
    },
    ncr: {
        xmlVersion: 1.1
    }
});
const parser = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f$fast$2d$xml$2d$parser$2f$src$2f$xmlparser$2f$XMLParser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__XMLParser$3e$__["XMLParser"]({
    attributeNamePrefix: "",
    processEntities: {
        enabled: true,
        maxTotalExpansions: Infinity
    },
    htmlEntities: true,
    entityDecoder: {
        setExternalEntities: (entities)=>{
            entityDecoder.setExternalEntities(entities);
        },
        addInputEntities: (entities)=>{
            entityDecoder.addInputEntities(entities);
        },
        reset: ()=>{
            entityDecoder.reset();
        },
        decode: (text)=>{
            return entityDecoder.decode(text);
        },
        setXmlVersion: (version)=>void {}
    },
    ignoreAttributes: false,
    ignoreDeclaration: true,
    parseTagValue: false,
    trimValues: false,
    tagValueProcessor: (_, val)=>val.trim() === "" && val.includes("\n") ? "" : undefined,
    maxNestedTags: Infinity
});
function parseXML(xmlString) {
    return parser.parse(xmlString, true);
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getValueFromTextNode",
    ()=>getValueFromTextNode
]);
const getValueFromTextNode = (obj)=>{
    const textNodeName = "#text";
    for(const key in obj){
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "XmlShapeDeserializer",
    ()=>XmlShapeDeserializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$xml$2d$builder$2f$dist$2d$es$2f$xml$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/xml-builder/dist-es/xml-parser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$FromStringShapeDeserializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/serde/FromStringShapeDeserializer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$get$2d$value$2d$from$2d$text$2d$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-utf8/dist-es/toUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$ConfigurableSerdeContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$UnionSerde$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/UnionSerde.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
class XmlShapeDeserializer extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$ConfigurableSerdeContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SerdeContextConfig"] {
    settings;
    stringDeserializer;
    constructor(settings){
        super();
        this.settings = settings;
        this.stringDeserializer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$FromStringShapeDeserializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FromStringShapeDeserializer"](settings);
    }
    setSerdeContext(serdeContext) {
        this.serdeContext = serdeContext;
        this.stringDeserializer.setSerdeContext(serdeContext);
    }
    read(schema, bytes, key) {
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(schema);
        const memberSchemas = ns.getMemberSchemas();
        const isEventPayload = ns.isStructSchema() && ns.isMemberSchema() && !!Object.values(memberSchemas).find((memberNs)=>{
            return !!memberNs.getMemberTraits().eventPayload;
        });
        if (isEventPayload) {
            const output = {};
            const memberName = Object.keys(memberSchemas)[0];
            const eventMemberSchema = memberSchemas[memberName];
            if (eventMemberSchema.isBlobSchema()) {
                output[memberName] = bytes;
            } else {
                output[memberName] = this.read(memberSchemas[memberName], bytes);
            }
            return output;
        }
        const xmlString = (this.serdeContext?.utf8Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toUtf8"])(bytes);
        const parsedObject = this.parseXml(xmlString);
        return this.readSchema(schema, key ? parsedObject[key] : parsedObject);
    }
    readSchema(_schema, value) {
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(_schema);
        if (ns.isUnitSchema()) {
            return;
        }
        const traits = ns.getMergedTraits();
        if (ns.isListSchema() && !Array.isArray(value)) {
            return this.readSchema(ns, [
                value
            ]);
        }
        if (value == null) {
            return value;
        }
        if (typeof value === "object") {
            const flat = !!traits.xmlFlattened;
            if (ns.isListSchema()) {
                const listValue = ns.getValueSchema();
                const buffer = [];
                const sourceKey = listValue.getMergedTraits().xmlName ?? "member";
                const source = flat ? value : (value[0] ?? value)[sourceKey];
                if (source == null) {
                    return buffer;
                }
                const sourceArray = Array.isArray(source) ? source : [
                    source
                ];
                for (const v of sourceArray){
                    buffer.push(this.readSchema(listValue, v));
                }
                return buffer;
            }
            const buffer = {};
            if (ns.isMapSchema()) {
                const keyNs = ns.getKeySchema();
                const memberNs = ns.getValueSchema();
                let entries;
                if (flat) {
                    entries = Array.isArray(value) ? value : [
                        value
                    ];
                } else {
                    entries = Array.isArray(value.entry) ? value.entry : [
                        value.entry
                    ];
                }
                const keyProperty = keyNs.getMergedTraits().xmlName ?? "key";
                const valueProperty = memberNs.getMergedTraits().xmlName ?? "value";
                for (const entry of entries){
                    const key = entry[keyProperty];
                    const value = entry[valueProperty];
                    buffer[key] = this.readSchema(memberNs, value);
                }
                return buffer;
            }
            if (ns.isStructSchema()) {
                const union = ns.isUnionSchema();
                let unionSerde;
                if (union) {
                    unionSerde = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$UnionSerde$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnionSerde"](value, buffer);
                }
                for (const [memberName, memberSchema] of ns.structIterator()){
                    const memberTraits = memberSchema.getMergedTraits();
                    const xmlObjectKey = !memberTraits.httpPayload ? memberSchema.getMemberTraits().xmlName ?? memberName : memberTraits.xmlName ?? memberSchema.getName();
                    if (union) {
                        unionSerde.mark(xmlObjectKey);
                    }
                    if (value[xmlObjectKey] != null) {
                        buffer[memberName] = this.readSchema(memberSchema, value[xmlObjectKey]);
                    }
                }
                if (union) {
                    unionSerde.writeUnknown();
                }
                return buffer;
            }
            if (ns.isDocumentSchema()) {
                return value;
            }
            throw new Error(`@aws-sdk/core/protocols - xml deserializer unhandled schema type for ${ns.getName(true)}`);
        }
        if (ns.isListSchema()) {
            return [];
        }
        if (ns.isMapSchema() || ns.isStructSchema()) {
            return {};
        }
        return this.stringDeserializer.read(ns, value);
    }
    parseXml(xml) {
        if (xml.length) {
            let parsedObj;
            try {
                parsedObj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$xml$2d$builder$2f$dist$2d$es$2f$xml$2d$parser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseXML"])(xml);
            } catch (e) {
                if (e && typeof e === "object") {
                    Object.defineProperty(e, "$responseBodyText", {
                        value: xml
                    });
                }
                throw e;
            }
            const textNodeName = "#text";
            const key = Object.keys(parsedObj)[0];
            const parsedObjToReturn = parsedObj[key];
            if (parsedObjToReturn[textNodeName]) {
                parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
                delete parsedObjToReturn[textNodeName];
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$get$2d$value$2d$from$2d$text$2d$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getValueFromTextNode"])(parsedObjToReturn);
        }
        return {};
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryShapeSerializer",
    ()=>QueryShapeSerializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$determineTimestampFormat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/serde/determineTimestampFormat.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$uuid$2f$dist$2d$es$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v4__as__generateIdempotencyToken$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/uuid/dist-es/v4.js [app-route] (ecmascript) <export v4 as generateIdempotencyToken>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$value$2f$NumericValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$date$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-base64/dist-es/toBase64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$ConfigurableSerdeContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ConfigurableSerdeContext.js [app-route] (ecmascript)");
;
;
;
;
;
;
class QueryShapeSerializer extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$ConfigurableSerdeContext$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SerdeContextConfig"] {
    settings;
    buffer;
    constructor(settings){
        super();
        this.settings = settings;
    }
    write(schema, value, prefix = "") {
        if (this.buffer === undefined) {
            this.buffer = "";
        }
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(schema);
        if (prefix && !prefix.endsWith(".")) {
            prefix += ".";
        }
        if (ns.isBlobSchema()) {
            if (typeof value === "string" || value instanceof Uint8Array) {
                this.writeKey(prefix);
                this.writeValue((this.serdeContext?.base64Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase64"])(value));
            }
        } else if (ns.isBooleanSchema() || ns.isNumericSchema() || ns.isStringSchema()) {
            if (value != null) {
                this.writeKey(prefix);
                this.writeValue(String(value));
            } else if (ns.isIdempotencyToken()) {
                this.writeKey(prefix);
                this.writeValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$uuid$2f$dist$2d$es$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__v4__as__generateIdempotencyToken$3e$__["generateIdempotencyToken"])());
            }
        } else if (ns.isBigIntegerSchema()) {
            if (value != null) {
                this.writeKey(prefix);
                this.writeValue(String(value));
            }
        } else if (ns.isBigDecimalSchema()) {
            if (value != null) {
                this.writeKey(prefix);
                this.writeValue(value instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$value$2f$NumericValue$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NumericValue"] ? value.string : String(value));
            }
        } else if (ns.isTimestampSchema()) {
            if (value instanceof Date) {
                this.writeKey(prefix);
                const format = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$serde$2f$determineTimestampFormat$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["determineTimestampFormat"])(ns, this.settings);
                switch(format){
                    case 5:
                        this.writeValue(value.toISOString().replace(".000Z", "Z"));
                        break;
                    case 6:
                        this.writeValue((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$serde$2f$date$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dateToUtcString"])(value));
                        break;
                    case 7:
                        this.writeValue(String(value.getTime() / 1000));
                        break;
                }
            }
        } else if (ns.isDocumentSchema()) {
            if (Array.isArray(value)) {
                this.write(64 | 15, value, prefix);
            } else if (value instanceof Date) {
                this.write(4, value, prefix);
            } else if (value instanceof Uint8Array) {
                this.write(21, value, prefix);
            } else if (value && typeof value === "object") {
                this.write(128 | 15, value, prefix);
            } else {
                this.writeKey(prefix);
                this.writeValue(String(value));
            }
        } else if (ns.isListSchema()) {
            if (Array.isArray(value)) {
                if (value.length === 0) {
                    if (this.settings.serializeEmptyLists) {
                        this.writeKey(prefix);
                        this.writeValue("");
                    }
                } else {
                    const member = ns.getValueSchema();
                    const flat = this.settings.flattenLists || ns.getMergedTraits().xmlFlattened;
                    let i = 1;
                    for (const item of value){
                        if (item == null) {
                            continue;
                        }
                        const traits = member.getMergedTraits();
                        const suffix = this.getKey("member", traits.xmlName, traits.ec2QueryName);
                        const key = flat ? `${prefix}${i}` : `${prefix}${suffix}.${i}`;
                        this.write(member, item, key);
                        ++i;
                    }
                }
            }
        } else if (ns.isMapSchema()) {
            if (value && typeof value === "object") {
                const keySchema = ns.getKeySchema();
                const memberSchema = ns.getValueSchema();
                const flat = ns.getMergedTraits().xmlFlattened;
                let i = 1;
                for(const k in value){
                    const v = value[k];
                    if (v == null) {
                        continue;
                    }
                    const keyTraits = keySchema.getMergedTraits();
                    const keySuffix = this.getKey("key", keyTraits.xmlName, keyTraits.ec2QueryName);
                    const key = flat ? `${prefix}${i}.${keySuffix}` : `${prefix}entry.${i}.${keySuffix}`;
                    const valTraits = memberSchema.getMergedTraits();
                    const valueSuffix = this.getKey("value", valTraits.xmlName, valTraits.ec2QueryName);
                    const valueKey = flat ? `${prefix}${i}.${valueSuffix}` : `${prefix}entry.${i}.${valueSuffix}`;
                    this.write(keySchema, k, key);
                    this.write(memberSchema, v, valueKey);
                    ++i;
                }
            }
        } else if (ns.isStructSchema()) {
            if (value && typeof value === "object") {
                let didWriteMember = false;
                for (const [memberName, member] of ns.structIterator()){
                    if (value[memberName] == null && !member.isIdempotencyToken()) {
                        continue;
                    }
                    const traits = member.getMergedTraits();
                    const suffix = this.getKey(memberName, traits.xmlName, traits.ec2QueryName, "struct");
                    const key = `${prefix}${suffix}`;
                    this.write(member, value[memberName], key);
                    didWriteMember = true;
                }
                if (!didWriteMember && ns.isUnionSchema()) {
                    const { $unknown } = value;
                    if (Array.isArray($unknown)) {
                        const [k, v] = $unknown;
                        const key = `${prefix}${k}`;
                        this.write(15, v, key);
                    }
                }
            }
        } else if (ns.isUnitSchema()) {} else {
            throw new Error(`@aws-sdk/core/protocols - QuerySerializer unrecognized schema type ${ns.getName(true)}`);
        }
    }
    flush() {
        if (this.buffer === undefined) {
            throw new Error("@aws-sdk/core/protocols - QuerySerializer cannot flush with nothing written to buffer.");
        }
        const str = this.buffer;
        delete this.buffer;
        return str;
    }
    getKey(memberName, xmlName, ec2QueryName, keySource) {
        const { ec2, capitalizeKeys } = this.settings;
        if (ec2 && ec2QueryName) {
            return ec2QueryName;
        }
        const key = xmlName ?? memberName;
        if (capitalizeKeys && keySource === "struct") {
            return key[0].toUpperCase() + key.slice(1);
        }
        return key;
    }
    writeKey(key) {
        if (key.endsWith(".")) {
            key = key.slice(0, key.length - 1);
        }
        this.buffer += `&${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendedEncodeURIComponent"])(key)}=`;
    }
    writeValue(value) {
        this.buffer += (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$extended$2d$encode$2d$uri$2d$component$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extendedEncodeURIComponent"])(value);
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AwsQueryProtocol",
    ()=>AwsQueryProtocol
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$RpcProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/protocols/RpcProtocol.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$deref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/deref.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/schemas/NormalizedSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$ProtocolLib$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/ProtocolLib.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$xml$2f$XmlShapeDeserializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/XmlShapeDeserializer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$query$2f$QueryShapeSerializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/QueryShapeSerializer.js [app-route] (ecmascript)");
;
;
;
;
;
class AwsQueryProtocol extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$RpcProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RpcProtocol"] {
    options;
    serializer;
    deserializer;
    mixin = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$ProtocolLib$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProtocolLib"]();
    constructor(options){
        super({
            defaultNamespace: options.defaultNamespace,
            errorTypeRegistries: options.errorTypeRegistries
        });
        this.options = options;
        const settings = {
            timestampFormat: {
                useTrait: true,
                default: 5
            },
            httpBindings: false,
            xmlNamespace: options.xmlNamespace,
            serviceNamespace: options.defaultNamespace,
            serializeEmptyLists: true
        };
        this.serializer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$query$2f$QueryShapeSerializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryShapeSerializer"](settings);
        this.deserializer = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$xml$2f$XmlShapeDeserializer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["XmlShapeDeserializer"](settings);
    }
    getShapeId() {
        return "aws.protocols#awsQuery";
    }
    setSerdeContext(serdeContext) {
        this.serializer.setSerdeContext(serdeContext);
        this.deserializer.setSerdeContext(serdeContext);
    }
    getPayloadCodec() {
        throw new Error("AWSQuery protocol has no payload codec.");
    }
    async serializeRequest(operationSchema, input, context) {
        const request = await super.serializeRequest(operationSchema, input, context);
        if (!request.path.endsWith("/")) {
            request.path += "/";
        }
        request.headers["content-type"] = "application/x-www-form-urlencoded";
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$deref$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deref"])(operationSchema.input) === "unit" || !request.body) {
            request.body = "";
        }
        const action = operationSchema.name.split("#")[1] ?? operationSchema.name;
        request.body = `Action=${action}&Version=${this.options.version}` + request.body;
        if (request.body.endsWith("&")) {
            request.body = request.body.slice(-1);
        }
        return request;
    }
    async deserializeResponse(operationSchema, context, response) {
        const deserializer = this.deserializer;
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(operationSchema.output);
        const dataObject = {};
        if (response.statusCode >= 300) {
            const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
            if (bytes.byteLength > 0) {
                Object.assign(dataObject, await deserializer.read(15, bytes));
            }
            await this.handleError(operationSchema, context, response, dataObject, this.deserializeMetadata(response));
        }
        for(const header in response.headers){
            const value = response.headers[header];
            delete response.headers[header];
            response.headers[header.toLowerCase()] = value;
        }
        const shortName = operationSchema.name.split("#")[1] ?? operationSchema.name;
        const awsQueryResultKey = ns.isStructSchema() && this.useNestedResult() ? shortName + "Result" : undefined;
        const bytes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$collect$2d$stream$2d$body$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["collectBody"])(response.body, context);
        if (bytes.byteLength > 0) {
            Object.assign(dataObject, await deserializer.read(ns, bytes, awsQueryResultKey));
        }
        dataObject.$metadata = this.deserializeMetadata(response);
        return dataObject;
    }
    useNestedResult() {
        return true;
    }
    async handleError(operationSchema, context, response, dataObject, metadata) {
        const errorIdentifier = this.loadQueryErrorCode(response, dataObject) ?? "Unknown";
        this.mixin.compose(this.compositeErrorRegistry, errorIdentifier, this.options.defaultNamespace);
        const errorData = this.loadQueryError(dataObject) ?? {};
        const message = this.loadQueryErrorMessage(dataObject);
        errorData.message = message;
        errorData.Error = {
            Type: errorData.Type,
            Code: errorData.Code,
            Message: message
        };
        const { errorSchema, errorMetadata } = await this.mixin.getErrorSchemaOrThrowBaseException(errorIdentifier, this.options.defaultNamespace, response, errorData, metadata, this.mixin.findQueryCompatibleError);
        const ns = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$schemas$2f$NormalizedSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NormalizedSchema"].of(errorSchema);
        const ErrorCtor = this.compositeErrorRegistry.getErrorCtor(errorSchema) ?? Error;
        const exception = new ErrorCtor(message);
        const output = {
            Type: errorData.Error.Type,
            Code: errorData.Error.Code,
            Error: errorData.Error
        };
        for (const [name, member] of ns.structIterator()){
            const target = member.getMergedTraits().xmlName ?? name;
            const value = errorData[target] ?? dataObject[target];
            output[name] = this.deserializer.readSchema(member, value);
        }
        throw this.mixin.decorateServiceException(Object.assign(exception, errorMetadata, {
            $fault: ns.getMergedTraits().error,
            message
        }, output), dataObject);
    }
    loadQueryErrorCode(output, data) {
        const code = (data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error)?.Code;
        if (code !== undefined) {
            return code;
        }
        if (output.statusCode == 404) {
            return "NotFound";
        }
    }
    loadQueryError(data) {
        return data.Errors?.[0]?.Error ?? data.Errors?.Error ?? data.Error;
    }
    loadQueryErrorMessage(data) {
        const errorData = this.loadQueryError(data);
        return errorData?.message ?? errorData?.Message ?? data.message ?? data.Message ?? "Unknown";
    }
    getDefaultContentType() {
        return "application/x-www-form-urlencoded";
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STSServiceException",
    ()=>STSServiceException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/exceptions.js [app-route] (ecmascript)");
;
;
class STSServiceException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$exceptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ServiceException"] {
    constructor(options){
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/errors.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpiredTokenException",
    ()=>ExpiredTokenException,
    "IDPCommunicationErrorException",
    ()=>IDPCommunicationErrorException,
    "IDPRejectedClaimException",
    ()=>IDPRejectedClaimException,
    "InvalidIdentityTokenException",
    ()=>InvalidIdentityTokenException,
    "MalformedPolicyDocumentException",
    ()=>MalformedPolicyDocumentException,
    "PackedPolicyTooLargeException",
    ()=>PackedPolicyTooLargeException,
    "RegionDisabledException",
    ()=>RegionDisabledException
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js [app-route] (ecmascript) <locals>");
;
class ExpiredTokenException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"] {
    name = "ExpiredTokenException";
    $fault = "client";
    constructor(opts){
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
class MalformedPolicyDocumentException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"] {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(opts){
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
class PackedPolicyTooLargeException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"] {
    name = "PackedPolicyTooLargeException";
    $fault = "client";
    constructor(opts){
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
class RegionDisabledException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"] {
    name = "RegionDisabledException";
    $fault = "client";
    constructor(opts){
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
class IDPRejectedClaimException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"] {
    name = "IDPRejectedClaimException";
    $fault = "client";
    constructor(opts){
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
class InvalidIdentityTokenException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"] {
    name = "InvalidIdentityTokenException";
    $fault = "client";
    constructor(opts){
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
class IDPCommunicationErrorException extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"] {
    name = "IDPCommunicationErrorException";
    $fault = "client";
    $retryable = {};
    constructor(opts){
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts
        });
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssumeRole$",
    ()=>AssumeRole$,
    "AssumeRoleRequest$",
    ()=>AssumeRoleRequest$,
    "AssumeRoleResponse$",
    ()=>AssumeRoleResponse$,
    "AssumeRoleWithWebIdentity$",
    ()=>AssumeRoleWithWebIdentity$,
    "AssumeRoleWithWebIdentityRequest$",
    ()=>AssumeRoleWithWebIdentityRequest$,
    "AssumeRoleWithWebIdentityResponse$",
    ()=>AssumeRoleWithWebIdentityResponse$,
    "AssumedRoleUser$",
    ()=>AssumedRoleUser$,
    "Credentials$",
    ()=>Credentials$,
    "ExpiredTokenException$",
    ()=>ExpiredTokenException$,
    "IDPCommunicationErrorException$",
    ()=>IDPCommunicationErrorException$,
    "IDPRejectedClaimException$",
    ()=>IDPRejectedClaimException$,
    "InvalidIdentityTokenException$",
    ()=>InvalidIdentityTokenException$,
    "MalformedPolicyDocumentException$",
    ()=>MalformedPolicyDocumentException$,
    "PackedPolicyTooLargeException$",
    ()=>PackedPolicyTooLargeException$,
    "PolicyDescriptorType$",
    ()=>PolicyDescriptorType$,
    "ProvidedContext$",
    ()=>ProvidedContext$,
    "RegionDisabledException$",
    ()=>RegionDisabledException$,
    "STSServiceException$",
    ()=>STSServiceException$,
    "Tag$",
    ()=>Tag$,
    "errorTypeRegistries",
    ()=>errorTypeRegistries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/submodules/schema/TypeRegistry.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js [app-route] (ecmascript) <locals>");
const _A = "Arn";
const _AKI = "AccessKeyId";
const _AR = "AssumeRole";
const _ARI = "AssumedRoleId";
const _ARR = "AssumeRoleRequest";
const _ARRs = "AssumeRoleResponse";
const _ARU = "AssumedRoleUser";
const _ARWWI = "AssumeRoleWithWebIdentity";
const _ARWWIR = "AssumeRoleWithWebIdentityRequest";
const _ARWWIRs = "AssumeRoleWithWebIdentityResponse";
const _Au = "Audience";
const _C = "Credentials";
const _CA = "ContextAssertion";
const _DS = "DurationSeconds";
const _E = "Expiration";
const _EI = "ExternalId";
const _ETE = "ExpiredTokenException";
const _IDPCEE = "IDPCommunicationErrorException";
const _IDPRCE = "IDPRejectedClaimException";
const _IITE = "InvalidIdentityTokenException";
const _K = "Key";
const _MPDE = "MalformedPolicyDocumentException";
const _P = "Policy";
const _PA = "PolicyArns";
const _PAr = "ProviderArn";
const _PC = "ProvidedContexts";
const _PCLT = "ProvidedContextsListType";
const _PCr = "ProvidedContext";
const _PDT = "PolicyDescriptorType";
const _PI = "ProviderId";
const _PPS = "PackedPolicySize";
const _PPTLE = "PackedPolicyTooLargeException";
const _Pr = "Provider";
const _RA = "RoleArn";
const _RDE = "RegionDisabledException";
const _RSN = "RoleSessionName";
const _SAK = "SecretAccessKey";
const _SFWIT = "SubjectFromWebIdentityToken";
const _SI = "SourceIdentity";
const _SN = "SerialNumber";
const _ST = "SessionToken";
const _T = "Tags";
const _TC = "TokenCode";
const _TTK = "TransitiveTagKeys";
const _Ta = "Tag";
const _V = "Value";
const _WIT = "WebIdentityToken";
const _a = "arn";
const _aKST = "accessKeySecretType";
const _aQE = "awsQueryError";
const _c = "client";
const _cTT = "clientTokenType";
const _e = "error";
const _hE = "httpError";
const _m = "message";
const _pDLT = "policyDescriptorListType";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sts";
const _tLT = "tagListType";
const n0 = "com.amazonaws.sts";
;
;
;
const _s_registry = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeRegistry"].for(_s);
var STSServiceException$ = [
    -3,
    _s,
    "STSServiceException",
    0,
    [],
    []
];
_s_registry.registerError(STSServiceException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"]);
const n0_registry = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$TypeRegistry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TypeRegistry"].for(n0);
var ExpiredTokenException$ = [
    -3,
    n0,
    _ETE,
    {
        [_aQE]: [
            `ExpiredTokenException`,
            400
        ],
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(ExpiredTokenException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExpiredTokenException"]);
var IDPCommunicationErrorException$ = [
    -3,
    n0,
    _IDPCEE,
    {
        [_aQE]: [
            `IDPCommunicationError`,
            400
        ],
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(IDPCommunicationErrorException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IDPCommunicationErrorException"]);
var IDPRejectedClaimException$ = [
    -3,
    n0,
    _IDPRCE,
    {
        [_aQE]: [
            `IDPRejectedClaim`,
            403
        ],
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
n0_registry.registerError(IDPRejectedClaimException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IDPRejectedClaimException"]);
var InvalidIdentityTokenException$ = [
    -3,
    n0,
    _IITE,
    {
        [_aQE]: [
            `InvalidIdentityToken`,
            400
        ],
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(InvalidIdentityTokenException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidIdentityTokenException"]);
var MalformedPolicyDocumentException$ = [
    -3,
    n0,
    _MPDE,
    {
        [_aQE]: [
            `MalformedPolicyDocument`,
            400
        ],
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(MalformedPolicyDocumentException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MalformedPolicyDocumentException"]);
var PackedPolicyTooLargeException$ = [
    -3,
    n0,
    _PPTLE,
    {
        [_aQE]: [
            `PackedPolicyTooLarge`,
            400
        ],
        [_e]: _c,
        [_hE]: 400
    },
    [
        _m
    ],
    [
        0
    ]
];
n0_registry.registerError(PackedPolicyTooLargeException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PackedPolicyTooLargeException"]);
var RegionDisabledException$ = [
    -3,
    n0,
    _RDE,
    {
        [_aQE]: [
            `RegionDisabledException`,
            403
        ],
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
n0_registry.registerError(RegionDisabledException$, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegionDisabledException"]);
const errorTypeRegistries = [
    _s_registry,
    n0_registry
];
var accessKeySecretType = [
    0,
    n0,
    _aKST,
    8,
    0
];
var clientTokenType = [
    0,
    n0,
    _cTT,
    8,
    0
];
var AssumedRoleUser$ = [
    3,
    n0,
    _ARU,
    0,
    [
        _ARI,
        _A
    ],
    [
        0,
        0
    ],
    2
];
var AssumeRoleRequest$ = [
    3,
    n0,
    _ARR,
    0,
    [
        _RA,
        _RSN,
        _PA,
        _P,
        _DS,
        _T,
        _TTK,
        _EI,
        _SN,
        _TC,
        _SI,
        _PC
    ],
    [
        0,
        0,
        ()=>policyDescriptorListType,
        0,
        1,
        ()=>tagListType,
        64 | 0,
        0,
        0,
        0,
        0,
        ()=>ProvidedContextsListType
    ],
    2
];
var AssumeRoleResponse$ = [
    3,
    n0,
    _ARRs,
    0,
    [
        _C,
        _ARU,
        _PPS,
        _SI
    ],
    [
        [
            ()=>Credentials$,
            0
        ],
        ()=>AssumedRoleUser$,
        1,
        0
    ]
];
var AssumeRoleWithWebIdentityRequest$ = [
    3,
    n0,
    _ARWWIR,
    0,
    [
        _RA,
        _RSN,
        _WIT,
        _PI,
        _PA,
        _P,
        _DS
    ],
    [
        0,
        0,
        [
            ()=>clientTokenType,
            0
        ],
        0,
        ()=>policyDescriptorListType,
        0,
        1
    ],
    3
];
var AssumeRoleWithWebIdentityResponse$ = [
    3,
    n0,
    _ARWWIRs,
    0,
    [
        _C,
        _SFWIT,
        _ARU,
        _PPS,
        _Pr,
        _Au,
        _SI
    ],
    [
        [
            ()=>Credentials$,
            0
        ],
        0,
        ()=>AssumedRoleUser$,
        1,
        0,
        0,
        0
    ]
];
var Credentials$ = [
    3,
    n0,
    _C,
    0,
    [
        _AKI,
        _SAK,
        _ST,
        _E
    ],
    [
        0,
        [
            ()=>accessKeySecretType,
            0
        ],
        0,
        4
    ],
    4
];
var PolicyDescriptorType$ = [
    3,
    n0,
    _PDT,
    0,
    [
        _a
    ],
    [
        0
    ]
];
var ProvidedContext$ = [
    3,
    n0,
    _PCr,
    0,
    [
        _PAr,
        _CA
    ],
    [
        0,
        0
    ]
];
var Tag$ = [
    3,
    n0,
    _Ta,
    0,
    [
        _K,
        _V
    ],
    [
        0,
        0
    ],
    2
];
var policyDescriptorListType = [
    1,
    n0,
    _pDLT,
    0,
    ()=>PolicyDescriptorType$
];
var ProvidedContextsListType = [
    1,
    n0,
    _PCLT,
    0,
    ()=>ProvidedContext$
];
var tagKeyListType = 64 | 0;
var tagListType = [
    1,
    n0,
    _tLT,
    0,
    ()=>Tag$
];
var AssumeRole$ = [
    9,
    n0,
    _AR,
    0,
    ()=>AssumeRoleRequest$,
    ()=>AssumeRoleResponse$
];
var AssumeRoleWithWebIdentity$ = [
    9,
    n0,
    _ARWWI,
    0,
    ()=>AssumeRoleWithWebIdentityRequest$,
    ()=>AssumeRoleWithWebIdentityResponse$
];
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4ASigner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$query$2f$AwsQueryProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/protocols/query/AwsQueryProtocol.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4MultiRegion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/signature-v4-multi-region/dist-es/SignatureV4MultiRegion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/url-parser/dist-es/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-base64/dist-es/fromBase64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-base64/dist-es/toBase64.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-utf8/dist-es/fromUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/util-utf8/dist-es/toUtf8.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/endpointResolver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js [app-route] (ecmascript)");
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
    return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$fromBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromBase64"],
        base64Encoder: config?.base64Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$base64$2f$dist$2d$es$2f$toBase64$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toBase64"],
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$endpointResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultEndpointResolver"],
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultSTSHttpAuthSchemeProvider"],
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc)=>ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsSdkSigV4Signer"]()
            },
            {
                schemeId: "aws.auth#sigv4a",
                identityProvider: (ipc)=>ipc.getIdentityProvider("aws.auth#sigv4a"),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4ASigner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsSdkSigV4ASigner"]()
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc)=>ipc.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoAuthSigner"]()
            }
        ],
        logger: config?.logger ?? new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$NoOpLogger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoOpLogger"](),
        protocol: config?.protocol ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$protocols$2f$query$2f$AwsQueryProtocol$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsQueryProtocol"],
        protocolSettings: config?.protocolSettings ?? {
            defaultNamespace: "com.amazonaws.sts",
            errorTypeRegistries: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorTypeRegistries"],
            xmlNamespace: "https://sts.amazonaws.com/doc/2011-06-15/",
            version: "2011-06-15",
            serviceTarget: "AWSSecurityTokenServiceV20110615"
        },
        serviceId: config?.serviceId ?? "STS",
        signerConstructor: config?.signerConstructor ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$signature$2d$v4$2d$multi$2d$region$2f$dist$2d$es$2f$SignatureV4MultiRegion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignatureV4MultiRegion"],
        urlParser: config?.urlParser ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$url$2d$parser$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseUrl"],
        utf8Decoder: config?.utf8Decoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$fromUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromUtf8"],
        utf8Encoder: config?.utf8Encoder ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$util$2d$utf8$2f$dist$2d$es$2f$toUtf8$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toUtf8"]
    };
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRuntimeConfig",
    ()=>getRuntimeConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$package$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/package.json.[json].cjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$emitWarningIfUnsupportedVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/client/emitWarningIfUnsupportedVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4ASigner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4ASigner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$NODE_AUTH_SCHEME_PREFERENCE_OPTIONS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/NODE_AUTH_SCHEME_PREFERENCE_OPTIONS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4AConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4AConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$defaultUserAgent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-user-agent-node/dist-es/defaultUserAgent.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$nodeAppIdConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/util-user-agent-node/dist-es/nodeAppIdConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseDualstackEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseFipsEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js [app-route] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.shared.js [app-route] (ecmascript)");
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
    const clientSharedValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$runtimeConfig$2e$shared$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(config);
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
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc)=>ipc.getIdentityProvider("aws.auth#sigv4") || (async (idProps)=>await config.credentialDefaultProvider(idProps?.__config || {})()),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4Signer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsSdkSigV4Signer"]()
            },
            {
                schemeId: "aws.auth#sigv4a",
                identityProvider: (ipc)=>ipc.getIdentityProvider("aws.auth#sigv4a"),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$AwsSdkSigV4ASigner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AwsSdkSigV4ASigner"]()
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc)=>ipc.getIdentityProvider("smithy.api#noAuth") || (async ()=>({})),
                signer: new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$httpAuthSchemes$2f$noAuth$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NoAuthSigner"]()
            }
        ],
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
        sigv4aSigningRegionSet: config?.sigv4aSigningRegionSet ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$httpAuthSchemes$2f$aws_sdk$2f$resolveAwsSdkSigV4AConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_SIGV4A_CONFIG_OPTIONS"], loaderConfig),
        streamCollector: config?.streamCollector ?? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$http$2d$handler$2f$dist$2d$es$2f$stream$2d$collector$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamCollector"],
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseDualstackEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS"], loaderConfig),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$endpointsConfig$2f$NodeUseFipsEndpointConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS"], loaderConfig),
        userAgentAppId: config?.userAgentAppId ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$util$2d$user$2d$agent$2d$node$2f$dist$2d$es$2f$nodeAppIdConfigOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_APP_ID_CONFIG_OPTIONS"], loaderConfig)
    };
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveRuntimeExtensions",
    ()=>resolveRuntimeExtensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthExtensionConfiguration.js [app-route] (ecmascript)");
;
;
;
;
const resolveRuntimeExtensions = (runtimeConfig, extensions)=>{
    const extensionConfiguration = Object.assign((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAwsRegionExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpHandlerExtensionConfiguration"])(runtimeConfig), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpAuthExtensionConfiguration"])(runtimeConfig));
    extensions.forEach((extension)=>extension.configure(extensionConfiguration));
    return Object.assign(runtimeConfig, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$extensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveAwsRegionExtensionConfiguration"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$extensions$2f$defaultExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveDefaultRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$protocol$2d$http$2f$dist$2d$es$2f$extensions$2f$httpExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpHandlerRuntimeConfig"])(extensionConfiguration), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthExtensionConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpAuthRuntimeConfig"])(extensionConfiguration));
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STSClient",
    ()=>STSClient
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/auth/httpAuthSchemeProvider.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$runtimeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeConfig.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$runtimeExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/runtimeExtensions.js [app-route] (ecmascript)");
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
class STSClient extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"] {
    config;
    constructor(...[configuration]){
        const _config_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$runtimeConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRuntimeConfig"])(configuration || {});
        super(_config_0);
        this.initConfig = _config_0;
        const _config_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveClientEndpointParameters"])(_config_0);
        const _config_2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveUserAgentConfig"])(_config_1);
        const _config_3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$configurations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRetryConfig"])(_config_2);
        const _config_4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$resolveRegionConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRegionConfig"])(_config_3);
        const _config_5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHostHeaderConfig"])(_config_4);
        const _config_6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$resolveEndpointConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveEndpointConfig"])(_config_5);
        const _config_7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveHttpAuthSchemeConfig"])(_config_6);
        const _config_8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$runtimeExtensions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRuntimeExtensions"])(_config_7, configuration?.extensions || []);
        this.config = _config_8;
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$submodules$2f$schema$2f$middleware$2f$getSchemaSerdePlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchemaSerdePlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$user$2d$agent$2f$dist$2d$es$2f$user$2d$agent$2d$middleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserAgentPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$retry$2f$dist$2d$es$2f$retryMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRetryPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$content$2d$length$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getContentLengthPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$host$2d$header$2f$dist$2d$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHostHeaderPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$logger$2f$dist$2d$es$2f$loggerMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoggerPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$middleware$2d$recursion$2d$detection$2f$dist$2d$es$2f$getRecursionDetectionPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRecursionDetectionPlugin"])(this.config));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$auth$2d$scheme$2f$getHttpAuthSchemeEndpointRuleSetPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpAuthSchemeEndpointRuleSetPlugin"])(this.config, {
            httpAuthSchemeParametersProvider: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$auth$2f$httpAuthSchemeProvider$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultSTSHttpAuthSchemeParametersProvider"],
            identityProviderConfigProvider: async (config)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$util$2d$identity$2d$and$2d$auth$2f$DefaultIdentityProviderConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DefaultIdentityProviderConfig"]({
                    "aws.auth#sigv4": config.credentials,
                    "aws.auth#sigv4a": config.credentials
                })
        }));
        this.middlewareStack.use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$core$2f$dist$2d$es$2f$middleware$2d$http$2d$signing$2f$getHttpSigningMiddleware$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHttpSigningPlugin"])(this.config));
    }
    destroy() {
        super.destroy();
    }
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STSClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSClient"],
    "__Client",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Client"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js [app-route] (ecmascript) <locals>");
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
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssumeRoleCommand",
    ()=>AssumeRoleCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/command.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js [app-route] (ecmascript)");
;
;
;
;
;
class AssumeRoleCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].classBuilder().ep(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commonParams"]).m(function(Command, cs, config, o) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEndpointPlugin"])(config, Command.getEndpointParameterInstructions())
    ];
}).s("AWSSecurityTokenServiceV20110615", "AssumeRole", {}).n("STSClient", "AssumeRoleCommand").sc(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRole$"]).build() {
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AssumeRoleWithWebIdentityCommand",
    ()=>AssumeRoleWithWebIdentityCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/command.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/endpoint/EndpointParameters.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js [app-route] (ecmascript)");
;
;
;
;
;
class AssumeRoleWithWebIdentityCommand extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"].classBuilder().ep(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$endpoint$2f$EndpointParameters$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commonParams"]).m(function(Command, cs, config, o) {
    return [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$middleware$2d$endpoint$2f$dist$2d$es$2f$getEndpointPlugin$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEndpointPlugin"])(config, Command.getEndpointParameterInstructions())
    ];
}).s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {}).n("STSClient", "AssumeRoleWithWebIdentityCommand").sc(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleWithWebIdentity$"]).build() {
}
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STS",
    ()=>STS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$create$2d$aggregated$2d$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js [app-route] (ecmascript) <locals>");
;
;
;
;
const commands = {
    AssumeRoleCommand: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AssumeRoleCommand"],
    AssumeRoleWithWebIdentityCommand: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AssumeRoleWithWebIdentityCommand"]
};
class STS extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSClient"] {
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$create$2d$aggregated$2d$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAggregatedClient"])(commands, STS);
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
;
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"],
    "AssumeRoleCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AssumeRoleCommand"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/command.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Command"],
    "AssumeRoleWithWebIdentityCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AssumeRoleWithWebIdentityCommand"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$smithy$2d$client$2f$dist$2d$es$2f$command$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/smithy-client/dist-es/command.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$Command"],
    "AssumeRoleCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleCommand"],
    "AssumeRoleWithWebIdentityCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleWithWebIdentityCommand"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js [app-route] (ecmascript)");
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/stsRegionDefaultResolver.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stsRegionDefaultResolver",
    ()=>stsRegionDefaultResolver,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@smithy/node-config-provider/dist-es/configLoader.js [app-route] (ecmascript)");
;
;
function stsRegionDefaultResolver(loaderConfig = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$node$2d$config$2d$provider$2f$dist$2d$es$2f$configLoader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loadConfig"])({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_REGION_CONFIG_OPTIONS"],
        async default () {
            if (!warning.silence) {
                console.warn("@aws-sdk - WARN - default STS region of us-east-1 used. See @aws-sdk/credential-providers README and set a region explicitly.");
            }
            return "us-east-1";
        }
    }, {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$smithy$2f$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$config$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NODE_REGION_CONFIG_FILE_OPTIONS"],
        ...loaderConfig
    });
}
const warning = {
    silence: false
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decorateDefaultCredentialProvider",
    ()=>decorateDefaultCredentialProvider,
    "getDefaultRoleAssumer",
    ()=>getDefaultRoleAssumer,
    "getDefaultRoleAssumerWithWebIdentity",
    ()=>getDefaultRoleAssumerWithWebIdentity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$stsRegionDefaultResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/stsRegionDefaultResolver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleCommand.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/AssumeRoleWithWebIdentityCommand.js [app-route] (ecmascript) <locals>");
;
;
;
;
const getAccountIdFromAssumedRoleUser = (assumedRoleUser)=>{
    if (typeof assumedRoleUser?.Arn === "string") {
        const arnComponents = assumedRoleUser.Arn.split(":");
        if (arnComponents.length > 4 && arnComponents[4] !== "") {
            return arnComponents[4];
        }
    }
    return undefined;
};
const resolveRegion = async (_region, _parentRegion, credentialProviderLogger, loaderConfig = {})=>{
    const region = typeof _region === "function" ? await _region() : _region;
    const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
    let stsDefaultRegion = "";
    const resolvedRegion = region ?? parentRegion ?? (stsDefaultRegion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$region$2d$config$2d$resolver$2f$dist$2d$es$2f$regionConfig$2f$stsRegionDefaultResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["stsRegionDefaultResolver"])(loaderConfig)());
    credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (credential provider clientConfig)`, `${parentRegion} (contextual client)`, `${stsDefaultRegion} (STS default: AWS_REGION, profile region, or us-east-1)`);
    return resolvedRegion;
};
const getDefaultRoleAssumer = (stsOptions, STSClient)=>{
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params)=>{
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
            const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
                logger,
                profile
            });
            const isCompatibleRequestHandler = !isH2(requestHandler);
            stsClient = new STSClient({
                ...stsOptions,
                userAgentAppId,
                profile,
                credentialDefaultProvider: ()=>async ()=>closureSourceCreds,
                region: resolvedRegion,
                requestHandler: isCompatibleRequestHandler ? requestHandler : undefined,
                logger: logger
            });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AssumeRoleCommand"](params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            ...Credentials.CredentialScope && {
                credentialScope: Credentials.CredentialScope
            },
            ...accountId && {
                accountId
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCredentialFeature"])(credentials, "CREDENTIALS_STS_ASSUME_ROLE", "i");
        return credentials;
    };
};
const getDefaultRoleAssumerWithWebIdentity = (stsOptions, STSClient)=>{
    let stsClient;
    return async (params)=>{
        if (!stsClient) {
            const { logger = stsOptions?.parentClientConfig?.logger, profile = stsOptions?.parentClientConfig?.profile, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, userAgentAppId = stsOptions?.parentClientConfig?.userAgentAppId } = stsOptions;
            const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger, {
                logger,
                profile
            });
            const isCompatibleRequestHandler = !isH2(requestHandler);
            stsClient = new STSClient({
                ...stsOptions,
                userAgentAppId,
                profile,
                region: resolvedRegion,
                requestHandler: isCompatibleRequestHandler ? requestHandler : undefined,
                logger: logger
            });
        }
        const { Credentials, AssumedRoleUser } = await stsClient.send(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$AssumeRoleWithWebIdentityCommand$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AssumeRoleWithWebIdentityCommand"](params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        const accountId = getAccountIdFromAssumedRoleUser(AssumedRoleUser);
        const credentials = {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            ...Credentials.CredentialScope && {
                credentialScope: Credentials.CredentialScope
            },
            ...accountId && {
                accountId
            }
        };
        if (accountId) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCredentialFeature"])(credentials, "RESOLVED_ACCOUNT_ID", "T");
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$core$2f$dist$2d$es$2f$submodules$2f$client$2f$setCredentialFeature$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["setCredentialFeature"])(credentials, "CREDENTIALS_STS_ASSUME_ROLE_WEB_ID", "k");
        return credentials;
    };
};
const decorateDefaultCredentialProvider = (provider)=>(input)=>provider({
            roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
            roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
            ...input
        });
const isH2 = (requestHandler)=>{
    return requestHandler?.metadata?.handlerProtocol === "h2";
};
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decorateDefaultCredentialProvider",
    ()=>decorateDefaultCredentialProvider,
    "getDefaultRoleAssumer",
    ()=>getDefaultRoleAssumer,
    "getDefaultRoleAssumerWithWebIdentity",
    ()=>getDefaultRoleAssumerWithWebIdentity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$defaultStsRoleAssumers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultStsRoleAssumers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js [app-route] (ecmascript) <locals>");
;
;
const getCustomizableStsClientCtor = (baseCtor, customizations)=>{
    if (!customizations) return baseCtor;
    else return class CustomizableSTSClient extends baseCtor {
        constructor(config){
            super(config);
            for (const customization of customizations){
                this.middlewareStack.use(customization);
            }
        }
    };
};
const getDefaultRoleAssumer = (stsOptions = {}, stsPlugins)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$defaultStsRoleAssumers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultRoleAssumer"])(stsOptions, getCustomizableStsClientCtor(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSClient"], stsPlugins));
const getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$defaultStsRoleAssumers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultRoleAssumerWithWebIdentity"])(stsOptions, getCustomizableStsClientCtor(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSClient"], stsPlugins));
const decorateDefaultCredentialProvider = (provider)=>(input)=>provider({
            roleAssumer: getDefaultRoleAssumer(input),
            roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input),
            ...input
        });
}),
"[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$Command",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["$Command"],
    "AssumeRole$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRole$"],
    "AssumeRoleCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleCommand"],
    "AssumeRoleRequest$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleRequest$"],
    "AssumeRoleResponse$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleResponse$"],
    "AssumeRoleWithWebIdentity$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleWithWebIdentity$"],
    "AssumeRoleWithWebIdentityCommand",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleWithWebIdentityCommand"],
    "AssumeRoleWithWebIdentityRequest$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleWithWebIdentityRequest$"],
    "AssumeRoleWithWebIdentityResponse$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumeRoleWithWebIdentityResponse$"],
    "AssumedRoleUser$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AssumedRoleUser$"],
    "Credentials$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Credentials$"],
    "ExpiredTokenException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExpiredTokenException"],
    "ExpiredTokenException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ExpiredTokenException$"],
    "IDPCommunicationErrorException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IDPCommunicationErrorException"],
    "IDPCommunicationErrorException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IDPCommunicationErrorException$"],
    "IDPRejectedClaimException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IDPRejectedClaimException"],
    "IDPRejectedClaimException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IDPRejectedClaimException$"],
    "InvalidIdentityTokenException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidIdentityTokenException"],
    "InvalidIdentityTokenException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidIdentityTokenException$"],
    "MalformedPolicyDocumentException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MalformedPolicyDocumentException"],
    "MalformedPolicyDocumentException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MalformedPolicyDocumentException$"],
    "PackedPolicyTooLargeException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PackedPolicyTooLargeException"],
    "PackedPolicyTooLargeException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PackedPolicyTooLargeException$"],
    "PolicyDescriptorType$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PolicyDescriptorType$"],
    "ProvidedContext$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProvidedContext$"],
    "RegionDisabledException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegionDisabledException"],
    "RegionDisabledException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RegionDisabledException$"],
    "STS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STS"],
    "STSClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STSClient"],
    "STSServiceException",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["STSServiceException"],
    "STSServiceException$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["STSServiceException$"],
    "Tag$",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tag$"],
    "__Client",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["__Client"],
    "decorateDefaultCredentialProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$defaultRoleAssumers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decorateDefaultCredentialProvider"],
    "errorTypeRegistries",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["errorTypeRegistries"],
    "getDefaultRoleAssumer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$defaultRoleAssumers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultRoleAssumer"],
    "getDefaultRoleAssumerWithWebIdentity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$defaultRoleAssumers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultRoleAssumerWithWebIdentity"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STSClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STSClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$STS$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/STS.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$commands$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/commands/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$schemas$2f$schemas_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/schemas/schemas_0.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$errors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/errors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$models_0$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/models_0.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$defaultRoleAssumers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/defaultRoleAssumers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$AI$2f$seo$2f$seo$2d$web$2f$frontend$2f$node_modules$2f40$aws$2d$sdk$2f$nested$2d$clients$2f$dist$2d$es$2f$submodules$2f$sts$2f$models$2f$STSServiceException$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/AI/seo/seo-web/frontend/node_modules/@aws-sdk/nested-clients/dist-es/submodules/sts/models/STSServiceException.js [app-route] (ecmascript) <locals>");
}),
];

//# sourceMappingURL=0usa_0gvu0s6._.js.map