
//!
export interface LinkCategoriesResponse {
    code: number;
    message: string;
    data: LinkCategoreiesItem[]
}

interface LinkCategoreiesItem {
    id: number;
    name: string;
    style: string;
    description?: string;
}
