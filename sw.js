// ホーム画面に追加して、ブラウザの枠なしで開くための最小のサービスワーカー(No.63)。
// 何も保存しない(キャッシュしない)。ページはいつもどおりネットから読み込むので、試作版を更新したらすぐ新しい版になる。
// 電波なしで動く仕組み(保存して使う形)は、完成版で入れる(決定事項)。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* 何もしない:ブラウザがふつうに読み込む */ });
