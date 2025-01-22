export interface CaseExample {
    title: string;
    description: string;
    image: string;
}

export interface CaseCategory {
    title: string;
    shortDesc: string;
    icon: string;
    background: string[];
    examples: CaseExample[];
}

export const caseCategories: CaseCategory[] = [
    {
        title: '智能名片王',
        shortDesc: '智能名片，适配用户轨迹',
        icon: 'el-icon-user',
        background: [
            '我们是一间内部驱动的技术研发科技公司。践行"技术研发+人工智能+大数据"的创新型云科技公司核心战略，基于百万级实用用户的数据能力，为客户提供定制化的一站式人工智能分析升级服务。',
            '统一企业对外形象及建立完全会员系统；提供多种工具帮助企业提升，帮助企业与个人做客户分析'
        ],
        examples: [
            {
                title: '公交系统智能名片',
                description: '为公交系统开发的智能名片管理系统',
                image: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/case1.jpg'
            },
            {
                title: '企业智能名片系统',
                description: '面向企业的智能名片解决方案',
                image: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/case2.jpg'
            }
        ]
    },
    {
        title: '微店',
        shortDesc: '定制化企业展示系统',
        icon: 'el-icon-shop',
        background: [
            '为企业提供专业的在线展示和交易平台',
            '支持商品管理、订单处理、客户管理等完整功能'
        ],
        examples: [/* ... */]
    },
    {
        title: 'ERP',
        shortDesc: '一站式、快速、准确、效率',
        icon: 'el-icon-office-building',
        background: [/* ... */],
        examples: [/* ... */]
    },
    {
        title: '进销存',
        shortDesc: '实时全面、及时掌握',
        icon: 'el-icon-box',
        background: [/* ... */],
        examples: [/* ... */]
    },
    {
        title: '智能互动',
        shortDesc: '及时沟通、智能业务效率',
        icon: 'el-icon-chat-dot-round',
        background: [/* ... */],
        examples: [/* ... */]
    }
] 