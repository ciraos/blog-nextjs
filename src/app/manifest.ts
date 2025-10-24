import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: '葱苓小筑',
        short_name: '葱苓小筑',
        description: 'a small blog station.',
        start_url: '/',
        display: 'standalone',
        background_color: '#f4f4f4',
        theme_color: '#39c5bb',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
