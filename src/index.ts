/**
 * WebGPU Game Framework
 * メインエントリーポイント
 */

// コアモジュールのエクスポート
export * from './core';
export * from './ecs';
export * from './graphics';
export * from './math';

// バージョン情報
export const VERSION = '0.1.0';

// フレームワーク初期化関数（後で実装）
export async function initFramework() {
  console.log(`WebGPU Game Framework v${VERSION}`);
  // TODO: WebGPU初期化処理
}