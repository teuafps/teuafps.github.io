// docs/.vitepress/theme/index.ts

import Theme from 'vitepress/theme';
import RecruitCard from '.components/RecruitCard.vue'; // コンポーネントのパスを調整してください
import './custom.css'; // 必要に応じてグローバルスタイルを追加

export default {
  ...Theme,
  // 登録するコンポーネント
  enhanceApp({ app }) {
    app.component('RecruitCard', RecruitCard);
  },
};