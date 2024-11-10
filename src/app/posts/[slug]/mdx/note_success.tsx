'use clent'
import { useState } from "react"

export default function Note_success({ text }: { text: string }) {
    return (
        <div className="note success">{text}</div>
    )
}
