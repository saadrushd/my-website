import React, { useContext } from 'react'
import styled from 'styled-components'
import {AiOutlineArrowDown} from 'react-icons/ai'

import Intro from '../../components/Intro'
import Nav from '../../components/Nav'
import Settings from '../../components/Settings'
import Logo from '../../components/Logo'
import Social from '../../components/Social'

import {settingsContext} from '../../contexts/SettingsContext'
import {dark, light} from '../../data/colors'

const Content = styled.div`
  width: 85%;
  margin:auto;
`

const Container = styled.div`
  padding-top: 40px;
  font-family: 'Quicksand', sans-serif;
  color: ${props => props.theme.primaryColor};
  height: ${props => props.innerHeight}px;
  display: grid;
  grid-template-areas:
    'logo navigation settings'
    'intro intro social'
    'scroll scroll scroll';
  grid-template-rows: 50% auto auto;
  grid-template-columns: 1fr 0.5fr auto;

  @media (max-height: 444px){
    height: 444px;
  }
`

const StyledLogo = styled.div`
  grid-area: logo;
`

const StyledNav = styled.div`
  grid-area: navigation;

  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

const StyledSettings = styled.div`
  grid-area: settings;

  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

const StyledIntro = styled.div`
  grid-area: intro;
  transform: translateY(-50%);
`

const StyledSocial = styled.div`
  grid-area: social;
  height: 100%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;


  @media (max-width: 481px) {
    display: none;
  }
  @media (max-height: 630px) {
    display: none;
  }
`

const ScrollIndicator = styled.div`
  grid-area: scroll;
  justify-self: center;

  margin-bottom: 20px;
  color: ${props => props.theme.projectsMeta};
  font-size: 2rem;
  align-self: center;
`

function Landing() {

  const {darkMode, innerHeight } = useContext(settingsContext)

  return (
    <Content id='top'>
      <Container innerHeight={innerHeight}>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledNav>
          <Nav />
        </StyledNav>
        <StyledSettings>
          <Settings color1={darkMode ? dark.primaryColor() : light.primaryColor() } color2={darkMode ? dark.railColorMain() : light.railColorMain()}/>
        </StyledSettings>
        <StyledIntro>
          <Intro />
        </StyledIntro>
        <StyledSocial>
          <Social />
        </StyledSocial>
        <ScrollIndicator>
          <AiOutlineArrowDown />
        </ScrollIndicator>
      </Container>
    </Content>
  )
}

export default Landing
