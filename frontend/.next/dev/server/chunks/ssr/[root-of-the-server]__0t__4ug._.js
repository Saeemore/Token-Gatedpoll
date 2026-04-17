module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/frontend/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$wagmi$2f$connectors__$5b$external$5d$__$2840$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$29$__ = __turbopack_context__.i("[externals]/@wagmi/connectors [external] (@wagmi/connectors, esm_import, [project]/frontend/node_modules/@wagmi/connectors)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$29$__ = __turbopack_context__.i("[externals]/viem [external] (viem, esm_import, [project]/frontend/node_modules/viem)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi/chains [external] (wagmi/chains, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import, [project]/frontend/node_modules/@tanstack/react-query)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$wagmi$2f$connectors__$5b$external$5d$__$2840$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$wagmi$2f$connectors__$5b$external$5d$__$2840$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
const publicClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$29$__["createPublicClient"])({
    chain: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"],
    transport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$viem$29$__["http"])(process.env.NEXT_PUBLIC_RPC_URL || "http://127.0.0.1:8545")
});
const config = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["createConfig"])({
    connectors: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$wagmi$2f$connectors__$5b$external$5d$__$2840$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$wagmi$2f$connectors$29$__["metaMask"])({
            chains: [
                __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"]
            ]
        })
    ],
    publicClient,
    chains: [
        __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"]
    ]
});
const queryClient = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__["QueryClient"]();
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["WagmiProvider"], {
        config: config,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__["QueryClientProvider"], {
            client: queryClient,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/frontend/pages/_app.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/pages/_app.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/pages/_app.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("wagmi-5507242452482b66");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@wagmi/connectors [external] (@wagmi/connectors, esm_import, [project]/frontend/node_modules/@wagmi/connectors)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@wagmi/connectors-c7b7ce7818495aa8");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/viem [external] (viem, esm_import, [project]/frontend/node_modules/viem)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("viem-a286a289eef99d7a");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/wagmi/chains [external] (wagmi/chains, esm_import, [project]/frontend/node_modules/wagmi)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("wagmi-5507242452482b66/chains");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import, [project]/frontend/node_modules/@tanstack/react-query)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tanstack/react-query-edf5593f09461644");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0t__4ug._.js.map