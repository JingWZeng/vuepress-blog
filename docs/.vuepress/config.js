module.exports = {
    home:true,
    // 适配移动端
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
      ],
    heroText:null,
    theme:'reco',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    huawei: true,
    logo: '/egg.png',
    themeConfig: { 
    // 博客配置
     type: "blog",
         // author
     author: '曾小胖',
     authorAvatar: '/egg.png',
     mode: 'auto', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
     modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
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
     noFoundPageByTencent: false,
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
        { text: '时间轴', link: '/timeline/', icon: 'reco-date' }
      ],
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


        //格式一：直接跳转，'/'为不添加路由，跳转至首页
        // nav: [
        //     { text: '首页', link: '/' },
        //     {
        //         text: '分类',
        //         ariaLabel: '分类',
        //         items: [
        //             { text: '文章', link: '/pages/folder1/test1.md' },
        //             { text: '琐碎', link: '/pages/folder2/test4.md' },
        //         ]
        //     },
        //     { text: '功能演示', link: '/pages/folder1/test3.md' },
        //     { text: 'Github', link: 'https://github.com/dwanda' },
        // ],
        // sidebar: {
        //     '/pages/folder1/':[
        //         {
        //             title: '测试菜单1',   // 必要的
        //             collapsable: false, // 可选的, 默认值是 true,
        //             sidebarDepth: 1,    // 可选的, 默认值是 1  //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
        //             children: [
        //                 ['test1.md', '子菜单1'],
        //                 ['test3.md', '子菜单2']
        //             ]
        //         },
        //         {
        //             title: '测试菜单2',
        //             collapsable: false, // 可选的, 默认值是 true,
        //             children: [
        //                 ['test2.md', '子菜单1']
        //             ]
        //         }
        //     ],
        // }