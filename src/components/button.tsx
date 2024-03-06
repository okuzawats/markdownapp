import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;

  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`

// TODO キャンセル用のコンポーネントを作成して分離する。
interface Props {
  cancel?: Boolean
  children: string
  onClick: () => void
}

// テキストとクリック時に呼び出される関数を受け取り、スタイリングされたボタンを返すコンポーネント
export const Button: React.FC<Props> = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      className={props.cancel ? 'cancel' : ''}
    >
      {props.children}
    </StyledButton>
  )
}
