export interface ServiceItem {
    description: string;
    detail: string;
    path: string;
    icon?: string;
}

export const serviceList: ServiceItem[] = [
    {
        description: '需求梳理',
        detail: '深入分析业务需求，明确目标和范围，确保项目方向准确',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'requirement'
    },
    {
        description: '项目规划',
        detail: '制定详细的项目计划，包括技术方案、资源配置和时间节点',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'plan'
    },
    {
        description: '需求确认',
        detail: '与客户充分沟通，确认需求文档，达成项目共识',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'confirm'
    },
    {
        description: 'UI设计',
        detail: '专业的界面设计，提供美观易用的交互方案',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'design'
    },
    {
        description: '编码开发',
        detail: '采用规范的开发流程，确保代码质量和开发效率',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'develop'
    },
    {
        description: '测试部署',
        detail: '全面的测试验证，安全稳定的系统部署',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'test'
    },
    {
        description: '售后维护',
        detail: '持续的技术支持，定期的系统维护和优化',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/bigData.webp',
        icon: 'support'
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