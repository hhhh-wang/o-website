export interface CapabilityItem {
    title: string;
    description: string;
    icon: string;
}

export const capabilityList: CapabilityItem[] = [
    {
        title: '网站建设',
        description: '专业的网站开发团队，提供响应式设计、SEO优化等全方位服务',
        icon: 'el-icon-monitor'
    },
    {
        title: '小程序开发',
        description: '微信、支付宝等多平台小程序开发，助力企业快速布局移动端',
        icon: 'el-icon-mobile'
    },
    {
        title: '谷歌插件',
        description: '专业的Chrome扩展开发，提供个性化浏览器功能增强解决方案',
        icon: 'el-icon-chrome'
    },
    {
        title: '解决方案',
        description: '为企业提供完整的技术咨询和解决方案，助力数字化转型',
        icon: 'el-icon-setting'
    }
] 