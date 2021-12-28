import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: '小宇宙',
            description: 'Henryzhu的小宇宙',
        },
        '/en/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue',
        },
    },


    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/planet.png',
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/',
            },
            // NavbarGroup
            {
                text: 'C&C++',
                children: [
                    {
                        text: 'CMake',
                        link: '/c_cxx/cmake',
                        activeMatch: '^/cmake/',
                    },
                    {
                        text: 'C++',
                        link: '/c_cxx/cpp/cxx.md',
                        activeMatch: '^/cpp/',
                    },
                ],
            },
        ],
    },
})