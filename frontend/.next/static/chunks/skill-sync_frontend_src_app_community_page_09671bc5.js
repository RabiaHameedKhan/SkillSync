(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/skill-sync/frontend/src/app/community/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommunityPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/skill-sync/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function CommunityPage() {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: 1,
            name: "Sara Ahmed",
            content: "Just completed React basics! 💻 Feeling motivated.",
            likes: 12,
            comments: [
                "Congrats! 🎉",
                "Keep going!"
            ]
        },
        {
            id: 2,
            name: "Ali Khan",
            content: "Started learning Python for Data Science. Excited! 🐍",
            likes: 8,
            comments: []
        }
    ]);
    const [newPost, setNewPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleAddPost = ()=>{
        if (newPost.trim()) {
            const newEntry = {
                id: Date.now(),
                name: "You",
                content: newPost,
                likes: 0,
                comments: []
            };
            setPosts([
                newEntry,
                ...posts
            ]);
            setNewPost("");
        }
    };
    const handleLike = (id)=>{
        setPosts((prev)=>prev.map((post)=>post.id === id ? {
                    ...post,
                    likes: post.likes + 1
                } : post));
    };
    const handleAddComment = (id)=>{
        var _commentText_id;
        const text = (_commentText_id = commentText[id]) === null || _commentText_id === void 0 ? void 0 : _commentText_id.trim();
        if (!text) return;
        setPosts((prev)=>prev.map((post)=>post.id === id ? {
                    ...post,
                    comments: [
                        ...post.comments,
                        text
                    ]
                } : post));
        setCommentText({
            ...commentText,
            [id]: ""
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-[#1E1E2F] text-white py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-center mb-4",
                    children: [
                        "Join the ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#8B5CF6]",
                            children: "Community"
                        }, void 0, false, {
                            fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                            lineNumber: 64,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 text-center mb-10",
                    children: "Share your progress, motivate others, and learn together!"
                }, void 0, false, {
                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#242437] p-6 rounded-2xl mb-8 border border-[#2A2A3D]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: newPost,
                            onChange: (e)=>setNewPost(e.target.value),
                            placeholder: "Share your thoughts...",
                            className: "w-full bg-[#1E1E2F] text-white p-3 rounded-lg focus:outline-none resize-none",
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAddPost,
                            className: "mt-3 w-full py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg font-semibold",
                            children: "Post"
                        }, void 0, false, {
                            fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#242437] p-6 rounded-2xl border border-[#2A2A3D]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-lg",
                                    children: post.name
                                }, void 0, false, {
                                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 mt-2",
                                    children: post.content
                                }, void 0, false, {
                                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 mt-3 text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleLike(post.id),
                                        className: "text-[#8B5CF6] hover:underline",
                                        children: [
                                            "❤️ ",
                                            post.likes,
                                            " Likes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        post.comments.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-400 text-sm mb-1",
                                                children: [
                                                    "💬 ",
                                                    c
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: commentText[post.id] || "",
                                                    onChange: (e)=>setCommentText({
                                                            ...commentText,
                                                            [post.id]: e.target.value
                                                        }),
                                                    placeholder: "Write a comment...",
                                                    className: "flex-1 bg-[#1E1E2F] text-white text-sm p-2 rounded-lg focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$skill$2d$sync$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleAddComment(post.id),
                                                    className: "px-3 py-1 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg text-sm",
                                                    children: "Send"
                                                }, void 0, false, {
                                                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                                    lineNumber: 107,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/skill-sync/frontend/src/app/community/page.js",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(CommunityPage, "HlCQzYVawvFLMFoXbEJ7p+Aw4Aw=");
_c = CommunityPage;
var _c;
__turbopack_context__.k.register(_c, "CommunityPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=skill-sync_frontend_src_app_community_page_09671bc5.js.map