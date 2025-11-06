module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/skill-sync/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "build/chunks/dfa58_e6fd6eb6._.js",
  "build/chunks/[root-of-the-server]__c8ab11b7._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/skill-sync/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];