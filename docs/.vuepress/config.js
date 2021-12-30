module.exports = {
    // 站点配置
    locales: {// 键名是该语言所属的子路径
        '/': {// 作为特例，默认语言可以使用 '/' 作为其路径。
            base: './',
            lang: 'zh-CN',
            title: '小宇宙',
            description: 'xyz = 小宇宙',
        },
        '/en/': {
            base: './',
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue',
        },
    },

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        locales: {
            '/': { selectLanguageName: '简体中文', },
            '/en/': { selectLanguageName: 'English', },
        },
        navbar: [// 顶部导航栏配置
            {
                text: '首页',
                link: '/',
            },
            {
                text: '深度学习',
                children: [
                    {
                        text: 'MLP',
                        link: '/deepLearning/mlp/mlp.md',
                        activeMatch: '^/mlp/',
                    },
                    {
                        text: 'CNN',
                        link: '/deepLearning/cnn/cnn.md',
                        activeMatch: '^/cnn/',
                    },
                ],
            },
            {
                text: 'C&C++',
                children: [
                    {
                        text: 'CMake(TODO)',
                        link: '/c_cxx/cmake',
                        activeMatch: '^/cmake/',
                    },
                    {
                        text: 'C++(TODO)',
                        link: '/c_cxx/cpp/cxx.md',
                        activeMatch: '^/cpp/',
                    },
                ],
            },
            {
                text: 'Github',
                link: 'https://github.com/HenryZhuHR'
            }
        ],
    },
    plugins: [
        [
            "@renovamen/vuepress-plugin-katex", {
                "throwOnError": false,
                "errorColor": "#cc0000"
            }
        ]
    ]
}