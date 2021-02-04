import React from 'react'
import styled from 'styled-components'

const BackBar = styled.div`
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  width: 300px;
  height: 10px;
  background-color: ${props => props.theme.progressBackColor};
  @media (max-width: 348px){
    width: 250px;
  }
`

const Fill = styled.div`
  position: absolute;
  border-radius: inherit;
  width: ${props => props.percent}%;
  height: 100%; 
  background-image: 
    linear-gradient(to right, 
      ${props => props.theme.progressColorStart} 0%,
      ${props => props.theme.progressColorEnd} ${props => props.gradientEnd}%);

`

function ProgressBar(props) {

  function getGradientEnd(percent){
    return 100*(1+(100-percent)/(percent))
  }


  return (
    <BackBar>
      <Fill percent={props.percent} gradientEnd={getGradientEnd(props.percent)}></Fill>
    </BackBar>
  )
}

export default ProgressBar