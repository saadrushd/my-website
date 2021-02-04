import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 2rem;
`

const Ahmed = styled.span`
  color: ${props => props.theme.color};
`

const Saad = styled.span`
  color: ${props => props.theme.primaryColor};
`

function Logo() {
  return (
    <Container>
      <Ahmed>Ahmed</Ahmed>
      <Saad> Saad</Saad>
    </Container>
  )
}
export default Logo
