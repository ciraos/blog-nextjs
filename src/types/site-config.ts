
//!
export interface SiteConfigResponse {
    code: number;
    message: string;
    data: SiteConfig;
}

export interface SiteConfig {
    ABOUT_LINK: string;
    API_URL: string;
    APP_NAME: string;
    APP_VERSION: string;
    BUILTIN_DIRECT_SERVE_EXTS: string;
    BUILTIN_MAX_FILE_SIZE: number;
    CREATIVITY: Creativity;
    CUSTOM_CSS: string;
    CUSTOM_FOOTER_HTML: string;
    CUSTOM_HEADER_HTML: string;
    CUSTOM_JS: string;
    CUSTOM_POST_BOTTOM_HTML: string;
    CUSTOM_POST_TOP_HTML: string;
    CUSTOM_SIDEBAR: string;
    DEFAULT_BIG_PARAM: string;
    DEFAULT_GRAVATAR_TYPE: string;
    DEFAULT_THEME_MODE: 'light' | 'dark' | string;
    DEFAULT_THUMB_PARAM: string;
    ENABLE_BUILTIN_GENERATOR: boolean;
    ENABLE_EXIF_EXTRACTOR: boolean;
    ENABLE_EXTERNAL_LINK_WARNING: boolean;
    ENABLE_FFMPEG_GENERATOR: boolean;
    ENABLE_LIBRAW_GENERATOR: boolean;
    ENABLE_MUSIC_COVER_GENERATOR: boolean;
    ENABLE_MUSIC_EXTRACTOR: boolean;
    ENABLE_REGISTRATION: boolean;
    ENABLE_VIPS_GENERATOR: boolean;
    EXIF_MAX_SIZE_LOCAL: number;
    EXIF_MAX_SIZE_REMOTE: number;
    EXIF_USE_BRUTE_FORCE: boolean;
    FFMPEG_CAPTURE_TIME: string;
    FFMPEG_MAX_FILE_SIZE: number;
    FFMPEG_SUPPORTED_EXTS: string;
    FRIEND_LINK_APPLY_CONDITION: string[];
    FRIEND_LINK_APPLY_CUSTOM_CODE: string;
    FRIEND_LINK_APPLY_CUSTOM_CODE_HTML: string;
    FRIEND_LINK_DEFAULTCATEGORY: number;
    FRIEND_LINK_PLACEHOLDER_DESCRIPTION: string;
    FRIEND_LINK_PLACEHOLDER_LOGO: string;
    FRIEND_LINK_PLACEHOLDER_NAME: string;
    FRIEND_LINK_PLACEHOLDER_SITESHOT: string;
    FRIEND_LINK_PLACEHOLDER_URL: string;
    GRAVATAR_URL: string;
    HOME_TOP: HomeTop;
    ICON_URL: string;
    ICP_NUMBER: string;
    LIBRAW_MAX_FILE_SIZE: number;
    LIBRAW_SUPPORTED_EXTS: string;
    LOGO_HORIZONTAL_DAY: string;
    LOGO_HORIZONTAL_NIGHT: string;
    LOGO_URL: string;
    LOGO_URL_192x192: string;
    LOGO_URL_512x512: string;
    MUSIC_COVER_MAX_FILE_SIZE: number;
    MUSIC_COVER_SUPPORTED_EXTS: string;
    MUSIC_MAX_SIZE_LOCAL: number;
    MUSIC_MAX_SIZE_REMOTE: number;
    POLICE_RECORD_NUMBER: string;
    SITE_ANNOUNCEMENT: string;
    SITE_DESCRIPTION: string;
    SITE_KEYWORDS: string;
    SITE_URL: string;
    SUB_TITLE: string;
    THEME_COLOR: string;
    UPLOAD_ALLOWED_EXTENSIONS: string;
    UPLOAD_DENIED_EXTENSIONS: string;
    USER_AVATAR: string;
    VIPS_MAX_FILE_SIZE: number;
    VIPS_SUPPORTED_EXTS: string;
    about: AboutConfig;
    comment: CommentConfig;
    equipment: EquipmentConfig;
    essay: EssayConfig;
    footer: FooterConfig;
    frontDesk: FrontDeskConfig;
    header: HeaderConfig;
    moments: MomentsConfig;
    music: MusicConfig;
    oauth: OAuthConfig;
    page: PageConfig;
    post: PostConfig;
    recent_comments: RecentCommentsConfig;
    sidebar: SidebarConfig;
}

/** 创造力（技能）配置 */
export interface Creativity {
    creativity_list: CreativityItem[];
    subtitle: string;
    title: string;
}

export interface CreativityItem {
    color: string;
    icon: string;
    name: string;
}

/** 首页顶部配置 */
export interface HomeTop {
    banner: HomeTopBanner;
    category: HomeTopCategory[];
    siteText: string;
    subTitle: string;
    title: string;
}

export interface HomeTopBanner {
    image: string;
    isExternal: boolean;
    link: string;
    tips: string;
    title: string;
}

