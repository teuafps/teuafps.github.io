import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Teua UD Server',
  description: 'Minecraft 都市開発サーバー 公式サイト',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '夏彩県について', link: '/about' },
      { text: '利用規約', link: '/rules' },
      { text: '都市条例', link: '/ordinance' },
      { text: 'Discord', link: 'https://discord.gg/your-invite' }
    ],
    sidebar: {
      '/': [
        { text: '夏彩県について', link: '/about' },
        { text: '利用規約', link: '/rules' },
        { text: '都市条例', link: '/ordinance' }
      ]
    },
    socialLinks: [
      { icon: 'x', link: 'https://x.com/TeuaGG' },
      { icon: 'discord', link: 'https://discord.gg/your-invite' }
    ]
  }
})
