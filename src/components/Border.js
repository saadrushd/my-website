import React from 'react'
import styled from 'styled-components'

const StyledBorder = styled.div`
  position: fixed;
  z-index: 98;
  pointer-events: none;
  top: 0;
  left: 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: ${props => props.theme.globalBorderWidth} solid ${props => props.theme.primaryColor};
  width: 100%;
  height: 100vh;
`

function Border() {
  return(
    <StyledBorder />
  )
}
 
export default Border