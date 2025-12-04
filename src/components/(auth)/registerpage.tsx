"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Space
} from 'antd';
import type {
    CascaderProps,
    FormItemProps,
    FormProps
} from 'antd';
import type { DefaultOptionType } from 'antd/es/select';

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

const tailFormItemLayout: FormItemProps = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default function RegisterPage() {
    const router = useRouter();
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        router.push('/login');
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{ width: 70 }}
                defaultValue={'86'}
                options={[
                    { label: '+86', value: '86' },
                    { label: '+87', value: '87' },
                ]}
            />
        </Form.Item>
    );

    const suffixSelector = (
        <Form.Item name="suffix" noStyle>
            <Select
                style={{ width: 70 }}
                defaultValue={'USD'}
                options={[
                    { label: '$', value: 'USD' },
                    { label: '¥', value: 'CNY' },
                ]}
            />
        </Form.Item>
    );

    const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

    const onWebsiteChange = (value: string) => {
        setAutoCompleteResult(
            value ? ['.com', '.org', '.net'].map((domain) => `${value}${domain}`) : [],
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
                    style={{}}
                >
                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                            {
                                type: 'email',
                                message: '您输入了无效的邮箱！',
                            },
                            {
                                required: true,
                                message: '请输入您的邮箱！',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="密码"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="确认密码"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认密码！',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label="昵称"
                        tooltip="What do you want others to call you?"
                        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('请勾选同意用户协议！')), },]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            我已经阅读并同意<a href="">用户协议。</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">注册</Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
