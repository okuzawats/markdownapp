import * as React from 'react'
import styled from 'styled-components'
import {
  Link,
} from 'react-router-dom'
import {
  Header,
} from '../components/header'
import {
  getMemos,
  MemoRecord,
} from '../db/memos'

const { useState, useEffect } = React

const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`

export const History: React.FC = () => {
  const [memos, setMemos] = useState<MemoRecord[]>([])

  useEffect(() => {
    getMemos()
      .then(setMemos)
  }, [])

  return(
    <>
      <HeaderArea>
        <Header title="履歴">
          <Link to ="/editor">
            編集画面に戻る
          </Link>
        </Header>
      </HeaderArea>
      <Wrapper>
        TODO: 履歴を表示する。
      </Wrapper>
    </>
  )
}
