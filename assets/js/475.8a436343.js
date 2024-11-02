(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{796:function(v,_,e){"use strict";e.r(_);var o=e(3),d=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p"),_("div",{staticClass:"table-of-contents"},[_("ul",[_("li",[_("a",{attrs:{href:"#介绍"}},[v._v("介绍")])]),_("li",[_("a",{attrs:{href:"#vscode-右键打开"}},[v._v("VSCode 右键打开")]),_("ul",[_("li",[_("a",{attrs:{href:"#右键-vscode-打开桌面"}},[v._v("右键 VSCode 打开桌面")])]),_("li",[_("a",{attrs:{href:"#右键-vscode-打开文件夹"}},[v._v("右键 VSCode 打开文件夹")])]),_("li",[_("a",{attrs:{href:"#右键-vscode-打开文件"}},[v._v("右键 VSCode 打开文件")])])])]),_("li",[_("a",{attrs:{href:"#idea-右键打开"}},[v._v("IDEA 右键打开")]),_("ul",[_("li",[_("a",{attrs:{href:"#右键-idea-打开桌面"}},[v._v("右键 IDEA 打开桌面")])]),_("li",[_("a",{attrs:{href:"#右键-idea-打开文件夹"}},[v._v("右键 IDEA 打开文件夹")])]),_("li",[_("a",{attrs:{href:"#右键-idea-打开文件"}},[v._v("右键 IDEA 打开文件")])])])]),_("li",[_("a",{attrs:{href:"#结束语"}},[v._v("结束语")])]),_("li",[_("a",{attrs:{href:"#建议"}},[v._v("建议")])])])]),_("p"),v._v(" "),_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[v._v("#")]),v._v(" 介绍")]),v._v(" "),_("p",[v._v("本内容介绍如何快速通过 VSCode、IDEA 打开指定的文件夹或者文件：")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728202828.png",alt:"image-20220728202435414"}})]),v._v(" "),_("p",[v._v("本内容的目录虽然有多个，但是配置就三步：")]),v._v(" "),_("ul",[_("li",[v._v("配置显示的文字，如通过 IDEA 打开、通过 Code 打开，可以自定义文字")]),v._v(" "),_("li",[v._v("配置 IDEA 或者 VSCode 软件的图标")]),v._v(" "),_("li",[v._v("配置 IDEA 或者 VSCode 的软件路径，这样点击后才能打开软件")])]),v._v(" "),_("p",[v._v("虽然目录有六种，但是只要学会一个目录的右键打开配置，那么其他的右键打开步骤配置就非常相似，只需要换个注册表的路径即可。")]),v._v(" "),_("h2",{attrs:{id:"vscode-右键打开"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#vscode-右键打开"}},[v._v("#")]),v._v(" VSCode 右键打开")]),v._v(" "),_("h3",{attrs:{id:"右键-vscode-打开桌面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#右键-vscode-打开桌面"}},[v._v("#")]),v._v(" 右键 VSCode 打开桌面")]),v._v(" "),_("ul",[_("li",[v._v("按 WIN + R 组合键运行命令窗口")]),v._v(" "),_("li",[v._v("输入 "),_("code",[v._v("regedit")]),v._v("，然后回车打开注册表编辑器")])]),v._v(" "),_("p",[v._v("找到路径 "),_("code",[v._v("计算机\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell")]),v._v(" 的 VSCode 文件夹（项）。")]),v._v(" "),_("p",[v._v("如果之前没有设置过路径，一般需要自己建立此文件夹（项）：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("对 shell 右键 -> 新建 -> 项，然后项的名字叫 VSCode")])]),v._v(" "),_("li",[_("p",[v._v("单击新建的 VSCode，右边出现一个名称叫 "),_("mark",[v._v("(默认)")]),v._v(" 的字符串值，双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写 "),_("strong",[v._v("通过 Code 打开")]),v._v("，当然你也可以按照自己喜欢的名称填写，到时候右键的适合就会显示这个文本框内容")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728203406.png",alt:"image-20220728203405268"}})])]),v._v(" "),_("li",[_("p",[v._v("接着配置 VSCode 的图标，这样右键的时候，就会显示 VSCode 的图标，方便识别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("对新建的 VSCode 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 VSCode 软件的路径，即 Code.exe")]),v._v(" "),_("p",[v._v("如我的 VSCode 软件路径为 "),_("code",[v._v('"D:\\ITArea\\软件区\\VSCode\\Microsoft VS Code\\Code.exe"')])])])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728203721.png",alt:"image-20220728203720328"}})])]),v._v(" "),_("li",[_("p",[v._v("接着我们需要配置 VSCode 软件的路径，这样右键点击后，就会自动打开 VSCode 软件：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("对新建的 VSCode 右键 -> 新建 -> 项，名字叫做 command")])]),v._v(" "),_("li",[_("p",[v._v("然后单击 command，右边出现一个名称叫 "),_("mark",[v._v("(默认)")]),v._v(" 的字符串值，双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写你的 VSCode 软件的路径 + "),_("code",[v._v('"%V"')]),v._v("，"),_("code",[v._v('"%V"')]),v._v(" 代表打开软件")]),v._v(" "),_("p",[v._v("如我的图标路径为 "),_("code",[v._v('"D:\\ITArea\\软件区\\VSCode\\Microsoft VS Code\\Code.exe" "%V"')])])])]),v._v(" "),_("p",[v._v("如若 "),_("code",[v._v('"%V"')]),v._v(" 失效，则改为 "),_("code",[v._v('"%1"')])]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728203910.png",alt:"image-20220728203907543"}})])])]),v._v(" "),_("h3",{attrs:{id:"右键-vscode-打开文件夹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#右键-vscode-打开文件夹"}},[v._v("#")]),v._v(" 右键 VSCode 打开文件夹")]),v._v(" "),_("ul",[_("li",[v._v("按 WIN + R 组合键运行命令窗口")]),v._v(" "),_("li",[v._v("输入 "),_("code",[v._v("regedit")]),v._v("，然后回车打开注册表编辑器")])]),v._v(" "),_("p",[v._v("找到路径 "),_("code",[v._v("计算机\\HKEY_CLASSES_ROOT\\Directory\\shell")]),v._v(" 并新建文件夹（项） "),_("code",[v._v("VSCode")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("下面配置和右键 VSCode 打开桌面一样，就不放图片了，包括下面所有的配置都一样，只不过换路径。")])]),v._v(" "),_("p",[v._v("双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写 "),_("strong",[v._v("通过 Code 打开")])]),v._v(" "),_("p",[v._v("配置 VSCode 的图标，这样右键的时候，就会显示 VSCode 的图标，方便识别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("新建的 VSCode 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 VSCode 软件的路径，即 Code.exe")]),v._v(" "),_("p",[v._v("如我的 VSCode 软件路径为 "),_("code",[v._v('"D:\\ITArea\\软件区\\VSCode\\Microsoft VS Code\\Code.exe"')])])])]),v._v(" "),_("p",[v._v("接着我们需要配置 VSCode 软件的路径，这样右键点击后，就会自动打开 VSCode 软件：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("点击所建文件夹（项）鼠标右键新建项，并命名 command")])]),v._v(" "),_("li",[_("p",[v._v("双击右边的 "),_("mark",[v._v("(默认)")]),v._v(" 设置软件所在路径，并在后面加上 "),_("code",[v._v('"%V"')])])]),v._v(" "),_("li",[_("p",[v._v("如我的图标路径为 "),_("code",[v._v('"D:\\ITArea\\软件区\\VSCode\\Microsoft VS Code\\Code.exe" "%V"')])])]),v._v(" "),_("li",[_("p",[v._v("如若 "),_("code",[v._v('"%V"')]),v._v(" 失效，则改为 "),_("code",[v._v('"%1"')])])])]),v._v(" "),_("h3",{attrs:{id:"右键-vscode-打开文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#右键-vscode-打开文件"}},[v._v("#")]),v._v(" 右键 VSCode 打开文件")]),v._v(" "),_("ul",[_("li",[v._v("按 WIN + R 组合键运行命令窗口")]),v._v(" "),_("li",[v._v("输入 "),_("code",[v._v("regedit")]),v._v("，然后回车打开注册表编辑器")])]),v._v(" "),_("p",[v._v("找到路径 "),_("code",[v._v("计算机\\HKEY_CLASSES_ROOT\\*\\shell")]),v._v(" 并新建文件夹（项） "),_("code",[v._v("VSCode")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("和上面一样，配置默认、Icon 和 command 内容。")])]),v._v(" "),_("p",[v._v("双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写 "),_("strong",[v._v("通过 Code 打开")])]),v._v(" "),_("p",[v._v("配置 VSCode 的图标，这样右键的时候，就会显示 VSCode 的图标，方便识别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("新建的 VSCode 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 VSCode 软件的路径，即 Code.exe")]),v._v(" "),_("p",[v._v("如我的 VSCode 软件路径为 "),_("code",[v._v('"D:\\ITArea\\软件区\\VSCode\\Microsoft VS Code\\Code.exe"')])])])]),v._v(" "),_("p",[v._v("接着我们需要配置 VSCode 软件的路径，这样右键点击后，就会自动打开 VSCode 软件：")]),v._v(" "),_("ul",[_("li",[v._v("点击所建文件夹（项）鼠标右键新建项，并命名 command")]),v._v(" "),_("li",[v._v("双击右边的 "),_("mark",[v._v("(默认)")]),v._v(" 设置软件所在路径，并在后面加上 "),_("code",[v._v('"%V"')])]),v._v(" "),_("li",[v._v("如我的图标路径为 "),_("code",[v._v('"D:\\ITArea\\软件区\\VSCode\\Microsoft VS Code\\Code.exe" "%V"')])]),v._v(" "),_("li",[v._v("如若 "),_("code",[v._v('"%V"')]),v._v(" 失效，则改为 "),_("code",[v._v('"%1"')])])]),v._v(" "),_("h2",{attrs:{id:"idea-右键打开"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#idea-右键打开"}},[v._v("#")]),v._v(" IDEA 右键打开")]),v._v(" "),_("p",[v._v("IDEA 右键打开和 VSCode 右键打开的配置一样，只需要更换 IDEA 的路径即可。")]),v._v(" "),_("h3",{attrs:{id:"右键-idea-打开桌面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#右键-idea-打开桌面"}},[v._v("#")]),v._v(" 右键 IDEA 打开桌面")]),v._v(" "),_("ul",[_("li",[v._v("按 WIN + R 组合键运行命令窗口")]),v._v(" "),_("li",[v._v("输入 "),_("code",[v._v("regedit")]),v._v("，然后回车打开注册表编辑器")])]),v._v(" "),_("p",[v._v("找到路径 "),_("code",[v._v("计算机\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell")]),v._v(" 的 IDEA 文件夹（项）。")]),v._v(" "),_("p",[v._v("如果之前没有设置过路径，一般需要自己建立此文件夹（项）：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("对 shell 右键 -> 新建 -> 项，然后项的名字叫 IDEA")])]),v._v(" "),_("li",[_("p",[v._v("单击新建的 IDEA，右边出现一个名称叫 "),_("mark",[v._v("(默认)")]),v._v(" 的字符串值，双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写 "),_("strong",[v._v("通过 IDEA 打开")]),v._v("，当然你也可以按照自己喜欢的名称填写，到时候右键的适合就会显示这个文本框内容")])]),v._v(" "),_("li",[_("p",[v._v("接着配置 IDEA 的图标，这样右键的时候，就会显示 IDEA 的图标，方便识别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("对新建的 IDEA 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 IDEA 软件的路径，即 idea64.exe")]),v._v(" "),_("p",[v._v("如我的 IDEA 软件路径为 "),_("code",[v._v('"F:\\软件区\\IDEA\\IntelliJ IDEA 2021.3.3\\bin\\idea64.exe"')])])])])]),v._v(" "),_("li",[_("p",[v._v("接着我们需要配置 IDEA 软件的路径，这样右键点击后，就会自动打开 IDEA 软件：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("对新建的 IDEA 右键 -> 新建 -> 项，名字叫做 command")])]),v._v(" "),_("li",[_("p",[v._v("然后单击 command，右边出现一个名称叫 "),_("mark",[v._v("(默认)")]),v._v(" 的字符串值，双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写你的 IDEA 软件的路径 + "),_("code",[v._v('"%V"')]),v._v("，其中 "),_("code",[v._v('"%V"')]),v._v(" 代表打开软件")]),v._v(" "),_("p",[v._v("如我的图标路径为 "),_("code",[v._v('"F:\\软件区\\IDEA\\IntelliJ IDEA 2021.3.3\\bin\\idea64.exe" "%V"')])])])]),v._v(" "),_("p",[v._v("如若 "),_("code",[v._v('"%V"')]),v._v(" 失效，则改为 "),_("code",[v._v('"%1"')])])])]),v._v(" "),_("h3",{attrs:{id:"右键-idea-打开文件夹"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#右键-idea-打开文件夹"}},[v._v("#")]),v._v(" 右键 IDEA 打开文件夹")]),v._v(" "),_("ul",[_("li",[v._v("按 WIN + R 组合键运行命令窗口")]),v._v(" "),_("li",[v._v("输入 "),_("code",[v._v("regedit")]),v._v("，然后回车打开注册表编辑器")])]),v._v(" "),_("p",[v._v("找到路径 "),_("code",[v._v("计算机\\HKEY_CLASSES_ROOT\\Directory\\shell")]),v._v(" 并新建文件夹（项）"),_("code",[v._v("IDEA")]),v._v("。")]),v._v(" "),_("p",[v._v("双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写 "),_("strong",[v._v("通过 IDEA 打开")])]),v._v(" "),_("p",[v._v("配置 IDEA 的图标，这样右键的时候，就会显示 IDEA 的图标，方便识别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("新建的 IDEA 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 IDEA 软件的路径，即 idea64.exe")]),v._v(" "),_("p",[v._v("如我的 IDEA 软件路径为 "),_("code",[v._v('"F:\\软件区\\IDEA\\IntelliJ IDEA 2021.3.3\\bin\\idea64.exe"')])])])]),v._v(" "),_("p",[v._v("接着我们需要配置 IDEA 软件的路径，这样右键点击后，就会自动打开 IDEA 软件：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("点击所建文件夹（项）鼠标右键新建项，并命名 command")])]),v._v(" "),_("li",[_("p",[v._v("双击右边的 "),_("mark",[v._v("(默认)")]),v._v(" 设置软件所在路径，并在后面加上 "),_("code",[v._v('"%V"')])])]),v._v(" "),_("li",[_("p",[v._v("如我的图标路径为 "),_("code",[v._v('F:\\软件区\\IDEA\\IntelliJ IDEA 2021.3.3\\bin\\idea64.exe" "%V"')])])]),v._v(" "),_("li",[_("p",[v._v("如若 "),_("code",[v._v('"%V"')]),v._v(" 失效，则改为 "),_("code",[v._v('"%1"')])])])]),v._v(" "),_("h3",{attrs:{id:"右键-idea-打开文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#右键-idea-打开文件"}},[v._v("#")]),v._v(" 右键 IDEA 打开文件")]),v._v(" "),_("ul",[_("li",[v._v("按 WIN + R 组合键运行命令窗口")]),v._v(" "),_("li",[v._v("输入 "),_("code",[v._v("regedit")]),v._v("，然后回车打开注册表编辑器")])]),v._v(" "),_("p",[v._v("找到路径 "),_("code",[v._v("计算机\\HKEY_CLASSES_ROOT\\*\\shell")]),v._v(" 并新建文件夹（项）"),_("code",[v._v("IDEA")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("和上面的步骤一样，配置默认、Icon 和 command 内容。")])]),v._v(" "),_("p",[v._v("双击 "),_("mark",[v._v("(默认)")]),v._v("，然后在弹出的窗口中，数值数据的文本框写 "),_("strong",[v._v("通过 IDEA 打开")])]),v._v(" "),_("p",[v._v("配置 IDEA 的图标，这样右键的时候，就会显示 IDEA 的图标，方便识别")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("新建的 IDEA 右键 -> 新建 -> 字符串值，然后名称为 Icon，接着双击 Icon，数值数据的文本框为你的 IDEA 软件的路径，即 idea64.exe")]),v._v(" "),_("p",[v._v("如我的 IDEA 软件路径为 "),_("code",[v._v('"F:\\软件区\\IDEA\\IntelliJ IDEA 2021.3.3\\bin\\idea64.exe"')])])])]),v._v(" "),_("p",[v._v("接着我们需要配置 IDEA 软件的路径，这样右键点击后，就会自动打开 IDEA 软件：")]),v._v(" "),_("ul",[_("li",[v._v("点击所建文件夹（项）鼠标右键新建项，并命名 command")]),v._v(" "),_("li",[v._v("双击右边的 "),_("mark",[v._v("(默认)")]),v._v(" 设置软件所在路径，并在后面加上 "),_("code",[v._v('"%V"')])]),v._v(" "),_("li",[v._v("如我的图标路径为 "),_("code",[v._v('"F:\\软件区\\IDEA\\IntelliJ IDEA 2021.3.3\\bin\\idea64.exe" "%V"')])]),v._v(" "),_("li",[v._v("如若 "),_("code",[v._v('"%V"')]),v._v(" 失效，则改为 "),_("code",[v._v('"%1"')])])]),v._v(" "),_("h2",{attrs:{id:"结束语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[v._v("#")]),v._v(" 结束语")]),v._v(" "),_("p",[v._v("配置完后，可以在桌面、文件夹、文件夹内、文件进行鼠标右键，看看是否有配置成功。")]),v._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/%E8%BD%AE%E5%AD%90%E4%BD%BF%E7%94%A8/20220728202828.png",alt:"image-20220728202435414"}})]),v._v(" "),_("h2",{attrs:{id:"建议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#建议"}},[v._v("#")]),v._v(" 建议")]),v._v(" "),_("p",[v._v("一般不建议 IDEA 配置桌面的右键，因为用 IDEA 打开项目，一般是右键某个文件夹项目，如果配置桌面右键，这样不常用，每次右键总看到右键的菜单很长，就很烦。")])])}),[],!1,null,null,null);_.default=d.exports}}]);