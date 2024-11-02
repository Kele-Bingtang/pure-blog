(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{552:function(_,t,v){"use strict";v.r(t);var d=v(3),r=Object(d.a)({},(function(){var _=this,t=_._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("div",{staticClass:"custom-block note"},[t("p",{staticClass:"custom-block-title"},[_._v("笔记")]),_._v(" "),t("p",[_._v("这里是 "),t("code",[_._v("ngx_lua")]),_._v(" 模块的文档表总结。")]),_._v(" "),t("div",{staticClass:"custom-block right"},[t("p",[_._v("2021-11-30 @Young Kbt")])])]),_._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#常量"}},[_._v("常量")])]),t("li",[t("a",{attrs:{href:"#api"}},[_._v("API")])]),t("li",[t("a",{attrs:{href:"#指令"}},[_._v("指令")])])])]),t("p"),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.kancloud.cn/qq13867685/openresty-api-cn/159175",target:"_blank",rel:"noopener noreferrer"}},[_._v("OpenRestry 中文文档"),t("OutboundLink")],1)]),_._v(" "),t("h2",{attrs:{id:"常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[_._v("#")]),_._v(" 常量")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("常量")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("Core constants")]),_._v(" "),t("td",[_._v("ngx.OK　　　　　　　(0)"),t("br"),_._v("ngx.ERROR　　　　　(-1)"),t("br"),_._v("ngx.AGAIN　　　　　(-2)"),t("br"),_._v("ngx.DONE　　　　　(-4)"),t("br"),_._v("ngx.DECLINED　　　(-5)"),t("br"),_._v("ngx.nil")])]),_._v(" "),t("tr",[t("td",[_._v("HTTP method constants")]),_._v(" "),t("td",[_._v("ngx.HTTP_GET"),t("br"),_._v("ngx.HTTP_HEAD"),t("br"),_._v("ngx.HTTP_PUT"),t("br"),_._v("ngx.HTTP_POST"),t("br"),_._v("ngx.HTTP_DELETE"),t("br"),_._v("ngx.HTTP_OPTIONS  "),t("br"),_._v("ngx.HTTP_MKCOL    "),t("br"),_._v("ngx.HTTP_COPY      "),t("br"),_._v("ngx.HTTP_MOVE     "),t("br"),_._v("ngx.HTTP_PROPFIND "),t("br"),_._v("ngx.HTTP_PROPPATCH "),t("br"),_._v("ngx.HTTP_LOCK "),t("br"),_._v("ngx.HTTP_UNLOCK    "),t("br"),_._v("ngx.HTTP_PATCH   "),t("br"),_._v("ngx.HTTP_TRACE  "),t("br")])]),_._v(" "),t("tr",[t("td",[_._v("HTTP status constants")]),_._v(" "),t("td",[_._v("ngx.HTTP_OK　　　　　　　　　　　　　　(200)"),t("br"),_._v("ngx.HTTP_CREATED　　　　　　　　　　　 (201)"),t("br"),_._v("ngx.HTTP_SPECIAL_RESPONSE　　　　　　　(300)"),t("br"),_._v("ngx.HTTP_MOVED_PERMANENTLY　　　　　(301)"),t("br"),_._v("ngx.HTTP_MOVED_TEMPORARILY　　　　　(302)"),t("br"),_._v("ngx.HTTP_SEE_OTHER　　　　　　　　　　(303)"),t("br"),_._v("ngx.HTTP_NOT_MODIFIED　　　　　　　　(304)"),t("br"),_._v("ngx.HTTP_BAD_REQUEST　　　　　　　　　(400)"),t("br"),_._v("ngx.HTTP_UNAUTHORIZED　　　　　　　　(401)"),t("br"),_._v("ngx.HTTP_FORBIDDEN　　　　　　　　　　(403)"),t("br"),_._v("ngx.HTTP_NOT_FOUND　　　　　　　　　　(404)"),t("br"),_._v("ngx.HTTP_NOT_ALLOWED　　　　　　　　　(405)"),t("br"),_._v("ngx.HTTP_GONE　　　　　　　　　　　　　(410)"),t("br"),_._v("ngx.HTTP_INTERNAL_SERVER_ERROR　　　　(500)"),t("br"),_._v("ngx.HTTP_METHOD_NOT_IMPLEMENTED　　(501)"),t("br"),_._v("ngx.HTTP_SERVICE_UNAVAILABLE　　　　　　(503)"),t("br"),_._v("ngx.HTTP_GATEWAY_TIMEOUT　　　　　　　(504) "),t("br")])]),_._v(" "),t("tr",[t("td",[_._v("Nginx log level constants")]),_._v(" "),t("td",[_._v("ngx.STDERR"),t("br"),_._v("ngx.EMERG"),t("br"),_._v("ngx.ALERT"),t("br"),_._v("ngx.CRIT"),t("br"),_._v("ngx.ERR"),t("br"),_._v("ngx.WARN"),t("br"),_._v("ngx.NOTICE"),t("br"),_._v("ngx.INFO"),t("br"),_._v("ngx.DEBUG")])])])]),_._v(" "),t("h2",{attrs:{id:"api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[_._v("#")]),_._v(" API")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("API")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("ngx.arg")]),_._v(" "),t("td",[_._v("指令参数，如跟在 content_by_lua_file 后面的参数")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.var")]),_._v(" "),t("td",[_._v("变量，ngx.var.VARIABLE 引用某个变量")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.ctx")]),_._v(" "),t("td",[_._v("请求的 lua 上下文")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.header")]),_._v(" "),t("td",[_._v("响应头，ngx.header.HEADER 引用某个头")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.status")]),_._v(" "),t("td",[_._v("响应码")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.log")]),_._v(" "),t("td",[_._v("输出到 error.log")])]),_._v(" "),t("tr",[t("td",[_._v("print")]),_._v(" "),t("td",[_._v("等价于 ngx.log(ngx.NOTICE, ...)")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.send_headers")]),_._v(" "),t("td",[_._v("发送响应头")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.headers_sent")]),_._v(" "),t("td",[_._v("响应头是否已发送")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.resp.get_headers")]),_._v(" "),t("td",[_._v("获取响应头")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.timer.at")]),_._v(" "),t("td",[_._v("注册定时器事件")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.is_subrequest")]),_._v(" "),t("td",[_._v("当前请求是否是子请求")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.location.capture")]),_._v(" "),t("td",[_._v("发布一个子请求")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.location.capture_multi")]),_._v(" "),t("td",[_._v("发布多个子请求")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.exec")]),_._v(" "),t("td",[_._v("执行一个内部 localtion 模块跳转")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.redirect")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.print")]),_._v(" "),t("td",[_._v("输出响应")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.say")]),_._v(" "),t("td",[_._v("输出响应，自动添加『 \\n 』")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.flush")]),_._v(" "),t("td",[_._v("刷新响应")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.exit")]),_._v(" "),t("td",[_._v("结束请求")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.eof")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.sleep")]),_._v(" "),t("td",[_._v("无阻塞的休眠（使用定时器实现）")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.get_phase")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.on_abort")]),_._v(" "),t("td",[_._v("注册 client 断开请求时的回调函数")])]),_._v(" "),t("tr",[t("td",[_._v("ndk.set_var.DIRECTIVE")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.start_time")]),_._v(" "),t("td",[_._v("请求的开始时间")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.http_version")]),_._v(" "),t("td",[_._v("请求的 HTTP 版本号")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.raw_header")]),_._v(" "),t("td",[_._v("请求头（包括请求行）")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.get_method")]),_._v(" "),t("td",[_._v("请求方法")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.set_method")]),_._v(" "),t("td",[_._v("请求方法重载")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.set_uri")]),_._v(" "),t("td",[_._v("请求URL重写")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.set_uri_args")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.get_uri_args")]),_._v(" "),t("td",[_._v("获取请求参数")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.get_post_args")]),_._v(" "),t("td",[_._v("获取请求表单")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.get_headers")]),_._v(" "),t("td",[_._v("获取请求头")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.set_header")]),_._v(" "),t("td",[_._v("设置数据到请求头")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.clear_header")]),_._v(" "),t("td",[_._v("清除请求头数据")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.read_body")]),_._v(" "),t("td",[_._v("读取请求体")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.discard_body")]),_._v(" "),t("td",[_._v("扔掉请求体")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.get_body_data")]),_._v(" "),t("td",[_._v("获取请求体数据")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.get_body_file")]),_._v(" "),t("td",[_._v("后面跟 lua 文件")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.set_body_data")]),_._v(" "),t("td",[_._v("设置数据到请求体")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.set_body_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.init_body")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.append_body")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.finish_body")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.req.socket")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.escape_uri")]),_._v(" "),t("td",[_._v("字符串的 URL 编码")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.unescape_uri")]),_._v(" "),t("td",[_._v("字符串 URL 解码")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.encode_args")]),_._v(" "),t("td",[_._v("将 table 编码为一个参数字符串")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.decode_args")]),_._v(" "),t("td",[_._v("将参数字符串编码为一个t able")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.encode_base64")]),_._v(" "),t("td",[_._v("字符串的 base64 编码")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.decode_base64")]),_._v(" "),t("td",[_._v("字符串的 base64 解码")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.crc32_short")]),_._v(" "),t("td",[_._v("字符串的 crs32_short 哈希")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.crc32_long")]),_._v(" "),t("td",[_._v("字符串的 crs32_long 哈希")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.hmac_sha1")]),_._v(" "),t("td",[_._v("字符串的 hmac_sha1 哈希")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.md5")]),_._v(" "),t("td",[_._v("返回 16 进制 MD5")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.md5_bin")]),_._v(" "),t("td",[_._v("返回 2 进制 MD5")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.sha1_bin")]),_._v(" "),t("td",[_._v("返回 2 进制 sha1 哈希值")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.quote_sql_str")]),_._v(" "),t("td",[_._v("SQL 语句转义，防止 SQL 注入")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.today")]),_._v(" "),t("td",[_._v("返回当前日期")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.time")]),_._v(" "),t("td",[_._v("返回 UNIX 时间戳")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.now")]),_._v(" "),t("td",[_._v("返回当前时间")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.update_time")]),_._v(" "),t("td",[_._v("刷新时间后再返回")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.localtime")]),_._v(" "),t("td",[_._v("返回本地系统时间")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.utctime")]),_._v(" "),t("td",[_._v("返回 nginx 时间缓存")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.cookie_time")]),_._v(" "),t("td",[_._v("返回的时间可用于 cookie 值")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.http_time")]),_._v(" "),t("td",[_._v("返回的时间可用于 HTTP 头")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.parse_http_time")]),_._v(" "),t("td",[_._v("解析 HTTP 头的时间")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.re.match")]),_._v(" "),t("td",[_._v("使用 Perl 兼容正则表达式匹配字符串")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.re.find")]),_._v(" "),t("td",[_._v("返回匹配结果子字符串的开始索引 (from) 和结束索引 (to)")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.re.gmatch")]),_._v(" "),t("td",[_._v("返回一个 Lua 迭代器")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.re.sub")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.re.gsub")]),_._v(" "),t("td",[_._v("执行全局替换")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT")]),_._v(" "),t("td",[_._v("获取基于共享内存名为 DICT 的 Lua 字典对象，它是一个共享内存区块")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.get")]),_._v(" "),t("td",[_._v("从字典中获取名为键 (key) 值")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.get_stale")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.set")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.safe_set")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.add")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.safe_add")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.replace")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.delete")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.incr")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.flush_all")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.flush_expired")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.shared.DICT.get_keys")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.socket.udp")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("udpsock:setpeername")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("udpsock:send")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("udpsock:receive")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("udpsock:close")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("udpsock:settimeout")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.socket.tcp")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:connect")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:sslhandshake")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:send")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:receive")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:receiveuntil")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:close")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:settimeout")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:setoption")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:setkeepalive")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tcpsock:getreusedtimes")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.socket.connect")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.thread.spawn")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.thread.wait")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.thread.kill")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("coroutine.create")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("coroutine.resume")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("coroutine.yield")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("coroutine.wrap")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("coroutine.running")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("coroutine.status")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ngx.config.debug")]),_._v(" "),t("td",[_._v("编译时是否有 --with-debug 选项")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.config.prefix")]),_._v(" "),t("td",[_._v("编译时的 --prefix 选项")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.config.nginx_version")]),_._v(" "),t("td",[_._v("返回 Nginx 版本号")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.config.nginx_configure")]),_._v(" "),t("td",[_._v("返回编译时 ./configure 的命令行选项")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.config.ngx_lua_version")]),_._v(" "),t("td",[_._v("返回 ngx_lua 模块版本号")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.worker.exiting")]),_._v(" "),t("td",[_._v("当前 worker 进程是否正在关闭（如reload、shutdown期间）")])]),_._v(" "),t("tr",[t("td",[_._v("ngx.worker.pid")]),_._v(" "),t("td",[_._v("返回当前 worker 进程的 pid")])]),_._v(" "),t("tr",[t("td"),_._v(" "),t("td")])])]),_._v(" "),t("h2",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[_._v("#")]),_._v(" 指令")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("指令名称")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("lua_use_default_type")]),_._v(" "),t("td",[_._v("是否使用 default_type 指令定义的 Content-Type 默认值")])]),_._v(" "),t("tr",[t("td",[_._v("lua_code_cache")]),_._v(" "),t("td",[_._v("*_by_lua_file 文件是否 cache")])]),_._v(" "),t("tr",[t("td",[_._v("lua_regex_cache_max_entries")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_regex_match_limit")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_package_path")]),_._v(" "),t("td",[_._v("用 Lua 写的 lua 外部库路径（.lua文件）")])]),_._v(" "),t("tr",[t("td",[_._v("lua_package_cpath")]),_._v(" "),t("td",[_._v("用 C 写的 lua 外部库路径（.so文件）")])]),_._v(" "),t("tr",[t("td",[_._v("init_by_lua")]),_._v(" "),t("td",[_._v("master 进程启动时挂载的 lua 代码")])]),_._v(" "),t("tr",[t("td",[_._v("init_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("init_worker_by_lua")]),_._v(" "),t("td",[_._v("worker 进程启动时挂载的 lua 代码，常用来执行一些定时器任务")])]),_._v(" "),t("tr",[t("td",[_._v("init_worker_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("set_by_lua")]),_._v(" "),t("td",[_._v("设置变量")])]),_._v(" "),t("tr",[t("td",[_._v("set_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("content_by_lua")]),_._v(" "),t("td",[_._v("handler 模块")])]),_._v(" "),t("tr",[t("td",[_._v("content_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("rewrite_by_lua")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("rewrite_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("access_by_lua")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("access_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("header_filter_by_lua")]),_._v(" "),t("td",[_._v("header filter 模块")])]),_._v(" "),t("tr",[t("td",[_._v("header_filter_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("body_filter_by_lua")]),_._v(" "),t("td",[_._v("body filter 模块，ngx.arg[1]代表输入的 chunk，ngx.arg[2] 代表当前 chunk 是否为 last")])]),_._v(" "),t("tr",[t("td",[_._v("body_filter_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("log_by_lua")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("log_by_lua_file")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_need_request_body")]),_._v(" "),t("td",[_._v("是否读请求体，跟 ngx.req.read_body() 函数作用类似")])]),_._v(" "),t("tr",[t("td",[_._v("lua_shared_dict")]),_._v(" "),t("td",[_._v("创建全局共享的 table（多个 worker 进程共享）")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_connect_timeout")]),_._v(" "),t("td",[_._v("TCP/unix 域 socket 对象 connect 方法的超时时间")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_send_timeout")]),_._v(" "),t("td",[_._v("TCP/unix 域 socket 对象 send 方法的超时时间")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_send_lowat")]),_._v(" "),t("td",[_._v("设置 cosocket send buffer 的 low water 值")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_read_timeout")]),_._v(" "),t("td",[_._v("TCP/unix 域 socket 对象r eceive 方法的超时时间")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_buffer_size")]),_._v(" "),t("td",[_._v("cosocket 读 buffer 大小")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_pool_size")]),_._v(" "),t("td",[_._v("cosocket 连接池大小")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_keepalive_timeout")]),_._v(" "),t("td",[_._v("cosocket 长连接超时时间")])]),_._v(" "),t("tr",[t("td",[_._v("lua_socket_log_errors")]),_._v(" "),t("td",[_._v("是否打开 cosocket 错误日志")])]),_._v(" "),t("tr",[t("td",[_._v("lua_ssl_ciphers")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_ssl_crl")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_ssl_protocols")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("ua_ssl_trusted_certificate")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_ssl_verify_depth")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_http10_buffering")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("rewrite_by_lua_no_postpone")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_transform_underscores_in_response_headers")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_check_client_abort")]),_._v(" "),t("td",[_._v("是否监视 client 提前关闭请求的事件，如果打开监视，会调用 ngx.on_abort() 注册的回调")])]),_._v(" "),t("tr",[t("td",[_._v("lua_max_pending_timers")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("lua_max_running_timers")]),_._v(" "),t("td")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);