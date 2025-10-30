
export interface PostListResponse {
    code: number;
    message: string;
    data: {
        list: Post[];
        total: number;
        page: number;
        pageSize: number;
    };
}

export interface Post {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    cover_url: string;
    status: string;
    view_count: number;
    word_count: number;
    reading_time: number;
    ip_location: string;
    primary_color: string;
    is_primary_color_manual: boolean;
    post_tags: PostTags[];
    post_categories: PostCategories[];
    home_sort: number;
    pin_sort: number;
    top_img_url: string;
    summaries: string[];
    abbrlink: string;
    copyright: boolean;
    copyright_author: string;
    copyright_author_href: string;
    copyright_url: string;
    keywords: string;
}

export interface PostTags {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    count: number;
}

export interface PostCategories {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description: string;
    count: number;
    is_series: boolean;
}
