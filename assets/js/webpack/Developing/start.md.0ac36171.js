(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{140:function(e,a,n){"use strict";n.r(a),function(e){n.d(a,"default",(function(){return N}));var t,c=n(86),b=(n(127),n(0),n(87));function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var n,t,c=function(e,a){if(null==e)return{};var n,t,c={},b=Object.keys(e);for(t=0;t<b.length;t++)n=b[t],a.indexOf(n)>=0||(c[n]=e[n]);return c}(e,a);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(t=0;t<b.length;t++)n=b[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,r,l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",a)}},m=l("MdAlert"),i={};function N(e){var a=e.components,n=o(e,["components"]);return Object(b.b)("wrapper",p({},i,n,{components:a,mdxType:"MDXLayout"}),Object(b.b)("h2",{className:"__internal",id:"起步"},"起步",Object(b.b)("a",p({parentName:"h2"},{href:"#%E8%B5%B7%E6%AD%A5","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"在开始之前, 请确保您使用的是最新版本的 ",Object(b.b)("a",p({parentName:"p"},{href:"https://nodejs.org/",target:"_blank"}),"Node"),"。您应该至少使用最新的 ",Object(b.b)("inlineCode",{parentName:"p"},"LTS"),"(长期支持)版本, 因为本书的配置使用了 ",Object(b.b)("inlineCode",{parentName:"p"},"Node TLS")," 相关的功能。您应该确保终端上的 ",Object(b.b)("inlineCode",{parentName:"p"},"node")," 和 ",Object(b.b)("inlineCode",{parentName:"p"},"npm")," 命令可用。",Object(b.b)("a",p({parentName:"p"},{href:"https://yarnpkg.com/",target:"_blank"}),"Yarn")," 是 ",Object(b.b)("inlineCode",{parentName:"p"},"npm")," 的一个很好的替代方法, 也适用于本教程。"),Object(b.b)("p",null,"通过使用诸如 ",Object(b.b)("a",p({parentName:"p"},{href:"https://www.docker.com/",target:"_blank"}),"Docker"),", ",Object(b.b)("a",p({parentName:"p"},{href:"https://www.vagrantup.com/",target:"_blank"}),"Vagrant")," 或 ",Object(b.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/nvm",target:"_blank"}),"nvm")," 之类的解决方案, 可以获得更受控制的环境。",Object(b.b)("inlineCode",{parentName:"p"},"Vagrant")," 依赖于虚拟机, 因此性能会偏差一些。",Object(b.b)("inlineCode",{parentName:"p"},"Vagrant")," 在团队中很有价值: 每个开发人员都可以拥有相同且接近生产环境的开发环境。"),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},"完整的配置可在 ",Object(b.b)("a",p({parentName:"p"},{href:"https://github.com/survivejs-demos/webpack-demo",target:"_blank"}),"GitHub")," 上找到。")),Object(b.b)("h3",{className:"__internal",id:"设置项目"},"设置项目",Object(b.b)("a",p({parentName:"h3"},{href:"#%E8%AE%BE%E7%BD%AE%E9%A1%B9%E7%9B%AE","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"首先, 请为项目创建一个目录, 然后在目录中创建一个 ",Object(b.b)("inlineCode",{parentName:"p"},"package.json"),", 因为 ",Object(b.b)("inlineCode",{parentName:"p"},"npm")," 使用它来管理项目依赖项。"),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",p({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"mkdir")," webpack-demo\n",Object(b.b)("span",p({parentName:"code"},{className:"token builtin class-name"}),"cd")," webpack-demo\n",Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"npm")," init -y ",Object(b.b)("span",p({parentName:"code"},{className:"token comment"}),"# -y generates `package.json`, skip for more control")))),Object(b.b)("p",null,"即使部分操作会自动为您修改文件, 您可以手动调整生成的 ",Object(b.b)("inlineCode",{parentName:"p"},"package.json")," 以对其进行进一步的更改。官方文件更详细地解释了 ",Object(b.b)("a",p({parentName:"p"},{href:"https://docs.npmjs.com/files/package.json",target:"_blank"}),"package.json 选项"),"。"),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},"您可以在 ",Object(b.b)("inlineCode",{parentName:"p"},"~/.npmrc")," 中设置 ",Object(b.b)("inlineCode",{parentName:"p"},"npm init")," 的默认值。")),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},"这是使用 ",Object(b.b)("a",p({parentName:"p"},{href:"https://git-scm.com/",target:"_blank"}),"Git")," 设置版本控制的绝佳机会。您可以在每个步骤中创建提交, 并在每个章节中进行标记, 因此如果有需要, 可以更轻松地来回切换。")),Object(b.b)("h3",{className:"__internal",id:"安装-webpack"},"安装 webpack",Object(b.b)("a",p({parentName:"h3"},{href:"#%E5%AE%89%E8%A3%85-webpack","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"尽管 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 可以全局安装(",Object(b.b)("mark",null,"npm add webpack -g"),"), 但最好还是将其作为项目的依赖项进行维护以避免出现问题, 因为这样您就可以控制所运行的确切版本。"),Object(b.b)("p",null,"该方法可与",Object(b.b)("strong",{parentName:"p"},"持续集成"),"(",Object(b.b)("inlineCode",{parentName:"p"},"CI"),")很好地配合使用, 并且 ",Object(b.b)("inlineCode",{parentName:"p"},"CI")," 系统可以安装本地依赖项, 使用它们来编译项目, 然后将结果推送到服务器。"),Object(b.b)("p",null,"要将 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 添加到项目, 请执行:"),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",p({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"npm")," ",Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"add")," webpack webpack-nano --develop ",Object(b.b)("span",p({parentName:"code"},{className:"token comment"}),"# --develop === -D")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"译者注: 原版书籍使用 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 版本为 ",Object(b.b)("strong",{parentName:"p"},"4.44.1"),", 译文使用 ",Object(b.b)("strong",{parentName:"p"},"5.0.0-beta.29"),"。",Object(b.b)("br",{parentName:"p"}),"\n","同时, 不知道是系统问题还是配置问题, ",Object(b.b)("inlineCode",{parentName:"p"},"--develop")," 识别出错, 但是 ",Object(b.b)("inlineCode",{parentName:"p"},"-D")," 可用。")),Object(b.b)("p",null,"之后, 您应该可以在 ",Object(b.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(b.b)("inlineCode",{parentName:"p"},"devDependencies")," 部分中看到 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"webpack"))," 和 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"webpack-nano")),"。除了将软件包本地安装在 ",Object(b.b)("inlineCode",{parentName:"p"},"node_modules")," 目录下之外, ",Object(b.b)("inlineCode",{parentName:"p"},"npm")," 还会为可执行文件生成一个目录, 您可以在 ",Object(b.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," 目录中找到这些可执行文件。"),Object(b.b)("p",null,"我们使用了 ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"webpack-nano"))," 而不是官方的 ",Object(b.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/webpack-cli",target:"_blank"}),"webpack-cli"),", 因为它具有用于本书项目的足够的功能, 同时与 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack 4")," 和 ",Object(b.b)("inlineCode",{parentName:"p"},"5")," 直接兼容。"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"webpack-cli")," 附带了其他功能, 包括 ",Object(b.b)("inlineCode",{parentName:"p"},"init")," 和 ",Object(b.b)("inlineCode",{parentName:"p"},"migrate")," 命令, 这些命令使您可以快速创建新的 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 配置并从较旧的版本更新为较新的版本。"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"译者注: ",Object(b.b)("inlineCode",{parentName:"p"},"webpack-cli")," 预计等到 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack 5")," 稳定之后才会对其进行兼容性更新, 所以, 在稳定之前, ",Object(b.b)("inlineCode",{parentName:"p"},"webpack-cli")," 不支持 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack 5"),"。有关描述可以看一下 ",Object(b.b)("a",p({parentName:"p"},{href:"https://github.com/webpack/webpack-cli/issues/1726#issuecomment-667625492",target:"_blank"}),"webpack-cli issue 1726"),"。")),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},"如果要使用 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack 5")," 来运行示例, 请使用 ",Object(b.b)("inlineCode",{parentName:"p"},"npm add webpack@next")," 进行安装。")),Object(b.b)("h3",{className:"__internal",id:"执行-webpack"},"执行 webpack",Object(b.b)("a",p({parentName:"h3"},{href:"#%E6%89%A7%E8%A1%8C-webpack","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"您可以使用 ",Object(b.b)("inlineCode",{parentName:"p"},"npm bin")," 来显示可执行文件的确切路径。它很有可能指向 ",Object(b.b)("inlineCode",{parentName:"p"},"./node_modules/.bin"),"。尝试使用 ",Object(b.b)("inlineCode",{parentName:"p"},"node_modules/.bin/wp")," 或类似命令通过终端从那里运行 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack"),"。"),Object(b.b)("p",null,"运行之后, 您应该会看到一个版本, 指向命令行界面指南的链接以及大量选项。大多数都没有在该项目中使用, 但是最好知道此工具包含其他功能。"),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",p({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-bash"}),"$ node_modules/.bin/wp\n\n⬡ webpack: Build Finished\n⬡ webpack: Hash: 083797a410744b04dac1\n  Version: webpack ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"5.0"),".0-beta.29\n  Time: ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"234")," ms\n  Built at: ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"2020"),"-09-07 ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"13"),":35:06\n  ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"1")," asset\n  Entrypoint main ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," main.js\n  \n  WARNING ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"in")," configuration\n  The ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"'mode'")," option has not been set, webpack will fallback to ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"'production'")," ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"for")," this value. Set ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"'mode'")," option to ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"'development'")," or ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"'production'")," to ",Object(b.b)("span",p({parentName:"code"},{className:"token builtin class-name"}),"enable")," defaults ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"for")," each environment.\n  You can also ",Object(b.b)("span",p({parentName:"code"},{className:"token builtin class-name"}),"set")," it to ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"'none'")," to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/\n  \n  ERROR ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"in")," main\n  Module not found: Error: Can",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"'t resolve '"),"./src",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),"' in '"),"/Users/yuzhoujie/Desktop/others/webpack-demo'"))),Object(b.b)("p",null,"输出表明 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 找不到要编译的源。理想情况下, 我们还要向其传递 ",Object(b.b)("inlineCode",{parentName:"p"},"mode")," 参数以定义所需的默认值。"),Object(b.b)("p",null,"要编译 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack"),", 请执行以下操作:"),Object(b.b)("ol",null,Object(b.b)("li",p({parentName:"ol"},{className:"__internal"}),"进行设置 ",Object(b.b)("inlineCode",{parentName:"li"},"src/index.js"),", 其中包含 ",Object(b.b)("inlineCode",{parentName:"li"},'console.log("Hello world")'),";。"),Object(b.b)("li",p({parentName:"ol"},{className:"__internal"}),"执行 ",Object(b.b)("inlineCode",{parentName:"li"},"node_modules/.bin/wp"),"。",Object(b.b)("inlineCode",{parentName:"li"},"Webpack")," 将通过 ",Object(b.b)("inlineCode",{parentName:"li"},"Node")," 约定发现源文件。"),Object(b.b)("li",p({parentName:"ol"},{className:"__internal"}),"检查 ",Object(b.b)("inlineCode",{parentName:"li"},"dist/main.js"),"。您应该看到开始执行代码的 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 引导程序代码。在引导程序下方, 您应该找到一些熟悉的东西。")),Object(b.b)("h3",{className:"__internal",id:"设置资源"},"设置资源",Object(b.b)("a",p({parentName:"h3"},{href:"#%E8%AE%BE%E7%BD%AE%E8%B5%84%E6%BA%90","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"为了使构建更加复杂, 我们可以向项目添加另一个模块并开始开发一个小型应用程序:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"src/component.js")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(b.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"export")," ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"default")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"text ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),'"Hello world"'),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")")," ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=>")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," element ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," document",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"createElement"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(b.b)("span",p({parentName:"code"},{className:"token string"}),'"div"'),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  element",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),"innerHTML ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," text",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"return")," element",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(b.b)("p",null,"我们还必须修改原始文件以导入新文件并通过 ",Object(b.b)("inlineCode",{parentName:"p"},"DOM")," 呈现应用程序:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"src/index.js")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(b.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"import")," component ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"from")," ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),'"./component"'),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\ndocument",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),"body",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"appendChild"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"component"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(b.b)("p",null,"使用上述命令生成项目后检查输出。您应该可以在 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 生成的 ",Object(b.b)("inlineCode",{parentName:"p"},"dist")," 目录的捆绑包中看到这两个模块。不过, 还有一个问题。如何在浏览器中测试应用程序？"),Object(b.b)("h3",{className:"__internal",id:"使用-mini-html-webpack-plugin"},"使用 mini-html-webpack-plugin",Object(b.b)("a",p({parentName:"h3"},{href:"#%E4%BD%BF%E7%94%A8-mini-html-webpack-plugin","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"这个问题可以通过编写指向生成文件的 ",Object(b.b)("mark",null,"index.html")," 文件来解决。我们可以使用插件和 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 配置来完成这项工作, 而不需要自己动手。"),Object(b.b)("p",null,"首先, 安装 ",Object(b.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/mini-html-webpack-plugin",target:"_blank"}),"mini-html-webpack-plugin"),":"),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",p({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-bash"}),Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"npm")," ",Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"add")," mini-html-webpack-plugin --develop"))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"译者注: 使用的最新版本 ",Object(b.b)("inlineCode",{parentName:"p"},"mini-html-webpack-plugin@3.0.7"),", 与 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack 5.x")," 版本不兼容! 无法实现 ",Object(b.b)("inlineCode",{parentName:"p"},"CSS")," 热更新, 如果需要正常使用/开发, 请务必使用 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack@4.44.1"),"。")),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},Object(b.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/html-webpack-plugin",target:"_blank"}),"html-webpack-plugin")," 是一个具备更多功能的选项, 可以通过插件进行扩展。对于任何超出基本用法的内容, 这是一个不错的选择。")),Object(b.b)("p",null,"要将插件与 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 连接, 请按如下所示进行配置:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"webpack.config.js")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"js"},Object(b.b)("pre",p({parentName:"div"},{className:"language-js"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-js"}),Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{")," mode ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"require"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(b.b)("span",p({parentName:"code"},{className:"token string"}),'"webpack-nano/argv"'),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"const")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  MiniHtmlWebpackPlugin",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(b.b)("span",p({parentName:"code"},{className:"token function"}),"require"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(b.b)("span",p({parentName:"code"},{className:"token string"}),'"mini-html-webpack-plugin"'),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";"),"\n\nmodule",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"."),"exports ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  mode",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  plugins",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(b.b)("span",p({parentName:"code"},{className:"token keyword"}),"new")," ",Object(b.b)("span",p({parentName:"code"},{className:"token class-name"}),"MiniHtmlWebpackPlugin"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n      context",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n        title",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),'"Webpack demo"'),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n      ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),";")))),Object(b.b)("p",null,"现在配置已完成, 您应该尝试以下操作:"),Object(b.b)("ol",null,Object(b.b)("li",p({parentName:"ol"},{className:"__internal"}),"使用 ",Object(b.b)("mark",null,"node_modules/.bin/wp --mode production")," 构建项目。您也可以尝试 ",Object(b.b)("inlineCode",{parentName:"li"},"development")," 和 ",Object(b.b)("inlineCode",{parentName:"li"},"none")," 模式。"),Object(b.b)("li",p({parentName:"ol"},{className:"__internal"}),"使用 ",Object(b.b)("mark",null,"cd dist")," 进入构建目录。"),Object(b.b)("li",p({parentName:"ol"},{className:"__internal"}),"使用 ",Object(b.b)("mark",null,"serve")," (",Object(b.b)("mark",null,"npm add serve -g")," 或 ",Object(b.b)("mark",null,"npx serve"),")或您熟悉的类似命令运行服务器。")),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("mark",null,"none")," 模式不应用任何默认值。用于调试。"),Object(b.b)("p",null,"通过浏览器查看结果。您应该在那里看到一条熟悉的问候消息:\n",Object(b.b)("img",p({parentName:"p"},{src:"../../start/start_1.png",alt:"Hello world!"}))),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},"除了配置对象外, ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 还接受一系列配置。例如, 您还可以返回 ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," 并最终返回 ",Object(b.b)("inlineCode",{parentName:"p"},"resolve")," 到配置。如果要从第三方来源获取与配置相关的数据, 则后者很有用。")),Object(b.b)(m,p({message:" ",type:"warning"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},Object(b.b)("inlineCode",{parentName:"p"},"Webpack")," 的入口和输出具有默认配置。默认情况下, 它从 ",Object(b.b)("mark",null,"./src")," 中寻找源文件, 并将其输出到 ",Object(b.b)("mark",null,"./dist"),"。您可以通过",Object(b.b)("a",p({parentName:"p"},{href:"../What-is-webpack.html"}),'"什么是Webpack"'),"一章中的 ",Object(b.b)("mark",null,"entry")," 和 ",Object(b.b)("mark",null,"output")," 来分别控制它们。")),Object(b.b)("h3",{className:"__internal",id:"检查输出"},"检查输出",Object(b.b)("a",p({parentName:"h3"},{href:"#%E6%A3%80%E6%9F%A5%E8%BE%93%E5%87%BA","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"如果执行 ",Object(b.b)("mark",null,"node_modules/.bin/wp --mode production"),", 应该会看到输出:"),Object(b.b)("div",{className:"rcpress-highlight","data-language":"bash"},Object(b.b)("pre",p({parentName:"div"},{className:"language-bash"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-bash"}),"$ node_modules/.bin/wp --mode production\n\n⬡ webpack: Build Finished\n⬡ webpack: Hash: 77b99c0f9a9f1f7262a6\n  Version: webpack ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"5.0"),".0-beta.29\n  Time: ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"292")," ms\n  Built at: ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"2020"),"-09-07 ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"14"),":03:40\n  asset index.html ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"198")," bytes ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"emitted",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),"\n  asset main.js ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"136")," bytes ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"emitted",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"minimized",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"("),"name: main",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),")"),"\n  Entrypoint main ",Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),"=")," main.js\n  ./src/index.js + ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"1")," modules ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"223")," bytes ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"["),"built",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"]"),"\n      + ",Object(b.b)("span",p({parentName:"code"},{className:"token number"}),"1")," hidden module "))),Object(b.b)("p",null,"输出显示:"),Object(b.b)("ul",null,Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"Hash: 77b99c0f9a9f1f7262a6")," —— 构建的哈希值。您可以使用它通过 ",Object(b.b)("mark",null,"[hash]")," 占位符使资产无效。在",Object(b.b)("a",p({parentName:"li"},{href:""}),"将哈希添加到文件名"),"一章中详细讨论哈希。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"Version: webpack 5.0.0-beta.29")," —— ",Object(b.b)("inlineCode",{parentName:"li"},"Webpack")," 版本。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"Time: 292ms")," —— 执行构建所花费的时间。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"asset index.html 198 bytes [emitted]")," —— 流程产生的另一个生成的资源。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"asset main.js 136 bytes [emitted] [minimized] (name: main)")," —— 所生成资产的名称, 大小, 告诉其如何生成的状态信息, 块的名称。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"./src/index.js + 1 modules 223 bytes [built]")," —— 名称, 大小, 生成方式。")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"译者注: 最后一条输出, 在 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack 4")," 中为 ",Object(b.b)("inlineCode",{parentName:"p"},"[0] ./src/index.js + 1 modules 227 bytes {0} [built]")," —— ",Object(b.b)("inlineCode",{parentName:"p"},"entry")," 资源的 ",Object(b.b)("inlineCode",{parentName:"p"},"ID"),", 名称, 大小, ",Object(b.b)("inlineCode",{parentName:"p"},"entry")," 块 ",Object(b.b)("inlineCode",{parentName:"p"},"ID"),", 生成方式。")),Object(b.b)("p",null,"检查 ",Object(b.b)("inlineCode",{parentName:"p"},"dist/")," 目录下的输出。如果仔细观察, 您会在源中看到相同的 ",Object(b.b)("inlineCode",{parentName:"p"},"ID"),"。"),Object(b.b)("h3",{className:"__internal",id:"添加快捷方式"},"添加快捷方式",Object(b.b)("a",p({parentName:"h3"},{href:"#%E6%B7%BB%E5%8A%A0%E5%BF%AB%E6%8D%B7%E6%96%B9%E5%BC%8F","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"每次执行编译都需要输入 ",Object(b.b)("inlineCode",{parentName:"p"},"node_modules/.bin/wp")," 很麻烦, 可以通过修改 ",Object(b.b)("inlineCode",{parentName:"p"},"package.json")," 文件来简化我们的操作:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"package.json")),Object(b.b)("div",{className:"rcpress-highlight","data-language":"json"},Object(b.b)("pre",p({parentName:"div"},{className:"language-json"}),Object(b.b)("code",p({parentName:"pre"},{className:"language-json"}),Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(b.b)("span",p({parentName:"code"},{className:"token property"}),'"scripts"'),Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(b.b)("span",p({parentName:"code"},{className:"token property"}),'"build"'),Object(b.b)("span",p({parentName:"code"},{className:"token operator"}),":")," ",Object(b.b)("span",p({parentName:"code"},{className:"token string"}),'"wp --mode production"'),"\n  ",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(b.b)("span",p({parentName:"code"},{className:"token punctuation"}),"}")))),Object(b.b)("p",null,"运行 ",Object(b.b)("inlineCode",{parentName:"p"},"npm run build")," 可以得到与以前相同的输出。",Object(b.b)("inlineCode",{parentName:"p"},"npm")," 将临时添加 ",Object(b.b)("inlineCode",{parentName:"p"},"node_modules/.bin")," 到路径中以启用此功能。因此您无需使用 ",Object(b.b)("inlineCode",{parentName:"p"},'"build": "node_modules/.bin/wp"'),", 而是通过简单的 ",Object(b.b)("inlineCode",{parentName:"p"},'"build": "wp"')," 进行调用。"),Object(b.b)("p",null,"您可以通过 ",Object(b.b)("em",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"em"},"npm run"))," 执行此类脚本, 并且可以在项目中的任何位置使用该命令。如果运行不带任何参数的命令(",Object(b.b)("inlineCode",{parentName:"p"},"npm run"),"), 它将为您提供可用脚本的列表。"),Object(b.b)(m,p({message:" ",type:"info"},{mdxType:"MdAlert"}),Object(b.b)("p",{parentName:"MdAlert"},"如果要同时运行多个命令, 请参见 ",Object(b.b)("a",p({parentName:"p"},{href:"https://www.npmjs.com/package/concurrently",target:"_blank"}),"concurrently")," 软件包。它被设计为在提供整洁输出的同时允许同时运行多个命令。")),Object(b.b)("h3",{className:"__internal",id:"webpack-输出插件"},"Webpack 输出插件",Object(b.b)("a",p({parentName:"h3"},{href:"#webpack-%E8%BE%93%E5%87%BA%E6%8F%92%E4%BB%B6","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"鉴于 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 给出的输出可能难以解读, 因此存在多个选项:"),Object(b.b)("ul",null,Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("a",p({parentName:"li"},{href:"https://www.npmjs.com/package/webpackbar",target:"_blank"}),"webpackbar")," 专门用于跟踪构建进度。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),"也可以使用 ",Object(b.b)("mark",null,"webpack.ProgressPlugin"),", 开箱即用。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("a",p({parentName:"li"},{href:"https://www.npmjs.com/package/webpack-dashboard",target:"_blank"}),"webpack-dashboard")," 在标准 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 输出上提供了整个基于终端的仪表盘。如果您希望获得清晰的视觉输出, 这个插件会派上用场。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("a",p({parentName:"li"},{href:"https://www.npmjs.com/package/test-webpack-reporter-plugin",target:"_blank"}),"test-webpack-reporter-plugin")," 抽象化了 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 的内部结构, 使编写自己的报告程序更加容易。")),Object(b.b)("h3",{className:"__internal",id:"结论"},"结论",Object(b.b)("a",p({parentName:"h3"},{href:"#%E7%BB%93%E8%AE%BA","aria-hidden":!0,className:"anchor"}),"#")),Object(b.b)("p",null,"即使您已经成功启动并运行了 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack"),", 但它目前并没有做太多事情。如果在开发中使用它会很痛苦, 因为我们必须一直重新编译。这就是为什么我们在下一章中探讨 ",Object(b.b)("inlineCode",{parentName:"p"},"webpack")," 的更高级功能的原因。"),Object(b.b)("p",null,"回顾一下:"),Object(b.b)("ul",null,Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),"使用本地安装的webpack是一个好主意, 有助于确定自己使用哪一版本的 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack"),", 本地依赖关系也适用于",Object(b.b)("strong",{parentName:"li"},"持续集成"),"环境。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("inlineCode",{parentName:"li"},"Webpack")," 通过 ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"webpack-cli"))," 提供了一个命令行界面, 即使没有配置也可以使用, 但是任何高级用法都需要配置。",Object(b.b)("strong",{parentName:"li"},"webpack-nano")," 是仅使用基本用法的不错选择。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),"必须单独编写一个 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack.config.js")," 文件来编写复杂的设置。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"mini-html-webpack-plugin"))," 和 ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"HtmlWebpackPlugin"))," 可以用来为应用程序生成一个 ",Object(b.b)("inlineCode",{parentName:"li"},"HTML")," 入口文件。 在",Object(b.b)("a",p({parentName:"li"},{href:""}),'"多页"'),"一章中, 您将看到如何使用插件生成多个单独的页面。"),Object(b.b)("li",p({parentName:"ul"},{className:"__internal"}),"使用 ",Object(b.b)("inlineCode",{parentName:"li"},"npm")," ",Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"package.json"))," 脚本来管理 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 是很方便的。可以将其用作轻型任务运行程序, 并在 ",Object(b.b)("inlineCode",{parentName:"li"},"webpack")," 之外使用系统功能。")),Object(b.b)("p",null,"在下一章中, 您将学习如何通过启用自动刷新浏览器来改善开发人员的体验。"))}N.isMDXComponent=!0,N=Object(c.hot)(e)(N),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(l,"makeShortcode","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Developing/start.md"),s.register(m,"MdAlert","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Developing/start.md"),s.register(i,"layoutProps","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Developing/start.md"),s.register("wrapper","MDXLayout","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Developing/start.md"),s.register(N,"MDXContent","/Users/yuzhoujie/Desktop/work/webpack-book-china/docs/webpack/Developing/start.md")),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&r(e)}.call(this,n(21)(e))}}]);