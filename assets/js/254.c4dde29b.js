(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{579:function(a,t,s){"use strict";s.r(t);var e=s(3),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#简介"}},[a._v("简介")])]),t("li",[t("a",{attrs:{href:"#多-profile-文件方式"}},[a._v("多 Profile 文件方式")])]),t("li",[t("a",{attrs:{href:"#环境配置"}},[a._v("环境配置")])]),t("li",[t("a",{attrs:{href:"#profile-分组"}},[a._v("Profile 分组")])]),t("li",[t("a",{attrs:{href:"#profile-注解"}},[a._v("@Profile 注解")])]),t("li",[t("a",{attrs:{href:"#外部化配置"}},[a._v("外部化配置")]),t("ul",[t("li",[t("a",{attrs:{href:"#配置优先级"}},[a._v("配置优先级")])]),t("li",[t("a",{attrs:{href:"#外部配置"}},[a._v("外部配置")])])])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),t("p",[a._v("在实际的项目开发中，一个项目通常会存在多个环境，例如，开发环境、测试环境和生产环境等。不同环境的配置也不尽相同，例如开发环境使用的是开发数据库，测试环境使用的是测试数据库，而生产环境使用的是线上的正式数据库。")]),a._v(" "),t("p",[a._v("Profile 为在不同环境下使用不同的配置提供了支持，我们可以通过激活、指定参数等方式快速切换环境。")]),a._v(" "),t("h2",{attrs:{id:"多-profile-文件方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多-profile-文件方式"}},[a._v("#")]),a._v(" 多 Profile 文件方式")]),a._v(" "),t("p",[a._v("Spring Boot 的配置文件共有两种形式："),t("code",[a._v(".properties")]),a._v(" 文件和 "),t("code",[a._v(".yml")]),a._v(" 文件，不管哪种形式，它们都能通过文件名的命名形式区分出不同的环境的配置，文件命名格式为：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("application"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("profile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("properties"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("yml\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("其中，"),t("code",[a._v("{profile}")]),a._v(" 一般为各个环境的名称或简称，例如 dev、test 和 prod 等等，这个根据自己的场景来定义。")]),a._v(" "),t("h2",{attrs:{id:"环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[a._v("#")]),a._v(" 环境配置")]),a._v(" "),t("p",[a._v("resources 下添加 4 个配置文件：")]),a._v(" "),t("ul",[t("li",[a._v("application.yml：主配置文件，任意时候都生效")]),a._v(" "),t("li",[a._v("application-dev.yml：开发环境配置文件")]),a._v(" "),t("li",[a._v("application-test.yml：测试环境配置文件")]),a._v(" "),t("li",[a._v("application-prod.yml：生产环境配置文件")])]),a._v(" "),t("p",[a._v("定义了这些文件，那么想使用 dev 环境的配置，则在主配置文件切换环境：")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("active")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dev "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对应 {profile}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("则代表使用 "),t("code",[a._v("application-dev.yml")]),a._v(" 的配置信息。")]),a._v(" "),t("p",[a._v("值得注意的是："),t("code",[a._v("application.yml")]),a._v(" 主配置文件不管任何环境都会生效。")]),a._v(" "),t("p",[a._v("当 "),t("code",[a._v("application-{profile}.yml")]),a._v(" 文件和 "),t("code",[a._v("application.yml")]),a._v(" 文件的配置项都相同的情况下，profile 优先级高于 application 的配置。")]),a._v(" "),t("p",[a._v("也可以额外添加生效文件，而不是激活替换。比如：")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("active")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dev\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" test\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" prod\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h2",{attrs:{id:"profile-分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile-分组"}},[a._v("#")]),a._v(" Profile 分组")]),a._v(" "),t("p",[a._v("当我们想使用多个环境的配置文件时候，可以这样：")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("active")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("test\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("当然也可以进行分组：")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("group")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("youngkbt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dev"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("test\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("然后激活 youngkbt 组")]),a._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("active")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" youngkbt\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("运行 jar 包的时候也可以覆盖配置文件对环境的配置："),t("code",[a._v("java –jar xxx.jar --spring.profiles.active=dev")]),a._v("。")]),a._v(" "),t("h2",{attrs:{id:"profile-注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#profile-注解"}},[a._v("#")]),a._v(" @Profile 注解")]),a._v(" "),t("p",[a._v("当配置了环境变量，那么就对应的环境变量配置文件就会生效，这是针对变量而言，此外我们可以指定哪些组件在什么环境才允许被加载到 Spring 容器里。")]),a._v(" "),t("p",[a._v("比如指定某个组件只有在 dev 环境才被加载到容器里，如：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@RestController")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloController")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@GetMapping")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hello")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello Spring Boot"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("此时该容器在 dev 环境才会注入到容器里，也就是处于其他环境，访问 "),t("code",[a._v("/hello")]),a._v(" 是失效的。")]),a._v(" "),t("h2",{attrs:{id:"外部化配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部化配置"}},[a._v("#")]),a._v(" 外部化配置")]),a._v(" "),t("p",[t("strong",[a._v("场景")]),a._v("：线上应用如何 "),t("strong",[a._v("快速修改配置")]),a._v("，并应 "),t("strong",[a._v("用最新配置")]),a._v("？")]),a._v(" "),t("ul",[t("li",[a._v("SpringBoot 使用 "),t("strong",[a._v("配置优先级")]),a._v(" + "),t("strong",[a._v("外部配置")]),a._v("  简化配置更新、简化运维。")]),a._v(" "),t("li",[a._v("只需要给 "),t("code",[a._v("jar")]),a._v(" 应用所在的文件夹放一个 "),t("code",[a._v("application.yml")]),a._v(" 最新配置文件，重启项目就能自动应用最新配置")])]),a._v(" "),t("h3",{attrs:{id:"配置优先级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置优先级"}},[a._v("#")]),a._v(" 配置优先级")]),a._v(" "),t("p",[a._v("Spring Boot 允许将 "),t("strong",[a._v("配置外部化")]),a._v("，以便可以在不同的环境中使用相同的应用程序代码。")]),a._v(" "),t("p",[a._v("我们可以使用各种 "),t("strong",[a._v("外部配置源")]),a._v("，包括 Java Properties 文件、YAML 文件、环境变量和命令行参数。")]),a._v(" "),t("p",[t("code",[a._v("@Value")]),a._v(" 可以获取值，也可以用 "),t("code",[a._v("@ConfigurationProperties")]),a._v(" 将所有属性绑定到 java object 中。")]),a._v(" "),t("p",[a._v("以下是 SpringBoot 属性源加载顺序。"),t("strong",[a._v("后面的会覆盖前面的值")]),a._v("。由低到高，高优先级配置覆盖低优先级：")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("默认属性")]),a._v("（通过 "),t("code",[a._v("SpringApplication.setDefaultProperties")]),a._v(" 指定的）")]),a._v(" "),t("li",[t("code",[a._v("@PropertySource")]),a._v(" 指定加载的配置（需要写在 "),t("code",[a._v("@Configuration")]),a._v(" 类上才可生效）")]),a._v(" "),t("li",[a._v("配置文件（application.properties/yml 等）")]),a._v(" "),t("li",[a._v("RandomValuePropertySource 支持的 "),t("code",[a._v("random.*")]),a._v(" 配置（如："),t("code",[a._v('@Value("${random.int}")')]),a._v("）")]),a._v(" "),t("li",[a._v("OS 环境变量")]),a._v(" "),t("li",[a._v("Java 系统属性（"),t("code",[a._v("System.getProperties()")]),a._v("）")]),a._v(" "),t("li",[a._v("JNDI 属性（来自 "),t("code",[a._v("java:comp/env")]),a._v("）")]),a._v(" "),t("li",[a._v("ServletContext 初始化参数")]),a._v(" "),t("li",[a._v("ServletConfig 初始化参数")]),a._v(" "),t("li",[a._v("SPRING_APPLICATION_JSON 属性（内置在环境变量或系统属性中的 JSON）")]),a._v(" "),t("li",[t("strong",[a._v("命令行参数")])]),a._v(" "),t("li",[a._v("测试属性。("),t("code",[a._v("@SpringBootTest")]),a._v(" 进行测试时指定的属性)")]),a._v(" "),t("li",[a._v("测试类 "),t("code",[a._v("@TestPropertySource")]),a._v(" 注解")]),a._v(" "),t("li",[a._v("Devtools 设置的全局属性。("),t("code",[a._v("$HOME/.config/spring-boot")]),a._v(")")])]),a._v(" "),t("p",[a._v("结论：配置可以写到很多位置，常见的优先级顺序：命令行 > 配置文件 > springapplication 配置。")]),a._v(" "),t("p",[a._v("Spring Boot 读取 application.yml 配置文件位置也是有优先级的：")]),a._v(" "),t("p",[t("strong",[a._v("配置文件优先级")]),a._v(" 如下：(后面覆盖前面)")]),a._v(" "),t("ol",[t("li",[t("strong",[a._v("jar 包内")]),a._v(" 的 "),t("code",[a._v("application.properties/yml")])]),a._v(" "),t("li",[t("strong",[a._v("jar 包内")]),a._v(" 的 "),t("code",[a._v("application-{profile}.properties/yml")])]),a._v(" "),t("li",[t("strong",[a._v("jar 包外")]),a._v(" 的 "),t("code",[a._v("application.properties/yml")])]),a._v(" "),t("li",[t("strong",[a._v("jar 包外")]),a._v(" 的 "),t("code",[a._v("application-{profile}.properties/yml")])])]),a._v(" "),t("p",[a._v("建议用一种格式的配置文件。如果 "),t("code",[a._v(".properties")]),a._v(" 和 "),t("code",[a._v(".yml")]),a._v(" 同时存在，则 "),t("code",[a._v(".properties")]),a._v(" 优先。")]),a._v(" "),t("p",[a._v("结论：包外 > 包内。同级情况：profile配置 > application 配置。")]),a._v(" "),t("p",[a._v("所有参数均可由命令行传入，使用 "),t("code",[a._v("--参数项=参数值")]),a._v("，将会被添加到环境变量中，并优先于 "),t("strong",[a._v("配置文件")]),a._v("。")]),a._v(" "),t("p",[a._v("比如 "),t("code",[a._v('java -jar app.jar --name="Spring"')]),a._v("，可以使用 "),t("code",[a._v('@Value("${name}")')]),a._v(" 获取。")]),a._v(" "),t("p",[a._v("演示场景：")]),a._v(" "),t("ul",[t("li",[a._v("包内：application.properties 的 "),t("code",[a._v("server.port=8000")])]),a._v(" "),t("li",[a._v("包内：application-dev.properties 的 "),t("code",[a._v("server.port=9000")])]),a._v(" "),t("li",[a._v("包外：application.properties 的 "),t("code",[a._v("server.port=8001")])]),a._v(" "),t("li",[a._v("包外： application-dev.properties 的 "),t("code",[a._v("server.port=9001")])])]),a._v(" "),t("p",[a._v("启动端口：命令行 > "),t("code",[a._v("9001")]),a._v(" > "),t("code",[a._v("8001")]),a._v(" > "),t("code",[a._v("9000")]),a._v(" > "),t("code",[a._v("8000")])]),a._v(" "),t("h3",{attrs:{id:"外部配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#外部配置"}},[a._v("#")]),a._v(" 外部配置")]),a._v(" "),t("p",[a._v("SpringBoot 应用启动时会自动寻找 "),t("code",[a._v("application.properties")]),a._v(" 和 "),t("code",[a._v("application.yml")]),a._v(" 位置，进行加载。顺序如下：")]),a._v(" "),t("p",[a._v("当前路径（jar 包根目录下）的配置文件优先级大于项目 resource 下")]),a._v(" "),t("ul",[t("li",[a._v("在项目所在的位置下 config 目录下的 application.yml 大于项目所在的位置的 application.yml")]),a._v(" "),t("li",[a._v("项目 resource 下 config 目录下的 application.yml 大于项目 resource 下的 application.yml")])]),a._v(" "),t("p",[a._v("总结：")]),a._v(" "),t("ul",[t("li",[a._v("命令行 > 包外 config 直接子目录 > 包外 config 目录 > 包外根目录 > 包内目录")]),a._v(" "),t("li",[a._v("同级比较：\n"),t("ul",[t("li",[a._v("profile 配置 > 默认配置")]),a._v(" "),t("li",[a._v("properties 配置 > yaml 配置")])])])]),a._v(" "),t("p",[a._v("规律：最外层的最优先。")]),a._v(" "),t("ul",[t("li",[a._v("命令行 > 所有")]),a._v(" "),t("li",[a._v("包外 > 包内")]),a._v(" "),t("li",[a._v("config 目录 > 根目录")]),a._v(" "),t("li",[a._v("profile > application")])]),a._v(" "),t("p",[a._v("配置不同就都生效（互补），配置相同高优先级覆盖低优先级。")])])}),[],!1,null,null,null);t.default=n.exports}}]);