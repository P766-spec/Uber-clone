import React from 'react'
import tw from 'tailwind-styled-components'
import Link from 'next/link'
const Reserve = () => {
  return (
    <Wrapper>
        <Link href="/search">
      <ButtonContainer>
      <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
      </ButtonContainer>
      </Link>
      Reserve
    </Wrapper>
  )
}

export default Reserve

const Wrapper= tw.div`
`
