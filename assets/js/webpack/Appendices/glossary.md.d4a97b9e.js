(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{134:function(e,a,t){"use strict";t.r(a),function(e){t.d(a,"default",(function(){return s}));var n,l=t(85),b=(t(127),t(0),t(86));function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},b=Object.keys(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)t=b[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&n(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,o,p={};function s(e){var a=e.components,t=i(e,["components"]);return Object(b.b)("wrapper",r({},p,t,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h2",{className:"__internal",id:"术语表"},"术语表",Object(b.b)("a",r({parentName:"h2"},{href:"#%E6%9C%AF%E8%AF%AD%E8%A1%A8","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"鉴于 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 带有特定的术语, 主要术语及其解释如下。"),Object(b.b)("ul",null,Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"资源"),"(",Object(b.b)("strong",{parentName:"li"},"asset"),"): 是项目的媒体文件和源文件的通用术语, 它们是 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 用于构建捆绑包的原材料。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"捆绑包"),"(",Object(b.b)("strong",{parentName:"li"},"bundle"),"): 是打包的结果。打包过程是将应用程序的源材料处理成可供使用的最终捆绑包。一个打包工具可以生成多个捆绑包。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"捆绑包拆分"),"(",Object(b.b)("strong",{parentName:"li"},"bundle splite"),"): 提供了一种优化构建的方法, 允许 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 为单个应用程序生成多个捆绑包。结果, 可以在不影响其他捆绑包的前提下更新需要的捆绑包, 同时利用浏览器缓存, 从而减少了客户端因重新发布而需要重新下载的代码量。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"Chunk"),": 是特定于 ",Object(b.b)("inlineCode",{parentName:"li"},"Webpack")," 的术语, 在内部用于管理打包过程。",Object(b.b)("inlineCode",{parentName:"li"},"Webpack")," 是由 ",Object(b.b)("inlineCode",{parentName:"li"},"Chunk")," 组成捆绑包, 其中有几种类型。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"代码拆分"),"(",Object(b.b)("strong",{parentName:"li"},"code splite"),"): 与捆绑包拆分相比, 提供更小粒度的控制。要使用它, 开发人员必须通过源代码中的特定调用来启用它。使用动态 ",Object(b.b)("mark",null,"import()")," 是一种方法。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"入口"),"(",Object(b.b)("strong",{parentName:"li"},"entry"),"): 是指 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 用作打包起点的文件。一个应用程序可以具有多个入口, 并且根据配置每个入口可以产生多个捆绑包。入口是在 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 的 ",Object(b.b)("mark",null,"entry")," 配置中定义的。入口是依赖关系图开头的模块。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"哈希"),"(",Object(b.b)("strong",{parentName:"li"},"hash"),"): 是指生成附加到资源/打包路径的哈希的过程, 以使其在客户端上实现。哈希名称的示例: ",Object(b.b)("mark",null,"app.f6f78b2fd2c38e8200d.js"),"。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"模块热更新"),"(",Object(b.b)("strong",{parentName:"li"},"HMR"),"): 是指一种技术, 使浏览器中运行的代码可以即时更新, 而无需刷新整个页面。当应用程序包含复杂状态时, 如果没有 ",Object(b.b)("inlineCode",{parentName:"li"},"HMR")," 或类似的解决方案, 则很难恢复它。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"内联"),"(",Object(b.b)("strong",{parentName:"li"},"inline"),"): 是将资源合并到另一个资源中的过程。一个很好的例子是在对图像进行编码后将其写入 ",Object(b.b)("inlineCode",{parentName:"li"},"JavaScript")," 文件中, 避免产生单独的文件。这样做避免了多次请求服务器的麻烦, 并且可以在 ",Object(b.b)("inlineCode",{parentName:"li"},"HTTP / 1")," 环境中优化性能。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"Lint"),": 与静态分析一系列用户定义问题的代码过程有关。这些问题的范围可能从发现语法错误到执行代码样式。虽然根据定义, ",Object(b.b)("inlineCode",{parentName:"li"},"linting")," 的功能是十分有限的, 但 ",Object(b.b)("inlineCode",{parentName:"li"},"linter")," 对于帮助早期发现错误和增强代码一致性非常有用。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"加载器"),"(",Object(b.b)("strong",{parentName:"li"},"loader"),"): 执行转换, 该转换接受一个源并返回转换后的源。它还可以跳过处理并改为对输入执行检查。通过配置, 加载器通常基于模块类型或位置来定位模块的子集。加载器一次只能作用于单个模块, 而插件可以作用于多个文件。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"代码压缩"),"(",Object(b.b)("strong",{parentName:"li"},"minify"),"): 或 ",Object(b.b)("inlineCode",{parentName:"li"},"minification")," 是一种优化技术, 在这种技术中, 代码以更紧凑的形式编写而不会失去本身的功能。如果不小心, 特定的破坏性转换会破坏代码。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"模块"),"(",Object(b.b)("strong",{parentName:"li"},"module"),"): 是描述应用程序的通用术语。在 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 中, 它可以引用 ",Object(b.b)("inlineCode",{parentName:"li"},"JavaScript"),", 样式表, 图像或其他内容。",Object(b.b)("strong",{parentName:"li"},"加载器"),"允许 ",Object(b.b)("inlineCode",{parentName:"li"},"WebPack")," 支持不同的文件类型, 从而支持不同类型的模块。如果您从代码库的多个位置指向同一模块, 则 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 将在输出中生成一个模块, 从而在模块级别启用单例(",Object(b.b)("inlineCode",{parentName:"li"},"singleton"),")模式。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"模块联合"),"(",Object(b.b)("strong",{parentName:"li"},"module federation"),"): 是一种使 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 能够将单独开发的微型前端组合为单个构建的技术。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"输出"),"(",Object(b.b)("strong",{parentName:"li"},"output"),"): 是指 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 产出的文件。更具体地说, ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 根据输出设置产出",Object(b.b)("strong",{parentName:"li"},"捆绑包"),"和",Object(b.b)("strong",{parentName:"li"},"资源"),"。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"插件"),"(",Object(b.b)("strong",{parentName:"li"},"plugin"),"): 可以连接到 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 的事件系统, 同时可以向其中注入功能。它们允许扩展 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack"),", 并且可以与",Object(b.b)("strong",{parentName:"li"},"加载器"),"结合使用以实现最大程度的控制。加载器只能在单个文件上运行, 而插件的访问范围更广, 并且能够进行更多的全局控制。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"解析"),"(",Object(b.b)("strong",{parentName:"li"},"resolve"),"): 是当 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 遇到模块或",Object(b.b)("strong",{parentName:"li"},"加载器"),"时发生的过程。当发生这种情况时, 它会尝试根据给定的解析规则来解析它。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"Source map"),": 描述了源代码和生成的代码之间的映射, 从而使浏览器可以提供更好的调试体验。例如, 通过 ",Object(b.b)("inlineCode",{parentName:"li"},"Babel")," 运行 ",Object(b.b)("inlineCode",{parentName:"li"},"ES2015")," 代码会生成全新的 ",Object(b.b)("inlineCode",{parentName:"li"},"ES5")," 代码。没有源映射, 开发人员将失去所生成代码中报错的位置以及源代码中报错的位置的链接。当样式表通过预处理器或后处理器运行时, 也是如此。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"静态分析"),":(",Object(b.b)("strong",{parentName:"li"},"static analysis"),"): 工具执行静态分析时, 它会在不运行代码的情况下检查代码, 这就是 ",Object(b.b)("inlineCode",{parentName:"li"},"ESLint")," 或 ",Object(b.b)("inlineCode",{parentName:"li"},"Webpack")," 之类的工具的工作方式。可静态分析的标准, 如 ",Object(b.b)("inlineCode",{parentName:"li"},"ES2015")," 模块定义, 支持 ",Object(b.b)("strong",{parentName:"li"},"tree shaking")," 等特性。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"目标"),"(",Object(b.b)("strong",{parentName:"li"},"target"),"): 允许您覆盖 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 的默认选项。您可以使用 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 为特定的 ",Object(b.b)("inlineCode",{parentName:"li"},"JavaScript")," 平台生成代码。"),Object(b.b)("li",r({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},"Tree shaking"),": 是基于静态分析丢弃未使用的代码的过程。",Object(b.b)("inlineCode",{parentName:"li"},"ES2015")," 模块定义允许此过程, 因为可以通过这种特定方式进行分析。")))}s.isMDXComponent=!0,s=Object(l.hot)(e)(s),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(p,"layoutProps","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/glossary.md"),c.register("wrapper","MDXLayout","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/glossary.md"),c.register(s,"MDXContent","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Appendices/glossary.md")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}.call(this,t(21)(e))}}]);