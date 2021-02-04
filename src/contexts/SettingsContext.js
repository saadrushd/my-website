import React from 'react'

export const settingsContext = React.createContext()

function SettingsContext(props) {
  return (
    <settingsContext.Provider value={props.value}>
      {props.children}
    </settingsContext.Provider>
  )
}

export default SettingsContext