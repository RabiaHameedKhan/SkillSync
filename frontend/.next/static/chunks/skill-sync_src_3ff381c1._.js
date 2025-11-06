(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/skill-sync/src/hooks/useFetch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// custom hook to fetch data from (APi or json files) without repeatinh the code
__turbopack_context__.s([
    "default",
    ()=>useFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useFetch(url) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFetch.useEffect": ()=>{
            const fetchData = {
                "useFetch.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error("Network error");
                        const result = await response.json();
                        setData(result);
                    } catch (err) {
                        setError(err.message);
                    } finally{
                        setLoading(false);
                    }
                }
            }["useFetch.useEffect.fetchData"];
            fetchData();
        }
    }["useFetch.useEffect"], [
        url
    ]);
    return {
        data,
        loading,
        error
    };
}
_s(useFetch, "RiL7vLwmC7ZWXKL/bXt2EIBjBYk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/skill-sync/src/components/SkillCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//reuseable card component for skill page
__turbopack_context__.s([
    "default",
    ()=>SkillCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function SkillCard(param) {
    let { skill } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#242437] border border-[#2A2A3D] rounded-2xl p-6 text-left hover:-translate-y-2 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl mb-3",
                children: skill.icon
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-[#8B5CF6] mb-2",
                children: skill.name
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm mb-3",
                children: skill.category
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 text-sm mb-3",
                children: skill.description
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm italic",
                children: [
                    "Level: ",
                    skill.level
                ]
            }, void 0, true, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = SkillCard;
var _c;
__turbopack_context__.k.register(_c, "SkillCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/skill-sync/src/app/skills/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/src/hooks/useFetch.js [app-client] (ecmascript)"); //custom hook to fetch the json static data
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$components$2f$SkillCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/src/components/SkillCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SkillsPage() {
    _s();
    const { data: skills, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("/data/skills.json");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-[#1E1E2F] text-white py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: [
                        "Explore ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#8B5CF6]",
                            children: "Trending Skills"
                        }, void 0, false, {
                            fileName: "[project]/skill-sync/src/app/skills/page.js",
                            lineNumber: 13,
                            columnNumber: 57
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-12",
                    children: "Stay updated with the latest in-demand skills."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: "Loading skills..."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 16,
                    columnNumber: 21
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400",
                    children: "Failed to load skills. Try again later."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 17,
                    columnNumber: 19
                }, this),
                !loading && !error && skills && skills.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "No skills available at the moment."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 20,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: !loading && !error && skills && skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$components$2f$SkillCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            skill: skill
                        }, skill.id, false, {
                            fileName: "[project]/skill-sync/src/app/skills/page.js",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/skill-sync/src/app/skills/page.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/skill-sync/src/app/skills/page.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(SkillsPage, "b2DVrJZbATMi+22QSXmek3I8F74=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SkillsPage;
var _c;
__turbopack_context__.k.register(_c, "SkillsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=skill-sync_src_3ff381c1._.js.map