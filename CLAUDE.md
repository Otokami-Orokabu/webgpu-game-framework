# WebGPU Game Framework Project

## プロジェクト概要
WebGPU APIを基盤とした汎用ゲームフレームワークの構築プロジェクト。ECS（Entity Component System）アーキテクチャを採用し、段階的な学習を通じて実用的なフレームワークを開発する。

### 最終目標
- 🎮 **汎用WebGPUフレームワーク**の構築
- 🏗️ **ECSアーキテクチャ**によるゲームオブジェクト管理
- 🎯 **3Dゲーム開発**に必要な機能の実装
- 📦 **glTFモデル**の読み込みと制御

### 特徴
- 📱 レスポンシブ対応（PC/タブレット/スマートフォン）
- 🌐 GitHub Pagesでのデモ公開
- 💬 初学者向け日本語コメント付き
- 📚 段階的な18ステップの学習カリキュラム
- ⚡ パフォーマンス重視の設計
- 🔧 拡張可能なプラグインシステム

## 🚀 作業再開時の必読ドキュメント

### 【重要】最初に確認すべきファイル
1. **[現在の進捗状況](./docs/claude/progress/current.md)** - 完了済みタスクと次の作業
2. **[アーキテクチャ設計](./docs/claude/architecture/framework.md)** - 全体設計とPhase別計画
3. **Claude Code `/resume` コマンド** - 作業再開手順

### Claude Code コマンド
- `/resume` - 作業再開手順
- `/status` - 現在の状況確認
- `/build` - ビルド手順
- `/deploy` - デプロイ手順
- `/troubleshoot` - トラブルシューティング

### 詳細ドキュメント
- [アーキテクチャ設計](./docs/claude/architecture/framework.md)
- [現在の進捗](./docs/claude/progress/current.md)
- [ECS設計](./docs/claude/architecture/ecs.md)
- [学習カリキュラム詳細](./docs/claude/learning/)

## 💡 コンテキスト継続のポイント

### プロジェクトの本質
- **学習重視**: 各レッスンでWebGPU/Web技術を段階的に学習
- **対象者**: ゲーム開発経験あり、Web開発は初心者〜中級者
- **最終目標**: 汎用WebGPUフレームワーク + ECS + ゲーム機能

### 技術的制約・方針
- Three.js等のフレームワーク不使用
- レスポンシブ必須（モバイル対応）
- WebGPU API直接使用
- ECSはPhase 2から導入
- Web特有の概念は丁寧に解説

## プロジェクト構造
```
webgpu-framework/
├── index.html           # メインページ（Phase選択画面）
├── package.json         # プロジェクト設定
├── tsconfig.json        # TypeScript設定
├── vite.config.ts       # Vite設定（GitHub Pages対応）
├── src/                 # フレームワークソースコード（全Phase共通）
│   ├── core/           # コアシステム
│   │   ├── Renderer.ts
│   │   ├── Device.ts
│   │   └── ResourceManager.ts
│   ├── ecs/            # ECSシステム
│   │   ├── Entity.ts
│   │   ├── Component.ts
│   │   ├── System.ts
│   │   └── World.ts
│   ├── components/     # 各種コンポーネント
│   │   ├── Transform.ts
│   │   ├── Mesh.ts
│   │   ├── Material.ts
│   │   └── Camera.ts
│   ├── systems/        # 各種システム
│   │   ├── RenderingSystem.ts
│   │   ├── PhysicsSystem.ts
│   │   └── AnimationSystem.ts
│   ├── graphics/       # グラフィックス関連
│   │   ├── Shader.ts
│   │   ├── Pipeline.ts
│   │   └── Texture.ts
│   └── math/           # 数学ライブラリ
│       ├── Vector3.ts
│       ├── Matrix4.ts
│       └── Quaternion.ts
├── phases/             # 各Phaseの単ページアプリ
│   ├── phase1-foundation/      # Phase 1: 基盤構築
│   │   ├── index.html          # Phase1専用ページ
│   │   ├── main.ts            # エントリーポイント
│   │   └── examples/          # Lesson 1-4のサンプル
│   ├── phase2-ecs/            # Phase 2: ECS
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── examples/          # Lesson 5-8のサンプル
│   ├── phase3-3d/             # Phase 3: 3D機能
│   ├── phase4-game/           # Phase 4: ゲーム機能
│   └── phase5-optimization/   # Phase 5: 最適化
├── shared/             # 共通リソース
│   ├── styles.css      # 共通スタイル
│   ├── ui-components.ts # UI共通コンポーネント
│   └── assets/         # アセット（テクスチャ、モデル等）
└── public/             # 静的ファイル
```

## ページ構成

### メインページ（index.html）
- Phase選択画面
- 各Phaseの概要と進捗状況を表示
- レスポンシブなカード型UI

### Phase毎の単ページ構成
各Phaseは独立した単ページアプリケーションとして実装：
- **サイドバー**: レッスン選択（1-4個のレッスン）
- **メインエリア**: WebGPUキャンバス
- **コントロール**: 実行、リセット、パラメータ調整
- **説明エリア**: 学習ポイント、ソースコード表示

### 特徴
- 各Phaseで完結した学習体験
- フレームワークコア（src/）は全Phaseで共有
- インタラクティブなパラメータ調整
- ソースコードの表示/非表示切り替え

## 開発コマンド

### 初期セットアップ
```bash
npm install
```

### 開発サーバー起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### プレビュー（ビルド後の確認）
```bash
npm run preview
```

### GitHub Pagesへのデプロイ
```bash
npm run deploy
```

## 学習ステップ一覧

