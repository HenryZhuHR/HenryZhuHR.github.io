const isProd = process.env.NODE_ENV === "production";
import head from "./config/head";
import {homeHeaderImages,pagesImages} from "./config/backgroundImages";

module.exports = {
  title: "Henry Zhu",
  description: "Henry Zhu' universe.",

  head: head,

  bundler: "@vuepress/vite",

  theme: "vuepress-theme-gungnir",

  themeConfig: {
    repo: "HenryZhuHR/henryzhuhr.github.io",
    docsDir: "docs",
    docsBranch: "main",

    hitokoto: "",//"https://v1.hitokoto.cn?c=d&c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Henry Zhu",
      avatar: "/images/global/avatar.png",
      description: "这个世界很大 会有一点点不一样",
      sns: {
        github: "HenryZhuHR",
        // linkedin: "xiaohan-zou",
        // facebook: "renovamen.zou",
        // twitter: "renovamen_zxh",
        zhihu: "henryzhuhr",
        email: "henry.zhuhr@qq.com",
        // rss: "/rss.xml"
      }
    },

    // header images on home page // other pages
    homeHeaderImages: homeHeaderImages,
    pages: pagesImages,
    // 顶部导航栏
    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      // {
      //   text: "About",
      //   link: "/about/",
      //   icon: "fa-paw"
      // },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      // {
      //   text: "Portfolio",
      //   link: "https://portfolio.zxh.io/",
      //   icon: "oi-rocket"
      // }
    ],

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      // giscus: {
      //   repo: "This-is-an-Apple/blog-giscus-comments",
      //   repoId: "R_kgDOGl2SjQ",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDOGl2Sjc4CAcxK"
      // },
      mdPlus: {
        all: true
      },
      // ga: "G-HCQSX53XFG",
      // ba: "75381d210789d3eaf855fa16246860cc",
      // rss: {
      //   siteURL: "https://zxh.io",
      //   copyright: "Renovamen 2018-2022"
      // }
    },

    

    sidebar: {

    },

    footer: `
      &copy; <a href="https://github.com/HenryZhuHR" target="_blank">HenryZhuHR</a> 2022-today
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
};
