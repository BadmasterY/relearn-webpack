(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{136:function(e,a,n){"use strict";n.r(a),function(e){n.d(a,"default",(function(){return r}));var t,c=n(85),s=(n(127),n(0),n(86));function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,m,N={};function r(e){var a=e.components,n=o(e,["components"]);return Object(s.b)("wrapper",p({},N,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",{className:"__internal",id:"用-react-搜索"},"用 React 搜索",Object(s.b)("a",p({parentName:"h2"},{href:"#%E7%94%A8-react-%E6%90%9C%E7%B4%A2","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"假设您要对没有后台的应用程序进行粗略的搜索。您可以使用过 ",Object(s.b)("a",p({parentName:"p"},{href:"http://lunrjs.com/",target:"_blank"}),"lunr")," 进行操作, 并生成一个静态搜索索引来提供服务。"),Object(s.b)("p",null,"问题在于, 索引的大小取决于内容的数量。好在您并不需要从一开始搜索索引。您可以做一些取巧的事情。当用户选择搜索字段时, 再开始加载索引。"),Object(s.b)("p",null,"这样做会造成延迟加载, 并将其移动到更合理的地方提升以性能。初始搜索将比后续搜索慢, 并且您应该显示加载指示器。但这从用户的角度来看很好。",Object(s.b)("inlineCode",{parentName:"p"},"Webpack")," 的代码拆分功能允许执行此操作。"),Object(s.b)("h3",{className:"__internal",id:"用代码拆分实现搜索"},"用代码拆分实现搜索",Object(s.b)("a",p({parentName:"h3"},{href:"#%E7%94%A8%E4%BB%A3%E7%A0%81%E6%8B%86%E5%88%86%E5%AE%9E%E7%8E%B0%E6%90%9C%E7%B4%A2","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"要实现代码拆分, 您需要决定将拆分点放在哪里。将其放置好, 然后处理 ",Object(s.b)("mark",null,"Promise"),":"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(s.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"import"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token string"}),'"./asset"'),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"then"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),"asset")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"..."),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"catch"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),"err")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"..."),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")))),Object(s.b)("p",null,"最美妙的是, 这可以在发生故障(网络故障等)时提供错误处理, 并提供了进行恢复的机会。您还可以使用基于 ",Object(s.b)("mark",null,"Promise")," 的实用程序, 例如使用 ",Object(s.b)("mark",null,"Promise.all")," 编写更复杂的查询。"),Object(s.b)("p",null,"在这种情况下, 您需要检测用户何时选择搜索元素, 加载数据(除非已经加载数据), 然后对其执行搜索逻辑。考虑下面的 ",Object(s.b)("inlineCode",{parentName:"p"},"React")," 实现:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"App.js")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"jsx"},Object(s.b)("pre",p({parentName:"div"},{className:"language-jsx"}),Object(s.b)("code",p({parentName:"pre"},{className:"language-jsx"}),Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"import")," React ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"from")," ",Object(s.b)("span",p({parentName:"code"},{className:"token string"}),'"react"'),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token function-variable function"}),"App")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"index",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," setIndex",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," React",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"useState"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"null"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"value",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," setValue",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," React",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"useState"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token string"}),'""'),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"lines",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," setLines",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," React",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"useState"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"results",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," setResults",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," React",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"useState"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token function-variable function"}),"search")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),"lines",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")," index",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")," query"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// Search against index and match README lines."),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"return")," index\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"search"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"query",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"trim"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"map"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),"match"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," lines",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"match",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),"ref",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token function-variable function"}),"onChange")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{")," target",Object(s.b)("span",p({parentName:"span"},{className:"token operator"}),":")," ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{")," value ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}")," ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// Set captured value to input"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"setValue"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"value",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// Search against lines and index if they exist"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"if")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"lines ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"&&")," index",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"setResults"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"search"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"lines",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," index",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," value",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"return"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// If the index doesn't exist, it has to be set it up."),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// You could show loading indicator here as loading might"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// take a while depending on the size of the index."),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"loadIndex"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"then"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{")," index",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")," lines ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"setIndex"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"index",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n        ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"setLines"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"lines",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n        ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// Search against the index now"),"\n        ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"setResults"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"search"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"lines",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," index",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," value",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"catch"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),"err"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," console",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"error"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"err",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"return")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"className"),Object(s.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"app-container",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n      "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"className"),Object(s.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"search-container",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n        "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"label"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"Search against README:"),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"label"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n        "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"type"),Object(s.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"text",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"value"),Object(s.b)("span",p({parentName:"span"},{className:"token script language-javascript"}),Object(s.b)("span",p({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{"),"value",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}"))," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"onChange"),Object(s.b)("span",p({parentName:"span"},{className:"token script language-javascript"}),Object(s.b)("span",p({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{"),"onChange",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}"))," ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"/>")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n      "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n      "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"className"),Object(s.b)("span",p({parentName:"span"},{className:"token attr-value"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"'),"results-container",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),'"')),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n        "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),Object(s.b)("span",p({parentName:"span"},{className:"token class-name"}),"Results"))," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"results"),Object(s.b)("span",p({parentName:"span"},{className:"token script language-javascript"}),Object(s.b)("span",p({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{"),"results",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}"))," ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"/>")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n      "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n    "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(s.b)("span",p({parentName:"code"},{className:"token function-variable function"}),"Results")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{")," results ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"if")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"results",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),"length",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"return")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"ul"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n        "),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"results",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"map"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),"result",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")," i"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"\n          ",Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"li")," ",Object(s.b)("span",p({parentName:"span"},{className:"token attr-name"}),"key"),Object(s.b)("span",p({parentName:"span"},{className:"token script language-javascript"}),Object(s.b)("span",p({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{"),"i",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}")),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"result",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"li"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n        ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"\n      "),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"ul"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"return")," ",Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"<"),"span"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token plain-text"}),"No results"),Object(s.b)("span",p({parentName:"code"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token tag"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"</"),"span"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),">")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"function")," ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"loadIndex"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// Here's the magic. Set up `import` to tell Webpack"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// to split here and load our search index dynamically."),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"//"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// Note that you will need to shim Promise.all for"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token comment"}),"// older browsers and Internet Explorer!"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"return")," Promise",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"all"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"import"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token string"}),'"lunr"'),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"import"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token string"}),'"../search_index.json"'),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"then"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"["),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{")," Index ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")," ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{")," index",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")," lines ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"]")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"return")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n      index",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),":")," Index",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"load"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"index",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n      lines",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"在示例中, ",Object(s.b)("inlineCode",{parentName:"p"},"webpack")," 静态检测 ",Object(s.b)("mark",null,"import"),"。它可以基于此拆分点生成单独的捆绑包。由于它依赖静态分析, 因此您无法在这种情况下执行 ",Object(s.b)("mark",null,"loadIndex")," 并将搜索索引路径作为参数传递。"),Object(s.b)("h3",{className:"__internal",id:"结论"},"结论",Object(s.b)("a",p({parentName:"h3"},{href:"#%E7%BB%93%E8%AE%BA","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"除了搜索之外, 该方法也可以与路由器一起使用。当用户输入地址时, 您可以加载结果视图所需的依赖项。或者, 您可以在用户滚动页面并获取具有实际功能的相邻部分时开始加载依赖项。",Object(s.b)("mark",null,"import")," 提供了强大的功能, 并允许您保持应用程序的精简(初次加载)。"),Object(s.b)("p",null,"您可以找到",Object(s.b)("a",p({parentName:"p"},{href:"https://github.com/survivejs-demos/lunr-demo",target:"_blank"}),"完整示例"),", 说明如何将 ",Object(s.b)("inlineCode",{parentName:"p"},"lunr"),", ",Object(s.b)("inlineCode",{parentName:"p"},"React")," 和 ",Object(s.b)("inlineCode",{parentName:"p"},"Webpack")," 一起使用。基本思路是相同的, 但是还有更多的配置。"),Object(s.b)("p",null,"回顾一下:"),Object(s.b)("ul",null,Object(s.b)("li",p({parentName:"ul"},{className:"__internal"}),"如果您的数据集很小且是静态的, 则客户端搜索是一个不错的选择。"),Object(s.b)("li",p({parentName:"ul"},{className:"__internal"}),"您可以使用诸如 ",Object(s.b)("inlineCode",{parentName:"li"},"lunr")," 之类的解决方案为您的内容建立索引, 然后针对该内容执行搜索。"),Object(s.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(s.b)("inlineCode",{parentName:"li"},"Webpack")," 的",Object(s.b)("strong",{parentName:"li"},"代码拆分"),"功能非常适合按需加载搜索索引。"),Object(s.b)("li",p({parentName:"ul"},{className:"__internal"}),"可以将代码拆分与 ",Object(s.b)("inlineCode",{parentName:"li"},"UI")," 解决方案(如 ",Object(s.b)("inlineCode",{parentName:"li"},"React"),")结合使用, 以实现整个用户界面。")))}r.isMDXComponent=!0,r=Object(c.hot)(e)(r),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(N,"layoutProps","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/searching-with-react.md"),b.register("wrapper","MDXLayout","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/searching-with-react.md"),b.register(r,"MDXContent","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/searching-with-react.md")),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&m(e)}.call(this,n(21)(e))}}]);