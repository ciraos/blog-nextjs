//!
import axios from "axios";

export const fetchMoment = async () => {
    try {
        const res = await axios.get('https://api.ciraos.top/api/moments');
        return res.data;
        // console.log(res.data);
    } catch (error) {
        console.error('获取说说错误:', error);
        return [];
    }
};

export const createMoment = async (moment?: any) => {
    try {
        const res = await axios.post('https://api.ciraos.top/api/moments', moment);
        return res.data;
    } catch (error) {
        console.log('创建说说失败:', error);
        return null;
    }
};

export const updateMoment = async (id?: any, moment?: any) => {
    try {
        const res = await axios.put(`https://api.ciraos.top/api/moments/${id}`, moment);
        return res.data;
    } catch (error) {
        console.log('更新说说失败:', error);
        return null;
    }
};

export const deleteMoment = async (id?: any) => {
    try {
        await axios.delete(`https://api.ciraos.top/api/moments/${id}`);
        return true;
    } catch (error) {
        console.log('删除说说失败:', error);
        return false;
    }
};
