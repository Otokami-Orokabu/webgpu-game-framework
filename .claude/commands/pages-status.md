# GitHub Pages ステータス確認コマンド

## 現在のデプロイ状況確認

```bash
# GitHub Pages の状態確認
gh api repos/Otokami-Orokabu/webgpu-game-framework/pages

# 最新のデプロイ実行確認
gh run list --workflow=deploy.yml --limit=5

# 実行中のワークフロー確認
gh run list --status=in_progress
```

## デプロイURL

**本番環境**: https://otokami-orokabu.github.io/webgpu-game-framework/

## 手動デプロイ実行

```bash
# ワークフロー手動実行
gh workflow run deploy.yml

# 実行状況をリアルタイム監視
gh run watch
```

## トラブルシューティング

### デプロイが失敗する場合

1. **ビルドエラー確認**
   ```bash
   # 最新の失敗ログ確認
   gh run view --log-failed
   ```

2. **Pages設定確認**
   - https://github.com/Otokami-Orokabu/webgpu-game-framework/settings/pages
   - Source: GitHub Actions になっているか確認

3. **ローカルビルド確認**
   ```bash
   npm run build
   npm run preview
   ```

### ページが更新されない場合

1. **キャッシュクリア**
   - ブラウザ: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
   - CloudFlare等のCDNキャッシュ待ち（5-10分）

2. **デプロイ完了確認**
   ```bash
   # 最新のデプロイ時刻確認
   gh api repos/Otokami-Orokabu/webgpu-game-framework/pages/builds --jq '.[-1].created_at'
   ```

## 関連ドキュメント

- [GitHub Pages セットアップガイド](../../docs/github/pages-setup.md)
- [GitHub Actions ワークフロー解説](../../docs/github/actions-workflow.md)