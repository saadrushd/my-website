import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import App from './App'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
  }
  html {
  font-size: 16px;
  }

  @media (max-width: 900px) {
    html { font-size: 14px; }
  }

  @media (max-width: 400px) {
    html { font-size: 12px; }
  }

  a {color: inherit;}         /* Unvisited link  */
  a:visited {color: inherit;} /* Visited link    */
  a:hover {color: inherit;}   /* Mouse over link */
  a:active {color: inherit;}  /* Selected link   */

  button {
    outline: none;
    color: inherit;
    cursor: pointer;
  }

`
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
