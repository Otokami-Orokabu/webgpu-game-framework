# GitHub Pages セットアップガイド

## 概要
GitHub Pagesは、GitHubリポジトリから直接静的サイトをホスティングできる無料サービスです。
このプロジェクトでは、GitHub Actionsを使用して自動デプロイを実装しています。

## セットアップ手順

### 1. GitHub Pages の有効化

1. **リポジトリ設定ページへアクセス**
   ```
   https://github.com/[ユーザー名]/[リポジトリ名]/settings/pages
   ```

2. **Source設定**
   - 「Build and deployment」セクションで
   - Source: 「GitHub Actions」を選択
   - これにより、GitHub Actionsワークフローがデプロイを管理します

3. **設定を保存**
   - 変更は自動的に保存されます
   - 初回デプロイまで数分かかる場合があります

### 2. 公開URLの確認

GitHub Pagesが有効になると、以下のURLで公開されます：
```
https://[ユーザー名].github.io/[リポジトリ名]/
```

例：`https://otokami-orokabu.github.io/webgpu-game-framework/`

## トラブルシューティング

### Pages が表示されない場合

1. **Actions タブを確認**
   - デプロイワークフローが成功しているか確認
   - エラーがある場合は、ログを確認

2. **ベースパス設定を確認**
   ```typescript
   // vite.config.ts
   base: process.env.NODE_ENV === 'production' ? '/リポジトリ名/' : '/'
   ```

3. **ブランチ設定を確認**
   - mainブランチからデプロイされているか確認
   - ワークフローファイルの設定を確認

### 404エラーが出る場合

1. **index.html の存在確認**
   - dist/index.html が生成されているか確認

2. **パス設定の確認**
   - 相対パスが正しく設定されているか確認
   - アセットのパスが正しいか確認

## カスタムドメイン設定（オプション）

1. **CNAMEファイルの作成**
   ```bash
   echo "example.com" > public/CNAME
   ```

2. **DNS設定**
   - Aレコード: 185.199.108.153
   - Aレコード: 185.199.109.153
   - Aレコード: 185.199.110.153
   - Aレコード: 185.199.111.153

3. **GitHub Pages設定でカスタムドメインを入力**

## セキュリティ設定

### HTTPS強制
- Settings → Pages → Enforce HTTPS にチェック
- カスタムドメインでも自動的にSSL証明書が発行されます

### アクセス制限
- Public リポジトリ: 誰でもアクセス可能
- Private リポジトリ: GitHub Pages Pro が必要

## 制限事項

- **サイズ制限**: 1GB まで
- **帯域制限**: 月間 100GB まで
- **ビルド時間**: 10分まで
- **静的サイトのみ**: サーバーサイド処理は不可

## 参考リンク

- [GitHub Pages 公式ドキュメント](https://docs.github.com/pages)
- [GitHub Actions で GitHub Pages を使う](https://docs.github.com/ja/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)