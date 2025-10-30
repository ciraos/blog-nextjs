
export async function fetchPostList() {
    const res = await fetch('https://blog.ciraos.top/api/public/articles?page=1&pageSize=10', {});

    if (!res.ok) {
        throw new Error('Failed to fetch post list');
    }

    return res.json();
}
