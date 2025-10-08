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
      { text: '募集要項', link: '/recruit' },
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
      { icon: 'x', link: 'https://x.com/TeuaUDServer' },
      { icon: 'discord', link: 'https://discord.gg/aSzt7fzyzU' },
      { icon: 'google', link: 'https://forms.gle/oghHLE36yyCUr87XA' }
    ]
  }
})
