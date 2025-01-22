export interface CapabilityItem {
    title: string;
    description: string;
    icon: string;
}

export const capabilityList: CapabilityItem[] = [
    {
        title: '企业网站开发',
        description: '响应式设计，SEO优化，打造专业品牌形象',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="capIcon1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 响应式网站图标：电脑和手机组合 -->
            <path d="M896 192H128c-35.3 0-64 28.7-64 64v448c0 35.3 28.7 64 64 64h320v64H320v32h384v-32H576v-64h320c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64zm0 512H128V256h768v448z" fill="url(#capIcon1)"/>
            <path d="M640 512h128v128H640z" fill="url(#capIcon1)"/>
        </svg>`
    },
    {
        title: '移动应用开发',
        description: '原生APP、小程序、H5多端开发解决方案',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="capIcon2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 移动应用图标：手机和应用图标组合 -->
            <path d="M704 128H320c-35.3 0-64 28.7-64 64v640c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zm0 704H320V192h384v640z" fill="url(#capIcon2)"/>
            <path d="M512 816c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z" fill="url(#capIcon2)"/>
            <path d="M448 288h128v64H448zm0 128h128v64H448zm0 128h128v64H448z" fill="url(#capIcon2)"/>
        </svg>`
    },
    {
        title: '数据库开发',
        description: '数据库设计、性能优化、数据迁移服务',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="capIcon3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 数据库图标：数据库层叠 -->
            <path d="M512 128c-141.4 0-256 43-256 96v96c0 53 114.6 96 256 96s256-43 256-96v-96c0-53-114.6-96-256-96z" fill="url(#capIcon3)"/>
            <path d="M512 480c-141.4 0-256-43-256-96v160c0 53 114.6 96 256 96s256-43 256-96V384c0 53-114.6 96-256 96z" fill="url(#capIcon3)"/>
            <path d="M512 704c-141.4 0-256-43-256-96v160c0 53 114.6 96 256 96s256-43 256-96V608c0 53-114.6 96-256 96z" fill="url(#capIcon3)"/>
        </svg>`
    },
    {
        title: '系统集成服务',
        description: '定制化系统开发，无缝对接现有业务',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="capIcon4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 系统集成图标：齿轮和连接线 -->
            <path d="M512 320c-106 0-192 86-192 192s86 192 192 192 192-86 192-192-86-192-192-192zm0 320c-70.7 0-128-57.3-128-128s57.3-128 128-128 128 57.3 128 128-57.3 128-128 128z" fill="url(#capIcon4)"/>
            <path d="M224 448h128v128H224zm448 0h128v128H672zM448 224h128v128H448zm0 448h128v128H448z" fill="url(#capIcon4)"/>
            <path d="M512 384v64m0 128v64m128-128h64m-384 0h64" stroke="url(#capIcon4)" stroke-width="32"/>
        </svg>`
    }
];