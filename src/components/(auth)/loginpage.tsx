"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import type {
    FormProps
} from 'antd';
import {
    Button,
    Checkbox,
    Flex,
    Form,
    Input
} from 'antd';
// import {
//     LockOutlined,
//     UserOutlined
// } from "@ant-design/icons";
import "@ant-design/v5-patch-for-react-19";

type FieldType = {
    email?: string;
    password?: string;
    remember?: boolean;
};

export default function LoginPage() {
    const router = useRouter();

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        try {
            const aa = await fetch('/api/login', {
                "method": 'POST',
                "headers": { 'Content-Type': 'application/json' },
                "body": JSON.stringify(values)
            });

            if (!aa.ok) {
                throw new Error(`HTTP error! Status: ${aa.status}`);
            }

            const data = await aa.json();

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
                className='login-box pt-6 px-6 mx-auto rounded-xl bg-white shadow-md hover:shadow-lg dark:bg-slate-600'
            >
                <Form
                    autoComplete='off'
                    // colon={false}
                    initialValues={{ remember: true }}
                    // labelAlign
                    name="login"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    scrollToFirstError
                >
                    <Form.Item<FieldType>
                        label="邮箱"
                        name="email"
                        rules={[{ required: true, message: '请输入您的邮箱！' }]}
                    >
                        <Input placeholder='邮箱' />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码！' }]}
                    >
                        <Input.Password placeholder='密码' visibilityToggle />
                    </Form.Item>

                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                            <Link href="/forgotpassword">忘记密码</Link>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit">登录</Button>
                        or <Link href="/register">现在注册！</Link>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
