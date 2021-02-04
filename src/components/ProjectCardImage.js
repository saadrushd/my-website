import React, { useState } from 'react'
import styled from 'styled-components'

import ProjectCard from './ProjectCard'

const separation = 20

const Preview = styled.img`
  width: 40vw;
  pointer-events: none;
  z-index: 1000;
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  display: ${props => props.preview ? 'block' : 'none'};
  @media (max-width: 768px) {
    display: none;
  }
`

function ProjectCardImage(props) {
  const [preview, setPreview] = useState(false)
  const [previewX, setPreviewX] = useState(0)
  const [previewY, setPreviewY] = useState(0)

  const handleMouseMove = (e) => {
    setPreviewY(e.pageY)
    if (e.pageX < document.documentElement.clientWidth*0.6 - separation - 5 )  {
      setPreviewX(e.pageX+separation)
    } else {
      setPreviewX(e.pageX - document.documentElement.clientWidth*0.4 - separation)
    }
  }

  const handleMouseEnter = (e) => {
    setPreview(true)
  }

  const handleMouseLeave = (e) => {
    setPreview(false)
  }

  return(
    <>
      <div 
        onMouseMove={handleMouseMove} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <ProjectCard project={props.project} preview={true}/>
      </div>
      <Preview src={props.project.screenshot} top={previewY} left={previewX} preview={preview}/>
    </>
  )
}

export default ProjectCardImage