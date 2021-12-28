import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'en-US',
    title: '小宇宙',
    description: 'Henry Zhu 的小宇宙',

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