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
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="serviceIcon1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 需求梳理：文档和清单 -->
            <path d="M320 192h384c35.3 0 64 28.7 64 64v512c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64z" fill="none" stroke="url(#serviceIcon1)" stroke-width="32"/>
            <path d="M384 352h320M384 448h320M384 544h320M384 640h192" stroke="url(#serviceIcon1)" stroke-width="32" stroke-linecap="round"/>
            <rect x="288" y="328" width="48" height="48" rx="8" fill="url(#serviceIcon1)"/>
            <rect x="288" y="424" width="48" height="48" rx="8" fill="url(#serviceIcon1)"/>
            <rect x="288" y="520" width="48" height="48" rx="8" fill="url(#serviceIcon1)"/>
            <rect x="288" y="616" width="48" height="48" rx="8" fill="url(#serviceIcon1)"/>
        </svg>`
    },
    {
        description: '项目规划',
        detail: '制定详细的项目计划，包括技术方案、资源配置和时间节点',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="serviceIcon2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 项目规划：甘特图和时间线 -->
            <path d="M128 256h768v512H128z" stroke="url(#serviceIcon2)" stroke-width="32" fill="none"/>
            <path d="M128 384h768M256 256v512" stroke="url(#serviceIcon2)" stroke-width="16"/>
            <path d="M320 352h160v64H320zM544 448h192v64H544zM384 544h224v64H384z" fill="url(#serviceIcon2)"/>
        </svg>`
    },
    {
        description: 'UI设计',
        detail: '专业的界面设计，提供美观易用的交互方案',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="serviceIcon3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- UI设计：画板和设计工具 -->
            <path d="M256 192h512c35.3 0 64 28.7 64 64v512c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64z" fill="none" stroke="url(#serviceIcon3)" stroke-width="32"/>
            <path d="M320 320h384v64H320z" fill="url(#serviceIcon3)"/>
            <circle cx="480" cy="480" r="32" fill="url(#serviceIcon3)"/>
            <circle cx="608" cy="544" r="32" fill="url(#serviceIcon3)"/>
            <path d="M480 480L608 544" stroke="url(#serviceIcon3)" stroke-width="16"/>
        </svg>`
    },
    {
        description: '需求确认',
        detail: '与客户充分沟通，确认需求文档，达成项目共识',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="serviceIcon4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 需求确认：对话框和大勾 -->
            <path d="M256 256h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-64l-128 128-128-128h-192c-35.3 0-64-28.7-64-64V320c0-35.3 28.7-64 64-64z" fill="url(#serviceIcon4)"/>
            <path d="M384 448l96 96 192-192" stroke="#fff" stroke-width="48" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>`
    },
    {
        description: '编码开发',
        detail: '采用规范的开发流程，确保代码质量和开发效率',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="serviceIcon5" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 编码开发：代码符号和括号 -->
            <path d="M384 320l-160 192 160 192M640 320l160 192-160 192" stroke="url(#serviceIcon5)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <path d="M512 320l-64 384" stroke="url(#serviceIcon5)" stroke-width="32" stroke-linecap="round"/>
        </svg>`
    },
    {
        description: '测试部署',
        detail: '全面的测试验证，安全稳定的系统部署',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="serviceIcon6" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 测试部署：检查表和云端 -->
            <path d="M320 448h384M320 544h384M320 640h256" stroke="url(#serviceIcon6)" stroke-width="32" stroke-linecap="round"/>
            <path d="M256 256h512c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64V320c0-35.3 28.7-64 64-64z" fill="none" stroke="url(#serviceIcon6)" stroke-width="32"/>
            <path d="M320 256v-64c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v64" stroke="url(#serviceIcon6)" stroke-width="32"/>
        </svg>`
    },
    {
        description: '售后维护',
        detail: '持续的技术支持，定期的系统维护和优化',
        icon: `<svg viewBox="0 0 1024 1024">
            <defs>
                <linearGradient id="serviceIcon7" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#3370ff"/>
                    <stop offset="100%" style="stop-color:#66a3ff"/>
                </linearGradient>
            </defs>
            <!-- 售后维护：时钟和齿轮组合 -->
            <path d="M512 192c176.7 0 320 143.3 320 320S688.7 832 512 832 192 688.7 192 512s143.3-320 320-320z" fill="none" stroke="url(#serviceIcon7)" stroke-width="32"/>
            <path d="M512 512l-96-96M512 320v192" stroke="url(#serviceIcon7)" stroke-width="32" stroke-linecap="round"/>
            <circle cx="512" cy="512" r="48" fill="url(#serviceIcon7)"/>
            <path d="M512 288c123.7 0 224 100.3 224 224s-100.3 224-224 224-224-100.3-224-224 100.3-224 224-224z" fill="none" stroke="url(#serviceIcon7)" stroke-width="16" stroke-dasharray="32,16"/>
            <path d="M320 512h-96M800 512h-96M512 320v-96M512 800v-96" stroke="url(#serviceIcon7)" stroke-width="16" stroke-linecap="round"/>
            <path d="M368 368l-64-64M656 368l64-64M368 656l-64 64M656 656l64 64" stroke="url(#serviceIcon7)" stroke-width="16" stroke-linecap="round"/>
        </svg>`
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