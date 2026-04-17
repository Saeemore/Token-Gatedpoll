module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[project]/frontend/components/ConnectButton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ConnectButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function ConnectButton() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useAccount"])();
    const { connect, connectors } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useConnect"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useDisconnect"])();
    if (isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: [
                        "Connected: ",
                        address
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ConnectButton.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    onClick: ()=>disconnect(),
                    children: "Disconnect"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ConnectButton.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/ConnectButton.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: connectors.map((connector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: ()=>connect({
                        connector
                    }),
                children: [
                    "Connect ",
                    connector.name
                ]
            }, connector.uid, true, {
                fileName: "[project]/frontend/components/ConnectButton.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/frontend/components/ConnectButton.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/lib/contracts.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "membershipAbi",
    ()=>membershipAbi,
    "membershipAddress",
    ()=>membershipAddress,
    "pollAbi",
    ()=>pollAbi,
    "pollAddress",
    ()=>pollAddress
]);
const membershipAddress = "YOUR_MEMBERSHIP_CONTRACT_ADDRESS";
const pollAddress = "YOUR_POLL_CONTRACT_ADDRESS";
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
    }
];
}),
"[project]/frontend/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ConnectButton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/contracts.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
function Home() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useAccount"])();
    const { data } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAbi"],
        functionName: "balanceOf",
        args: address ? [
            address
        ] : [
            "0x0000000000000000000000000000000000000000"
        ]
    });
    const isMember = typeof data === "bigint" && data > 0n;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Token Gated Poll"
            }, void 0, false, {
                fileName: "[project]/frontend/pages/index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/frontend/pages/index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Membership status:",
                            " ",
                            isMember ? "Member ✅" : "Not a member ❌"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/pages/index.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this),
                    isMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/poll",
                        children: "Go to Poll"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/index.tsx",
                        lineNumber: 34,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/index.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/pages/index.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03c.j8j._.js.map