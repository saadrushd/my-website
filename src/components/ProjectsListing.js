import React from 'react'
import styled from 'styled-components'

import projects from '../data/projects'

import ProjectCard from './ProjectCard'
import ProjectCardImage from './ProjectCardImage'

const Section = styled.div`
  margin-bottom: 50px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 50px 0px 50px 0px;
`

const Title = styled.div`
  font-size: 1.875rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
`

const TitleLine = styled.div`
  height: 1px;
  background-color: ${props => props.theme.projectSectionStroke};
  flex: 1;
  align-self: center;
  margin-left: 10px;
`

const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;  
  @media (max-width: 1071px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 624px) {
    grid-template-columns: 1fr;
  }
`

const CardsGridPreview = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;  
  @media (max-width: 1071px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;  
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

function ProjectsListing() {

  return (
    <div>
      <Section>
        <TitleContainer><Title>Software</Title><TitleLine></TitleLine></TitleContainer>
        <CardsGrid>
          {projects.map((project, index) => {
          if (project.type === 'software') {
            return(
              <ProjectCard project={project} />
            )
          } else { return <></> }
          })}
        </CardsGrid>
      </Section>
      <Section>
        <TitleContainer><Title>Web</Title><TitleLine></TitleLine></TitleContainer>
        <CardsGridPreview>
          {projects.map((project, index) => {
          if (project.type === 'web') {
            return(
              <ProjectCardImage project={project} />
            )
          } else { return <></> }
          })}
        </CardsGridPreview>
      </Section>
      <Section>
        <TitleContainer><Title>Miscellaneous</Title><TitleLine></TitleLine></TitleContainer>
        <CardsGrid>
          {projects.map((project, index) => {
          if (project.type === 'misc') {
            return(
              <ProjectCard project={project} />
            )
          } else { return <></> }
          })}
        </CardsGrid>
      </Section>
    </div>
  )

}

export default ProjectsListing