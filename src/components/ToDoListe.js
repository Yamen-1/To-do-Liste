import { useState } from 'react'
import Aufgabe from './Aufgabe';

const ToDoListe = () => {

  const [aufgaben, setAufgaben] = useState([
    { text: "Einkaufen gehen", done: false, id: 1, farbe: 'rot'  },
    { text: "Eis essen", done: false, id: 2, farbe: 'blau'  },
    { text: "Spielen", done: false, id: 3, farbe: 'gelb' },
    { text: "Schlafen", done: false, id: 4, farbe: 'rot' },
    { text: "Programmieren", done: true, id: 5, farbe: 'blau' },
    { text: "Aufstehen", done: false, id: 6 },
  ])

  return (
    <div className='ToDoListe'>
      <h2>Das sind meine Aufgaben:</h2>
      <ul>
        {/* So viele Komponenten wie aufgaben */}
        {aufgaben.map((aufgabe) => {
          return <Aufgabe 
          text={aufgabe.text} 
          key={aufgabe.id} 
          number={aufgabe.id} 
          farbe={aufgabe.farbe} />
        })}
      </ul>
      <h2>Das habe ich schon erledigt:</h2>
    </div>
  )
}

export default ToDoListe