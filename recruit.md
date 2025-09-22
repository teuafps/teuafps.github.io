<style>
:root{
  --bg:#ffffff;
  --muted:#f6f8fb;
  --accent-1:#fdf2f8; /* pastel pink */
  --accent-2:#f0f9ff; /* pastel blue */
  --accent-3:#f6fff2; /* pastel green */
  --text:#0f172a;
  --card-shadow: 0 8px 24px rgba(15,23,42,0.06);
  --glass: rgba(255,255,255,0.7);
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Meiryo', sans-serif;
  background:linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  padding:40px 20px;
  display:flex;
  align-items:flex-start;
  justify-content:center;
}
.container{max-width:980px;width:100%}
header{display:flex;align-items:center;justify-content:space-between;margin-bottom:28px}
.brand{display:flex;gap:14px;align-items:center}
.logo{width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#ffd6e0,#dbeafe);display:flex;align-items:center;justify-content:center;font-weight:700;color:#0f172a;font-size:20px;box-shadow:var(--card-shadow)}
h1{margin:0;font-size:20px;font-weight:700}
p.lead{margin:4px 0 0;color:#475569}

.intro{background:var(--muted);padding:18px;border-radius:12px;margin-bottom:22px;box-shadow:var(--card-shadow)}

.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-bottom:22px}
@media (max-width:780px){.grid{grid-template-columns:1fr}}

.card{background:white;border-radius:14px;padding:18px;box-shadow:var(--card-shadow);transition:transform .18s ease,box-shadow .18s ease;border:1px solid rgba(15,23,42,0.04)}
.card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(15,23,42,0.09)}
.card h3{margin:0 0 8px;font-size:18px}
.tag{display:inline-block;padding:6px 10px;border-radius:999px;font-weight:600;font-size:12px;background:linear-gradient(90deg,var(--accent-2),var(--accent-1));color:#04263b}

ul.req{padding-left:18px;margin:10px 0 0;color:#334155}
ul.req li{margin:8px 0}

.cta{display:flex;gap:10px;margin-top:12px}
.btn{padding:10px 14px;border-radius:10px;text-decoration:none;font-weight:600;display:inline-block}
.btn-primary{background:linear-gradient(90deg,#7dd3fc,#fbcfe8);color:#04263b;border:0}
.btn-outline{background:transparent;border:1px solid rgba(15,23,42,0.08);color:#0f172a}

.notes{font-size:13px;color:#64748b;margin-top:8px}

footer{margin-top:30px;text-align:center;color:#94a3b8;font-size:13px}

/* small info column */
.side{background:linear-gradient(180deg,var(--accent-3),#ffffff);padding:16px;border-radius:12px}
.side h4{margin:0 0 8px}
.pill{display:inline-block;background:white;padding:6px 10px;border-radius:999px;font-weight:600;border:1px solid rgba(15,23,42,0.04)}

.disclaimer{font-size:13px;color:#475569;margin-top:10px}

/* gallery */
.gallery{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
  gap:12px;
  margin-top:12px;
}
.gallery img{
  width:100%;
  border-radius:10px;
  box-shadow:var(--card-shadow);
  cursor:pointer;
  transition:transform .2s ease;
}
.gallery img:hover{transform:scale(1.03)}
</style>

<div class="container">
  <header>
    <div class="brand">
      <div class="logo">TUDS</div>
      <div>
        <h1>TeuaUDServer — 運営 / 参加者募集</h1>
        <p class="lead">都市開発を楽しむMODサーバー「TeuaUDServer」に参加しませんか？</p>
      </div>
    </div>
    <div class="tag">公式サイト: https://teuafps.github.io</div>
  </header>

  <section class="intro">
    <strong>募集職種：</strong> 技術運営 / 建築勢（ビルダー）<br />
    <span class="notes">下の項目から合致するものがあればぜひご応募ください！</span>
  </section>

  <div class="grid">
    <div class="card" style="border-top:4px solid #bfdbfe">
      <h3>技術運営（Mod / Plugin 開発・設定）</h3>
      <div class="disclaimer">サーバーの安定運用やカスタム機能の追加を一緒に作れる人を募集します。</div>
      <ul class="req">
        <li>Mod（Forge）またはPlugin（Spigot / Paper / Bukkit 等）の開発経験</li>
        <li>既存のMod/Pluginの導入・設定・デバッグができる方</li>
        <li>サーバー運用知識（バックアップ、ログ解析、パフォーマンス調整）があると尚良し</li>
        <li>レスポンスが良く、Discordでのやり取りが可能な方</li>
      </ul>
      <div class="cta">
        <a class="btn btn-primary" href="#apply-tech">応募する</a>
        <a class="btn btn-outline" href="#discord">Discordで相談</a>
      </div>
    </div>

  <div class="card" style="border-top:4px solid #fce7f3">
      <h3>建築勢（Builder）</h3>
      <div class="disclaimer">都市開発、街区設計、ランドマーク制作などに興味ある方を歓迎します。</div>
      <ul class="req">
        <li>創造的な建築ができる方（スクリーンショットや作品ポートフォリオ歓迎）</li>
        <li>チームワークで街づくりに携われる方</li>
        <li>ワールド編集ツール（WorldEdit等）やMODの利用経験があると便利</li>
        <li>利用規約を守り、他の参加者と協調できる方</li>
      </ul>
      <div class="cta">
        <a class="btn btn-primary" href="#apply-builder">応募する</a>
        <a class="btn btn-outline" href="#rules">募集要項を確認</a>
      </div>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:2fr 1fr;gap:18px;align-items:start">
    <div>
      <div class="card" id="apply-tech">
        <h3>応募方法（例）</h3>
        <p>以下の情報を添えてDiscordの応募チャンネル、またはメールでお送りください。</p>
        <ul class="req">
          <li>希望ポジション（技術運営 / 建築勢）</li>
          <li>自己紹介（プレイ歴、得意分野）</li>
          <li>実績（GitHub / ポートフォリオ / スクリーンショット 等）</li>
          <li>Discord ID（例: YourName#1234）</li>
        </ul>
        <p class="notes">書類選考ののち、面談（Discord通話）へ進む場合があります。</p>
      </div>

<div class="card" id="apply-builder" style="margin-top:12px">
        <h3>選考フロー（例）</h3>
        <ol style="padding-left:18px;color:#334155">
          <li>応募 → 書類（またはポートフォリオ）確認</li>
          <li>最終面談 → 合否連絡</li>
        </ol>
      </div>

<section class="card" style="margin-top:20px">
        <h3>導入MOD（一部抜粋）</h3>
        <p class="disclaimer">当サーバーで使用している主要なMODの一例です。</p>
        <ul class="req">
          <li>Immersive Vehicles（車・乗り物MOD）</li>
          <li>Immersive Aircraft（飛行機MOD）</li>
          <li>MinecraftTransitRailway（鉄道MOD）</li>
          <li>WorldEdit（建築補助）</li>
          <li>yuushya townscape（建築MOD）</li>
          <li>ModernJapanCity（建築MOD）</li>
        </ul>
        <p class="notes">※CurseforgeでのMod導入が必須となります。</p>
      </section>

<section class="card" style="margin-top:20px">
        <h3>サーバー内スクリーンショット</h3>
        <div class="gallery">
          <img src="/1.png" alt="">
          <img src="/2.png" alt="">
          <img src="/3.png" alt="">
        </div>
      </section>
    </div>
<aside class="side">
      <h4>運営情報</h4>
      <p style="margin:6px 0">サーバー：TeuaUDServer / Minecraft都市開発鯖</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
        <span class="pill">活動時間: 不定期</span>
        <span class="pill">サーバー作成日時: 2025/9/16</span>
      </div>

<h4 style="margin-top:12px">連絡先</h4>
      <p style="margin:6px 0">Discord: <strong id="discord">@teuafps</strong></p>
      <p style="margin:6px 0">X (旧Twitter): <strong>@TeuaUDServer</strong></p>
      <p style="margin:6px 0">応募フォーム: <a href="#">（ここにリンクを入れてください）</a></p>

<div class="disclaimer">※利用規約は応募前に必ずご確認ください。https://teuafps.github.io</div>
    </aside>
  </div>

  <footer>
    © TeuaUDServer / Minecraft都市開発鯖
  </footer>
</div>
