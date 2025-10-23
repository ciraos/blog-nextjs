"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type {
    FormProps
} from 'antd';
import {
    Button,
    Checkbox,
    Form,
    Input
} from 'antd';
import "@ant-design/v5-patch-for-react-19";

type FieldType = {
    email?: string;
    password?: string;
    remember?: string;
};

export default function LoginPage() {
    const router = useRouter();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();

            // 可根据实际接口返回字段进一步细化判断条件
            if (data.success) {
                router.push('/dashboard');
            } else {
                alert("登录失败，请检查用户名或密码");
            }
        } catch (error) {
            console.error("Login request failed:", error);
            alert("网络异常，请稍后再试");
        }
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div
                className='login-box pt-12 pb-2 px-6 mx-auto rounded-xl bg-white shadow-md hover:shadow-lg'
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="邮箱"
                        name="email"
                        rules={[{ required: true, message: '请输入您的邮箱！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </Form.Item>

                    <div className='flex items-center justify-between'>
                        <p>
                            忘记密码了？去<Link href="/forgotpassword">恢复</Link>
                        </p>
                        <Button type='link' href="/">返回首页</Button>
                    </div>
                </Form>
            </div>
        </>
    );
}
