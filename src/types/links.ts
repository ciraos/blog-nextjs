export interface LinkCategoreiesItem {
    id: number;
    name: string;
    style: string;
    description?: string;
}

export interface LinkCategoriesResponse {
    code: number;
    message: string;
    data: LinkCategoreiesItem[]
}
