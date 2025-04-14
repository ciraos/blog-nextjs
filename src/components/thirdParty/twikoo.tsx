"use client";
import { useEffect, useState } from "react";
import { getConfig } from "@/lib/config";

export default function Twikoo() {
    const [loadingStatus, setLoadingStatus] = useState<"loading" | "error">("loading",);
    const config = getConfig();
    useEffect(() => {
        if (config.twikoo) {
            import("twikoo")
                .then(({ default: init }) => {
                    init({
                        envId: config.twikoo?.envId!,
                        el: config.twikoo?.el!,
                    });
                })
                .catch((error) => {
                    setLoadingStatus("error");
                    console.error(`Failed to load twikoo: ${error}`);
                });
        }
    });

    useEffect(() => {
        const script = document.createElement("script");
        script.defer = true;
        script.src = "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js"
        script.integrity = "sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4"
        script.crossOrigin = "anonymous"
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    })

    useEffect(() => {
        const script = document.createElement("script");
        script.defer = true
        script.src = "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js"
        script.integrity = "sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa"
        script.crossOrigin = "anonymous"
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    })

    if (config.twikoo) {
        return (
            <div id="tcomment">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous"></link>
                {loadingStatus === "loading" && <div>正在加载评论...</div>}
                {loadingStatus === "error" && <div>评论加载失败</div>}
            </div>
        );
    }
}
