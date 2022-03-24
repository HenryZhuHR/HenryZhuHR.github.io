const head= [
    [
        "link",
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `/images/global/avatar-32x32.png`
        }
    ],
    [
        "link",
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `/images/global/avatar-16x16.png`
        }
    ],
    ["meta", { name: "application-name", content: "Henry Zhu" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Henry Zhu" }],
    [
        "meta",
        { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
        "link",
        { rel: "apple-touch-icon", href: `/images/global/avatar.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
]
export default head