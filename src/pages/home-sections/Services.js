import React from 'react'
import styled from 'styled-components'


const Section = styled.div`
  background-color: ${props => props.theme.sectionAlternate};
  padding-bottom: 50px;
`

const AboutServices = styled.div`
  width: 800px;
  @media (max-width: 966px) {
    width: 100%;
  }
`
const Container = styled.div`
  width: 85%;
  margin: auto;
`

const Link = styled.a`
  color: ${props => props.theme.primaryColor} !important;
`

const Title = styled.div`
  font-size: 2.75rem;
  font-family: 'Quicksand';
  color: ${props => props.theme.primaryColor};
  padding-top: 50px;
  margin-bottom: 20px;
`

const ServicesList = styled.ul`
	margin-top: 30px;
  list-style-position: inside;
`

function Services() {
  return (
    <Section id="Services">
      <Container>
        <Title>Services</Title>
				<AboutServices>Services I host for myself and others. Some of those services are open for registration/usage and some require an invitation, shoot me an email if you need one.</AboutServices>
				<ServicesList>
          {/* app name, discription, at $URL */}
					<li><Link href="https://pleroma.social/">Pleroma</Link>, federated social networking server (part of the fediverse), at <Link href="https://pleroma.ahmedsaad.xyz">pleroma.ahmedsaad.xyz</Link> </li>
					<li>Mail server, at mail.ahmedsaad.xyz</li>
					<li>Wireguard VPN</li>
					<li><Link href="https://bitwarden.com/">Bitwarden</Link>, password manager, at <Link href="https://bitwarden.ahmedsaad.xyz">bitwarden.ahmedsaad.xyz</Link> </li>
					<li><Link href="https://jitsi.org/jitsi-meet/">Jitsi Meet</Link>, secure and flexible video conferencing <Link href="https://meet.ahmedsaad.xyz">meet.ahmedsaad.xyz</Link> </li>
				</ServicesList>
      </Container>
    </Section>
  )
}

export default Services
