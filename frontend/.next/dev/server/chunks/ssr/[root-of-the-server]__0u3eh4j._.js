module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/frontend/lib/deployment.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deployment",
    ()=>deployment
]);
const deployment = {
    "chainId": 31337,
    "network": "localhost",
    "rpcUrl": "http://127.0.0.1:8545",
    "deployer": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    "membershipAddress": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    "pollAddress": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    "deployedAt": "2026-04-18T13:50:17.964Z"
};
}),
"[project]/frontend/lib/contracts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "localChainId",
    ()=>localChainId,
    "localRpcUrl",
    ()=>localRpcUrl,
    "membershipAbi",
    ()=>membershipAbi,
    "membershipAddress",
    ()=>membershipAddress,
    "pollAbi",
    ()=>pollAbi,
    "pollAddress",
    ()=>pollAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$deployment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/deployment.ts [ssr] (ecmascript)");
;
const localChainId = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$deployment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["deployment"].chainId;
const localRpcUrl = process.env.NEXT_PUBLIC_RPC_URL?.trim() || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$deployment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["deployment"].rpcUrl || "http://127.0.0.1:8545";
const membershipAddress = process.env.NEXT_PUBLIC_MEMBERSHIP_ADDRESS || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$deployment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["deployment"].membershipAddress;
const pollAddress = process.env.NEXT_PUBLIC_POLL_ADDRESS || __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$deployment$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["deployment"].pollAddress;
const membershipAbi = [
    {
        type: "function",
        name: "balanceOf",
        stateMutability: "view",
        inputs: [
            {
                name: "owner",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "mint",
        stateMutability: "nonpayable",
        inputs: [],
        outputs: []
    },
    {
        type: "function",
        name: "safeMint",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "to",
                type: "address"
            }
        ],
        outputs: []
    }
];
const pollAbi = [
    {
        type: "function",
        name: "question",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string"
            }
        ]
    },
    {
        type: "function",
        name: "getOptions",
        stateMutability: "view",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string[]"
            }
        ]
    },
    {
        type: "function",
        name: "vote",
        stateMutability: "nonpayable",
        inputs: [
            {
                name: "optionIndex",
                type: "uint256"
            }
        ],
        outputs: []
    },
    {
        type: "function",
        name: "votes",
        stateMutability: "view",
        inputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    },
    {
        type: "function",
        name: "hasVoted",
        stateMutability: "view",
        inputs: [
            {
                name: "",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "bool"
            }
        ]
    },
    {
        type: "function",
        name: "votedOption",
        stateMutability: "view",
        inputs: [
            {
                name: "",
                type: "address"
            }
        ],
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ]
    }
];
}),
"[project]/frontend/lib/wagmiConfig.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "wagmiConfig",
    ()=>wagmiConfig
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi/chains [external] (wagmi/chains, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$connectors__$5b$external$5d$__$28$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi/connectors [external] (wagmi/connectors, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/contracts.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$connectors__$5b$external$5d$__$28$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$connectors__$5b$external$5d$__$28$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const wagmiConfig = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["createConfig"])({
    chains: [
        __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"]
    ],
    connectors: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$connectors__$5b$external$5d$__$28$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["metaMask"])({
            dappMetadata: {
                name: "Token Gated Poll"
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$connectors__$5b$external$5d$__$28$wagmi$2f$connectors$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["injected"])({
            target: "metaMask"
        })
    ],
    transports: {
        [__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id]: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["localRpcUrl"])
    },
    ssr: true
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__ = __turbopack_context__.i("[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import, [project]/frontend/node_modules/@tanstack/react-query)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$wagmiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/wagmiConfig.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$wagmiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$wagmiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__["QueryClient"]();
function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["WagmiProvider"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$wagmiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["wagmiConfig"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$tanstack$2f$react$2d$query__$5b$external$5d$__$2840$tanstack$2f$react$2d$query$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$29$__["QueryClientProvider"], {
            client: queryClient,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "app-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                    ...pageProps
                }, void 0, false, {
                    fileName: "[project]/frontend/pages/_app.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/_app.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/pages/_app.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/pages/_app.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/@tanstack/react-query [external] (@tanstack/react-query, esm_import, [project]/frontend/node_modules/@tanstack/react-query)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@tanstack/react-query-edf5593f09461644");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("wagmi-5507242452482b66");

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
"[externals]/wagmi/connectors [external] (wagmi/connectors, esm_import, [project]/frontend/node_modules/wagmi)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("wagmi-5507242452482b66/connectors");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0u3eh4j._.js.map