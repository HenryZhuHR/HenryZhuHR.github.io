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
        [// markdown katex
            "@renovamen/vuepress-plugin-katex", {
                "throwOnError": false,
                "errorColor": "#cc0000"
            }
        ],
        [// markdown 脚注
            "@renovamen/vuepress-plugin-md-plus", {
                footnote: true,  // 脚注
                mark: true  // 高亮标记
            }
        ],
        [// giscus https://giscus.app/zh-CN & https://github.com/giscus/giscus/blob/main/SELF-HOSTING.md
            "vuepress-plugin-giscus", {
                repo: "HenryZhuHR/giscus-comments",  // 必须，string，格式：user_name/repo_name
                repoId: "R_kgDOGmgCHg",  // 必须，string，在 Giscus 官网上生成
                category: "Announcements",  // 必须，string
                categoryId: "DIC_kwDOGmgCHs4CAejX",  // 必须，string，在 Giscus 官网上生成
                //mapping: "[页面 <-> discussion 映射]",  // 可选，string，default="title"
                //reactionsEnabled: "[是否启用 reaction]",  // 可选，boolean，default=true
                //theme: "[主题]", // 可选，string，default="light"
                //lang: "[语言]",  // 可选，string，default="auto"（跟随网站语言，如果 Giscus 不支持你的网站的语言，则会使用 "en"）
                //crossorigin: "[crossorigin]"  // 可选，string，default="anonymous"
            }
        ]
    ]
}