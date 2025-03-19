interface navList {
    list: string,
    child: string,
    name: string,
    link: string,
};

export const navList = [
    {
        list: "文章",
        // link: '/posts',
        child: [
            { name: '归档', link: '/archives' },
            { name: '分类', link: '/categories' },
            { name: '标签', link: '/tags' },
        ]
    }, {
        list: "友联",
        child: [
            { name: '友人帐', link: '/friends' },
            { name: '朋友圈', link: '/fcircle' },
            { name: '留言板', link: '/comments' },
        ]
    }, {
        list: "我的",
        child: [
            { name: '关于窝', link: '/about' },
            { name: '说说', link: '/moments' },
        ]
    }, {
        list: "协议",
        child: [
            { name: '隐私协议', link: '/privacy' },
            { name: 'cookies', link: '/cookies' },
            { name: '版权协议', link: '/copyright' },
        ]
    },
];
