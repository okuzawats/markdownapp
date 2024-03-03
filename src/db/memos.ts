import Dexie from 'dexie'

// IndexedDBに保存するメモデータの型定義
export interface MemoRecord {
  datetime: string
  title: string
  text: string
}

const db = new Dexie('markdown-editor')
db.version(1).stores({ memos: '&datetime' }) // datetimeをindexに指定

// データ型 - キーのペア。キーはdatetimeとする。
const memos: Dexie.Table<MemoRecord, string> = db.table('memos')