### Phase 1: 基盤構築（Lesson 1-4）
1. **環境構築とフレームワーク基盤** - TypeScript + Vite環境、基本レンダラークラス設計
2. **レンダリングパイプライン** - WebGPU初期化の抽象化、パイプライン管理システム
3. **基本図形とメッシュシステム** - メッシュクラス、頂点バッファ管理、ジオメトリ生成
4. **シェーダーシステム** - シェーダー管理、マテリアルシステム、ユニフォーム管理

### Phase 2: ECSアーキテクチャ（Lesson 5-8）
5. **ECS基本実装** - Entity、Component、System基本クラス、ComponentPool設計
6. **Transform Component** - 位置・回転・スケール管理、親子関係、ワールド行列計算
7. **Rendering Components** - MeshComponent、MaterialComponent、CameraComponent
8. **System実装** - RenderingSystem、TransformSystem、Updateループ

### Phase 3: 3D機能とアニメーション（Lesson 9-12）
9. **カメラシステム** - PerspectiveCamera、OrbitControls、FrustumCulling
10. **アニメーションシステム** - AnimationComponent、KeyframeAnimation、Tween
11. **モデルローディング** - glTF2.0ローダー、メッシュ・マテリアル自動生成
12. **シーングラフ** - シーン管理、レイヤーシステム、LOD基礎

### Phase 4: ゲーム機能（Lesson 13-16）
13. **物理演算統合** - ColliderComponent、RigidBodyComponent、物理エンジン統合
14. **ライティングシステム** - LightComponent、PBR、シャドウマッピング
15. **入力システム** - InputSystem、ActionMapping、マルチタッチ対応
16. **オーディオ・パーティクル** - AudioComponent、ParticleSystem、エフェクト管理

### Phase 5: 最適化と応用（Lesson 17-18）
17. **最適化技術** - インスタンシング、バッチング、GPU駆動レンダリング
18. **統合デモゲーム** - 簡単な3Dゲーム実装、全システム統合、パフォーマンス最適化

## 現在の実装状況（2025-08-16更新）

### ✅ 完了済み
- プロジェクト初期設定
  - `.gitignore`、`.editorconfig`作成済み
  - `package.json`設定済み（scripts定義済み）
  - `tsconfig.json`作成済み（パスエイリアス設定済み）
  - `vite.config.ts`作成済み（マルチページ対応）
  - npm依存パッケージインストール済み

### 🚧 次の実装タスク
1. **基本ディレクトリ構造の作成**
   - `src/`フォルダ以下のフレームワーク構造
   - `phases/`フォルダ以下の各Phase構造
   - `shared/`フォルダの共通リソース

2. **メインインデックスページ実装**
   - Phase選択画面のUI
   - レスポンシブデザイン対応

3. **Phase 1: 基盤構築**
   - 各Lessonの段階的実装
   - WebGPU初期化から基本描画まで

## Claude Code再開時の指示

このプロジェクトを再開する際は、以下の点に注意してください：

### プロジェクトの前提
- **対象者**: ゲーム開発経験あり、Web開発は初心者〜中級者
- **学習要素重視**: 各レッスンで新しいWebGPU/Web技術を段階的に学習
- **実践的**: 最終的に実用的なゲームフレームワークを構築

### コーディング規約
- **コメント**: WebGPU API、Web固有の処理について詳細な日本語コメントを記述
- **Web技術説明**: Promise、async/await、モジュールシステムなどWeb特有の概念は丁寧に説明
- **レスポンシブ**: すべてのサンプルはモバイル対応必須
- **エラーハンドリング**: WebGPU非対応環境への配慮

### 実装時の注意点
```typescript
// 常にWebGPUサポートチェックを行う（Web特有の機能確認）
if (!navigator.gpu) {
  // フォールバック処理
}

// キャンバスサイズはレスポンシブに（devicePixelRatioはWeb特有）
canvas.width = window.innerWidth * devicePixelRatio;
canvas.height = window.innerHeight * devicePixelRatio;

// Web特有の非同期処理パターン
async function initWebGPU() {
  // awaitでGPUデバイスの取得を待つ
  const adapter = await navigator.gpu.requestAdapter();
  const device = await adapter.requestDevice();
  return { adapter, device };
}
```

### Web開発のポイント（ゲーム開発者向け）
- **非同期処理**: ほぼすべてのリソース読み込みは非同期（async/await）
- **モジュールシステム**: ES6 import/exportでコード分割
- **イベント駆動**: ユーザー入力、ウィンドウリサイズ等はイベントリスナーで処理
- **ブラウザAPI**: requestAnimationFrameでゲームループ、Performance APIで計測
- **セキュリティ**: CORS、HTTPS制約があることに注意

### タスク管理
TodoWriteツールを使用して、実装タスクを管理しています。
現在のタスクリストを確認し、pendingステータスのタスクから順に実装してください。

### 作業再開時のコマンド
```bash
# 依存関係の確認
npm install

# 開発サーバー起動
npm run dev

# 型チェック
npm run typecheck
```

### テスト方法
1. ローカル開発: `npm run dev`
2. ビルド確認: `npm run build && npm run preview`
3. デプロイ: `npm run deploy`

## 技術スタック
- **言語**: TypeScript 5.3+
- **ビルドツール**: Vite 5.0+
- **デプロイ**: GitHub Pages (gh-pages)
- **API**: WebGPU
- **型定義**: @webgpu/types
- **スタイリング**: Vanilla CSS (レスポンシブ対応)
- **アーキテクチャ**: ECS (Entity Component System)

## 参考リソース
- [WebGPU Specification](https://www.w3.org/TR/webgpu/)
- [WebGPU Samples](https://webgpu.github.io/webgpu-samples/)
- [MDN WebGPU API](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API)