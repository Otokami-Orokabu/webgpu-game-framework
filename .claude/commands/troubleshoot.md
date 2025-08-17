# トラブルシューティングコマンド

## 環境問題

### Node.js/npm問題
```bash
# Node.jsバージョン確認
node --version  # 18以上推奨

# npmバージョン確認  
npm --version

# 依存関係再インストール
rm -rf node_modules package-lock.json
npm install
```

### TypeScript問題
```bash
# 型チェック実行
npm run typecheck

# tsconfig.json構文確認
npx tsc --showConfig
```

## WebGPU問題

### ブラウザサポート確認
```javascript
// ブラウザコンソールで実行
if ('gpu' in navigator) {
  console.log('WebGPU対応');
} else {
  console.log('WebGPU非対応');
}
```

### 対応ブラウザ
- Chrome 113+
- Edge 113+ 
- Safari 17.5+

### 開発時の確認
```bash
# HTTPSで起動（WebGPU要求）
# 本番環境ではHTTPS必須
```

## ビルド問題

### Vite問題
```bash
# Viteキャッシュクリア
rm -rf node_modules/.vite

# 設定ファイル構文確認
npx vite --config vite.config.ts
```

### パス解決問題
- tsconfig.jsonのpaths設定確認
- vite.config.tsのalias設定確認
- import文の@エイリアス確認

## 実装問題

### ECS実装時
- Component/System/Entityの依存関係確認
- 循環参照の確認

### WebGPU実装時
- デバイス初期化の順序確認
- async/await の適切な使用
- エラーハンドリングの実装

## デバッグ手法

### ブラウザ開発者ツール
- Console: エラーメッセージ確認
- Network: リソース読み込み確認  
- Application: LocalStorage等確認

### TypeScript
```bash
# 詳細なエラー情報
npx tsc --noEmit --listFiles
```