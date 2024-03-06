import * as marked from 'marked'

const worker: Worker = self as any // Web Worker

// メインスレッドからデータを渡された時に実行する関数。
// event.dataにメインスレッドから渡されたパラメータが格納されている。
// Worker#postMessageでメインスレッドに処理結果を送信する。
worker.addEventListener('message', (event) => {
  const text = event.data
  const html = marked(text)
  worker.postMessage({ html })
})
