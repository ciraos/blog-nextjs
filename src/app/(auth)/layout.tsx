import NextTopLoader from "nextjs-toploader";
import "../globals.css";
import {
    ConfigProvider
} from "antd";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <html lang="zh-CN">
                <body>
                    <ConfigProvider theme={{ token: {} }}>
                        <div id="CIRAOS">
                            <NextTopLoader
                                easing="ease"
                                shadow="box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
                                showSpinner={false}
                            />
                            <div className="auth-container w-ful h-screen flex items-center justify-center">
                                {children}
                            </div>
                        </div>
                    </ConfigProvider>
                </body>
            </html>
        </>
    );
}
