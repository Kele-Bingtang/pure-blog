(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{481:function(t,s,_){"use strict";_.r(s);var a=_(3),v=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#sql执行顺序"}},[t._v("SQL执行顺序")])]),s("li",[s("a",{attrs:{href:"#正则表达式使用"}},[t._v("正则表达式使用")])]),s("li",[s("a",{attrs:{href:"#mysql-常用函数"}},[t._v("MySQL 常用函数")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"sql执行顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql执行顺序"}},[t._v("#")]),t._v(" SQL执行顺序")]),t._v(" "),s("p",[t._v("编写顺序")]),t._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("left_table"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("right_table"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("where_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("group_by_list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("having_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("order_by_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("limit_params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("p",[t._v("执行顺序")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("left_table"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" \t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("join_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("right_table"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("where_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" \t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("group_by_list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("having_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("order_by_condition"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("limit_params"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("h2",{attrs:{id:"正则表达式使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式使用"}},[t._v("#")]),t._v(" 正则表达式使用")]),t._v(" "),s("p",[t._v("正则表达式（Regular Expression）是指一个用来描述或者匹配一系列符合某个句法规则的字符串的单个字符串。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("符号")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("^")]),t._v(" "),s("td",[t._v("在字符串开始处进行匹配")])]),t._v(" "),s("tr",[s("td",[t._v("$")]),t._v(" "),s("td",[t._v("在字符串末尾处进行匹配")])]),t._v(" "),s("tr",[s("td",[t._v(".")]),t._v(" "),s("td",[t._v("匹配任意单个字符，包括换行符")])]),t._v(" "),s("tr",[s("td",[t._v("[...]")]),t._v(" "),s("td",[t._v("匹配出括号内的任意字符")])]),t._v(" "),s("tr",[s("td",[t._v("[^...]")]),t._v(" "),s("td",[t._v("匹配不出括号内的任意字符")])]),t._v(" "),s("tr",[s("td",[t._v("a*")]),t._v(" "),s("td",[t._v("匹配零个或者多个a （包括空串）")])]),t._v(" "),s("tr",[s("td",[t._v("a+")]),t._v(" "),s("td",[t._v("匹配一个或者多个 a（不包括空串）")])]),t._v(" "),s("tr",[s("td",[t._v("a?")]),t._v(" "),s("td",[t._v("匹配零个或者一个 a")])]),t._v(" "),s("tr",[s("td",[t._v("a1|a2")]),t._v(" "),s("td",[t._v("匹配 a1 或 a2")])]),t._v(" "),s("tr",[s("td",[t._v("a(m)")]),t._v(" "),s("td",[t._v("匹配 m 个 a")])]),t._v(" "),s("tr",[s("td",[t._v("a(m,)")]),t._v(" "),s("td",[t._v("至少匹配 m 个 a")])]),t._v(" "),s("tr",[s("td",[t._v("a(m,n)")]),t._v(" "),s("td",[t._v("匹配 m 个 a 到 n 个 a")])]),t._v(" "),s("tr",[s("td",[t._v("a(,n)")]),t._v(" "),s("td",[t._v("匹配 0 到 n 个 a")])]),t._v(" "),s("tr",[s("td",[t._v("(...)")]),t._v(" "),s("td",[t._v("将模式元素组成单一元素")])])])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" emp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("regexp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'^T'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" emp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("regexp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2$'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" emp "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("regexp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[uvw]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"mysql-常用函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常用函数"}},[t._v("#")]),t._v(" MySQL 常用函数")]),t._v(" "),s("p",[t._v("数字函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数名称")]),t._v(" "),s("th",[t._v("作 用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ABS")]),t._v(" "),s("td",[t._v("求绝对值")])]),t._v(" "),s("tr",[s("td",[t._v("SQRT")]),t._v(" "),s("td",[t._v("求二次方根")])]),t._v(" "),s("tr",[s("td",[t._v("MOD")]),t._v(" "),s("td",[t._v("求余数")])]),t._v(" "),s("tr",[s("td",[t._v("CEIL 和 CEILING")]),t._v(" "),s("td",[t._v("两个函数功能相同，都是返回不小于参数的最小整数，即向上取整")])]),t._v(" "),s("tr",[s("td",[t._v("FLOOR")]),t._v(" "),s("td",[t._v("向下取整，返回值转化为一个 BIGINT")])]),t._v(" "),s("tr",[s("td",[t._v("RAND")]),t._v(" "),s("td",[t._v("生成一个 0~1 之间的随机数，传入整数参数是，用来产生重复序列")])]),t._v(" "),s("tr",[s("td",[t._v("ROUND")]),t._v(" "),s("td",[t._v("对所传参数进行四舍五入")])]),t._v(" "),s("tr",[s("td",[t._v("SIGN")]),t._v(" "),s("td",[t._v("返回参数的符号")])]),t._v(" "),s("tr",[s("td",[t._v("POW 和 POWER")]),t._v(" "),s("td",[t._v("两个函数的功能相同，都是所传参数的次方的结果值")])]),t._v(" "),s("tr",[s("td",[t._v("SIN")]),t._v(" "),s("td",[t._v("求正弦值")])]),t._v(" "),s("tr",[s("td",[t._v("ASIN")]),t._v(" "),s("td",[t._v("求反正弦值，与函数 SIN 互为反函数")])]),t._v(" "),s("tr",[s("td",[t._v("COS")]),t._v(" "),s("td",[t._v("求余弦值")])]),t._v(" "),s("tr",[s("td",[t._v("ACOS")]),t._v(" "),s("td",[t._v("求反余弦值，与函数 COS 互为反函数")])]),t._v(" "),s("tr",[s("td",[t._v("TAN")]),t._v(" "),s("td",[t._v("求正切值")])]),t._v(" "),s("tr",[s("td",[t._v("ATAN")]),t._v(" "),s("td",[t._v("求反正切值，与函数 TAN 互为反函数")])]),t._v(" "),s("tr",[s("td",[t._v("COT")]),t._v(" "),s("td",[t._v("求余切值")])])])]),t._v(" "),s("p",[t._v("字符串函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数名称")]),t._v(" "),s("th",[t._v("作 用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("LENGTH")]),t._v(" "),s("td",[t._v("计算字符串长度函数，返回字符串的字节长度")])]),t._v(" "),s("tr",[s("td",[t._v("CONCAT")]),t._v(" "),s("td",[t._v("合并字符串函数，返回结果为连接参数产生的字符串，参数可以使一个或多个")])]),t._v(" "),s("tr",[s("td",[t._v("INSERT")]),t._v(" "),s("td",[t._v("替换字符串函数")])]),t._v(" "),s("tr",[s("td",[t._v("LOWER")]),t._v(" "),s("td",[t._v("将字符串中的字母转换为小写")])]),t._v(" "),s("tr",[s("td",[t._v("UPPER")]),t._v(" "),s("td",[t._v("将字符串中的字母转换为大写")])]),t._v(" "),s("tr",[s("td",[t._v("LEFT")]),t._v(" "),s("td",[t._v("从左侧字截取符串，返回字符串左边的若干个字符")])]),t._v(" "),s("tr",[s("td",[t._v("RIGHT")]),t._v(" "),s("td",[t._v("从右侧字截取符串，返回字符串右边的若干个字符")])]),t._v(" "),s("tr",[s("td",[t._v("TRIM")]),t._v(" "),s("td",[t._v("删除字符串左右两侧的空格")])]),t._v(" "),s("tr",[s("td",[t._v("REPLACE")]),t._v(" "),s("td",[t._v("字符串替换函数，返回替换后的新字符串")])]),t._v(" "),s("tr",[s("td",[t._v("SUBSTRING")]),t._v(" "),s("td",[t._v("截取字符串，返回从指定位置开始的指定长度的字符换")])]),t._v(" "),s("tr",[s("td",[t._v("REVERSE")]),t._v(" "),s("td",[t._v("字符串反转（逆序）函数，返回与原始字符串顺序相反的字符串")])])])]),t._v(" "),s("p",[t._v("日期函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数名称")]),t._v(" "),s("th",[t._v("作 用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("CURDATE 和 CURRENT_DATE")]),t._v(" "),s("td",[t._v("两个函数作用相同，返回当前系统的日期值")])]),t._v(" "),s("tr",[s("td",[t._v("CURTIME 和 CURRENT_TIME")]),t._v(" "),s("td",[t._v("两个函数作用相同，返回当前系统的时间值")])]),t._v(" "),s("tr",[s("td",[t._v("NOW 和  SYSDATE")]),t._v(" "),s("td",[t._v("两个函数作用相同，返回当前系统的日期和时间值")])]),t._v(" "),s("tr",[s("td",[t._v("MONTH")]),t._v(" "),s("td",[t._v("获取指定日期中的月份")])]),t._v(" "),s("tr",[s("td",[t._v("MONTHNAME")]),t._v(" "),s("td",[t._v("获取指定日期中的月份英文名称")])]),t._v(" "),s("tr",[s("td",[t._v("DAYNAME")]),t._v(" "),s("td",[t._v("获取指定曰期对应的星期几的英文名称")])]),t._v(" "),s("tr",[s("td",[t._v("DAYOFWEEK")]),t._v(" "),s("td",[t._v("获取指定日期对应的一周的索引位置值")])]),t._v(" "),s("tr",[s("td",[t._v("WEEK")]),t._v(" "),s("td",[t._v("获取指定日期是一年中的第几周，返回值的范围是否为 0〜52 或 1〜53")])]),t._v(" "),s("tr",[s("td",[t._v("DAYOFYEAR")]),t._v(" "),s("td",[t._v("获取指定曰期是一年中的第几天，返回值范围是 1~366")])]),t._v(" "),s("tr",[s("td",[t._v("DAYOFMONTH")]),t._v(" "),s("td",[t._v("获取指定日期是一个月中是第几天，返回值范围是 1~31")])]),t._v(" "),s("tr",[s("td",[t._v("YEAR")]),t._v(" "),s("td",[t._v("获取年份，返回值范围是 1970〜2069")])]),t._v(" "),s("tr",[s("td",[t._v("TIME_TO_SEC")]),t._v(" "),s("td",[t._v("将时间参数转换为秒数")])]),t._v(" "),s("tr",[s("td",[t._v("SEC_TO_TIME")]),t._v(" "),s("td",[t._v("将秒数转换为时间，与 TIME_TO_SEC 互为反函数")])]),t._v(" "),s("tr",[s("td",[t._v("DATE_ADD 和 ADDDATE")]),t._v(" "),s("td",[t._v("两个函数功能相同，都是向日期添加指定的时间间隔")])]),t._v(" "),s("tr",[s("td",[t._v("DATE_SUB 和 SUBDATE")]),t._v(" "),s("td",[t._v("两个函数功能相同，都是向日期减去指定的时间间隔")])]),t._v(" "),s("tr",[s("td",[t._v("ADDTIME")]),t._v(" "),s("td",[t._v("时间加法运算，在原始时间上添加指定的时间")])]),t._v(" "),s("tr",[s("td",[t._v("SUBTIME")]),t._v(" "),s("td",[t._v("时间减法运算，在原始时间上减去指定的时间")])]),t._v(" "),s("tr",[s("td",[t._v("DATEDIFF")]),t._v(" "),s("td",[t._v("获取两个日期之间间隔，返回参数 1 减去参数 2 的值")])]),t._v(" "),s("tr",[s("td",[t._v("DATE_FORMAT")]),t._v(" "),s("td",[t._v("格式化指定的日期，根据参数返回指定格式的值")])]),t._v(" "),s("tr",[s("td",[t._v("WEEKDAY")]),t._v(" "),s("td",[t._v("获取指定日期在一周内的对应的工作日索引")])])])]),t._v(" "),s("p",[t._v("聚合函数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数名称")]),t._v(" "),s("th",[t._v("作用")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("MAX")]),t._v(" "),s("td",[t._v("查询指定列的最大值")])]),t._v(" "),s("tr",[s("td",[t._v("MIN")]),t._v(" "),s("td",[t._v("查询指定列的最小值")])]),t._v(" "),s("tr",[s("td",[t._v("COUNT")]),t._v(" "),s("td",[t._v("统计查询结果的行数")])]),t._v(" "),s("tr",[s("td",[t._v("SUM")]),t._v(" "),s("td",[t._v("求和，返回指定列的总和")])]),t._v(" "),s("tr",[s("td",[t._v("AVG")]),t._v(" "),s("td",[t._v("求平均值，返回指定列数据的平均值")])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);