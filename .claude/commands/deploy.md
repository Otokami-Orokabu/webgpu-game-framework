# デプロイコマンド

## GitHub Pagesデプロイ

```bash
# ワンコマンドデプロイ
npm run deploy
```

## デプロイ前チェックリスト

1. **ビルド確認**
   ```bash
   npm run build
   npm run preview
   ```

2. **型チェック**
   ```bash
   npm run typecheck
   ```

3. **リポジトリURLの確認**
   - vite.config.tsのbase設定を確認
   - GitHub Pagesの設定確認

## デプロイ手順詳細

### 1. ビルド
```bash
npm run build
```

### 2. GitHub Pagesブランチに push
```bash
# gh-pagesが自動実行
gh-pages -d dist
```

### 3. GitHub Pages設定確認
- Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages / root

## トラブルシューティング

### デプロイ失敗時
```bash
# ブランチ確認
git branch -a

# gh-pagesブランチ確認
git checkout gh-pages
git log --oneline -5
git checkout main
```

### ベースパス問題
- vite.config.tsのbase設定
- リポジトリ名との一致確認

### 404エラー
- index.htmlの確認
- ルーティング設定の確認