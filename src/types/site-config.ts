
//! site-config.ts
export interface SiteConfigResponse {
    code: number;
    message: string;
    data: {
        ABOUT_LINK: string;
        API_URL: string;
        APP_NAME: string;
        APP_VERSION: number;
        BUILTIN_DIRECT_SERVE_EXITS: string;
        BUILTIN_MAX_FILE_SIZE: number;
        CREATIVITY: {
            creativity_list: CreativityList[];
            subtitle: string;
            title: string;
        };
        CUSTOM_CSS: string;
        CUSTOM_FOOTER_HTML: string;
        CUSTOM_HEADER_HTML: string;
        CUSTOM_JS: string;
        CUSTOM_POST_BOTTOM_HTML: string;
        CUSTOM_POST_TOP_HTML: string;
        CUSTOM_SIDEBAR: string;
        DEFAUL_BIG_PARAM: string;
        DEFAULT_GRAVATAR_TYPE: string;
        DEFAULT_THUMB_PARAM: string;
        ENABLE_BUILTIN_GENERATOR: boolean;
        ENABLE_EXIF_EXTRACTOR: boolean;
        ENABLE_FFMPEG_GENERATOR: boolean;
        ENABLE_LIBRAW_GENERATOR: boolean;
        ENABLE_MUSIC_COVER_GENERATOR: boolean;
        ENABLE_MUSIC_EXTRACTOR: boolean;
        ENABLE_VIPS_GENERATOR: boolean;
        EXIF_MAX_SIZE_LOCAL: number;
        EXIF_MAX_SIZE_REMOTE: number;
        EXIF_USE_BRUTE_FORCE: boolean;
        FFMPEG_CAPTURE_TIME: number;
        FFMPEG_MAX_FILE_SIZE: number;
        FFMPEG_SUPPORTED_EXTS: string;
        FRIEND_LINK_APPLY_CONDITION: string[]  // FriendLinkApplyCondition[];
        FRIEND_LINK_APPLY_CUSTOM_CODE: string;
        FRIEND_LINK_APPLY_CUSTOM_CODE_HTML: string;
        //... 
    };
}

interface CreativityList {
    color: string;
    icon: string;
    name: string;
}
