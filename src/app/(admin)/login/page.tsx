'use client';
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
        const b = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(values),
        })
        await b.json();
        router.push('/dashboard')
        // console.log(data);
        // console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className='w-full h-full top-0 left-0 bottom-0 right-0 absolute bg-white flex items-center justify-center'>
                <Form
                    className='py-3 px-5 bg-slate-100 rounded-xl shadow-sm hover:shadow-md'
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className='w-full mb-5 text-center content-center text-xl antialiased'>葱苓的后台QwQ</div>
                    <Form.Item<FieldType>
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名！' }]}
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
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
