(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{133:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return i}));var n,c=t(85),s=(t(127),t(0),t(86));function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,a){if(null==e)return{};var t,n,c=function(e,a){if(null==e)return{};var t,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(c[t]=e[t]);return c}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r,b,l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",a)}},m=l("MdAlert"),d={};function i(e){var a=e.components,t=p(e,["components"]);return Object(s.b)("wrapper",o({},d,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h2",{className:"__internal",id:"css-模块"},"CSS 模块",Object(s.b)("a",o({parentName:"h2"},{href:"#css-%E6%A8%A1%E5%9D%97","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 的最大问题也许是所有规则都存在于",Object(s.b)("strong",{parentName:"p"},"全局作用域"),"内, 这意味着两个具有相同名称的类将发生冲突。该限制是 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 规范固有的, 但是项目具有解决此问题的方法。",Object(s.b)("a",o({parentName:"p"},{href:"https://github.com/css-modules/css-modules",target:"_blank"}),"CSS Modules")," 通过在其名称中包含一个对模块全局唯一的哈希值, 使在其中声明的每个类都是唯一的, 从而为每个模块引入了",Object(s.b)("strong",{parentName:"p"},"局部作用域"),"。"),Object(s.b)("h3",{className:"__internal",id:"通过-css-loader-加载-css-模块"},"通过 css-loader 加载 CSS 模块",Object(s.b)("a",o({parentName:"h3"},{href:"#%E9%80%9A%E8%BF%87-css-loader-%E5%8A%A0%E8%BD%BD-css-%E6%A8%A1%E5%9D%97","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"Webpack")," 的 ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"css-loader"))," 支持 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块。您可以在启用支持的同时, 通过上述加载程序定义启用它:"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",o({parentName:"div"},{className:"language-js"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n  use",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n    loader",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'"css-loader"'),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n    options",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n      modules",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),":")," ",Object(s.b)("span",o({parentName:"code"},{className:"token boolean"}),"true"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),",")))),Object(s.b)("p",null,"在此更改之后, 您的 ",Object(s.b)("inlineCode",{parentName:"p"},"class")," 定义将作用于局部。如果需要全局 ",Object(s.b)("inlineCode",{parentName:"p"},"class")," 定义, 则需要将它们包装在 ",Object(s.b)("mark",null,":global(.redButton) { ... }")," 声明中。"),Object(s.b)("p",null,"在本例中, 该 ",Object(s.b)("mark",null,"import")," 语句为您提供了可以绑定到元素的局部 ",Object(s.b)("inlineCode",{parentName:"p"},"class"),"。假设您有如下 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS"),":"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"app/main.css")),Object(s.b)("div",{className:"rcpress-highlight","data-language":"css"},Object(s.b)("pre",o({parentName:"div"},{className:"language-css"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-css"}),Object(s.b)("span",o({parentName:"code"},{className:"token selector"}),"body")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",o({parentName:"code"},{className:"token property"}),"background"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),":")," cornsilk",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(s.b)("span",o({parentName:"code"},{className:"token selector"}),".redButton")," ",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(s.b)("span",o({parentName:"code"},{className:"token property"}),"background"),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),":")," red",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"}")))),Object(s.b)("p",null,"然后, 您可以将 ",Object(s.b)("inlineCode",{parentName:"p"},"class")," 绑定到组件:"),Object(s.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(s.b)("pre",o({parentName:"div"},{className:"language-js"}),Object(s.b)("code",o({parentName:"pre"},{className:"language-js"}),Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"import")," styles ",Object(s.b)("span",o({parentName:"code"},{className:"token keyword"}),"from")," ",Object(s.b)("span",o({parentName:"code"},{className:"token string"}),'"./main.css"'),Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"..."),Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"..."),"\n\n",Object(s.b)("span",o({parentName:"code"},{className:"token comment"}),"// Attach the generated class name"),"\nelement",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"className ",Object(s.b)("span",o({parentName:"code"},{className:"token operator"}),"=")," styles",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),"."),"redButton",Object(s.b)("span",o({parentName:"code"},{className:"token punctuation"}),";")))),Object(s.b)("mark",null,"body")," 仍然作为全局。而 ",Object(s.b)("mark",null,".redButton")," 并不会作用于全局。您可以用这种方式构建特定于组件的样式, 这些样式不会泄漏到其他地方。",Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块允许组合样式, 这样更方便使用, 也可以将其与其他加载器结合, 只要在 ",Object(s.b)("strong",{parentName:"p"},"css-loader")," 之前使用它们即可。"),Object(s.b)(m,o({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(s.b)("p",{parentName:"MdAlert"},"可以按照",Object(s.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/css-loader#modules",target:"_blank"}),"官方文档"),"中所述的那样修改 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块的行为。例如, 您可以修改它生成的名称。")),Object(s.b)(m,o({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(s.b)("p",{parentName:"MdAlert"},Object(s.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/eslint-plugin-css-modules",target:"_blank"}),"eslint-plugin-css-modules")," 方便定位 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块产生的问题。")),Object(s.b)("h3",{className:"__internal",id:"混合使用-css-模块和第三方-css-库"},"混合使用 CSS 模块和第三方 CSS 库",Object(s.b)("a",o({parentName:"h3"},{href:"#%E6%B7%B7%E5%90%88%E4%BD%BF%E7%94%A8-css-%E6%A8%A1%E5%9D%97%E5%92%8C%E7%AC%AC%E4%B8%89%E6%96%B9-css-%E5%BA%93","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,"如果您在项目中使用 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块, 则应通过单独的加载程序定义处理标准 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS"),", 而无需启用 ",Object(s.b)("strong",{parentName:"p"},"css-loader")," ",Object(s.b)("mark",null,"modules")," 选项。否则, 所有类都将限于局部作用域。对于第三方库, 几乎可以肯定这不是您想要的。"),Object(s.b)("p",null,"您可以通过针对 ",Object(s.b)("mark",null,"node_modules")," 的 ",Object(s.b)("mark",null,"include")," 定义以不同地方式处理第三方 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 来解决该问题。或者, 您可以使用文件扩展名(",Object(s.b)("mark",null,".mcss"),")来区分使用 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块的文件, 然后在加载器的 ",Object(s.b)("mark",null,"test")," 中管理这种情况。"),Object(s.b)("h3",{className:"__internal",id:"结论"},"结论",Object(s.b)("a",o({parentName:"h3"},{href:"#%E7%BB%93%E8%AE%BA","aria-hidden":!0,className:"anchor"}),"#")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块通过默认为每个文件生成本地作用域来解决 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 的作用域问题。您仍然可以使用全局样式, 但这需要额外的代码。如上所述, 可以将 ",Object(s.b)("inlineCode",{parentName:"p"},"webpack")," 设置为支持 ",Object(s.b)("inlineCode",{parentName:"p"},"CSS")," 模块。"))}i.isMDXComponent=!0,i=Object(c.hot)(e)(i),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(r.register(l,"makeShortcode","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/css-modules.md"),r.register(m,"MdAlert","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/css-modules.md"),r.register(d,"layoutProps","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/css-modules.md"),r.register("wrapper","MDXLayout","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/css-modules.md"),r.register(i,"MDXContent","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/css-modules.md")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,t(21)(e))}}]);