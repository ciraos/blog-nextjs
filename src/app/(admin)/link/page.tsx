'use client';
import {
    useEffect,
    useState
} from 'react';
import {
    Button,
    Form,
    Input,
    Modal,
    // Image, Space
} from 'antd';
import "@ant-design/v5-patch-for-react-19";
import { Icon } from '@iconify/react';

interface Values {
    name?: string;
    link?: string;
    avatar?: string;
    descr?: string;
    remember?: string;
}

export default function Links() {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.title = '友链管理 | 葱苓后台admin'
    }, [])

    const getLinks = async (values: Values) => {
        await fetch('/api/linkpost', {
            method: 'POST',
            body: JSON.stringify(values)
        })
        setOpen(false);
    };

    const refreshLinks = async () => {
        const f = await fetch('/api/link', {
            method: 'GET'
        })
        await f.json();
    }

    // const deleteLinks = async () => {
    //     const h = await fetch('/api/linkdelete', {
    //         method: 'DELETE'
    //     })
    //     await h.json();
    // }

    return (
        <>
            <Modal
                open={open}
                title="添加友链"
                okText="创建"
                cancelText="取消"
                okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
                onCancel={() => setOpen(false)}
                destroyOnClose
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        initialValues={{ remember: true }}
                        clearOnDestroy
                        onFinish={(values) => getLinks(values)}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item<Values>
                    label="名称"
                    name="name"
                    rules={[{ required: true, message: '请输入名称！' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<Values>
                    label="链接"
                    name="link"
                    rules={[{ required: true, message: '请输入链接！' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<Values>
                    label="头像"
                    name="avatar"
                    rules={[{ required: false, message: '请输入头像！' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<Values>
                    label="描述"
                    name="descr" >
                    <Input type="textarea" />
                </Form.Item>
            </Modal>

            <div className='w-4/5 mt-12 mx-auto'>
                <div className='text-xl text-slate-600'>友链列表</div>
                <div className='w-full mt-5 flex justify-end gap-1 items-center'>
                    <Button type="primary" onClick={() => setOpen(true)}>添加友链</Button>
                    <Icon
                        onClick={refreshLinks}
                        icon="material-symbols-light:refresh-rounded"
                        className='w-6 h-6 cursor-pointer'
                    />
                </div>
                <ul className='links mt-10'></ul>
            </div>

        </>
    );
}
