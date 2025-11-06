module.exports = [
"[project]/skill-sync/src/hooks/useFetch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// custom hook to fetch data from (APi or json files) without repeatinh the code
__turbopack_context__.s([
    "default",
    ()=>useFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useFetch(url) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
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
        };
        fetchData();
    }, [
        url
    ]);
    return {
        data,
        loading,
        error
    };
}
}),
"[project]/skill-sync/src/components/SkillCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//reuseable card component for skill page
__turbopack_context__.s([
    "default",
    ()=>SkillCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function SkillCard({ skill }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#242437] border border-[#2A2A3D] rounded-2xl p-6 text-left hover:-translate-y-2 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl mb-3",
                children: skill.icon
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-[#8B5CF6] mb-2",
                children: skill.name
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 text-sm mb-3",
                children: skill.category
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 text-sm mb-3",
                children: skill.description
            }, void 0, false, {
                fileName: "[project]/skill-sync/src/components/SkillCard.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/skill-sync/src/app/skills/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/src/hooks/useFetch.js [app-ssr] (ecmascript)"); //custom hook to fetch the json static data
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$components$2f$SkillCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/src/components/SkillCard.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function SkillsPage() {
    const { data: skills, loading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$hooks$2f$useFetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("/data/skills.json");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-[#1E1E2F] text-white py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: [
                        "Explore ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-12",
                    children: "Stay updated with the latest in-demand skills."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300",
                    children: "Loading skills..."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 16,
                    columnNumber: 21
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400",
                    children: "Failed to load skills. Try again later."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 17,
                    columnNumber: 19
                }, this),
                !loading && !error && skills && skills.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400",
                    children: "No skills available at the moment."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/skills/page.js",
                    lineNumber: 20,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: !loading && !error && skills && skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$src$2f$components$2f$SkillCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),
];

//# sourceMappingURL=skill-sync_src_509401fe._.js.map