export interface HomeTopCategory {
    background: string;
    icon: string;
    isExternal: boolean;
    name: string;
    path: string;
}

/** 关于页配置 */
export interface AboutConfig {
    page: AboutPageConfig;
    avatar_img: string;
    avatar_skills_left: string[];
    avatar_skills_right: string[];
    buff: AboutBuff;
    careers: AboutCareers;
    comic: AboutComic;
    custom_code: string;
    custom_code_html: string;
    description: string;
    enable: AboutEnableConfig;
    game: AboutGame;
    like: AboutLike;
    map: AboutMap;
    maxim: AboutMaxim;
    music: AboutMusic;
    name: string;
    personalities: AboutPersonality;
    self_info: AboutSelfInfo;
    skills_tips: AboutSkillsTips;
    statistics_background: string;
    subtitle: string;
}

export interface AboutPageConfig {
    about_site_tips: AboutSiteTips;
}

export interface AboutSiteTips {
    tips: string;
    title1: string;
    title2: string;
    word: string[];
}

export interface AboutBuff {
    bottom: string;
    tips: string;
    top: string;
}

export interface AboutCareers {
    img: string;
    list: AboutCareerItem[];
    tips: string;
    title: string;
}

export interface AboutCareerItem {
    color: string;
    desc: string;
}

export interface AboutComic {
    list: AboutComicItem[];
    tips: string;
    title: string;
}

export interface AboutComicItem {
    cover: string;
    href: string;
    name: string;
}

export interface AboutEnableConfig {
    author_box: boolean;
    buff: boolean;
    careers: boolean;
    comic: boolean;
    custom_code: boolean;
    game: boolean;
    like_tech: boolean;
    map_and_info: boolean;
    maxim: boolean;
    music: boolean;
    page_content: boolean;
    personality: boolean;
    photo: boolean;
    skills: boolean;
    statistic: boolean;
}

export interface AboutGame {
    background: string;
    tips: string;
    title: string;
    uid: string;
}

export interface AboutLike {
    background: string;
    bottom: string;
    tips: string;
    title: string;
}

export interface AboutMap {
    background: string;
    backgroundDark: string;
    strengthenTitle: string;
    title: string;
}

export interface AboutMaxim {
    bottom: string;
    tips: string;
    top: string;
}

export interface AboutMusic {
    background: string;
    link: string;
    tips: string;
    title: string;
}

export interface AboutPersonality {
    authorName: string;
    nameUrl: string;
    personalityImg: string;
    personalityType: string;
    personalityTypeColor: string;
    photoUrl: string;
    tips: string;
}

export interface AboutSelfInfo {
    content2: string;
    content3: string;
    contentYear: string;
    tips1: string;
    tips2: string;
    tips3: string;
}

export interface AboutSkillsTips {
    tips: string;
    title: string;
}

/** 评论配置 */
export interface CommentConfig {
    allow_image_upload: boolean;
    anonymous_email: string;
    blogger_email: string;
    emoji_cdn: string;
    enable: boolean;
    limit_length: number;
    login_required: boolean;
    master_tag: string;
    page_size: number;
    placeholder: string;
    show_region: boolean;
    show_ua: boolean;
}

/** 装备页配置 */
export interface EquipmentConfig {
    banner: EquipmentBanner;
    list: any[]; // 空数组，可根据实际数据扩展
}

export interface EquipmentBanner {
    background: string;
    description: string;
    tip: string;
    title: string;
}

/** 短文配置 */
export interface EssayConfig {
    button_link: string;
    button_text: string;
    home_enable: boolean;
    limit: number;
    subtitle: string;
    tips: string;
    title: string;
    top_background: string;
}

/** 页脚配置 */
export interface FooterConfig {
    badge: FooterBadge;
    bar: FooterBar;
    custom_text: string;
    list: FooterList;
    owner: FooterOwner;
    project: FooterProject;
    runtime: FooterRuntime;
    socialBar: FooterSocialBar;
}

export interface FooterBadge {
    enable: boolean;
    list: FooterBadgeItem[];
}

export interface FooterBadgeItem {
    link: string;
    message: string;
    shields: string;
}

export interface FooterBar {
    authorLink: string;
    cc: FooterCc;
    linkList: FooterLinkItem[];
}

export interface FooterCc {
    link: string;
}

export interface FooterLinkItem {
    link: string;
    text: string;
}

export interface FooterList {
    randomFriends: number;
}

export interface FooterOwner {
    name: string;
    since: number;
}

export interface FooterProject {
    list: FooterProjectItem[];
}

export interface FooterProjectItem {
    links: FooterProjectLink[];
    title: string;
}

export interface FooterProjectLink {
    link: string;
    title: string;
}

export interface FooterRuntime {
    enable: boolean;
    launch_time: string;
    offduty_description: string;
    offduty_img: string;
    work_description: string;
    work_img: string;
}

export interface FooterSocialBar {
    centerImg: string;
    left: FooterSocialItem[];
    right: FooterSocialItem[];
}

export interface FooterSocialItem {
    icon: string;
    link: string;
    title: string;
}

