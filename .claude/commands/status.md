# プロジェクト状況確認コマンド

## 現在のPhase
**Phase 1: 基盤構築** （未実装）

## 完了済みタスク
- ✅ プロジェクト初期設定
  - package.json, tsconfig.json, vite.config.ts
  - .gitignore, .editorconfig
  - npm依存パッケージインストール
- ✅ CLAUDE.md分割構造の実装

## 進行中タスク
- 🚧 基本ディレクトリ構造の作成

## 待機中タスク
1. メインインデックスページ（Phase選択画面）の実装
2. 共通スタイル（shared/styles.css）の作成
3. Phase 1: 基盤構築の実装
   - Lesson 1: 環境構築とフレームワーク基盤
   - Lesson 2: レンダリングパイプライン
   - Lesson 3: 基本図形とメッシュシステム
   - Lesson 4: シェーダーシステム

## ファイル構造確認

```bash
# 現在のファイル構造を確認
ls -la

# src/ディレクトリの確認（未作成）
ls -la src/ 2>/dev/null || echo "src/ディレクトリ未作成"

# phases/ディレクトリの確認（未作成）
ls -la phases/ 2>/dev/null || echo "phases/ディレクトリ未作成"
```

## 詳細情報
- 進捗詳細: `docs/claude/progress/current.md`
- アーキテクチャ: `docs/claude/architecture/`
- ロードマップ: `docs/claude/progress/roadmap.md`