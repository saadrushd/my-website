import React, {useState} from 'react'
import styled from 'styled-components'
import skills from '../data/skills'
import ProgressBar from './ProgressBar'
import Small from './Small'

const Container = styled.div`
`

const Title = styled.div`
  font-size: 1.875rem;
  font-family: 'Quicksand';
  margin-bottom: 20px;
  color: ${props => props.theme.primaryColor};
`

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-bottom: 30px;
  @media (max-width: 455px) {
    width: 350px; 
  }
  @media (max-width: 400px) {
    width: 300px; 
  }
  @media (max-width: 350px) {
    width: 250px; 
  }
`

const Category = styled.button`
  font-size: 1.1875rem;
  font-family: 'Quicksand', sans-serif;
  padding: 3px 7px;
  color: ${props => props.theme.primaryColor};
  background: none;
  border:none;
  border-bottom: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
`
const ActiveCategory = styled.button`
  font-size: 1.1875rem;
  font-family: 'Quicksand', sans-serif;
  padding: 3px 7px;
  color: ${props => props.theme.primaryColor};
  background: none;
  border:none;
  border-top: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
  border-left: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
  border-right: ${props => props.theme.borderWidth} solid ${props => props.theme.borderColor};
`

const Elements = styled.div`
  margin-top: 20px;
  height: 240px;
  @media (max-width: 455px){
    height: 300px;
  }
  @media (max-width: 400px){
    height: 270px;
  }
`

const Element = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 455px){
    flex-direction: column; 
    align-items: flex-start;
  }
`

const ElementName = styled.div`
  width: 80px;
  padding-bottom: 3px;
`

const StyledSmall = styled.div`
  margin-top: 20px;
`

function Skills() {
  const [activeSkillObject, setActiveSkillObject] = useState(skills[0])

  return(
    <Container>
      <Title>
        Technical Skills
      </Title>
      <Categories>
        {skills.map((skillObject, index) => {
          if (skillObject === activeSkillObject) {
            return (
              <ActiveCategory key={index} onClick={() => {setActiveSkillObject(skillObject)}}>
                {skillObject.category}
              </ActiveCategory>
            )
          } else {
            return (
              <Category key={index} onClick={() => {setActiveSkillObject(skillObject)}}>
                {skillObject.category}
              </Category>
            )
          }
        })}
      </Categories>
      <Elements>
        {activeSkillObject.elements.map((element, index) => {
          return (
            <Element key={index}>
              <ElementName>
                {element.name} 
              </ElementName>
              <div>
                <ProgressBar percent= {element.percent}/>
              </div>
            </Element>
          )
        })}
      </Elements>
      <StyledSmall>
        <Small>
          The bars represent how i feel confident in every skill relative to the other skills 
        </Small>
      </StyledSmall>
    </Container>
  )
}

export default Skills