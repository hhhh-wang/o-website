export interface CaseItem {
    desc: string;
    path: string;
    tags: string[];
    progress: number;
}

export const caseList: CaseItem[] = [
    {
        desc: '智慧城市数据平台',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/app1.jpg',
        tags: ['大数据', 'AI', '物联网'],
        progress: 100
    },
    {
        desc: '工业生产智能监控系统',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/service1.png',
        tags: ['工业互联网', '实时监控'],
        progress: 85
    },
    {
        desc: '智慧医疗解决方案',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/app1.jpg',
        tags: ['AI诊断', '医疗大数据'],
        progress: 90
    },
    {
        desc: '智能供应链管理平台',
        path: 'https://cdn.jsdelivr.net/gh/hhhh-wang/MyPic@main/blog/temporarily/service1.png',
        tags: ['供应链', '区块链'],
        progress: 95
    }
] 