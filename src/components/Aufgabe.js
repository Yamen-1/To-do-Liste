import './Aufgabe.css'
import { useState } from 'react'

// schritt 1: destrukturieren von Props: Eigenschaften von Objekt holen mit Umbenennen
const Aufgabe = ({text, farbe, done, number, aufgabeDoneToggeln: doneAufgabe, removeAufgabe, editAufgabe }) => {

  const [edit, setEdit] = useState(false)
  const [currentVal, setCurrentVal] = useState(text)

  return (
  <li 
    className={`Aufgabe ${farbe??  'wennFarbeFehlt' }`} 
    style={{ backgroundColor:  done ? ('gray') : ('red')}}
    id={number}
  >
    {
      (edit === false)? <span>{text}</span>
        :<input value={currentVal}
                onChange={
                  (event)=>{
                    setCurrentVal(event.target.value)}
                  }
        />
    }
    <div>
      <button onClick={() =>{
        doneAufgabe(number)
      }
      }>{(done === false)?"erledigen":"zurücksetzen"}</button>
      <button onClick={() => {
        removeAufgabe(number)
      }}>Delete</button>
      <button onClick={() => {
        setEdit(!edit)
        editAufgabe(number, currentVal)
      }
      }>{
        (edit === false)?"Edit":"OK"
      }</button>

    </div>
  </li>
  )
}

export default Aufgabe
