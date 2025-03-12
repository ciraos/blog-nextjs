'use client';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import "@ant-design/v5-patch-for-react-19";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function Login() {
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log('Success:', values);
    };
    return (
        <>
            <div className=''>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
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
