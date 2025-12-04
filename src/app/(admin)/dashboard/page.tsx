/*
 * @description: 仪表盘
 * @Server page
 */
import type { Metadata } from "next";
import {
    Statistic
} from 'antd';
import {
    ArrowDownOutlined,
    ArrowUpOutlined
} from '@ant-design/icons';

import type { statisticsBasic } from "@/types/statistics/basic";
import { SiteConfigResponse } from "@/types/site-config";

export const metadata: Metadata = {
    title: "仪表盘",
};

type StatisticsData = statisticsBasic['data'];

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

async function getSiteConfig() {
    const k = await fetch(`${baseUrl}/public/site-config`);
    const res = await k.json() as SiteConfigResponse;
    return res.data;
}

async function getStatisticsBasic(): Promise<StatisticsData> {
    try {
        const res = await fetch(`${baseUrl}/public/statistics/basic`, {
            "headers": { "Content-Type": "application/json" }
        });

        if (!res.ok) {
            throw new Error('获取基础统计数据失败！');
        }

        const result: statisticsBasic = await res.json();

        if (result.code !== 200) {
            throw new Error(`API error: ${result.message || '获取统计数据失败'}`);
        }

        return result.data;
    } catch (error) {
        console.error('获取统计数据错误：', error);
        throw error;
    }
}

export default async function Dashboard() {
    const stats = await getStatisticsBasic();
    const config = await getSiteConfig();

    return (
        <>
            <div className="font-semibold text-2xl">欢迎回来，{config.frontDesk.siteOwner.name}！👋</div>

            <div className="statistic my-4 py-2 px-3 bg-white rounded-xl flex flex-wrap items-center justify-around shadow-xs hover:shadow-sm">
                {/* <Statistic title="昨日访客" value={stats.yesterday_visitors} /> */}
                {/* <Statistic title="昨日浏览量" value={stats.yesterday_views} /> */}
                <Statistic title="今日访客" value={stats.today_visitors} />
                <Statistic title="今日浏览量" value={stats.today_views} />
                <Statistic
                    precision={2}
                    prefix={stats.today_views / stats.yesterday_visitors > 1 ? (<ArrowUpOutlined />) : (<ArrowDownOutlined />)}
                    title="今日访客于昨日"
                    suffix="%"
                    value={stats.today_views / stats.yesterday_visitors}
                    valueStyle={stats.today_views / stats.yesterday_visitors > 1 ? { color: "#3f8600" } : { color: "#cf1322" }}
                />
                <Statistic title="本月总浏览量" value={stats.month_views} />
                <Statistic title="年度总访问量" value={stats.year_views} />
            </div>

        </>
    );
}
