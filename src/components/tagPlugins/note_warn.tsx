'use clent'
import { Icon } from "@iconify/react";

export default function Note_warn({ text }: { text: string }) {
    return (
        <div className="note warn"><div><Icon icon="material-symbols-light:warning-rounded" width="24" height="24" className="text-yellow-400" /></div><p>{text}</p></div>
    )
}
