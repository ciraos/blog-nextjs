"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type {
    FormProps
} from 'antd';
import {
    AutoComplete,
    Button,
    Checkbox,
    Form,
    Input
} from 'antd';
import type { DefaultOptionType } from 'antd/es/select';
import "@ant-design/v5-patch-for-react-19";

const formItemLayout: FormProps = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export default function RegisterPage() {
    const [form] = Form.useForm();
    const router = useRouter();
    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onFinish = async (values: string) => {
        router.push('/login');
        console.log('Received values of form: ', values);
    };

    const onWebsiteChange = (value: string) => {
        setAutoCompleteResult(
            value ? ['.cc', '.com', '.com.cn', '.cyou', '.net', '.org', '.top'].map((domain) => `${value}${domain}`) : []
        );
    };

    const websiteOptions = autoCompleteResult.map<DefaultOptionType>((website) => ({
        label: website,
        value: website,
    }));

    return (
        <>
            <div className="register-box pt-12 px-6 bg-white rounded-xl">

                <Form
                    {...formItemLayout}
                    form={form}
                    initialValues={{}}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="nickname"
                        label="昵称"
                        // tooltip=""
                        rules={[{ required: true, message: '请输入您的昵称！', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="website"
                        label="网站"
                        rules={[{ required: false, message: '请输入您的网站！' }]}
                    >
                        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">
                            <Input />
                        </AutoComplete>
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[{ type: 'email', message: '输入的为无效邮箱！', }, { required: true, message: '请输入您的邮箱！', },]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        hasFeedback
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入您的密码！',
                            },
                        ]}
                    >
                        <Input.Password placeholder='密码' />
                    </Form.Item>

                    <Form.Item
                        dependencies={['password']}
                        hasFeedback
                        label="确认密码"
                        name="confirm"
                        rules={[{ required: true, message: '请输入您的密码！', }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('您输入的密码不一致！')); } })]}
                    >
                        <Input.Password placeholder='确认密码' />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('请认真阅读并且决定是否同意用户协议！')) }]}
                    >
                        <Checkbox>我已经阅读了<Link href="/">用户协议</Link></Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">注册</Button>
                    </Form.Item>

                </Form>
            </div>
        </>
    );
}
