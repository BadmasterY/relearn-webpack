(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{141:function(e,a,n){"use strict";n.r(a),function(e){n.d(a,"default",(function(){return N}));var t,c=n(85),p=(n(127),n(0),n(86));function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b,r,l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(p.b)("div",a)}},m=l("MdAlert"),i={};function N(e){var a=e.components,n=o(e,["components"]);return Object(p.b)("wrapper",s({},i,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("h2",{className:"__internal",id:"整理"},"整理",Object(p.b)("a",s({parentName:"h2"},{href:"#%E6%95%B4%E7%90%86","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,"当前配置不会在两次构建之间清除",Object(p.b)("em",{parentName:"p"},"构建"),"目录。结果, 随着项目的修改, 它会继续累积文件。鉴于这可能会令人烦恼, 您应该在两次构建之间进行清理。"),Object(p.b)("p",null,"另一个不错的选择是将有关构建本身的信息作为每个文件顶部的小注释包括到生成的包中, 至少包括版本信息。"),Object(p.b)("h3",{className:"__internal",id:"清理构建目录"},"清理构建目录",Object(p.b)("a",s({parentName:"h3"},{href:"#%E6%B8%85%E7%90%86%E6%9E%84%E5%BB%BA%E7%9B%AE%E5%BD%95","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,"这个问题可以通过使用 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack")," 插件解决, 也可以在插件之外解决。您可以在 ",Object(p.b)("inlineCode",{parentName:"p"},"npm")," 本中触发 ",Object(p.b)("inlineCode",{parentName:"p"},"rm-rf./build&&webpack")," 或 ",Object(p.b)("inlineCode",{parentName:"p"},"rimraf./build&&webpack"),", 保证其可以跨平台使用。任务运行器也可以为此目的工作。"),Object(p.b)("h4",{className:"__internal",id:"设置-cleanwebpackplugin"},"设置 CleanWebpackPlugin",Object(p.b)("a",s({parentName:"h4"},{href:"#%E8%AE%BE%E7%BD%AE-cleanwebpackplugin","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,"首先安装 ",Object(p.b)("a",s({parentName:"p"},{href:"https://www.npmjs.com/package/clean-webpack-plugin",target:"_blank"}),"clean-webpack-plugin"),":"),Object(p.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(p.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(p.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"npm")," ",Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"add")," clean-webpack-plugin --develop"))),Object(p.b)("p",null,"接下来, 您需要定义一个函数来包装基本思想。您可以直接使用插件, 但这感觉像是可以跨项目使用的东西, 因此将其推送到库中是有意义的:"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"webpack.parts.js")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(p.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(p.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),"\n",Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{")," CleanWebpackPlugin ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"require"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token string"}),'"clean-webpack-plugin"'),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\nexports",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(p.b)("span",s({parentName:"code"},{className:"token function-variable function"}),"clean")," ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",s({parentName:"code"},{className:"token parameter"}),"path")," ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=>")," ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"new")," ",Object(p.b)("span",s({parentName:"code"},{className:"token class-name"}),"CleanWebpackPlugin"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("p",null,"将其与配置文件连接:"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"webpack.config.js")),Object(p.b)("div",{className:"rcpress-highlight has-highlighted-lines","data-language":"js"},Object(p.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(p.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),"\n",Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," commonConfig ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"merge"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n",Object(p.b)("span",s({parentName:"code"},{className:"rcpress-highlight-code-line"}),"  parts",Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),"."),Object(p.b)("span",s({parentName:"span"},{className:"token function"}),"clean"),Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")),"  ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),"\n",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)(m,s({message:" ",type:"warning"},{mdxType:"MdAlert"}),Object(p.b)("p",{parentName:"MdAlert"},"要使 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack 5")," 与插件一起工作, 必须显式地设置 ",Object(p.b)("inlineCode",{parentName:"p"},"output.path"),"。在这种情况下, 在 ",Object(p.b)("strong",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"strong"},"webpack.config.js"))," 中将其设置为 ",Object(p.b)("inlineCode",{parentName:"p"},'path.resolve(process.cwd(), "dist")'),"。")),Object(p.b)("h3",{className:"__internal",id:"将修订添加到构建"},"将修订添加到构建",Object(p.b)("a",s({parentName:"h3"},{href:"#%E5%B0%86%E4%BF%AE%E8%AE%A2%E6%B7%BB%E5%8A%A0%E5%88%B0%E6%9E%84%E5%BB%BA","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,"将与当前构建修订版相关的信息附加到构建文件本身可用于调试。",Object(p.b)("a",s({parentName:"p"},{href:"https://webpack.js.org/plugins/banner-plugin/",target:"_blank"}),"webpack.BannerPlugin")," 允许您实现这一目标。它可以与 ",Object(p.b)("a",s({parentName:"p"},{href:"https://www.npmjs.com/package/git-revision-webpack-plugin",target:"_blank"}),"git-revision-webpack-plugin")," 结合使用, 以在生成的文件的开头生成一个小的注释。"),Object(p.b)("h4",{className:"__internal",id:"设置-bannerplugin-和-gitrevisionplugin"},"设置 BannerPlugin 和 GitRevisionPlugin",Object(p.b)("a",s({parentName:"h4"},{href:"#%E8%AE%BE%E7%BD%AE-bannerplugin-%E5%92%8C-gitrevisionplugin","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,"首先, 安装插件:"),Object(p.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(p.b)("pre",s({parentName:"div"},{className:"language-bash"}),Object(p.b)("code",s({parentName:"pre"},{className:"language-bash"}),Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"npm")," ",Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"add")," git-revision-webpack-plugin --develop"))),Object(p.b)("p",null,"然后在 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack.parts.js")," 中定义一个函数:"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"webpack.parts.js")),Object(p.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(p.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(p.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),"\n",Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," webpack ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"require"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token string"}),'"webpack"'),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," GitRevisionPlugin ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"require"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token string"}),'"git-revision-webpack-plugin"'),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),";"),"\n\nexports",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(p.b)("span",s({parentName:"code"},{className:"token function-variable function"}),"attachRevision")," ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")")," ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=>")," ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n  plugins",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"new")," ",Object(p.b)("span",s({parentName:"code"},{className:"token class-name"}),"webpack",Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),"."),"BannerPlugin"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"{"),"\n      banner",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),":")," ",Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"new")," ",Object(p.b)("span",s({parentName:"code"},{className:"token class-name"}),"GitRevisionPlugin"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"."),Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"version"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"}"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("p",null,"并将其与主配置连接:"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},"webpack.config.js")),Object(p.b)("div",{className:"rcpress-highlight has-highlighted-lines","data-language":"js"},Object(p.b)("pre",s({parentName:"div"},{className:"language-js"}),Object(p.b)("code",s({parentName:"pre"},{className:"language-js"}),Object(p.b)("span",s({parentName:"code"},{className:"token keyword"}),"const")," productionConfig ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"=")," ",Object(p.b)("span",s({parentName:"code"},{className:"token function"}),"merge"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"["),"\n  ",Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),Object(p.b)("span",s({parentName:"code"},{className:"token operator"}),"..."),"\n",Object(p.b)("span",s({parentName:"code"},{className:"rcpress-highlight-code-line"}),"  parts",Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),"."),Object(p.b)("span",s({parentName:"span"},{className:"token function"}),"attachRevision"),Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),"("),Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"span"},{className:"token punctuation"}),",")),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),"]"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),")"),Object(p.b)("span",s({parentName:"code"},{className:"token punctuation"}),";")))),Object(p.b)("p",null,"如果您构建项目(",Object(p.b)("inlineCode",{parentName:"p"},"npm run build"),"), 则应注意所构建的文件开头包含注释 ",Object(p.b)("inlineCode",{parentName:"p"},"/*! 0b5bb05 */")," 或 ",Object(p.b)("inlineCode",{parentName:"p"},"/*! v1.7.0-9-g5f82fe8 */"),"。"),Object(p.b)("p",null,"可以通过调整 ",Object(p.b)("inlineCode",{parentName:"p"},"banner")," 进一步定制输出。您还可以使用 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack.DefinePlugin")," 将修订信息传递给应用程序。在",Object(p.b)("a",s({parentName:"p"},{href:"../Optimizing/environment-variables"}),'"环境变量"'),"一章中详细讨论了该技术。"),Object(p.b)(m,s({message:" ",type:"warning"},{mdxType:"MdAlert"}),Object(p.b)("p",{parentName:"MdAlert"},"该代码期望您在 ",Object(p.b)("inlineCode",{parentName:"p"},"Git")," 存储库中运行它! 否则, 您将得到一个 ",Object(p.b)("inlineCode",{parentName:"p"},"fatal: Not a git repository (or any of the parent directories): .git")," 错误。如果您不使用 ",Object(p.b)("inlineCode",{parentName:"p"},"Git"),", 则可以用其他数据替换 ",Object(p.b)("inlineCode",{parentName:"p"},"banner"),"。")),Object(p.b)("h3",{className:"__internal",id:"复制文件"},"复制文件",Object(p.b)("a",s({parentName:"h3"},{href:"#%E5%A4%8D%E5%88%B6%E6%96%87%E4%BB%B6","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,"复制文件是您可以使用 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack")," 处理的另一种普通操作。如果您需要将外部数据带入内部, 而 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack")," 不直接指向外部数据, 则可以考虑使用 ",Object(p.b)("a",s({parentName:"p"},{href:"https://www.npmjs.com/package/copy-webpack-plugin",target:"_blank"}),"copy-webpack-plugin"),"。"),Object(p.b)("p",null,"如果要以跨平台方式在 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack")," 外部复制文件, ",Object(p.b)("a",s({parentName:"p"},{href:"https://www.npmjs.com/package/cpy-cli",target:"_blank"}),"cpy-cli")," 是一个不错的选择。根据定义, 插件应该是跨平台的。"),Object(p.b)("h3",{className:"__internal",id:"结论"},"结论",Object(p.b)("a",s({parentName:"h3"},{href:"#%E7%BB%93%E8%AE%BA","aria-hidden":!0,className:"anchor"}),"#")),Object(p.b)("p",null,"通常, 您通过发现一个问题, 然后找到一个插件来解决它。在 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack")," 之外解决这些类型的问题是完全可以接受的, 但是 ",Object(p.b)("inlineCode",{parentName:"p"},"webpack")," 通常也可以处理这些问题。"),Object(p.b)("p",null,"回顾一下:"),Object(p.b)("ul",null,Object(p.b)("li",s({parentName:"ul"},{className:"__internal"}),"您可以找到许多可作为任务使用的小插件, 并将 ",Object(p.b)("inlineCode",{parentName:"li"},"webpack")," 推向任务运行器。"),Object(p.b)("li",s({parentName:"ul"},{className:"__internal"}),"这些任务包括清理构建和部署。在",Object(p.b)("a",s({parentName:"li"},{href:"../Techniques/deploying"}),'"部署应用"'),"一章中详细讨论了后者的话题。"),Object(p.b)("li",s({parentName:"ul"},{className:"__internal"}),"最好在生产版本中添加一些注释, 以告知已部署的版本。这样, 您可以更快地调试潜在问题。"),Object(p.b)("li",s({parentName:"ul"},{className:"__internal"}),"像这些辅助任务可以在 ",Object(p.b)("inlineCode",{parentName:"li"},"webpack")," 之外执行。如果您正在使用",Object(p.b)("a",s({parentName:"li"},{href:"../Output/multiple-pages"}),'"多页"'),"一章中讨论的多页设置, 则这很有必要。")))}N.isMDXComponent=!0,N=Object(c.hot)(e)(N),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(l,"makeShortcode","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Building/tidying-up.md"),b.register(m,"MdAlert","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Building/tidying-up.md"),b.register(i,"layoutProps","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Building/tidying-up.md"),b.register("wrapper","MDXLayout","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Building/tidying-up.md"),b.register(N,"MDXContent","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Building/tidying-up.md")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,n(21)(e))}}]);