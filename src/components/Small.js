import React from 'react'
import styled from 'styled-components'

const StyledSmall = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.smallColor};
`

function Small(props) {
  return (
    <StyledSmall>
      {props.children}
    </StyledSmall>
  )
}

export default Small