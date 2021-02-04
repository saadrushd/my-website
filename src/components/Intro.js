import React from 'react'
import styled from 'styled-components'
import ReactRotatingText from 'react-rotating-text'

const StyledMain = styled.div`
  margin-right: 30px;
`

const SecondaryText = styled.div`
  width: 80%;
  color: ${props => props.theme.color};
`

const MainText = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-size: 3rem;
  line-height: 3rem;
  margin: 10px 0px;
`

const CTA = styled.div`
  display: flex;
  flex-direction: row;
`

const PrimaryCTA = styled.button`
  font-family: 'Quicksand';
  background-color: ${props => props.theme.primaryColor};
  border: none;
  font-size: 1.2rem;
  border-radius : ${props => props.theme.borderRadius};
  color: ${props => props.theme.inverseColor};
  width: 7rem;
  height: 2.3rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SecondaryCTA = styled.button`
  font-family: 'Quicksand';
  background: none;
  font-size: 1.2rem;
  border: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.primaryColor};
  width: 7rem;
  height: 2.3rem;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LinkContainer = styled.div`
  margin: 20px 20px 0 0;
`

function Intro() {

  function  scrollTo(id) {
    var el = document.getElementById(id);
    el.scrollIntoView(true);
  }

  return (
    <StyledMain top={window.innerHeight*0.5}>
      <SecondaryText>
        Hello! I am a cairo based
      </SecondaryText>
      <MainText>
        <ReactRotatingText items={['Full Stack Developer', 'UI/UX Designer']} emptyPause={200}/>
      </MainText>
      <SecondaryText>
        and this is my website/portfolio
      </SecondaryText>
      <CTA>
        <LinkContainer>
          <PrimaryCTA onClick={scrollTo.bind(null, "projects")} >
            Projects
          </PrimaryCTA>
        </LinkContainer>
        <LinkContainer>
          <SecondaryCTA onClick={scrollTo.bind(null, "contact")}>
            Contact
          </SecondaryCTA>
        </LinkContainer>
      </CTA>
    </StyledMain>
  )
}

export default Intro
