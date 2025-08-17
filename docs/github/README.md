# GitHub 関連ドキュメント

このディレクトリには、GitHub関連の設定・運用ドキュメントをまとめています。

## 📚 ドキュメント一覧

### デプロイ関連
- **[pages-setup.md](./pages-setup.md)**
  - GitHub Pages のセットアップ手順
  - トラブルシューティング
  - カスタムドメイン設定

- **[actions-workflow.md](./actions-workflow.md)**
  - GitHub Actions ワークフローの詳細解説
  - デプロイ自動化の仕組み
  - カスタマイズ方法

## 🚀 クイックスタート

### GitHub Pages を有効化
1. Settings → Pages へアクセス
2. Source で「GitHub Actions」を選択
3. mainブランチへプッシュで自動デプロイ

### 手動デプロイ
```bash
# GitHub CLI を使用
gh workflow run deploy.yml

# ステータス確認
gh run list --workflow=deploy.yml
```

## 🔗 関連リンク

- **公開URL**: https://otokami-orokabu.github.io/webgpu-game-framework/
- **リポジトリ**: https://github.com/Otokami-Orokabu/webgpu-game-framework
- **Actions**: https://github.com/Otokami-Orokabu/webgpu-game-framework/actions

## 📝 メモ

- デプロイは通常1-2分で完了
- mainブランチへのプッシュで自動実行
- 手動実行も Actions タブから可能