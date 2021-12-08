import React from 'react'
// import HomePage from '@components/templates/HomePage'
import BRAND_NAME from '@utils/constants/brand'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { exampleAction, exampleSelector } from '@features/example'
import styled from '@emotion/styled'
import tw from 'twin.macro'
/* 
? READ THIS ?
untuk components page, semua berada di templates, 
folder "pages" di fungsikan hanya untuk menghandle SSR/SSG/ISG.
untuk penamaan function & variable & components, wajib memakai bahasa inggris

untuk info lebih lanjut bisa mention ke https://github.com/xxidbr9
*/

const BtnStyled = styled.button`
  ${tw`bg-blue-400 py-2 px-4 rounded-md flex justify-center items-center text-white font-bold`}
`

const HomeDefaultPage = () => {
  const count = useSelector(exampleSelector.countSelector)
  const dispatch = useDispatch()

  const _handleAdd = () => {
    dispatch(exampleAction.increment())
  }

  const _handleMinus = () => {
    dispatch(exampleAction.decrement())
  }

  return (
    <React.Fragment>
      <div className="flex gap-8 flex-col justify-center items-center top-1/2 left-1/2 absolute">
        <span>Total Count Example Click {count}</span>
        <div className="flex gap-4">
          <BtnStyled onClick={_handleAdd}>+</BtnStyled>
          <BtnStyled onClick={_handleMinus}>-</BtnStyled>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HomeDefaultPage
