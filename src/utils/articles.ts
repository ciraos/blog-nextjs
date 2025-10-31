
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function fetchPostList() {
    const res = await fetch(`${baseUrl}/public/articles?page=1&pageSize=10`, {});

    if (!res.ok) {
        throw new Error('获取文章列表失败！');
    }

    return res.json();
}
