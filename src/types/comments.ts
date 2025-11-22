
//!
export interface CommentResponse {
    code: number;
    message: string;
    data: CommentListData;
}

interface CommentListData {
    list: CommentItem[];
    total: number;
    total_with_children: number;
    page: number;
    pageSize: number;
}

interface CommentItem {
    id: string;
    created_at: string;
    nickname: string;
    email_md5: string;
    content_html: string;
    is_admin_comment: boolean;
    is_anonymous: boolean;
    ip_location: string;
    user_agent: string;
    target_path: string;
    target_title: string;
    like_count: number;
    total_children: number;
    children: CommentChildren[];
}

interface CommentChildren {
    id: string;
    created_at: string;
    nickname: string;
    email_md5: string;
    avatar_url: string;
    content_html: string;
    is_admin_comment: boolean;
    is_anonymous: boolean;
    ip_location: string;
    user_agent: string;
    target_path: string;
    target_title: string;
    parent_id: string;
    reply_to_id: string;
    reply_to_nick: string;
    like_count: number;
    total_children: number;
}
