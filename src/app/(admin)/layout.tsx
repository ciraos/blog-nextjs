import "../globals.css";
import "@ant-design/v5-patch-for-react-19";

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <html lang="zh-CN">
                <body>
                    <div id="ADMIN">
                        {children}
                    </div>
                </body>
            </html>
        </>
    );
}
