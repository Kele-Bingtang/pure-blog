import { UserPlugins } from 'vuepress/config'
import dayjs from 'dayjs'

// 插件配置
export default <UserPlugins> [
  // 自定义插件，即本地插件
  [
    {
      name: 'custom-plugins',
      globalUIComponents: ["PageInfo", "BlockToggle"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 官网：https://github.com/leo-buneev/vuepress-plugin-fulltext-search
  ['fulltext-search'],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除 class 是 no-zoom 的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '14366b81d7983944862ae088864b209e',
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
      },
    },
  ],
  // 顶部阅读进度插件
  [
    'reading-progress'
  ],
  // vuepress-plugin-tabs。官网：https://github.com/pskordilakis/vuepress-plugin-tabs
  ['tabs'],
]


