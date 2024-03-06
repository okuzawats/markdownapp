import * as marked from 'marked'
import * as sanitizeHtml from 'sanitize-html'

const worker: Worker = self as any // Web Worker

// メインスレッドからデータを渡された時に実行する関数。
// event.dataにメインスレッドから渡されたパラメータが格納されている。
// Worker#postMessageでメインスレッドに処理結果を送信する。
worker.addEventListener('message', (event) => {
  const text = event.data
  // HTMLのサニタイズ。
  // h1、h2はデフォルトで除外されているため追加している。
  const html = sanitizeHtml(marked(text), {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'h1', 'h2'],
  })
  worker.postMessage({ html })
})
