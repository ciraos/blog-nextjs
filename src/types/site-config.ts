
//! site-config.ts
export interface SiteConfigResponse {
    code: number;
    message: string;
    data: {
        ABOUT_LINK: string;
        API_URL: string;
        APP_NAME: string;
        APP_VERSION: string;
        BUILTIN_DIRECT_SERVE_EXITS: string;
        BUILTIN_MAX_FILE_SIZE: string;
        CREATIVITY: {
            creativity_list: CreativityList[];
            subtitle: string;
            title: string;
        };
        //...
        FRIEND_LINK_APPLY_CONDITION: string[]  // FriendLinkApplyCondition[];
    };
}

interface CreativityList {
    color: string;
    icon: string;
    name: string;
}
