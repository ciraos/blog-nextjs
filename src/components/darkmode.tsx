'use client';
import { useState, useEffect, useCallback } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

export default function DarkMode() {
    // 初始化：优先本地存储 → 系统偏好 → 默认light
    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        if (typeof window === 'undefined') return 'system';
        const stored = localStorage.getItem('theme-mode');
        return stored as ThemeMode || 'system';
    });

    // 计算实际生效的主题（system模式下同步系统偏好）
    const effectiveTheme = useCallback((): 'light' | 'dark' => {
        if (themeMode !== 'system') return themeMode;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }, [themeMode]);

    // 监听系统偏好+主题模式变化，同步DOM样式
    useEffect(() => {
        const updateTheme = () => {
            const theme = effectiveTheme();
            document.documentElement.classList.toggle('dark', theme === 'dark');
        };

        // 初始执行+监听系统变化
        updateTheme();
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', updateTheme);

        // 清理监听
        return () => mediaQuery.removeEventListener('change', updateTheme);
    }, [themeMode, effectiveTheme]);

    // 切换主题（循环：light → dark → system）
    const toggleTheme = useCallback(() => {
        const nextMode: Record<ThemeMode, ThemeMode> = {
            light: 'dark',
            dark: 'system',
            system: 'light',
        };
        const newMode = nextMode[themeMode];
        setThemeMode(newMode);
        localStorage.setItem('theme-mode', newMode); // 持久化存储
    }, [themeMode]);

    // 模式文案+图标映射
    const modeConfig = {
        light: { text: '亮色', icon: '☀️' },
        dark: { text: '暗色', icon: '🌙' },
        system: { text: '跟随系统', icon: '🔄' },
    };

    return (
        <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${effectiveTheme() === 'dark'
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
        >
            {modeConfig[themeMode].icon} 当前：{modeConfig[themeMode].text}
        </button>
    );
}
