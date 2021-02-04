import React, { useRef } from 'react'
import styled from 'styled-components'

import Noise from './Noise'
import Border from './Border'

const cursorRadius = 5 
const clickableCursorRadius = 20
const imageCursorRadius = 50 
const transitionDuration = 150

const StyledBody = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  font-family: 'Open Sans',sans-serif;
  min-height: ${props => props.innerHeight}px;
  padding-bottom: 5px;
`

const StyledMouseCursor = styled.div`
  z-index: 100;
  position:absolute;
  width:${cursorRadius*2}px;
  height:${cursorRadius*2}px;
  pointer-events:none;
  backdrop-filter: invert();
  opacity: 1;
  background-color: ${props => props.theme.cursorColor };
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition-duration : ${transitionDuration}ms;
  transition-timing-function: ease-out;
`

function Body(props){

  const cursorRef = useRef()

  const isParent = (parent, element) => {
    const Name = element.localName
    const parentName = element.parentElement.localName
    if ( parentName === "body" ){
      return false
    } else if (Name === parent || parentName === parent){
      return true 
    } else {
      return isParent(parent, element.parentElement)
    }
  }

  function getPageHeight() {
    var body = document.body,
    html = document.documentElement;

    return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  }

  const handleMouseMove = (e) => {
    const cursor = cursorRef.current
    const currentCursorWidth = cursor.style.width
    const currentCursorRadius = currentCursorWidth.slice(0, currentCursorWidth.indexOf('px'))/2

    const willOverFlowX = e.pageX + currentCursorRadius > document.documentElement.clientWidth
    const pageHeight = getPageHeight()
    const willOverFlowY = e.pageY + currentCursorRadius > pageHeight

    if (!willOverFlowX){
       cursor.style.left = `${e.pageX}px` 
    } else {
      cursor.style.left = `${document.documentElement.clientWidth - currentCursorRadius}px`
    }

    if (!willOverFlowY) {
      cursor.style.top = `${e.pageY}px` 
    } else {
      cursor.style.top = `${pageHeight - currentCursorRadius}px` 
    }

    
    const clickable =  isParent('button', e.target) ||  isParent('a', e.target) || isParent('input', e.target) || isParent('textarea', e.target) 
    const image = isParent('img', e.target)

    if (clickable){
      cursor.style.width = `${clickableCursorRadius*2}px`;
      cursor.style.height = `${clickableCursorRadius*2}px`;
      cursor.style.backdropFilter = 'invert()';
    } else if (image) {
      cursor.style.width = `${imageCursorRadius*2}px`;
      cursor.style.height = `${imageCursorRadius*2}px`;
      cursor.style.backdropFilter = 'brightness(40%)';
    } else {
      cursor.style.backdropFilter = 'invert()';
      cursor.style.width = `${cursorRadius*2}px`;
      cursor.style.height = `${cursorRadius*2}px`;
    }
  }

  const handleMouseLeave = (e) => {
    const cursor = cursorRef.current
    cursor.style.display = 'none'
  }

  const handleMouseEnter = (e) => {
    const cursor = cursorRef.current
    cursor.style.display = 'initial'
  }
 
  const handleScroll = (e) => {
    const cursor = cursorRef.current

    cursor.style.top = `${e.pageY}px`
    cursor.style.left = `${e.pageX}px`
  }

  return (
    <StyledBody
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onWheel={handleScroll}
      innerHeight={window.innerHeight}
      >
      <StyledMouseCursor ref={cursorRef} className="cursor" />
      <Noise />
      <Border />
      {props.children}
    </StyledBody>
  )
}

export default Body
