import React, { useContext } from 'react'
import styled from 'styled-components'
import {settingsContext} from '../contexts/SettingsContext'
import {AiOutlineClose} from 'react-icons/ai'

const NotificationBox = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.inverseColor};
  border-radius: 5px;
  position: fixed;
  top: ${props => props.show ? props.top : -100}px;
  right: 30px;
  width: 350px;
  height: 50px;
  transition: top 0.5s ease;
  z-index: 90;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  flex:1;
  padding-left: 20px;
`
const CloseButton = styled.button`
  background: none;
  font-size: 1.5rem;
  border: none;
  padding-right: 10px;
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

function Notifications(props) {
  const {showNotification, notificationText, hideNotification} = useContext(settingsContext)
  return (
    <NotificationBox top='30' show={showNotification}>
      <Content>copied {notificationText}</Content> 
      <CloseButton onClick={hideNotification}> <AiOutlineClose /> </CloseButton>
    </NotificationBox>
  )  
}

export default Notifications
