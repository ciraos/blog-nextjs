'use client';
import { useEffect } from "react";

export default function FcLite() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = "https://cdn.jsdelivr.net/gh/willow-god/Friend-Circle-Lite/main/fclite.min.js"
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    })
    useEffect(() => {
        (window as any).UserConfig = {
            private_api_url: 'https://friends.ciraos.top/',
            page_init_number: 20,
            page_turning_number: 10,
            error_img: '',
            sort_rule: 'created',
            expire_days: 1,
        }
    }, [])
    return (
        <>
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/willow-god/Friend-Circle-Lite/main/fclite.min.css" /> */}
            <div id="friend-circle-lite-root"></div>
        </>
    )
}
