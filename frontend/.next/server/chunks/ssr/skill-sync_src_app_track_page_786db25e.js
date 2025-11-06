module.exports = [
"[project]/skill-sync/src/app/track/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrackPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function TrackPage() {
    const [skills, setSkills] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newSkill, setNewSkill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Function to add new skill
    const handleAddSkill = ()=>{
        if (!newSkill.trim()) return; // ignore empty input
        const newSkillObj = {
            id: Date.now(),
            name: newSkill.trim(),
            progress: 0
        };
        setSkills([
            ...skills,
            newSkillObj
        ]);
        setNewSkill(""); // clear input
    };
    // Function to update progress
    const handleProgress = (id, change)=>{
        setSkills((prevSkills)=>prevSkills.map((skill)=>skill.id === id ? {
                    ...skill,
                    progress: Math.min(100, Math.max(0, skill.progress + change))
                } : skill));
    };
    // Function to delete a skill
    const handleDelete = (id)=>{
        setSkills(skills.filter((skill)=>skill.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-[#1E1E2F] text-white py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: [
                        "Track Your ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#8B5CF6]",
                            children: "Skill Progress"
                        }, void 0, false, {
                            fileName: "[project]/skill-sync/src/app/track/page.js",
                            lineNumber: 42,
                            columnNumber: 22
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/skill-sync/src/app/track/page.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-12",
                    children: "Add your own skills and track your learning progress visually."
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/track/page.js",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            value: newSkill,
                            onChange: (e)=>setNewSkill(e.target.value),
                            placeholder: "Enter a new skill (e.g., Next.js)",
                            className: "w-full sm:w-80 px-4 py-2 rounded-lg bg-[#2A2A3D] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:bg-[#33334A] transition-all"
                        }, void 0, false, {
                            fileName: "[project]/skill-sync/src/app/track/page.js",
                            lineNumber: 50,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAddSkill,
                            className: "bg-[#8B5CF6] hover:bg-[#7C3AED] px-6 py-2 rounded-lg font-semibold",
                            children: "Add Skill"
                        }, void 0, false, {
                            fileName: "[project]/skill-sync/src/app/track/page.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/skill-sync/src/app/track/page.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: skills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "No skills added yet. Start by adding one above!"
                    }, void 0, false, {
                        fileName: "[project]/skill-sync/src/app/track/page.js",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this) : skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#242437] p-6 rounded-2xl text-left border border-[#2A2A3D]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-semibold",
                                            children: skill.name
                                        }, void 0, false, {
                                            fileName: "[project]/skill-sync/src/app/track/page.js",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#8B5CF6]",
                                                    children: [
                                                        skill.progress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/skill-sync/src/app/track/page.js",
                                                    lineNumber: 79,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDelete(skill.id),
                                                    className: "text-red-400 hover:text-red-500 text-sm",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/skill-sync/src/app/track/page.js",
                                                    lineNumber: 80,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/skill-sync/src/app/track/page.js",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/skill-sync/src/app/track/page.js",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full bg-[#1E1E2F] h-3 rounded-full mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 bg-[#8B5CF6] rounded-full",
                                        style: {
                                            width: `${skill.progress}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/skill-sync/src/app/track/page.js",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/skill-sync/src/app/track/page.js",
                                    lineNumber: 90,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleProgress(skill.id, -10),
                                            className: "px-4 py-2 bg-[#2A2A3D] hover:bg-[#3A3A4D] rounded-lg text-sm",
                                            children: "- Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/skill-sync/src/app/track/page.js",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleProgress(skill.id, +10),
                                            className: "px-4 py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg text-sm",
                                            children: "+ Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/skill-sync/src/app/track/page.js",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/skill-sync/src/app/track/page.js",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, skill.id, true, {
                            fileName: "[project]/skill-sync/src/app/track/page.js",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/skill-sync/src/app/track/page.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/skill-sync/src/app/track/page.js",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/skill-sync/src/app/track/page.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=skill-sync_src_app_track_page_786db25e.js.map