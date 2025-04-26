import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
    const g = await fetch('https://api.ciraos.top/api/links<init:id>', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ id: req.nextUrl.searchParams.get('id') })
    })
    const data = await g.json();
    console.log({ data })
}
