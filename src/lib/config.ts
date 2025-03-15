import blogConfig from "../../blog.config";

export interface twikooConfig {
    envId: string
    el: string
    // Katex: string[]
}

export interface blogConfig {
    name: string
    server: string
    description: string
    twikoo?: twikooConfig
}
export function defineConfigs(options: blogConfig) {
    return options
}

export function getConfig() {
    return blogConfig
}
