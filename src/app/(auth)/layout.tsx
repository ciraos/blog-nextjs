import "../globals.css";
import "@ant-design/v5-patch-for-react-19";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <html lang="zh-CN">
                <body>
                    <div id="CIRAOS">
                        <div className="auth-container w-ful h-screen flex items-center justify-center">
                            {children}
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
}
