import React, { useContext } from 'react'
import styled from 'styled-components'

import { light, dark } from '../data/colors'
import { settingsContext } from '../contexts/SettingsContext'
import {AiOutlineCopy} from 'react-icons/ai'

const Container = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
`

const TextAndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
`

function Copy(props) {

  const {darkMode} = useContext(settingsContext)
  
  const tipBackgroundColor = darkMode ? dark.primaryColor() : light.primaryColor() 
  const tipTextColor = darkMode ? dark.inverseColor() : light.inverseColor()
  return (
    <Container>
      <div
        data-tip="click to copy" 
        data-event="mouseenter" 
        data-event-off="click mouseleave"
        data-background-color={props.inverse ? tipTextColor : tipBackgroundColor}
        data-text-color={props.inverse ? tipBackgroundColor: tipTextColor} 
        >
        <div 
          data-tip={`copied ${props.copy}`} 
          data-event="click"
          data-background-color={props.inverse ? tipTextColor : tipBackgroundColor}
          data-text-color={props.inverse ? tipBackgroundColor: tipTextColor} 
          >
          <TextAndIcon>
            {props.children} <Icon> <AiOutlineCopy /> </Icon>
          </TextAndIcon>
        </div> 
      </div> 
    </Container>
  )
}

export default Copy
