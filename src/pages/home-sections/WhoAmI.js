import React from 'react'
import styled from 'styled-components'

import Skills from '../../components/Skills'

const Section = styled.div`
  background-color: ${props => props.theme.sectionAlternate};
`

const Center = styled.div`
  width: 85%;
  margin: auto;
`

const Title = styled.div`
  font-size: 2.75rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding-top: 50px;
  margin-bottom: 20px;
`

const About = styled.div`
  grid-area: about;
  width: 600px;
  margin-bottom: 30px;
  @media (max-width: 966px) {
    width: 400px;
  }
  @media (max-width: 796px) {
    width: 100%;
    padding-right: 30px;
  }
`

const StyledSkills = styled.div`
  grid-area: skills;
  margin: 0px 0px 60px 0px;
  width: 100%;
`

const Avatar = styled.img`
  width: 211.82px;
  border-radius: 10px; 
  grid-area: avatar;
  justify-self: center;
  @media (max-width: 796px) {
    width: 150px;
  }
  @media (max-width: 448px) {
    width: 100px;
  }
  @media (max-width: 370px) {
    margin-bottom: 20px;
    width: 150px;
    justify-self: end;
  }
  @media (min-width: 1280px) {
    width: 250px;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-areas: 
    'about avatar' 
    'skills avatar';
  @media (max-width: 796px) {
  grid-template-areas: 
    'about avatar' 
    'skills skills';
  }
  @media (max-width: 370px) {
  grid-template-areas: 
    'about' 
    'avatar' 
    'skills';
  }
`

function WhoAmI() {
  return(
    <Section id="about">
      <Center>
        <Title>Who am i</Title>
        <Content>
          <About>
            I am a self-taught developer with multible backgrounds and multipotentiality in computer science. My horizontal knowledge base helps me a lot with many things, some of which are: idea synthesis (crafting a solution from the intersection of many fields), deep understanding of the big picture, and rapid learning.
          </About>
          <StyledSkills>
            <Skills />
          </StyledSkills>
          <Avatar src='assets/avatar.png'/>
        </Content>
      </Center>
    </Section>
  )
}

export default WhoAmI