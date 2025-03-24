interface footernav {
    list: string,
    child: string,
    name: string,
    link: string,
    target: string,
    rel: string,
}

export const footernav = [
    {
        list: "导航",
        child: [
            // { name: "首页", link: "/" },
            { name: "归档", link: "/archives" },
            { name: "友人帐", link: "/friends" },
            { name: "留言板", link: "/comments" },
            { name: "关于窝", link: "/about" },
            { name: "说说", link: "/moments" },
        ]
    }, {
        list: "Git",
        child: [
            { name: "Github", link: "https://github.com/ciraos", target: "_blank", rel: "nofollow noopener noreferrer" },
            { name: "Gitee", link: "https://gitee.com/ciraos", target: "_blank", rel: "nofollow noopener noreferrer" }
        ]
    }, {
        list: "协议",
        child: [
            { name: "隐私协议", link: "/privacy" },
            { name: "站点地图", link: "/sitemap.xml", target: "_blank", rel: "nofollow noopener noreferrer" },
            { name: "RSS", link: "/feed.xml", target: "_blank", rel: "nofollow noopener noreferrer" },
            { name: "cookies", link: "/cookies" },
            { name: "版权协议", link: "/copyright" }
        ]
    },
]
