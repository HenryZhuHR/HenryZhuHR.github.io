import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    // 站点配置
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/plante.png',
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