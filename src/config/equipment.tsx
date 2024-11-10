import Image from "next/image";

import myphone from '@/app/images/equipment/myPhone.avif';
import myheadset from '@/app/images/equipment/myHeadset.avif';
import mychdb from '@/app/images/equipment/mychdb.avif';
import mywatch from '@/app/images/equipment/myWatch.avif';

interface equipmentList {
    category: string;
    child: string[];
    name: string;
    link: string;
    price: number;
    images: string[];
};

export const equipmentList = [
    {
        category: '生产力',
        child: [
            { name: 'Redmi Note8 Pro', link: 'https://baike.baidu.com/item/Redmi%20Note%208%20Pro/57926395?fr=ge_alaH', price: '', images: (<><Image src={myphone} alt="myphone" /></>) },
            { name: 'Redmi Buds 6s', link: 'https://detail.tmall.com/item.htm?_u=7359g30rddd8&id=793464764570&spm=a1z09.2.0.0.60462e8d6Miupc&sku_properties=5919063%3A6536025', price: 199, images: (<><Image src={myheadset} alt="myheadset" /></>) },
            { name: 'Xiaomi 20000mAh 22.5w 充电宝', link: 'https://detail.tmall.com/item.htm?abbucket=17&id=602756412617&rn=6eba08b386b88c825097db55f98474a8&skuId=5057261075968&spm=a1z10.3-b-s.w4011-14756119800.64.762148feO9jkxN', price: 129, images: (<><Image src={mychdb} alt="mychdb" /></>) },
            { name: 'Redmi Watch', link: '', price: 299, images: (<><Image src={mywatch} alt="" /></>) },
            // { name: '', link: '', price: 0, images: (<><Image src={} alt="" /></>) },
        ]
    },
    {
        category: '生活',
        child: [
            // { name: '', link: '', price: 0, images: (<><Image src={} alt="" /></>) },
            // { name: '', link: '', price: 0, images: (<><Image src={} alt="" /></>) },
        ]
    }
];
