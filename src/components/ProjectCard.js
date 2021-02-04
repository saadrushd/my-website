import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.projectsBackgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Screenshot = styled.img`
  width: 90%;
  margin: auto;
  padding-top: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`

const HeaderContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const FooterContainer = styled.div`
  width: 90%;
  margin: auto;
`

const ProjectTitle = styled.div`
  font-size: 1.5625rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding: ${props => props.preview ? '10px 0px 20px 0px' : '20px 0px'};
`

const ProjectDescription = styled.div`
  margin-bottom: 20px;
  color: ${props => props.theme.projectsDescription};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProjectHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

const ProjectFooter = styled.div`
  padding: 10px 0px 20px 0px;
  background-color: ${props => props.theme.projectsFooterBackgroundColor};
  border-radius: ${props => props.theme.borderRadius};
`


const Technologies = styled.div`
  color: ${props => props.theme.projectsMeta};
  flex: 1;
  display:flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  font-size: 0.9rem;
`

const Pre = styled.div`
  margin-right: 7px;
`

const Technology = styled.span`
  margin-right: 10px;
`

const TechnologyIcon = styled.span`
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const CTAs = styled.div`
  display: flex;
  flex-direction:row;
  font-family: 'Quicksand';
  font-size: 0.9rem;
  margin-bottom: 10px;
  margin-top: 10px;
`

const CTA = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CTArepo = styled.div`
  background-color: ${props => props.theme.primaryColor};
  border-radius : ${props => props.theme.borderRadius};
  color: ${props => props.theme.inverseColor};
  width: 6rem;
  height: 25px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CTArepoMargin = styled.div`
  margin-right: 10px;
`

const CTAdemo = styled.div`
  background-color: ${props => props.theme.primaryColor};
  border-radius : ${props => props.theme.borderRadius};
  color: ${props => props.theme.inverseColor};
  width: 4rem;
  height: 25px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HoverIndicatorContainer = styled.div`
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    display: none;
  }
`
const HoverIndicator = styled.div`
  margin-top: 10px;
  font-size: 0.8rem;
  color: ${props => props.theme.projectsMeta};
`

function ProjectCard(props) {
  const { project } = props
  let demo;
  if (project.demo) {
    demo =  <a href={`${project.demo}`} target='_blank' rel="noopener noreferrer">
              <CTAdemo>
                Demo
              </CTAdemo>
            </a>
  }else {
    demo = <div></div>
  }

  let screenshot
  let hoverIndicator
  if (props.preview) {
    screenshot = <Screenshot src={project.screenshot}/>
    hoverIndicator = <HoverIndicatorContainer> <HoverIndicator>Hover for screenshot</HoverIndicator> </HoverIndicatorContainer>
  } else {
    screenshot = <div></div>
    hoverIndicator = <div></div>
  }

  return(
    <Card>
      {screenshot}
      {hoverIndicator}
      <ProjectHeader>
        <HeaderContainer>
          <ProjectTitle preview={props.preview}>
            <a href={`https://git.sr.ht/~saad/${project.repo}`} target='_blank' rel="noopener noreferrer" > { project.name } </a>
          </ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </HeaderContainer>
      </ProjectHeader>
      <ProjectFooter>
        <FooterContainer>
            <Technologies>
              <Pre>Tech: </Pre>
              {project.techonlogies.map((technology, index) => {
                const length = project.techonlogies.length
                return (
                  <Technology key={index}>
                    <TechnologyIcon>{technology.preJSX}</TechnologyIcon> {technology.name}{ (length > 1 && index !== length -1) ? ',' : ''}
                  </Technology>
                )
              })}
            </Technologies>
          {/* <Tags>
            <Pre>tags:</Pre> {project.tags}
          </Tags> */}
          <CTAs>
            <CTA>
              <CTArepoMargin>
                <a href={`https://git.sr.ht/~saad/${project.repo}`} target='_blank' rel="noopener noreferrer">
                  <CTArepo>
                    Repository
                  </CTArepo>
                </a>
              </CTArepoMargin>
              {demo}
            </CTA>
          </CTAs>
        </FooterContainer>
      </ProjectFooter>
    </Card>
  )
}

export default ProjectCard
