'use client'
import { useRouter } from 'next/navigation';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import "@ant-design/v5-patch-for-react-19";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

export default function Login() {
    const router = useRouter();
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const b = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values)
        })
        await b.json();
        router.push('/dashboard');
        console.log('成功:', values);
    };
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('失败:', errorInfo);
    };
    return (
        <>
            <div className="w-ful h-screen absolute top-0 left-0 bottom-0 right-0 bg-white flex justify-center items-center">
                <Form
                    className="py-4 px-6 bg-slate-100 rounded-xl transition-all"
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 400 }}
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入你的用户名！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入你的密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}