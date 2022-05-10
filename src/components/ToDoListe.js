import { useState } from 'react'
import Aufgabe from './Aufgabe';

const ToDoListe = () => {

  const [aufgaben, setAufgaben] = useState([
    { text: "Einkaufen gehen", done: false, id: 1, farbe: 'schwarz' },
    { text: "Eis essen", done: false, id: 2, farbe: 'schwarz' },
    { text: "Spielen", done: false, id: 3, farbe:  'schwarz'  },
    { text: "Schlafen", done: false, id: 4, farbe:  'schwarz'  },
    { text: "Programmieren", done: true, id: 5, farbe:  'schwarz'  },
    { text: "Aufstehen", done: false, id: 6 },
  ])
  // Funktion um done von false auf true zu ändern: 
  // braucht das Id von Aufgabe
  const aufgabeAlsErledigtMarkieren = (id) => {
    // kopie von aufgaben, hier ändern wir
    let geänderteKopie = aufgaben.map(aufgabe => {
      // // das element auf dem wir geklickt haben finden!
      if(aufgabe.id === id){
         // done von false zu true
         aufgabe.done = true
        return aufgabe
      } else {
        return aufgabe
      }
    })
    // setAufgaben, um die neue Array in state zu speichern:
    setAufgaben(geänderteKopie)
  }

  // filter funktionen: 

  let nichtErledigteAufgaben = aufgaben.filter((aufgabe) => !aufgabe.done)
  let erledigteAufgaben = aufgaben.filter((aufgabe) => aufgabe.done === true)

  return (
    <div className='ToDoListe'>
      <h2>Das sind meine Aufgaben:</h2>
      <ul>
        {/* Schritt 2: nur nicht erledigte aufgaben anzeigen */}
        {nichtErledigteAufgaben.map((aufgabe) => {
          return <Aufgabe
            text={aufgabe.text}
            key={aufgabe.id}
            number={aufgabe.id}
            // Schritt 3: onClick um als erledigt zu markieren
            aufgabeAlsErledigtMarkieren={aufgabeAlsErledigtMarkieren}
            farbe={aufgabe.farbe}
            done={aufgabe.done}
             />
        })}
      </ul>
      <h2>Das habe ich schon erledigt:</h2>
      {/* Schritt 1: nur erledigte aufgaben anzeigen; Ausfilter wo done == true */}
      {/*Geht auch: { aufgaben.filter((aufgabe) => aufgabe.done )} */}
      {/* [{ text: "Programmieren", done: true, id: 5, farbe: 'blau' }] */}
      {erledigteAufgaben.map(aufgabe => {
        return <Aufgabe
          text={aufgabe.text}
          key={aufgabe.id}
          number={aufgabe.id}
          // Schritt 3: onClick um als erledigt zu markieren
          aufgabeAlsErledigtMarkieren={aufgabeAlsErledigtMarkieren}
          farbe={aufgabe.farbe}
          done={aufgabe.done}
           />
      })}






      {/* Schritt 4: aufräumen mit Container? */}
    </div>
  )
}

export default ToDoListe