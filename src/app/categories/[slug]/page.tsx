'use client'
import type { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';

const CategoryPage: NextPage = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug');

    const getCategoryData = (slug: string) => {
        return {
            title: `${slug}`,
            description: `${slug}`
        };
    };

    const categoryData = slug ? getCategoryData(slug as string) : null;

    if (!categoryData) {
        return <p>加载中...</p>;
    }
    return (
        <>
            <div>咕咕咕···</div>
        </>
    );
};

export default CategoryPage;
