export interface CapabilityItem {
    title: string;
    description: string;
    icon: string;
}

export const capabilityList: CapabilityItem[] = [
    {
        title: '企业网站开发',
        description: '响应式设计，SEO优化，打造专业品牌形象',
        icon: 'el-icon-monitor'
    },
    {
        title: '移动应用开发',
        description: '原生APP、小程序、H5多端开发解决方案',
        icon: 'el-icon-mobile'
    },
    {
        title: '数据库开发',
        description: '数据库设计、性能优化、数据迁移服务',
        icon: 'el-icon-coin'
    },
    {
        title: '系统集成服务',
        description: '定制化系统开发，无缝对接现有业务',
        icon: 'el-icon-setting'
    }
]