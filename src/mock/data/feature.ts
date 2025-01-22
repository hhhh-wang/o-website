export interface FeatureItem {
    title: string;
    description: string;
    icon: string;
}

export const featureList: FeatureItem[] = [
    {
        title: '专业研发团队',
        description: '核心成员均来自知名互联网公司',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="iconGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 三个人像组合，突出团队协作 -->
            <path d="M512 384c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm-192 64c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm384 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zM512 448c-106 0-192 86-192 192v128h384V640c0-106-86-192-192-192zm-192 64c-71 0-128 57-128 128v128h128V640c0-47 13.9-90.8 37.7-128-12.9-0.2-25.8 0-37.7 0zm384 0c-11.9 0-24.8-0.2-37.7 0 23.8 37.2 37.7 81 37.7 128v128h128V640c0-71-57-128-128-128z" fill="url(#iconGradient1)"/>
        </svg>`
    },
    {
        title: '成本效益优势',
        description: '高性价比的定制化开发服务',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 金币和上升趋势图 -->
            <path d="M512 192c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 192c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="url(#iconGradient2)"/>
            <path d="M320 640l128-128 128 128 192-192v128l-192 192-128-128-128 128V640zm-64-256h128v384H256V384zm640 0v384H768V384h128z" fill="url(#iconGradient2)"/>
        </svg>`
    },
    {
        title: '强大的生态体系',
        description: '完善的技术栈和丰富的行业资源',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 互联的六边形网络结构 -->
            <path d="M512 192l-160 80v160l160 80 160-80V272l-160-80zm0 256l-96-48V304l96-48 96 48v96l-96 48z" fill="url(#iconGradient3)"/>
            <path d="M320 544l-160 80v160l160 80 160-80V624l-160-80zm384 0l-160 80v160l160 80 160-80V624l-160-80z" fill="url(#iconGradient3)"/>
            <path d="M512 192v64m0 512v-64m-192-256h-64m512 0h-64" stroke="url(#iconGradient3)" stroke-width="32"/>
        </svg>`
    },
    {
        title: '快速响应机制',
        description: '7*24小时技术支持服务',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="iconGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 时钟和闪电组合 -->
            <path d="M512 192c-176.7 0-320 143.3-320 320s143.3 320 320 320 320-143.3 320-320-143.3-320-320-320zm0 576c-141.4 0-256-114.6-256-256s114.6-256 256-256 256 114.6 256 256-114.6 256-256 256z" fill="url(#iconGradient4)"/>
            <path d="M512 320v192l128 128-45.3 45.3L448 538.6V320h64z" fill="url(#iconGradient4)"/>
            <path d="M707.8 352L640 419.8l60.2 60.2L768 412.2 707.8 352z" fill="url(#iconGradient4)"/>
        </svg>`
    }
];