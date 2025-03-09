'use clent';
import { Icon } from "@iconify/react";

export default function Note_default({ text }: { text: string }) {
    return (
        <div className="note default"><div><Icon icon="material-symbols-light:arrow-circle-right" width="24" height="24" className="text-pink-400" /></div><p>{text}</p></div>
    )
}
