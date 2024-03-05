const worker: Worker = self as any // Web Worker

// メインスレッドからデータを渡された時に実行する関数。
// event.dataにメインスレッドから渡されたパラメータが格納されている。
// Worker#postMessageでメインスレッドに処理結果を送信する。
worker.addEventListener('message', (event) => {
  console.log('Worker Received:', event.data)
  worker.postMessage({ result: event.data })
})
