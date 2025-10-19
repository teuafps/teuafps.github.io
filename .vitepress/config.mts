import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TeuaUDServer / 都市開発鯖',
  description: 'TeuaUDServer / 都市開発鯖の公式サイトです。車や電車・飛行機Mod、建築Modなどを導入している自由な都市空間です。',
  themeConfig: {
    nav: [
      { text: 'ホーム', link: '/' },
      { text: '本サーバーについて', link: '/about' },
      { text: '利用規約', link: '/rules' },
      { text: '都市条例', link: '/ordinance' },
      { text: '募集要項', link: '/recruit' },
      { text: 'MAP', link: 'http://pureno.top:8100' }
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
      { icon: 'discord', link: 'https://discord.gg/6urNmarNNA' },
      { icon: 'google', link: 'https://forms.gle/oghHLE36yyCUr87XA' }
    ]
  }
})
