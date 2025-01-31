interface CardItem {
  icon: string;
  title: string;
  description: string;
}

export const transitionCardList: CardItem[] = [
  {
    icon: `<svg class="icon" viewBox="0 0 1024 1024">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" 
                  fill="currentColor" opacity="0.2"/>
            <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z" 
                  fill="currentColor"/>
            <path d="M512 442c-38.6 0-70 31.4-70 70s31.4 70 70 70 70-31.4 70-70-31.4-70-70-70z" 
                  fill="currentColor"/>
          </svg>`,
    title: "专业技术",
    description: "十年研发经验，技术深厚"
  },
  {
    icon: `<svg class="icon" viewBox="0 0 1024 1024">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" 
                  fill="currentColor" opacity="0.2"/>
            <path d="M508 280c-141.4 0-256 114.6-256 256 0 141.4 114.6 256 256 256 141.4 0 256-114.6 256-256 0-141.4-114.6-256-256-256zm128 277.3c0 4.4-3.6 8-8 8h-88v88c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-88h-88c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h88v-88c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v88h88c4.4 0 8 3.6 8 8v48z" 
                  fill="currentColor"/>
          </svg>`,
    title: "创新思维",
    description: "紧跟技术前沿，引领创新"
  },
  {
    icon: `<svg class="icon" viewBox="0 0 1024 1024">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" 
                  fill="currentColor" opacity="0.2"/>
            <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l174.7-242c3.8-5.3 0-12.7-6.5-12.7z" 
                  fill="currentColor"/>
          </svg>`,
    title: "优质服务",
    description: "全程专人对接，快速响应"
  }
]; 