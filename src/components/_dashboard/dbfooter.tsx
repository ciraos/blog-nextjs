import Link from "next/link";

export default function Dbfooter() {
    return (
        <>
            <div className="db-footer h-16 text-center content-center">
                <Link target="_blank" rel="noopener noreferrer" className="text-slate-600" href="https://beian.miit.gov.cn">皖ICP备2023018992号-1</Link>
                <p className="font-mono">All rights reserved to ©Ciraos {2024 + '-' + new Date().getFullYear()}</p>
            </div>
        </>
    )
}
