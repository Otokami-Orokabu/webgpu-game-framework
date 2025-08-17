# フレームワーク全体設計

## アーキテクチャ概要

### 設計思想
- **段階的学習**: 基礎から応用まで18ステップ
- **ECS採用**: Phase 2からEntity Component System導入
- **Web最適化**: ブラウザ環境に特化した設計
- **モジュラー**: 機能ごとに分割された再利用可能な設計

## ディレクトリ構造

```
src/
├── core/              # コアシステム
│   ├── Renderer.ts    # WebGPUレンダラー
│   ├── Device.ts      # GPU デバイス管理
│   └── ResourceManager.ts # リソース管理
├── ecs/               # ECS (Phase 2以降)
│   ├── Entity.ts      # エンティティ管理
│   ├── Component.ts   # コンポーネント基底
│   ├── System.ts      # システム基底
│   └── World.ts       # ECSワールド
├── components/        # 各種コンポーネント
│   ├── Transform.ts   # 位置・回転・スケール
│   ├── Mesh.ts        # メッシュデータ
│   ├── Material.ts    # マテリアル
│   └── Camera.ts      # カメラ
├── systems/           # 各種システム
│   ├── RenderingSystem.ts # レンダリング
│   ├── PhysicsSystem.ts   # 物理演算
│   └── AnimationSystem.ts # アニメーション
├── graphics/          # グラフィックス
│   ├── Shader.ts      # シェーダー管理
│   ├── Pipeline.ts    # レンダーパイプライン
│   └── Texture.ts     # テクスチャ管理
└── math/              # 数学ライブラリ
    ├── Vector3.ts     # 3Dベクトル
    ├── Matrix4.ts     # 4x4行列
    └── Quaternion.ts  # クォータニオン
```

## Phase別実装計画

### Phase 1: 基盤構築
- WebGPU初期化抽象化
- 基本レンダリングシステム
- メッシュ・シェーダー管理

### Phase 2: ECS導入
- Entity/Component/System実装
- Transform/Mesh/Material コンポーネント
- 基本的なシステム群

### Phase 3: 3D機能
- カメラシステム
- アニメーション
- glTFローダー

### Phase 4: ゲーム機能
- 物理演算統合
- 入力システム
- オーディオ・パーティクル

### Phase 5: 最適化
- インスタンシング
- GPU駆動レンダリング
- パフォーマンス最適化

## 技術的制約

### WebGPU固有
- 非同期初期化必須
- WGSL シェーダー言語
- リソース管理の複雑さ

### Web環境
- ブラウザ互換性
- セキュリティ制約 (CORS, HTTPS)
- モバイル対応