module.exports = [
"[project]/frontend/components/ConnectButton.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ConnectButton
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi/chains [external] (wagmi/chains, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/contracts.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function truncateAddress(address) {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
function ConnectButton() {
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useChainId"])();
    const { connect, connectors, isPending } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useConnect"])();
    const { disconnect } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useDisconnect"])();
    const { switchChain, isPending: isSwitchingChain } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useSwitchChain"])();
    const isWrongChain = isConnected && chainId !== __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id;
    if (isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "stack",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "status-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "pill pill--success",
                            children: "Wallet connected"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ConnectButton.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: `pill ${isWrongChain ? "pill--danger" : ""}`,
                            children: truncateAddress(address)
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ConnectButton.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: `pill ${isWrongChain ? "pill--danger" : "pill--success"}`,
                            children: isWrongChain ? "Switch to Hardhat Localhost" : "Connected to localhost:8545"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ConnectButton.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ConnectButton.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "btn btn--ghost",
                    onClick: ()=>disconnect(),
                    children: "Disconnect wallet"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ConnectButton.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                isWrongChain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "btn",
                    onClick: ()=>switchChain({
                            chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
                        }),
                    disabled: isSwitchingChain,
                    children: isSwitchingChain ? "Switching network..." : "Switch to Hardhat Localhost"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ConnectButton.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/ConnectButton.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    if (!connectors || connectors.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "message message--warning",
            children: "No injected wallet was detected. Open this page in MetaMask-enabled Chrome or Brave, then refresh and connect again."
        }, void 0, false, {
            fileName: "[project]/frontend/components/ConnectButton.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "stack",
        children: [
            connectors.map((connector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    className: "btn",
                    onClick: ()=>connect({
                            connector,
                            chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
                        }),
                    disabled: isPending,
                    children: isPending ? "Connecting..." : `Connect ${connector.name}`
                }, connector.uid, false, {
                    fileName: "[project]/frontend/components/ConnectButton.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "meta",
                children: [
                    "Expected local RPC: ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["localRpcUrl"]
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ConnectButton.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/ConnectButton.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/components/MembershipGateway.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>MembershipGateway
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi [external] (wagmi, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__ = __turbopack_context__.i("[externals]/wagmi/chains [external] (wagmi/chains, esm_import, [project]/frontend/node_modules/wagmi)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ConnectButton.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/contracts.ts [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
const zeroAddress = "0x0000000000000000000000000000000000000000";
function MembershipGateway() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const { address, isConnected } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useChainId"])();
    const { writeContract, isPending, error: writeError, data: txData } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useWriteContract"])();
    const isWrongChain = isConnected && chainId !== __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id;
    const { data, refetch, error: membershipReadError, isLoading: isCheckingMembership } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAbi"],
        functionName: "balanceOf",
        args: [
            address ?? zeroAddress
        ],
        chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
    });
    const isMember = typeof data === "bigint" && data > 0n;
    const handleMint = ()=>{
        if (!address) {
            setError("Please connect your wallet first.");
            return;
        }
        if (isWrongChain) {
            setError("Switch MetaMask to your local Hardhat network at http://127.0.0.1:8545.");
            return;
        }
        setError(null);
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAddress"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAbi"],
            functionName: "mint",
            args: [],
            chain: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"],
            chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id,
            account: address
        });
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (writeError) {
            setError(writeError.message || "Transaction failed.");
        }
    }, [
        writeError
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (!membershipReadError) return;
        setError([
            "Local membership contract is unavailable.",
            `Start your Hardhat node at ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["localRpcUrl"]}, then redeploy the contracts.`,
            `Expected membership contract: ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAddress"]}.`,
            `Expected poll contract: ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAddress"]}.`
        ].join(" "));
    }, [
        membershipReadError
    ]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (txData) {
            void refetch();
        }
    }, [
        txData,
        refetch
    ]);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "stack",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "hero__eyebrow",
                            children: "Membership-gated governance"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MembershipGateway.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "hero__title",
                            children: "Token Gated Poll"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MembershipGateway.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "hero__subtitle",
                            children: "Connect your wallet, mint a membership NFT on your local Hardhat chain, and unlock access to the poll only verified members can vote in."
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MembershipGateway.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/MembershipGateway.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "grid grid--two",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        className: "card stack",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: "1. Connect Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "meta",
                                        children: "Your wallet must be connected to the local Hardhat network for reads and transactions to succeed."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ConnectButton$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            isWrongChain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "message message--warning",
                                children: "MetaMask is connected, but not to `localhost:8545`. Add the Hardhat network and switch before minting or voting."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                        className: "card stack",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: "2. Membership Access"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "meta",
                                        children: "The poll checks NFT ownership before allowing access, so membership is the gatekeeper for the full experience."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "status-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: `pill ${isMember ? "pill--success" : "pill--danger"}`,
                                        children: isMember ? "Membership active" : "No membership NFT yet"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "pill",
                                        children: typeof data === "bigint" ? `NFT balance: ${data.toString()}` : isCheckingMembership ? "Checking balance..." : "Balance unavailable"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "message message--error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this),
                            membershipReadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "message message--warning",
                                children: "The local contracts were not found at the configured addresses. Run `npm run node` in one terminal and `npm run deploy:local` in another, then refresh this page."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            !isConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "meta",
                                children: "Connect your wallet first, then mint your membership NFT."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            isConnected && !isMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: handleMint,
                                disabled: isPending || isWrongChain,
                                children: isPending ? "Minting membership..." : "Mint Membership NFT"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            isConnected && isMember && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "btn btn--full",
                                href: "/poll",
                                children: "Enter Members Poll"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/MembershipGateway.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/MembershipGateway.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/MembershipGateway.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/frontend/pages/access.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>AccessPage
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MembershipGateway$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/MembershipGateway.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MembershipGateway$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MembershipGateway$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function AccessPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MembershipGateway$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/frontend/pages/access.tsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0m21tu_._.js.map