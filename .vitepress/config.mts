import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Teua UD Server',
  description: 'Minecraft 都市開発サーバー 公式サイト',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '本サーバーについて', link: '/about' },
      { text: '利用規約', link: '/rules' },
      { text: '都市条例', link: '/ordinance' },
      { text: 'MAP', link: '' }
    ],
    sidebar: {
      '/': [
        { text: '本サーバーについて', link: '/about' },
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
