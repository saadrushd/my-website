import React, { useState, useEffect} from 'react'
import styled from 'styled-components'

import Copy from '../../components/Copy'
import ContactForm from '../../components/ContactForm'

const Section = styled.div`
  background-color: ${props => props.theme.section};
  padding-bottom: 50px;
`

const Container = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CopyContainer = styled.span`
  color: ${props => props.theme.primaryColor};
`

const Link = styled.a`
  color: ${props => props.theme.primaryColor} !important;
`

const Title = styled.div`
  font-size: 2.75rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding-top: 50px;
  margin-bottom: 50px;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 939px) {
    flex-direction: column;
    align-items: center;
  }

`

const StyledContactForm = styled.div`
  margin: 0px 25px 30px 0px;
  @media (max-width: 939px) {
    margin: 0px 0px 30px 0px;
  }

`

const Aside = styled.div`
  flex: 1;
  align-self: center;
  margin-left: 25px;
  @media (max-width: 939px) {
    margin: 0px;
  }
`

const Paragraph = styled.div`
  margin-bottom: 20px;
`
const StyledList = styled.ol`
  list-style-position: inside;
`

const StyledUnorderdList = styled.ul`
  list-style-position: inside;
`

function calcDate() {
      // create Date object for current location
      const offset = 2

      var d = new Date();

      // convert to msec
      // subtract local time zone offset
      // get UTC time in msec
      var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      // create new Date object for different city
      // using supplied offset
      var nd = new Date(utc + (3600000*offset));
      // return time as a string
      return nd.toLocaleTimeString();


}

function Contact() {
  const [date, setDate] = useState(calcDate())

  useEffect(() => {
    setInterval(() => {
      setDate(calcDate())
    }, 1000);
  }, [])

  return (
    <Section id="contact">
      <Container>
        <Title>Contact</Title>
        <Content>
          <StyledContactForm>
            <ContactForm />
          </StyledContactForm>
          <Aside>
            <Paragraph>
              My local time in cairo now is: {date} <br/>
            </Paragraph>
            <Paragraph>
              <div>Beside the contact form, you can reach me through those channels (ordered by how much I prefer each way): </div>
              <StyledList>
                <li>Email: <CopyContainer><Copy copy='saad@ahmedsaad.xyz' >saad@ahmedsaad.xyz</Copy></CopyContainer> (preferred)</li>
                <li>Email: <CopyContainer><Copy copy='saad@ahmedsaad.xyz' >saad@ahmedsaad.xyz</Copy></CopyContainer></li>
                <li>Email: <CopyContainer><Copy copy='saad@ahmedsaad.xyz' >saad@ahmedsaad.xyz</Copy></CopyContainer></li>
              </StyledList>
              </Paragraph>
              <Paragraph>
                <div>Notes: </div>
	  <StyledUnorderdList>
                <li> did you know that we can chat over email just like whatsapp? check out <Link href="https://delta.chat/en/">Delta Chat</Link></li>
                <li> If you have any phone number associated with me, delete it, I don't use a phone anymore</li>
	  </StyledUnorderdList>
              </Paragraph>
          </Aside>
        </Content>
      </Container>
    </Section>
  )
}

export default Contact
