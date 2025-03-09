'use clent'
import { Icon } from "@iconify/react";

export default function Note_success({ text }: { text: string }) {
    return (
        <div className="note success"><div><Icon icon="material-symbols-light:priority-rounded" width="24" height="24" className="text-slate-400" /></div><p>{text}</p></div>
    )
}
