import Theme from 'vitepress/theme'
import RecruitCard from './components/RecruitCard.vue'

export default {
  ...Theme,
  // この enhanceApp メソッドが重要です
  enhanceApp({ app }) {
    // グローバルコンポーネントとして登録
    app.component('RecruitCard', RecruitCard)
  }
}