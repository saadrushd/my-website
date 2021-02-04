import React, { useContext } from 'react'
import styled from 'styled-components'
import MusicController from './MusicControler'
import ThemeToggler from './ThemeToggler'
import {settingsContext} from '../contexts/SettingsContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

function Settings(props){
  const {toggleDarkMode, darkMode} = useContext(settingsContext)
  return (
    <Container>
      <MusicController color1={props.color1} color2={props.color2}/>
      <ThemeToggler toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </Container>
  )
}

export default Settings