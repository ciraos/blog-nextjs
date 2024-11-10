interface Window {
    twikoo: {
        init: (config: {
            envId: string;
            el: string;
            lang: string,
            pageSize: number,
            includeReply: boolean,
            urls: string[],
        }) => void
    }
}
