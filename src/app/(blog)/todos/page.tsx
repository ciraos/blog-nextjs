import { Metadata } from "next";

export const metadata: Metadata = {
    title: "葱苓小筑 | Todos",
    description: "Todos"
};

export default function Todos() {
    return (
        <>
            <div className="todos">
                <h2 className="text-pink-300 text-center text-7xl font-mono font-semibold">Todos</h2>
            </div>
        </>
    );
}
