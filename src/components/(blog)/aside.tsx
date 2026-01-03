/*
 * @description: 侧边栏
 * @author: ciraos
 * Server Component
*/
import { headers } from "next/headers";
import Link from "next/link";
import {
    Image,
} from "antd";
import { Icon } from "@iconify/react";
import { SiteConfigResponse } from "@/types/site-config";
import { RenJianResponse } from "@/types/nsuuu/renjian";

const dynamic = "force-dynamic";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const nsuuUrl = process.env.NEXT_PUBLIC_NSUUU_API_URL;
// const nsuuKey = process.env.NEXT_PUBLIC_NSUUU_ADMIN_API_KEY;
const imageFallback = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg==";

//! 
async function getSiteConfig() {
    const k = await fetch(`${baseUrl}/public/site-config`);
    const res = await k.json() as SiteConfigResponse;
    console.log(res);
    return res.data;
}

//! 
async function getRenJianData() {
    const t = await fetch(`${nsuuUrl}/renjian`, {
        cache: "no-store",
    });
    const res = await t.json() as RenJianResponse;
    // console.log(res.data);
    return res.data;
}

export default async function Aside() {
    const headerList = await headers();
    const xff = headerList.get("x-forwarded-for");
    const clientIp = xff ? xff.split(',')[0].trim() : '未知（开发环境）';
    const config = await getSiteConfig();
    const renjian = await getRenJianData();
    // console.log(clientIp);

    return (
        <>
            <aside className="aside w-[24%] h-auto pl-4">

                {/*  */}
                <div
                    className="aside-item info h-82"
                >
                    <div className="w-4/5 h-8 mx-auto bg-slate-100 rounded-xl text-sm text-center font-semibold font-mono content-center shadow-xs text-slate-600">Don&apos;t worry, be happy.</div>
                    <div className="w-full h-[calc(100%-32px-32px)] flex items-center justify-center">
                        <Image
                            alt="avatar"
                            style={{ width: 120, height: "calc(100%-32px-32px)" }}
                            className="rounded-full border-2 border-slate-200"
                            preview={false}
                            src={config.about.avatar_img}
                            fallback={imageFallback}
                        />
                    </div>
                    <div className="h-8 flex items-end justify-between">
                        <div className="">{config.frontDesk.siteOwner.name}</div>
                        <div className="flex items-center gap-1">
                            <Link href="https://github.com/ciraos" target="_blank" rel="noopener noreferrer"><Icon icon="pajamas:github" width="20" height="20" /></Link>
                            <Link href="https://space.bilibili.com/142450786" target="_blank" rel="noopener noreferrer"><Icon icon="ant-design:bilibili-filled" width="26" height="26" style={{ color: '#e87c93' }} /></Link>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="aside-item">
                    <div className="aside-item-title"><Icon icon="icon-park:volume-notice" width="20" height="20" /><span className="pl-1">公告</span></div>
                    <p>欢迎来到我的博客呀！</p>
                    <p className="mt-1.5">👋🏻我是{config.frontDesk.siteOwner.name}，一个<span className="text-blue-500 font-semibold">热爱编程</span>的技术爱好者，喜欢分享经验。😊</p>
                    <p className="mt-1">❓有问题欢迎提问，确保内容有意义。</p>
                    <p className="mt-0.5">📱如需联系我，欢迎通过<Link href="mailto:ciraos@yeah.net" className="mx-0.5 text-purple-500 font-semibold">邮箱</Link>联系我！📧</p>
                    <div className="my-2 mx-auto py-2 px-3 leading-6 text-center text-sm bg-slate-100 rounded-xl">
                        嗷嗷！热烈欢迎！来自<br />
                        <br />
                        的铁铁，你好啊！<br />
                        <br />
                        你目前距博主约 公里！<br />
                        你的网络IP为：<br />
                        {clientIp}<br />
                        下午好，饮茶先啦！
                    </div>
                </div>

                {/* 最新文章  */}
                <div className="aside-item">
                    <div className="aside-item-title"><Icon icon="grommet-icons:article" width="20px" height="20px" /><span className="pl-1">最新文章</span></div>
                    <div className="pr-1 flex flex-col gap-1"></div>
                </div>

                {/* 我在人间凑数的日子 */}
                <div className="aside-item">
                    <div className="aside-item-title"><Icon icon="ant-design:fire-filled" width="16" height="16" /><span className="ml-1">我在人间凑数的日子</span></div>
                    <div className="indent-4 text-sm break-all">{renjian}</div>
                </div>

                {/* 统计 */}
                <div className="aside-item">
                    <div className="aside-item-title"><Icon icon="bi:clipboard-data-fill" width="14px" height="14px" style={{ color: '#48b0db' }} /><span className="pl-1">统计</span></div>
                    <div>
                        <div className="text-sm m-0 flex items-center justify-between">文章总数:<span>{config.sidebar.siteinfo.totalPostCount}&nbsp;篇</span></div>
                        <div className="text-sm mt-1 flex items-center justify-between">建站天数:<span>0&nbsp;天</span></div>
                        <div className="text-sm mt-1 flex items-center justify-between">全站字数:<span>{config.sidebar.siteinfo.totalWordCount}&nbsp;字</span></div>
                    </div>
                </div>

            </aside>
        </>
    );
}
