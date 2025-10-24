import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDir = join(process.cwd(), "posts");

type MetaData = {
    title: string;
    created: Date;
    updated?: Date;
    categories: string[];
    tags?: string[];
    descr?: string;
    draft?: boolean;
};

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = join(postsDir, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content, excerpt } = matter(fileContents, { excerpt: true, });
    const meta = { ...data } as MetaData;

    console.log('----------');
    console.log('This is realSlug: ' + realSlug);
    console.log('This is realSlug: ' + fullPath);

    return { slug: realSlug, meta, content, excerpt };
}

export function getAllPosts() {
    const slugs = fs.readdirSync(postsDir);
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((c) => !/\.draft$/.test(c.slug));

    return posts.sort((a, b) => +b.meta.created - +a.meta.created);
}
