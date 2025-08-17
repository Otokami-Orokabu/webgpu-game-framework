# WebGPU Game Framework

WebGPU APIを基盤とした汎用ゲームフレームワークの学習プロジェクトです。ECS（Entity Component System）アーキテクチャを採用し、段階的な学習を通じて実用的なフレームワークを構築します。

🌐 **デモサイト**: https://otokami-orokabu.github.io/webgpu-game-framework/

## 🎯 特徴

- **段階的学習**: 18のステップで基礎から応用まで
- **TypeScript対応**: 型安全な開発環境
- **レスポンシブデザイン**: PC/タブレット/スマートフォン対応
- **日本語コメント**: 初学者向けの詳細な解説付き
- **GitHub Pages対応**: オンラインでサンプルを確認可能

## 🚀 クイックスタート

### 必要環境
- Node.js 18以上
- WebGPU対応ブラウザ（Chrome 113+, Edge 113+, Safari 17.5+）

### インストール
```bash
# リポジトリのクローン
git clone https://github.com/Otokami-Orokabu/webgpu-game-framework.git
cd webgpu-game-framework

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで http://localhost:3000 を開いてください。

## 📚 学習内容

### Phase 1: 基盤構築（Lesson 1-4）
- 環境構築とフレームワーク基盤
- レンダリングパイプライン
- 基本図形とメッシュシステム
- シェーダーシステム

### Phase 2: ECSアーキテクチャ（Lesson 5-8）
- ECS基本実装
- Transform Component
- Rendering Components
- System実装

### Phase 3: 3D機能とアニメーション（Lesson 9-12）
- カメラシステム
- アニメーションシステム
- モデルローディング（glTF）
- シーングラフ

### Phase 4: ゲーム機能（Lesson 13-16）
- 物理演算統合
- ライティングシステム
- 入力システム
- オーディオ・パーティクル

### Phase 5: 最適化と応用（Lesson 17-18）
- インスタンシング、バッチング
- 統合デモゲーム

## 📦 プロジェクト構造

```
.
├── src/              # フレームワークコア
│   ├── core/         # レンダラー、デバイス管理
│   ├── ecs/          # Entity Component System
│   ├── graphics/     # シェーダー、パイプライン
│   └── math/         # 数学ライブラリ
├── phases/           # 各Phase用ディレクトリ
├── shared/           # 共通リソース（CSS、アセット）
├── docs/             # ドキュメント
│   ├── claude/       # Claude Code専用ドキュメント
│   └── github/       # GitHub関連ドキュメント
├── .claude/commands/ # Claude Codeコマンド
├── index.html        # メインページ
└── vite.config.ts    # ビルド設定
```

## 🛠️ 開発コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run deploy` | GitHub Pagesへデプロイ |

## 🤖 Claude Code コマンド

このプロジェクトはClaude Codeでの開発に最適化されています。以下のコマンドが利用可能です：

| コマンド | 説明 |
|---------|------|
| `/resume` | 作業再開手順を表示 |
| `/status` | 現在の進捗状況を確認 |
| `/build` | ビルド手順を表示 |
| `/deploy` | デプロイ手順を表示 |
| `/troubleshoot` | トラブルシューティングガイド |
| `/pages-status` | GitHub Pagesの状態確認 |

詳細は `.claude/commands/` ディレクトリ内のファイルを参照してください。

## 🌐 ブラウザサポート

WebGPUは最新の技術のため、以下のブラウザが必要です：

- Chrome/Edge 113以上
- Safari 17.5以上（macOS/iOS）
- Firefox（開発中）

## 📝 ライセンス

MIT

## 🤝 コントリビューション

Issue報告やPull Requestを歓迎します！

## 📖 参考資料

- [WebGPU仕様書](https://www.w3.org/TR/webgpu/)
- [WebGPU Samples](https://webgpu.github.io/webgpu-samples/)
- [MDN WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)