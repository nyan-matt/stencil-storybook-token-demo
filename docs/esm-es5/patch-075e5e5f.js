import{C as CSS,p as plt,w as win,a as promiseResolve,d as doc,N as NAMESPACE}from"./index-82e155b0.js";var noop=function(){},IS_DENO_ENV="undefined"!=typeof Deno,IS_NODE_ENV=!(IS_DENO_ENV||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),IS_DENO_WINDOWS_ENV=IS_DENO_ENV&&"windows"===Deno.build.os,getCurrentDirectory=IS_NODE_ENV?process.cwd:IS_DENO_ENV?Deno.cwd:function(){return"/"},exit=IS_NODE_ENV?process.exit:IS_DENO_ENV?Deno.exit:noop,getDynamicImportFunction=function(namespace){return"__sc_import_"+namespace.replace(/\s|-/g,"_")},patchEsm=function(){return CSS&&CSS.supports&&CSS.supports("color","var(--c)")?promiseResolve():import("./css-shim-a659079f.js").then((function(){return(plt.$cssShim$=win.__cssshim)?plt.$cssShim$.i():0}))},patchBrowser=function(){plt.$cssShim$=win.__cssshim;var scriptElm=Array.from(doc.querySelectorAll("script")).find((function(s){return new RegExp("/"+NAMESPACE+"(\\.esm)?\\.js($|\\?|#)").test(s.src)||s.getAttribute("data-stencil-namespace")===NAMESPACE})),opts=scriptElm["data-opts"]||{};return"onbeforeload"in scriptElm&&!history.scrollRestoration?{then:function(){}}:(opts.resourcesUrl=new URL(".",new URL(scriptElm.getAttribute("data-resources-url")||scriptElm.src,win.location.href)).href,patchDynamicImport(opts.resourcesUrl,scriptElm),win.customElements?promiseResolve(opts):import("./dom-4061ceba.js").then((function(){return opts})))},patchDynamicImport=function(base,orgScriptElm){var importFunctionName=getDynamicImportFunction(NAMESPACE);try{win[importFunctionName]=new Function("w","return import(w);//"+Math.random())}catch(e){var moduleMap_1=new Map;win[importFunctionName]=function(src){var url=new URL(src,base).href,mod=moduleMap_1.get(url);if(!mod){var script_1=doc.createElement("script");script_1.type="module",script_1.crossOrigin=orgScriptElm.crossOrigin,script_1.src=URL.createObjectURL(new Blob(["import * as m from '"+url+"'; window."+importFunctionName+".m = m;"],{type:"application/javascript"})),mod=new Promise((function(resolve){script_1.onload=function(){resolve(win[importFunctionName].m),script_1.remove()}})),moduleMap_1.set(url,mod),doc.head.appendChild(script_1)}return mod}}};export{patchEsm as a,patchBrowser as p};