/** 前台配置 */
export interface FrontDeskConfig {
    siteOwner: FrontDeskSiteOwner;
}

export interface FrontDeskSiteOwner {
    email: string;
    name: string;
}

/** 头部导航配置 */
export interface HeaderConfig {
    menu: HeaderMenu[];
    nav: HeaderNav;
}

export interface HeaderMenu {
    items: HeaderMenuItem[];
    title: string;
}

export interface HeaderMenuItem {
    icon: string;
    isExternal: boolean;
    path: string;
    title: string;
}

export interface HeaderNav {
    clock: boolean;
    menu: HeaderNavMenu[];
    travelling: boolean;
}

export interface HeaderNavMenu {
    items: HeaderNavMenuItem[];
    title: string;
}

export interface HeaderNavMenuItem {
    icon: string;
    link: string;
    name: string;
}

/** 朋友圈配置 */
export interface MomentsConfig {
    button_link: string;
    button_text: string;
    display_limit: number;
    enable: boolean;
    subtitle: string;
    tips: string;
    title: string;
    top_background: string;
}

/** 音乐配置 */
export interface MusicConfig {
    api: MusicApiConfig;
    player: MusicPlayerConfig;
    vinyl: MusicVinylConfig;
}

export interface MusicApiConfig {
    base_url: string;
}

export interface MusicPlayerConfig {
    custom_playlist: string;
    enable: boolean;
    playlist_id: number;
}

export interface MusicVinylConfig {
    background: string;
    groove: string;
    inner: string;
    needle: string;
    outer: string;
}

/** OAuth 配置 */
export interface OAuthConfig {
    logto: OAuthProviderConfig;
    oidc: OAuthProviderConfig;
    qq: OAuthProviderConfig;
    rainbow: RainbowOAuthConfig;
    wechat: OAuthProviderConfig;
}

export interface OAuthProviderConfig {
    display_name?: string;
    enable: boolean;
}

export interface RainbowOAuthConfig {
    api_url: string;
    app_id: string;
    callback_url: string;
    enable: boolean;
    login_methods: string;
}

/** 页面配置 */
export interface PageConfig {
    one_image: PageOneImageConfig;
    hitokoto_api: string;
    typing_speed: number;
}

export interface PageOneImageConfig {
    config: PageOneImageConfigDetail;
    hitokoto_api: string;
    typing_speed: number;
}

export interface PageOneImageConfigDetail {
    archives: PageOneImagePageConfig;
    categories: PageOneImagePageConfig;
    home: PageOneImagePageConfig;
    tags: PageOneImagePageConfig;
}

export interface PageOneImagePageConfig {
    background: string;
    enable: boolean;
    hitokoto: boolean;
    mainTitle: string;
    subTitle: string;
    typingEffect: boolean;
}

/** 文章配置 */
export interface PostConfig {
    code_block: PostCodeBlockConfig;
    default: PostDefaultConfig;
    expiration_time: number;
    page404: PostPage404Config;
    reward: PostRewardConfig;
}

export interface PostCodeBlockConfig {
    code_max_lines: number;
}

export interface PostDefaultConfig {
    cover: string;
    double_column: boolean;
    page_size: number;
}

export interface PostPage404Config {
    default_image: string;
}

export interface PostRewardConfig {
    alipay_qr: string;
    enable: boolean;
    wechat_qr: string;
}

/** 最近评论配置 */
export interface RecentCommentsConfig {
    banner: RecentCommentsBanner;
    description: string;
    tip: string;
    title: string;
}

export interface RecentCommentsBanner {
    background: string;
    description: string;
    tip: string;
    title: string;
}

/** 侧边栏配置 */
export interface SidebarConfig {
    archive: SidebarArchiveConfig;
    author: SidebarAuthorConfig;
    custom: SidebarCustomConfig;
    siteinfo: SidebarSiteInfoConfig;
    tags: SidebarTagsConfig;
    weather: SidebarWeatherConfig;
    wechat: SidebarWechatConfig;
}

export interface SidebarArchiveConfig {
    displayMonths: number;
}

export interface SidebarAuthorConfig {
    description: string;
    enable: boolean;
    skills: string[];
    social: SidebarAuthorSocial;
    statusImg: string;
}

export interface SidebarAuthorSocial {
    BiliBili: SidebarSocialItem;
    Github: SidebarSocialItem;
}

export interface SidebarSocialItem {
    icon: string;
    link: string;
}

export interface SidebarCustomConfig {
    showInPost: boolean;
}

export interface SidebarSiteInfoConfig {
    runtimeEnable: boolean;
    totalPostCount: number;
    totalWordCount: number;
}

export interface SidebarTagsConfig {
    enable: boolean;
    highlight: string[];
}

export interface SidebarWeatherConfig {
    default_rectangle: boolean;
    enable: boolean;
    enable_page: string;
    ip_api_key: string;
    loading: string;
    qweather_api_host: string;
    qweather_key: string;
    rectangle: string;
}

export interface SidebarWechatConfig {
    backFace: string;
    blurBackground: string;
    enable: boolean;
    face: string;
}
