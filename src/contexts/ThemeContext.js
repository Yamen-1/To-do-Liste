// 1: Context erstellen: 

import React, { createContext, useState } from "react";

export const ThemeContext = createContext()

//Komponente: wie soll der Kontext aussehen: 

const ThemeContextProvider = (props) => {
// theme/layout für die App. Definieren und ändern können
  const [ appLayout, setAppLayout ] = useState({
    istHell: true,
    hell: {
      text: '#555', 
      hintergrund: '#ddd',
    },
    dunkel: {
      text: '#ddd',
      hintergrund: '#333'
    }
  })

  // funktion zum Layout ändern: 

  const toggleLayout = () => {
    // state ändern: alles aus layout, istHell: wenn istHell true ist, dann wird es zu false (!), 
    setAppLayout({...appLayout, istHell: !appLayout.istHell })
  }
// return: Komponente: Teil von ThemeContext Provider 
// value: ist ein Objekt mit dem Theme 
  return(
    <ThemeContext.Provider value={{ appLayout, toggleLayout }}>
      {/* Kinder von ThemeContext Provider werden hier eingesetzt */}
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider