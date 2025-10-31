interface SiteConfigResponse {
    code: number;
    message: string;
    data: SiteConfigItem[];
}

interface SiteConfigItem {
    ABOUT_LINK: string;
    API_URL: string;
}
