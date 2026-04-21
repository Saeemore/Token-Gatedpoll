module.exports = [
"[project]/frontend/pages/poll.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Poll
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/link.js [ssr] (ecmascript)");
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
;
const zeroAddress = "0x0000000000000000000000000000000000000000";
function Poll() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useChainId"])();
    const { writeContract, data: voteHash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useWriteContract"])();
    const isWrongChain = !!address && chainId !== __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id;
    const { data: balance, error: balanceError, refetch: refetchBalance } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["membershipAbi"],
        functionName: "balanceOf",
        args: [
            address ?? zeroAddress
        ],
        chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
    });
    const isMember = typeof balance === "bigint" && balance > 0n;
    const { data: question } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAbi"],
        functionName: "question",
        chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
    });
    const { data: options } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAbi"],
        functionName: "getOptions",
        chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
    });
    const safeOptions = Array.isArray(options) ? options : [];
    const votesContracts = safeOptions.map((_, index)=>({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAddress"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAbi"],
            functionName: "votes",
            args: [
                BigInt(index)
            ],
            chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
        }));
    const { data: votesData, refetch: refetchVoteCounts } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContracts"])({
        contracts: votesContracts
    });
    const { data: hasVoted, refetch: refetchHasVoted } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAbi"],
        functionName: "hasVoted",
        args: [
            address ?? zeroAddress
        ],
        chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
    });
    const { data: votedOptionIndex, refetch: refetchVotedOption } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useReadContract"])({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAddress"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAbi"],
        functionName: "votedOption",
        args: [
            address ?? zeroAddress
        ],
        chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi__$5b$external$5d$__$28$wagmi$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["useWaitForTransactionReceipt"])({
        hash: voteHash,
        query: {
            enabled: !!voteHash
        },
        onSuccess: ()=>{
            void refetchBalance();
            void refetchHasVoted();
            void refetchVotedOption();
            void refetchVoteCounts();
        }
    });
    const handleVote = (index)=>{
        if (!address || isWrongChain) return;
        writeContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAddress"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["pollAbi"],
            functionName: "vote",
            args: [
                BigInt(index)
            ],
            chain: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"],
            chainId: __TURBOPACK__imported__module__$5b$externals$5d2f$wagmi$2f$chains__$5b$external$5d$__$28$wagmi$2f$chains$2c$__esm_import$2c$__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$29$__["hardhat"].id,
            account: address
        });
    };
    const selectedOptionLabel = hasVoted && typeof votedOptionIndex === "bigint" ? safeOptions[Number(votedOptionIndex)] : undefined;
    if (!isMember) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
            className: "page",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "card stack",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Access Denied"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/poll.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "meta",
                        children: balanceError ? `The local membership contract could not be reached on ${__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$contracts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["localRpcUrl"]}.` : "You need a membership NFT before you can participate in polls."
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/poll.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "nav-link",
                        href: "/access",
                        children: "Return to membership page"
                    }, void 0, false, {
                        fileName: "[project]/frontend/pages/poll.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/pages/poll.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/pages/poll.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this);
    }
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
                            children: "Members only ballot"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                            className: "hero__title",
                            children: typeof question === "string" ? question : "Loading poll..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            className: "hero__subtitle",
                            children: "Each connected member wallet gets one vote. Results update from the smart contract state on your local chain."
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/poll.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/poll.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "grid",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                    className: "card stack",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "status-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "pill pill--success",
                                    children: "Membership verified"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/poll.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: `pill ${hasVoted ? "pill--success" : ""}`,
                                    children: hasVoted ? "Vote recorded" : "Vote not submitted yet"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/pages/poll.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "stack",
                            children: [
                                address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "meta",
                                    children: [
                                        "Verified member wallet: ",
                                        address
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/poll.tsx",
                                    lineNumber: 165,
                                    columnNumber: 25
                                }, this),
                                hasVoted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "meta",
                                    children: [
                                        "Recorded vote: ",
                                        selectedOptionLabel ? String(selectedOptionLabel) : "Loading option..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/pages/poll.tsx",
                                    lineNumber: 167,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        isWrongChain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "message message--warning",
                            children: "Switch your wallet to Hardhat localhost before voting."
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "message message--error",
                            children: error.message
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 179,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "option-list",
                            children: safeOptions.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "option-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "option-card__header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "option-card__title",
                                                    children: String(option)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/poll.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "votes",
                                                    children: typeof votesData?.[index]?.result === "bigint" ? `${votesData[index].result.toString()} votes` : "0 votes"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/pages/poll.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/pages/poll.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                            className: "btn btn--full",
                                            onClick: ()=>handleVote(index),
                                            disabled: !address || !!hasVoted || isPending || isWrongChain,
                                            children: isPending ? "Submitting vote..." : `Vote for ${String(option)}`
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/pages/poll.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/frontend/pages/poll.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "nav-link",
                            href: "/access",
                            children: "Back to membership page"
                        }, void 0, false, {
                            fileName: "[project]/frontend/pages/poll.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/pages/poll.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/pages/poll.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/pages/poll.tsx",
        lineNumber: 141,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0ur2_by._.js.map