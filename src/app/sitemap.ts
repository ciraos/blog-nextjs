import { MetadataRoute } from "next";

const BASE_URL = 'https://blog.ciraos.top';

function getFixedDate() { return new Date('2025-01-01') }

export default function sitemap(): MetadataRoute.Sitemap {
    try {
        return [
            { url: `${BASE_URL}/`, lastModified: getFixedDate(), changeFrequency: 'yearly', priority: 1 },
            { url: `${BASE_URL}/about`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/archives`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/categories`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/comments`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/cookies`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/copyright`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/fcircle`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/friends`, lastModified: getFixedDate(), changeFrequency: 'weekly', priority: 0.5 },
            { url: `${BASE_URL}/moments`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/privacy`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/tags`, lastModified: getFixedDate(), changeFrequency: 'monthly', priority: 0.8 },
            { url: `${BASE_URL}/posts/annual_summary-2024`, lastModified: getFixedDate(), changeFrequency: 'weekly', priority: 0.5 },
            { url: `${BASE_URL}/posts/apply-certs-on-1panel`, lastModified: getFixedDate(), changeFrequency: 'weekly', priority: 0.5 },
            { url: `${BASE_URL}/posts/helloworld`, lastModified: getFixedDate(), changeFrequency: 'weekly', priority: 0.5 },
            { url: `${BASE_URL}/posts/NextjsNote`, lastModified: getFixedDate(), changeFrequency: 'weekly', priority: 0.5 },
            { url: `${BASE_URL}/posts/react-studyNote`, lastModified: getFixedDate(), changeFrequency: 'weekly', priority: 0.5 },
            { url: `${BASE_URL}/posts/vscode-CPP-Runtime`, lastModified: getFixedDate(), changeFrequency: 'weekly', priority: 0.5 },
        ];
    } catch (error) {
        console.error('Error generating sitemap:', error);
        throw error;
    }
}
