module.exports = {
   theme:'reco',
    home:true,
    // 适配移动端
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    heroText:'ZJingW~~~', // null 网站标题
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: { 
     type: "blog",
     author: '曾小胖', // 全局名字
     huawei: true, // 华为文案
     logo: '/egg.png', // 导航栏左侧的logo
     authorAvatar: '/egg.png', // 头像
     mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
     modePicker: true, // 默认 true，false 不显示模式调节按钮，true 则显示
    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
     codeTheme: 'tomorrow', // default 'tomorrow'
     subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
     noFoundPageByTencent: true,
     friendLink: [
        {
          title: 'vuepress-theme-reco',
          desc: 'A simple and beautiful vuepress Blog & Doc theme.',
          logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
          link: 'https://vuepress-theme-reco.recoluan.com'
        },
        {
          title: '午后南杂',
          desc: 'Enjoy when you can, and endure when you must.',
          email: 'recoluan@qq.com',
          link: 'https://www.recoluan.com'
        },
        // ...
      ],
      nav: [
        {text:'主页', link:'/',icon: 'reco-home'},
        { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
        {
          text:'关于',
          ariaLabel:'关于',
          items: [
            { text:'Github', icon:'reco-github',link:'https://github.com/JingWZeng'},
            {text:'Hexo站', icon:'reco-blog',link:'https://myblog-six.vercel.app/'}
          ]
        }
      ],
     // 博客配置
     blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: '标签'      // 默认文案 “标签”
        },
        socialLinks: [     // 信息栏展示社交信息
          { icon: 'reco-github', link: 'https://github.com/recoluan' },
        ]
      }
    },
    valineConfig: {
      appId: '63o4LOmHyCbtn0klTX5RAjUI-MdYXbMMI',// your appId
      appKey: '2BTkhJRsNIrTv2FfYMtiTpLk', // your appKey
    }
    // homeImage:
    /**
    heroImageStyle: {
    maxHeight: '200px',
    display: block,
    margin: '6rem auto 1.5rem',
    borderRadius: '50%',
    boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
  }
     */

}
