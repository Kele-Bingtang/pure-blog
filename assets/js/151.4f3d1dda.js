(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{475:function(t,a,s){"use strict";s.r(a);var e=s(3),v=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),a("p",[t._v("Redis 全名叫 Remote Dictionary Server，即远程字典服务，是一个开源的使用 ANSIC 语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API。")]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[t._v("2021-12-25 @Young Kbt")])])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#技术发展"}},[t._v("技术发展")]),a("ul",[a("li",[a("a",{attrs:{href:"#web1-0时代"}},[t._v("Web1.0时代")])]),a("li",[a("a",{attrs:{href:"#web2-0时代"}},[t._v("Web2.0时代")])]),a("li",[a("a",{attrs:{href:"#解决cpu及内存压力"}},[t._v("解决CPU及内存压力")])]),a("li",[a("a",{attrs:{href:"#解决io压力"}},[t._v("解决IO压力")])])])]),a("li",[a("a",{attrs:{href:"#nosql数据库"}},[t._v("NoSQL数据库")]),a("ul",[a("li",[a("a",{attrs:{href:"#概述"}},[t._v("概述")])]),a("li",[a("a",{attrs:{href:"#适用场景"}},[t._v("适用场景")])]),a("li",[a("a",{attrs:{href:"#不适用场景"}},[t._v("不适用场景")])]),a("li",[a("a",{attrs:{href:"#memcache"}},[t._v("Memcache")])]),a("li",[a("a",{attrs:{href:"#redis"}},[t._v("Redis")])]),a("li",[a("a",{attrs:{href:"#mongodb"}},[t._v("MongoDB")])])])]),a("li",[a("a",{attrs:{href:"#行式存储数据库-大数据时代"}},[t._v("行式存储数据库（大数据时代）")]),a("ul",[a("li",[a("a",{attrs:{href:"#行式数据库"}},[t._v("行式数据库")])]),a("li",[a("a",{attrs:{href:"#列式数据库"}},[t._v("列式数据库")])]),a("li",[a("a",{attrs:{href:"#hbase"}},[t._v("Hbase")])]),a("li",[a("a",{attrs:{href:"#cassandra"}},[t._v("Cassandra")])]),a("li",[a("a",{attrs:{href:"#计算机存储单位"}},[t._v("计算机存储单位")])])])]),a("li",[a("a",{attrs:{href:"#图关系型数据库"}},[t._v("图关系型数据库")])]),a("li",[a("a",{attrs:{href:"#db-engines-数据库排名"}},[t._v("DB-Engines 数据库排名")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"技术发展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术发展"}},[t._v("#")]),t._v(" 技术发展")]),t._v(" "),a("p",[t._v("技术的分类")]),t._v(" "),a("ul",[a("li",[t._v("解决功能性的问题：Java、Jsp、RDBMS、Tomcat、HTML、Linux、JDBC、SVN")]),t._v(" "),a("li",[t._v("解决扩展性的问题：Struts、Spring、SpringMVC、Hibernate、Mybatis")]),t._v(" "),a("li",[t._v("解决性能的问题：NoSQL、Java 线程、Hadoop、Nginx、MQ、ElasticSearch")])]),t._v(" "),a("h3",{attrs:{id:"web1-0时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web1-0时代"}},[t._v("#")]),t._v(" Web1.0时代")]),t._v(" "),a("p",[t._v("Web1.0 的时代，数据访问量很有限，用一夫当关的高性能的单点服务器可以解决大部分问题。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225224242.png",alt:"image-20211225224241740"}})]),t._v(" "),a("h3",{attrs:{id:"web2-0时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web2-0时代"}},[t._v("#")]),t._v(" Web2.0时代")]),t._v(" "),a("p",[t._v("随着 Web2.0 的时代的到来，用户访问量大幅度提升，同时产生了大量的用户数据。加上后来的智能移动设备的普及，所有的互联网平台都面临了巨大的性能挑战。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225224311.png",alt:"image-20211225224309160"}})]),t._v(" "),a("h3",{attrs:{id:"解决cpu及内存压力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决cpu及内存压力"}},[t._v("#")]),t._v(" 解决CPU及内存压力")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225224330.png",alt:"image-20211225224328928"}})]),t._v(" "),a("h3",{attrs:{id:"解决io压力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决io压力"}},[t._v("#")]),t._v(" 解决IO压力")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225224348.png",alt:"image-20211225224346984"}})]),t._v(" "),a("h2",{attrs:{id:"nosql数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nosql数据库"}},[t._v("#")]),t._v(" NoSQL数据库")]),t._v(" "),a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("NoSQL(NoSQL = Not Only SQL )，意即「不仅仅是 SQL」，泛指非关系型的数据库。NoSQL 不依赖业务逻辑方式存储，而以简单的 key-value 模式存储。因此大大的增加了数据库的扩展能力。")]),t._v(" "),a("ul",[a("li",[t._v("不遵循 SQL 标准")]),t._v(" "),a("li",[t._v("不支持 ACID（关系型数据库四大特性）")]),t._v(" "),a("li",[t._v("不遵循 SQL 标准")])]),t._v(" "),a("h3",{attrs:{id:"适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("对数据高并发的读写")]),t._v(" "),a("li",[t._v("海量数据的读写")]),t._v(" "),a("li",[t._v("海量数据的读写")])]),t._v(" "),a("h3",{attrs:{id:"不适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不适用场景"}},[t._v("#")]),t._v(" 不适用场景")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("需要事务支持")])]),t._v(" "),a("li",[a("p",[t._v("基于 sql 的结构化查询存储，处理复杂的关系,需要 "),a("strong",[t._v("即席")]),t._v(" 查询")])]),t._v(" "),a("li",[a("p",[t._v("用不着 sql 的和用了 sql 也不行的情况，请考虑用 NoSql")])])]),t._v(" "),a("h3",{attrs:{id:"memcache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memcache"}},[t._v("#")]),t._v(" Memcache")]),t._v(" "),a("p",[t._v("其特点为：")]),t._v(" "),a("ul",[a("li",[t._v("很早出现的 NoSql 数据库")]),t._v(" "),a("li",[t._v("数据都在内存中，一般 "),a("strong",[t._v("不持久化")])]),t._v(" "),a("li",[t._v("支持简单的 key-value 模式，"),a("strong",[t._v("支持类型单一")])]),t._v(" "),a("li",[t._v("一般是作为 "),a("strong",[t._v("缓存数据库")]),t._v(" 辅助持久化的数据库")])]),t._v(" "),a("h3",{attrs:{id:"redis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),a("p",[t._v("其特点为：")]),t._v(" "),a("ul",[a("li",[t._v("几乎覆盖了 Memcached 的绝大部分功能")]),t._v(" "),a("li",[t._v("数据都在内存中，"),a("strong",[t._v("支持持久化")]),t._v("，主要用作备份恢复")]),t._v(" "),a("li",[t._v("除了支持简单的 key-value 模式，还 "),a("strong",[t._v("支持多种数据结构 的存储")]),t._v("，比如 list、set、hash、zset 等")]),t._v(" "),a("li",[t._v("一般是作为 "),a("strong",[t._v("缓存数据库")]),t._v(" 辅助持久化的数据库")])]),t._v(" "),a("h3",{attrs:{id:"mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mongodb"}},[t._v("#")]),t._v(" MongoDB")]),t._v(" "),a("ul",[a("li",[t._v("高性能、开源、模式自由(schema free)的 "),a("strong",[t._v("文档型数据库")])]),t._v(" "),a("li",[t._v("数据都在内存中，如果内存不足，把不常用的数据保存到硬盘")]),t._v(" "),a("li",[t._v("虽然是 key-value 模式 ， 但是对 value（尤其是 "),a("code",[t._v("json")]),t._v("）提供了丰富的查询功能")]),t._v(" "),a("li",[t._v("支持二进制数据及大型对象")]),t._v(" "),a("li",[t._v("可以根据数据的特点 "),a("strong",[t._v("替代 RDBMS")]),t._v(" ，成为独立的数据库。或者配合 RDBMS，存储特定的数据")])]),t._v(" "),a("h2",{attrs:{id:"行式存储数据库-大数据时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行式存储数据库-大数据时代"}},[t._v("#")]),t._v(" 行式存储数据库（大数据时代）")]),t._v(" "),a("h3",{attrs:{id:"行式数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行式数据库"}},[t._v("#")]),t._v(" 行式数据库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225225013.png",alt:"image-20211225225008718"}})]),t._v(" "),a("h3",{attrs:{id:"列式数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列式数据库"}},[t._v("#")]),t._v(" 列式数据库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225225105.png",alt:"image-20211225225104374"}})]),t._v(" "),a("h3",{attrs:{id:"hbase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hbase"}},[t._v("#")]),t._v(" Hbase")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225225359.png",alt:"image-20211225225231151"}})]),t._v(" "),a("p",[t._v("HBase 是 Hadoop 项目中的数据库。它用于需要对大量的数据进行随机、实时的读写操作的场景中。")]),t._v(" "),a("p",[t._v("HBase 的目标就是处理数据量非常庞大的表，可以用普通的计算机处理超过 10 亿行数据，还可处理有数百万列元素的数据表。")]),t._v(" "),a("h3",{attrs:{id:"cassandra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cassandra"}},[t._v("#")]),t._v(" Cassandra")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225225225.png",alt:"image-20211225225224398"}})]),t._v(" "),a("p",[t._v("Apache Cassandra 是一款免费的开源 NoSQL 数据库，其设计目的在于管理由大量商用服务器构建起来的庞大集群上的海量数据集(数据量通常达到 PB 级别)。在众多显著特性当中，Cassandra 最为卓越的长处是对写入及读取操作进行规模调整，而且其不强调主集群的设计思路能够以相对直观的方式简化各集群的创建与扩展流程。")]),t._v(" "),a("h3",{attrs:{id:"计算机存储单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机存储单位"}},[t._v("#")]),t._v(" 计算机存储单位")]),t._v(" "),a("p",[t._v("计算机存储单位一般用 B，KB，MB，GB，TB，EB，ZB，YB，BB 来表示，它们之间的关系是：")]),t._v(" "),a("ul",[a("li",[t._v("位 bit（比特）（Binary Digits）：存放一位二进制数，即 0 或 1，最小的存储单位")]),t._v(" "),a("li",[t._v("字节 byte：8 个二进制位为一个字节 (B)，最常用的单位")]),t._v(" "),a("li",[t._v("1KB）Kilobyte 千字节）= 1024B")]),t._v(" "),a("li",[t._v("1MB（Megabyte 兆字节 简称「兆」）= 1024KB")]),t._v(" "),a("li",[t._v("1GB（Gigabyte 吉字节 又称「千兆」）= 1024MB")]),t._v(" "),a("li",[t._v("1TB（Trillionbyte 万亿字节 太字节）= 1024GB，其中 1024 = 2^10 ( 2 的 10 次方)")]),t._v(" "),a("li",[t._v("1PB（Petabyte 千万亿字节 拍字节）= 1024TB")]),t._v(" "),a("li",[t._v("1EB（Exabyte 百亿亿字节 艾字节）= 1024PB")]),t._v(" "),a("li",[t._v("1ZB（Zettabyte 十万亿亿字节 泽字节）= 1024 EB")]),t._v(" "),a("li",[t._v("1YB（Jottabyte 一亿亿亿字节 尧字节）= 1024 ZB")]),t._v(" "),a("li",[t._v("1BB（Brontobyte 一千亿亿亿字节）= 1024 YB")])]),t._v(" "),a("p",[t._v("注：「兆」为百万级数量单位。")]),t._v(" "),a("h2",{attrs:{id:"图关系型数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图关系型数据库"}},[t._v("#")]),t._v(" 图关系型数据库")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225225730.png",alt:"image-20211225225729173"}})]),t._v(" "),a("p",[t._v("主要应用：社会关系，公共交通网络，地图及网络拓谱（n*(n-1)/2）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225225721.png",alt:"image-20211225225720116"}})]),t._v(" "),a("h2",{attrs:{id:"db-engines-数据库排名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#db-engines-数据库排名"}},[t._v("#")]),t._v(" DB-Engines 数据库排名")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://db-engines.com/en/ranking",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://db-engines.com/en/ranking"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Kele-Bingtang/static/img/Redis/20211225230110.png",alt:"image-20211225225806375"}})])])}),[],!1,null,null,null);a.default=v.exports}}]);