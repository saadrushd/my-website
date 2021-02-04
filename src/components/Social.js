import React from 'react'
import styled from 'styled-components'
import Copy from './Copy.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.2rem;
`

const Item = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
const ItemLike = styled.div`
  margin-bottom: 10px;
`

function Social(){
  return (
    <Container>
      <ItemLike><Copy copy='saad@ahmedsaad.xyz'>Email</Copy></ItemLike>
      <Item href="/public-key.txt">
        <div>PGP</div>
      </Item>
      <Item href="https://git.sr.ht/~saad/">
        <div>Sourcehut</div>
      </Item>
      <Item href="https://pleroma.ahmedsaad.xyz/saad">
        <div>Pleroma</div>
      </Item>
    </Container>
  )
}

export default Social
