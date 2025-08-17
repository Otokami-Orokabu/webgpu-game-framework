# ドキュメント

このディレクトリには、プロジェクトの各種ドキュメントが整理されています。

## 📂 ディレクトリ構造

```
docs/
├── claude/          # Claude Code 専用ドキュメント
│   ├── architecture/   # アーキテクチャ設計
│   ├── progress/       # 進捗管理
│   └── learning/       # 学習カリキュラム詳細
└── github/          # GitHub 関連ドキュメント
    ├── pages-setup.md     # GitHub Pages 設定
    └── actions-workflow.md # Actions ワークフロー解説
```

## 📚 主要ドキュメント

### プロジェクト管理
- **[現在の進捗](./claude/progress/current.md)** - 実装状況と次のタスク
- **[セッションログ](./claude/progress/session-log.md)** - 作業履歴
- **[ロードマップ](./claude/progress/roadmap.md)** - 今後の計画

### 技術設計
- **[フレームワーク設計](./claude/architecture/framework.md)** - 全体アーキテクチャ
- **[ECS設計](./claude/architecture/ecs.md)** - Entity Component System
- **[レンダリング設計](./claude/architecture/rendering.md)** - WebGPU レンダリング

### GitHub運用
- **[Pages設定](./github/pages-setup.md)** - GitHub Pages セットアップ
- **[Actions解説](./github/actions-workflow.md)** - CI/CD ワークフロー

### 学習コンテンツ
- **[Phase 1 詳細](./claude/learning/phase1.md)** - 基盤構築
- **[Phase 2 詳細](./claude/learning/phase2.md)** - ECSアーキテクチャ
- **[Phase 3 詳細](./claude/learning/phase3.md)** - 3D機能
- **[Phase 4 詳細](./claude/learning/phase4.md)** - ゲーム機能
- **[Phase 5 詳細](./claude/learning/phase5.md)** - 最適化

## 🎯 用途別ガイド

### 開発を始める場合
1. [現在の進捗](./claude/progress/current.md) で状況確認
2. [フレームワーク設計](./claude/architecture/framework.md) で全体像把握
3. 該当するPhaseのドキュメントを参照

### デプロイする場合
1. [Actions解説](./github/actions-workflow.md) でワークフロー確認
2. [Pages設定](./github/pages-setup.md) でトラブルシューティング

### 学習内容を確認する場合
1. 各Phaseの詳細ドキュメントを参照
2. [CLAUDE.md](../CLAUDE.md) で概要確認

## 📝 ドキュメント規約

### ファイル名
- 小文字とハイフンを使用（kebab-case）
- 拡張子は `.md`
- 意味のある明確な名前

### 内容の構成
1. タイトル（#）
2. 概要説明
3. 詳細内容
4. コード例（必要に応じて）
5. 参考リンク

### 更新ルール
- 重要な変更時は日付を記録
- 古い情報は履歴として残す
- 相互参照リンクの整合性を保つ