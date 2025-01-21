export interface ServiceItem {
    description: string;
    detail: string;
    path: string;
    icon?: string;
}

export const serviceList: ServiceItem[] = [
    {
        description: '数据分析与挖掘',
        detail: '运用先进的数据分析技术，帮助企业发现数据价值，优化决策流程',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'data-analysis'
    },
    {
        description: 'AI智能应用',
        detail: '提供智能算法服务，包括计算机视觉、自然语言处理等解决方案',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'ai'
    },
    {
        description: '物联网解决方案',
        detail: '打造智能硬件生态系统，实现设备互联互通，数据实时监控',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'iot'
    },
    {
        description: '云原生架构',
        detail: '基于云计算技术，提供高可用、可扩展的企业级解决方案',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'cloud'
    }
]

export interface ServiceIdea {
    ideaTitle: string;
    ideaSubTitle: string;
    ideaDesc: string;
}

export const serviceIdeaInfo: ServiceIdea = {
    ideaTitle: '变量工坊的愿景',
    ideaSubTitle: 'OUR VISION',
    ideaDesc: '作为技术创新的先行者，我们致力于用科技改变生活。通过深度学习、人工智能等前沿技术，为企业提供全方位的数字化转型解决方案。我们相信，技术创新将持续推动社会进步，让生活更智能、更便捷。'
} 