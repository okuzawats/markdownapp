import Dexie from 'dexie'
import { memo } from 'react'

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

// 引数としてタイトルとテキストを受け取り、非同期で保存処理を実行する。
export const putMemo = async(title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString()
  await memos.put({ datetime, title, text })
}

const NUM_PER_PAGE: number = 10

// ページングのために使用されるメモのページ数を返す。
export const getMemoPageCount = async (): Promise<number> => {
  const totalCount = await memos.count()
  const pageCount = Math.ceil(totalCount / NUM_PER_PAGE)
  return pageCount > 0 ? pageCount : 1 // 0件の場合は1ページとしてカウント
}

// 非同期で読み込み、datetimeの逆順の配列を返す。
export const getMemos = (): Promise<MemoRecord[]> => {
  return memos.orderBy('datetime')
    .reverse()
    .toArray()
}
