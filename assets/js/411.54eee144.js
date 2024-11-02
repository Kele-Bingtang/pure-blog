(window.webpackJsonp=window.webpackJsonp||[]).push([[411],{736:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#命名空间与模块"}},[s._v("命名空间与模块")])]),t("li",[t("a",{attrs:{href:"#使用模块"}},[s._v("使用模块")])]),t("li",[t("a",{attrs:{href:"#使用命名空间"}},[s._v("使用命名空间")])]),t("li",[t("a",{attrs:{href:"#命名空间和模块的陷阱"}},[s._v("命名空间和模块的陷阱")])]),t("li",[t("a",{attrs:{href:"#不必要的命名方式"}},[s._v("不必要的命名方式")])]),t("li",[t("a",{attrs:{href:"#模块的权衡"}},[s._v("模块的权衡")])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"命名空间与模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名空间与模块"}},[s._v("#")]),s._v(" 命名空间与模块")]),s._v(" "),t("p",[s._v("这篇文章概述了在 TypeScript 中使用模块和命名空间来组织你的代码的各种方法。我们还将讨论一些关于如何使用命名空间和模块的高级话题，并解决在 TypeScript 中使用它们时的一些常见陷阱。")]),s._v(" "),t("p",[s._v("关于ES模块的更多信息，请参见 "),t("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/modules.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Modules 文档"),t("OutboundLink")],1),s._v("。更多关于 TypeScript 命名空间的信息，请参见 "),t("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/namespaces.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Namespaces 文档"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：在非常老的 TypeScript 版本中，命名空间被称为「内部模块」，这比 JavaScript 模块系统要早。")])]),s._v(" "),t("h2",{attrs:{id:"使用模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用模块"}},[s._v("#")]),s._v(" 使用模块")]),s._v(" "),t("p",[s._v("模块可以包含代码和声明。")]),s._v(" "),t("p",[s._v("模块也依赖于模块加载器（如 CommonJs/Require.js）或支持 ES 模块的运行时间。模块提供了更好的代码重用，更强的隔离性和更好的捆绑工具支持。")]),s._v(" "),t("p",[s._v("同样值得注意的是，对于 Node.js 应用程序，模块是默认的，我们在现代代码中推荐模块而不是命名空间。")]),s._v(" "),t("p",[s._v("从 ECMAScript 2015 开始，模块是语言的原生部分，所有兼容的引擎实现都应该支持。因此，对于新项目，模块将是推荐的代码组织机制。")]),s._v(" "),t("h2",{attrs:{id:"使用命名空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用命名空间"}},[s._v("#")]),s._v(" 使用命名空间")]),s._v(" "),t("p",[s._v("命名空间是一种 TypeScript 特有的组织代码的方式。")]),s._v(" "),t("p",[s._v("命名空间是全局命名空间中简单命名的 JavaScript 对象。这使得命名空间的使用非常简单。与模块不同，它们可以跨越多个文件，并且可以使用 outFile 串联。命名空间可以成为 Web 应用程序中结构化代码的一个好方法，所有的依赖关系都包含在 HTML 页面的")]),s._v(" "),t("p",[s._v("就像所有的全局命名空间污染一样，可能很难识别组件的依赖关系，特别是在一个大型应用程序中。")]),s._v(" "),t("h2",{attrs:{id:"命名空间和模块的陷阱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名空间和模块的陷阱"}},[s._v("#")]),s._v(" 命名空间和模块的陷阱")]),s._v(" "),t("p",[s._v("在本节中，我们将介绍使用命名空间和模块的各种常见陷阱，以及如何避免这些陷阱。")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("/// <reference>")]),s._v(" 为模块命名")])]),s._v(" "),t("p",[s._v("一个常见的错误是试图使用 "),t("code",[s._v("///")]),s._v(" 语法来引用一个模块文件，而不是使用 import 语句。为了理解这种区别，我们首先需要理解编译器是如何根据 import 的路径（例如，在 "),t("code",[s._v('import x from "...";')]),s._v(" 中的 "),t("code",[s._v("...")]),s._v("，"),t("code",[s._v('import x = require("...");')]),s._v(" 等等）路径来定位模块的类型信息。")]),s._v(" "),t("p",[s._v("编译器将尝试找到一个 "),t("code",[s._v(".ts")]),s._v("，"),t("code",[s._v(".tsx")]),s._v("，然后是一个具有适当路径的 "),t("code",[s._v(".d.ts")]),s._v("。如果找不到一个特定的文件，那么编译器将寻找一个环境模块声明。回顾一下，这些需要在 "),t("code",[s._v(".d.ts")]),s._v(" 文件中声明。")]),s._v(" "),t("ul",[t("li",[s._v("myModules.d.ts")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在一个.d.ts文件或不是模块的.ts文件中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("declare")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SomeModule"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("myOtherModule.ts")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/// <reference path="myModules.d.ts" />')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" m "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SomeModule"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("这里的引用标签允许我们找到包含环境模块声明的声明文件。几个 TypeScript 样本使用的 "),t("code",[s._v("node.d.ts")]),s._v(" 文件就是这样被消耗的。")]),s._v(" "),t("h2",{attrs:{id:"不必要的命名方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#不必要的命名方式"}},[s._v("#")]),s._v(" 不必要的命名方式")]),s._v(" "),t("p",[s._v("如果你要把一个程序从命名空间转换为模块，很容易就会出现一个看起来像这样的文件：")]),s._v(" "),t("ul",[t("li",[s._v("shapes.ts")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" Shapes "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Triangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Square")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("这里的顶层命名空间 Shapes 毫无理由地将 Triangle 和 Square 包裹起来。这让你的模块的使用者感到困惑和厌烦。")]),s._v(" "),t("ul",[t("li",[s._v("shapeConsumer.ts")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" shapes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./shapes"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" t "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("shapes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Shapes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Triangle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// shapes.Shapes?")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("TypeScript 中模块的一个关键特征是，两个不同的模块永远不会将名字贡献给同一个范围。因为模块的消费者决定给它分配什么名字，所以不需要主动将导出的符号包裹在一个命名空间中。")]),s._v(" "),t("p",[s._v("重申一下为什么你不应该尝试对模块内容进行命名空间，命名空间的一般想法是提供结构体的逻辑分组，并防止名称碰撞。因为模块文件本身已经是一个逻辑分组，它的顶层名称由导入它的代码定义，所以没有必要为导出的对象使用一个额外的模块层。")]),s._v(" "),t("p",[s._v("下面是一个修改后的例子：")]),s._v(" "),t("ul",[t("li",[s._v("shapes.ts")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Triangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Square")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* ... */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("shapeConsumer.ts")])]),s._v(" "),t("div",{staticClass:"language-typescript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" shapes "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./shapes"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" t "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("shapes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Triangle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"模块的权衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块的权衡"}},[s._v("#")]),s._v(" 模块的权衡")]),s._v(" "),t("p",[s._v("就像 JS 文件和模块之间有一对一的对应关系一样，TypeScript 在模块源文件和其发射的 JS 文件之间有一对一的对应关系。这样做的一个影响是，根据你的目标模块系统，不可能串联多个模块源文件。例如，你不能在针对 commonjs 或 umd 时使用 outFile 选项，但在 TypeScript 1.8 及更高版本中，在针对 amd 或 system 时可以使用 outFile 。")])])}),[],!1,null,null,null);t.default=n.exports}}]);