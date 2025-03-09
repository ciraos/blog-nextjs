'use client';
import { useEffect } from "react"

export default function Busuanzi() {
    useEffect(() => {
        const script = document.createElement('script')
        script.async = true
        script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
        document.body.appendChild(script)
        return () => { document.body.removeChild(script) }
    })
    return (
        <></>
    )
}
