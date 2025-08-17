import { defineConfig } from 'vite';
import { resolve } from 'path';

// Vite設定
// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages用のベースパス設定
  base: process.env.NODE_ENV === 'production' ? '/webgpu-game-framework/' : '/',

  // パスエイリアス設定（tsconfig.jsonと同期）
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@core': resolve(__dirname, './src/core'),
      '@ecs': resolve(__dirname, './src/ecs'),
      '@components': resolve(__dirname, './src/components'),
      '@systems': resolve(__dirname, './src/systems'),
      '@graphics': resolve(__dirname, './src/graphics'),
      '@math': resolve(__dirname, './src/math'),
    },
  },

  // ビルド設定
  build: {
    // 出力ディレクトリ
    outDir: 'dist',
    
    // アセットのインライン化閾値（4KB以下はインライン化）
    assetsInlineLimit: 4096,
    
    // チャンクサイズ警告の閾値（500KB）
    chunkSizeWarningLimit: 500,
    
    // ロールアップ設定
    rollupOptions: {
      input: {
        // メインページ
        main: resolve(__dirname, 'index.html'),
        
        // 各Phaseのエントリーポイント（まだ作成されていないのでコメントアウト）
        // phase1: resolve(__dirname, 'phases/phase1-foundation/index.html'),
        // phase2: resolve(__dirname, 'phases/phase2-ecs/index.html'),
        // phase3: resolve(__dirname, 'phases/phase3-3d/index.html'),
        // phase4: resolve(__dirname, 'phases/phase4-game/index.html'),
        // phase5: resolve(__dirname, 'phases/phase5-optimization/index.html'),
      },
      
      output: {
        // チャンク分割設定（後で有効化）
        // manualChunks: {
        //   // フレームワークコアを別チャンクに
        //   'framework': [
        //     './src/core/index.ts',
        //     './src/ecs/index.ts',
        //     './src/math/index.ts',
        //   ],
        // },
      },
    },
    
    // ソースマップ生成（開発時のみ）
    sourcemap: process.env.NODE_ENV !== 'production',
    
    // 圧縮設定
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
      },
    },
  },

  // 開発サーバー設定
  server: {
    port: 3000,
    open: true, // ブラウザ自動起動
    
    // HMR（Hot Module Replacement）設定
    hmr: {
      overlay: true, // エラーオーバーレイ表示
    },
  },

  // プレビューサーバー設定
  preview: {
    port: 4173,
    open: true,
  },

  // 最適化設定
  optimizeDeps: {
    // 事前バンドル対象から除外（WebGPUは動的import推奨）
    exclude: ['@webgpu/types'],
  },

  // プラグイン設定
  plugins: [
    // 必要に応じてプラグインを追加
  ],
});