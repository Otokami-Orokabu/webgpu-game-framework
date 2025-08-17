# ビルドコマンド

## 開発ビルド

```bash
# 開発サーバー起動（ホットリロード有効）
npm run dev

# ブラウザで確認
# http://localhost:3000
```

## プロダクションビルド

```bash
# TypeScriptコンパイル + Viteビルド
npm run build

# ビルド結果の確認
npm run preview

# ブラウザで確認
# http://localhost:4173
```

## 型チェック

```bash
# TypeScript型チェックのみ実行
npm run typecheck
```

## ビルド出力確認

```bash
# dist/ディレクトリの内容確認
ls -la dist/

# ビルドサイズ確認
du -sh dist/
```

## エラー対処

### よくあるエラー
1. **型エラー**: `npm run typecheck` で詳細確認
2. **モジュール解決エラー**: tsconfig.jsonのpaths設定確認
3. **WebGPU型エラー**: @webgpu/typesの型定義確認

### キャッシュクリア
```bash
# Viteキャッシュクリア
rm -rf node_modules/.vite

# 完全リセット
rm -rf node_modules package-lock.json
npm install
```