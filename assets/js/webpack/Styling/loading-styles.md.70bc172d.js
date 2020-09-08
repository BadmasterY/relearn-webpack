(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{143:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return N}));var n,c=t(86),s=(t(127),t(0),t(87));function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function b(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,r,l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},m=l("MdAlert"),i={};function N(e){var a=e.components,t=b(e,["components"]);return Object(s.b)("wrapper",p({},i,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",{className:"__internal",id:"载入样式"},"载入样式",Object(s.b)("a",p({parentName:"h2"},{href:"#%E8%BD%BD%E5%85%A5%E6%A0%B7%E5%BC%8F","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Webpack")," 无法直接处理样式, 您将不得不使用加载器和插件来加载样式文件。在本章中, 您将在 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack")," 项目中设置 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS"),", 并学会如何通过自动刷新浏览器来实现更新。当您对 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 进行更改时, 不必强制进行完全刷新。相反, 它可以在不使用 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 情况下修补 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS"),"。"),Object(s.b)("h3",{className:"__internal",id:"载入-css"},"载入 CSS",Object(s.b)("a",p({parentName:"h3"},{href:"#%E8%BD%BD%E5%85%A5-css","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"要加载 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS"),", 您需要使用 ",Object(s.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/css-loader",target:"_blank"}),"css-loader")," 和 ",Object(s.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/style-loader",target:"_blank"}),"style-loader"),"。"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"css-loader")," 在匹配的文件中查找 ",Object(s.b)("mark",null,"@import")," 和 ",Object(s.b)("mark",null,"url()"),", 并将它们视为常规的 ",Object(s.b)("inlineCode",{parentName:"p"},"ES2015")," ",Object(s.b)("mark",null,"import"),"。如果一个 ",Object(s.b)("mark",null,"@import")," 指向外部文件, ",Object(s.b)("strong",{parentName:"p"},"css-loader")," 将跳过它, 因为只有内部资源会被 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack")," 进一步处理。"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"style-loader")," 通过 ",Object(s.b)("mark",null,"style")," 元素注入样式, 同时可以自定义其执行方式。它还实现了",Object(s.b)("a",p({parentName:"p"},{href:"../Appendices/hmr.html"}),"模块热更新"),"接口, 提供更好的开发体验。"),Object(s.b)("p",null,"匹配的文件可以通过 ",Object(s.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/file-loader",target:"_blank"}),"file-loader")," 或者 ",Object(s.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/url-loader",target:"_blank"}),"url-loader")," 之类的加载器进行处理, 这些可能的加载器将在本书的 ",Object(s.b)("strong",{parentName:"p"},'"Loading"')," 部分进行讨论。"),Object(s.b)("p",null,"由于内联 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 并不是用于生产用途的好主意, 因此使用 ",Object(s.b)("mark",null,"MiniCssExtractPlugin")," 来生成单独的 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 文件是有意义的。您将在下一章中进行此操作。"),Object(s.b)("p",null,"首先, 请调用:"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(s.b)("pre",p({parentName:"div"},{className:"language-bash"}),Object(s.b)("code",p({parentName:"pre"},{className:"language-bash"}),Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"npm")," ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"add")," css-loader style-loader --develop"))),Object(s.b)("p",null,"现在, 让我们确保 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack")," 知道它们。在 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack.parts.js")," 的末尾添加新的函数:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"webpack.parts.js")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(s.b)("code",p({parentName:"pre"},{className:"language-js"}),"exports",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"code"},{className:"token function-variable function"}),"loadCSS")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token parameter"}),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{")," include",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")," exclude ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}")," ",Object(s.b)("span",p({parentName:"span"},{className:"token operator"}),"=")," ",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"{"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"}")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  module",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n    rules",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n        test",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",p({parentName:"code"},{className:"token regex"}),"/\\.css$/"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n        include",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n        exclude",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n        use",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),Object(s.b)("span",p({parentName:"code"},{className:"token string"}),'"style-loader"'),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),",")," ",Object(s.b)("span",p({parentName:"code"},{className:"token string"}),'"css-loader"'),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(s.b)("p",null,"以上表示以 ",Object(s.b)("mark",null,".css")," 结尾的文件应调用给定的加载器。"),Object(s.b)("p",null,"加载器返回新的源文件, 并对其应用转换。它们可以像 ",Object(s.b)("inlineCode",{parentName:"p"},"Unix")," 中的管道一样链接在一起, 并从右到左求值。这意味着 ",Object(s.b)("mark",null,"loaders: ",'["style-loader", "css-loader"]')," 可以理解为 ",Object(s.b)("mark",null,"styleLoader(cssLoader(input))"),"。"),Object(s.b)("p",null,"您还需要将 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack.parts.js")," 连接到 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack")," 配置:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"webpack.config.js")),Object(s.b)("div",{className:"rcpress-highlight has-highlighted-lines","data-language":"js"},Object(s.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(s.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," commonConfig ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(s.b)("span",p({parentName:"code"},{className:"token function"}),"merge"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"..."),Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"..."),"\n",Object(s.b)("span",p({parentName:"code"},{className:"rcpress-highlight-code-line"}),"  parts",Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"."),Object(s.b)("span",p({parentName:"span"},{className:"token function"}),"loadCSS"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),"("),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),",")),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(s.b)("h3",{className:"__internal",id:"设置初始-css"},"设置初始 CSS",Object(s.b)("a",p({parentName:"h3"},{href:"#%E8%AE%BE%E7%BD%AE%E5%88%9D%E5%A7%8B-css","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"您仍然缺少 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 文件:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"src/main.css")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"css"},Object(s.b)("pre",p({parentName:"div"},{className:"language-css"}),Object(s.b)("code",p({parentName:"pre"},{className:"language-css"}),Object(s.b)("span",p({parentName:"code"},{className:"token selector"}),"body")," ",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",p({parentName:"code"},{className:"token property"}),"background"),Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),":")," cornsilk",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"为了使 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack")," 知道有这个 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 文件, 我们必须从源代码中引用它:"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"src/index.js")),Object(s.b)("div",{className:"rcpress-highlight has-highlighted-lines","data-language":"js"},Object(s.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(s.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",p({parentName:"code"},{className:"rcpress-highlight-code-line"}),Object(s.b)("span",p({parentName:"span"},{className:"token keyword"}),"import")," ",Object(s.b)("span",p({parentName:"span"},{className:"token string"}),'"./main.css"'),Object(s.b)("span",p({parentName:"span"},{className:"token punctuation"}),";")),Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"..."),Object(s.b)("span",p({parentName:"code"},{className:"token operator"}),"...")))),Object(s.b)("p",null,"执行 ",Object(s.b)("mark",null,"npm start")," 并查看使用的端口, 默认情况下为 ",Object(s.b)("mark",null,"http://localhost:8080"),"。然后打开 ",Object(s.b)("inlineCode",{parentName:"p"},"main.css")," 并将背景色更改为类似 ",Object(s.b)("inlineCode",{parentName:"p"},"lime"),"(",Object(s.b)("inlineCode",{parentName:"p"},"background: lime"),")的颜色。\n",Object(s.b)("img",p({parentName:"p"},{src:"../../style/hello_css.png",alt:"hello world!"}))),Object(s.b)("h3",{className:"__internal",id:"使用-css-预处理器"},"使用 CSS 预处理器",Object(s.b)("a",p({parentName:"h3"},{href:"#%E4%BD%BF%E7%94%A8-css-%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Webpack")," 为以下最受欢迎的 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 预处理方法提供支持:"),Object(s.b)("ul",null,Object(s.b)("li",p({parentName:"ul"},{className:"__internal"}),"要使用 ",Object(s.b)("inlineCode",{parentName:"li"},"Less")," 预处理器, 请参见 ",Object(s.b)("a",p({parentName:"li"},{href:"https://www.npmjs.com/package/less-loader",target:"_blank"}),"less-loader"),"。"),Object(s.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(s.b)("inlineCode",{parentName:"li"},"Sass")," 需要使用 ",Object(s.b)("a",p({parentName:"li"},{href:"https://www.npmjs.com/package/sass-loader",target:"_blank"}),"sass-loader")," 或 ",Object(s.b)("a",p({parentName:"li"},{href:"https://www.npmjs.com/package/fast-sass-loader",target:"_blank"}),"fast-sass-loader")," (性能更高)。在这两种情况下, 都应在加载器内定义 ",Object(s.b)("strong",{parentName:"li"},"css-loader")," 之后添加加载器。"),Object(s.b)("li",p({parentName:"ul"},{className:"__internal"}),"对于 ",Object(s.b)("inlineCode",{parentName:"li"},"Stylus"),", 请参阅 ",Object(s.b)("a",p({parentName:"li"},{href:"https://www.npmjs.com/package/less-loader",target:"_blank"}),"stylus-loader"),"。")),Object(s.b)("p",null,"有关 ",Object(s.b)("inlineCode",{parentName:"p"},"css-in-js")," 的任何相关信息, 请参阅特定解决方案的文档。这些选项经常都可以很好地支持 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack"),"。"),Object(s.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(s.b)("p",{parentName:"MdAlert"},"该",Object(s.b)("a",p({parentName:"p"},{href:"../Appendices/css-modules.html"}),"CSS 模块"),"附录介绍了一种方法, 可以让你在默认情况下对待本地文件。它规避了 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 的作用域问题。")),Object(s.b)("h3",{className:"__internal",id:"postcss"},"PostCSS",Object(s.b)("a",p({parentName:"h3"},{href:"#postcss","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("a",p({parentName:"p"},{href:"http://postcss.org/",target:"_blank"}),"PostCSS")," 允许您通过 ",Object(s.b)("inlineCode",{parentName:"p"},"JavaScript")," 插件对 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 执行转换。",Object(s.b)("inlineCode",{parentName:"p"},"PostCSS")," 相当于样式版的 ",Object(s.b)("inlineCode",{parentName:"p"},"Babel"),", 您可以找到许多用于此目的的插件。它可以模仿 ",Object(s.b)("inlineCode",{parentName:"p"},"Sass")," 语法(",Object(s.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/precss",target:"_blank"}),"precss"),"), 甚至可以修复浏览器错误, 例如",Object(s.b)("inlineCode",{parentName:"p"},"Safari")," 上的 ",Object(s.b)("mark",null,"100vh")," 行为: ",Object(s.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/postcss-100vh-fix",target:"_blank"}),"postcss-100vh-fix"),"。"),Object(s.b)("p",null,"以下示例说明了如何使用带有 ",Object(s.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/postcss-loader",target:"_blank"}),"postcss-loader")," 的 ",Object(s.b)("inlineCode",{parentName:"p"},"PostCSS")," 设置自动前缀。您可以将此技术与其他加载器混合使用, 以对所有 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 启用自动前缀。"))}N.isMDXComponent=!0,N=Object(c.hot)(e)(N),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(o.register(l,"makeShortcode","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Styling/loading-styles.md"),o.register(m,"MdAlert","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Styling/loading-styles.md"),o.register(i,"layoutProps","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Styling/loading-styles.md"),o.register("wrapper","MDXLayout","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Styling/loading-styles.md"),o.register(N,"MDXContent","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Styling/loading-styles.md")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,t(21)(e))}}]);