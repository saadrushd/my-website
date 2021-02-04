import React, {useState} from 'react'
import styled from 'styled-components'
import axios from "axios";

const Input = styled.input`
  background-color: ${props => props.theme.formBackgroundColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  padding: 0.5rem;
`

const MessageArea = styled.textarea`
  background-color: ${props => props.theme.formBackgroundColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  height: 10rem;
  padding: 0.5rem;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin-bottom: 10px;
`

const Submit = styled.button`
  font-family: 'Quicksand';
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.inverseColor};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1rem;
  padding: 5px 25px;
  margin-top: 10px;
  align-self: center;
`

const Label = styled.label`
  margin-bottom: 3px;
`

const Form = styled.form`
  width: 400px;
  background-color: ${props => props.theme.backgroundColor};
  border-radius: 8px;
  padding: 20px; 
  display: flex;
  flex-direction: column;

  @media (max-width: 939px) {
    background: none;
    padding: 0px; 
  }

  @media (max-width: 492px) {
    width: 80vw
  }

`

const Response = styled.div`
  align-self: center;
  margin-top: 10px;
`

function ContactForm () {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };
 
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    setServerState({ submitting: true });

    axios({
      method: "post",
      url: "https://formspree.io/mdollowa",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
        console.log("ok")
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <InputContainer>
        <Label htmlFor='name'> Name: </Label>
        <Input type="text" id='name' name="name" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='mail'> Mail: </Label>
        <Input type="email" id='mail' name="mail" />
      </InputContainer>
      <InputContainer>
        <Label htmlFor='message'> Message: </Label>
        <MessageArea type="text" id='message' name="message" />
      </InputContainer>
      <Submit type="submit" disabled={serverState.submitting}  >Send</Submit>
      { serverState.status && (<Response > {serverState.status.msg} </Response>)}
    </Form>
  )
}

export default ContactForm