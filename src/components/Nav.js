import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
`
const Item = styled.a`
  margin-bottom: 10px;
  margin-right: auto;
  cursor: pointer;
`

function Nav(props) {

  function  scrollTo(id) {
    var el = document.getElementById(id);
    el.scrollIntoView(true);
  }

  return (
    <Container>
      <Item onClick={() => scrollTo('top')}>
          Home
      </Item>
      <Item onClick={() => scrollTo('about')}>
          About
      </Item>
      <Item onClick={() => scrollTo('projects')}>
          Projects
      </Item>
      <Item onClick={() => scrollTo('Services')}>
          Services
      </Item>
      <Item onClick={() => scrollTo('contact')}>
          Contact
      </Item>
    </Container>
  )
}

export default Nav
