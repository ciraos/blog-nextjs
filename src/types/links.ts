
//!
export interface LinkCategoriesResponse {
    code: number;
    message: string;
    data: LinkCategoriesItem[]
}

export interface LinkCategoriesItem {
    id: number;
    name: string;
    style: string;
    description?: string;
}

export interface LinkResponse {
    code: number;
    message: string;
    data: LinkData;
}

export interface LinkData {
    list: LinkItem[];
    total: number;
    page: number;
    pageSize: number;
}

export interface LinkItem {
    id: number;
    name: string;
    url: string;
    logo: string;
    description?: string;
    status: string;                 //!
    sort_order: number;
    skip_health_check: boolean;
    category: LinkCategoriesItem;
    tag: null | string;
    siteshot?: string;
}
