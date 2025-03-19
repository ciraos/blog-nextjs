'use client';
import { useEffect, useState } from 'react';
import { fetchMoment, createMoment, updateMoment, deleteMoment } from '@/app/api/moment/route';

interface Moment {
    id: string;
    content: string;
    [user_id: string]: any;
}

export default function Shuoshuo() {
    const [moments, setMoments] = useState<Moment[]>([]);                                           //? 重命名避免命名冲突
    const [newMoment, setNewMoment] = useState<Omit<Moment, 'id'>>({ content: '', user_id: '' });   //?
    const [editedMoment, setEditedMoment] = useState<Moment | null>(null);                          //? 明确类型
    const [errorCount, setErrorCount] = useState(0);                                                //! 获取失败最大次数限制: 5

    const fetchMoments = async () => {
        try {
            const data = await fetchMoment();
            setMoments(data);
            setErrorCount(0);
        } catch (error) {
            setErrorCount(prevCount => prevCount + 1)
            console.error('获取说说失败:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            if (errorCount < 5) {
                try {
                    await fetchMoments();
                } catch (error) {
                    console.error('获取说说失败:', error);
                }
            }
        };
        fetchData();
    }, [errorCount])

    const handleCreate = async () => {
        const createdMoment = await createMoment(newMoment);
        setMoments([...moments, createdMoment]);
        setNewMoment({ id: '', content: '', user_id: '' });
    };

    const handleEdit = (moment?: any) => {
        setEditedMoment({ ...moment });
    };

    const handleUpdate = async () => {
        const updatedMoment = await updateMoment(editedMoment?.id, editedMoment);
        setMoments(moments.map(m => m.id === editedMoment?.id ? updatedMoment : m));
        setEditedMoment(null);
    };

    const handleDelete = async (id?: any) => {
        await deleteMoment(id);
        setMoments(moments.filter(m => m.id !== id));
    };

    return (
        <div>
            <div className='mt-5 text-2xl font-semibold'>说说管理</div>

            {/* 创建说说表单 */}
            <div className='mt-5 text-2xl font-semibold'>创建新说说</div>
            <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="内容"
                        value={newMoment.content}
                        onChange={(e) => setNewMoment(v => ({ ...v, content: e.target.value }))}
                        required
                        className='border-1'
                    />
                    {/* <textarea name="" id="" className='border-1'>a</textarea> */}
                </div>
                <button type="submit">创建</button>
            </form>

            {/* 说说列表 */}
            <div className='mt-5 text-2xl font-semibold'>说说列表</div>
            <ul>
                {moments.map((moment: Moment) => (
                    <li key={moment.id}>
                        {editedMoment?.id === moment.id ? (
                            <form>
                                <input
                                    type="text"
                                    value={editedMoment?.content}
                                    onChange={(e) => setEditedMoment({ ...editedMoment, content: e.target.value })}
                                />
                                <button type="button" onClick={handleUpdate}>更新</button>
                                <button type="button" onClick={() => setEditedMoment(null)}>取消</button>
                            </form>
                        ) : (
                            <div>
                                {moment.content}
                                <button type="button" onClick={() => handleEdit(moment)}>编辑</button>
                                <button type="button" onClick={() => handleDelete(moment.id)}>删除</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

        </div>
    );
};
