import { NextResponse } from "next/server";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function GET() {
    if (!API_BASE_URL) {
        console.error("环境变量API_BASE_URL未定义");
        return NextResponse.json({ error: "API配置错误" }, { status: 500 });
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/public/articles?page=1&pageSize=10`, {
            "method": "GET",
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN,zh;q=0.9",
                "priority": "u=1, i",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "mode": "cors",
            "credentials": "omit"
        });

        const data = await response.json();
        console.log(data);
        console.log(API_BASE_URL + '/api/public/articles?page=1&pageSize=10');
        return NextResponse.json(data);
    } catch (error) {
        console.error("请求失败:", error);
        return NextResponse.json({ error: "请求失败" }, { status: 500 });
    }
}
