import userConfig from "../../blog.config";

export interface twikooConfig {
    envId: string
}

export interface userConfig {
    name: string
    server: string
    description: string
    twikoo?: twikooConfig
}
export function defineConfigs(options: userConfig) {
    return options
}

export function getConfig() {
    return userConfig
}
