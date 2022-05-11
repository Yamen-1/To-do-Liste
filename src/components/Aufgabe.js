import './Aufgabe.css'
import { useState } from 'react'


const Aufgabe = (props) => {

  const [edit, setEdit] = useState(false)
  const [currentVal, setCurrentVal] = useState(props.text)

  return (
  <li 
    className={`Aufgabe ${props.farbe??  'wennFarbeFehlt' }`} 
    style={{ backgroundColor:  props.done ? ('gray') : ('red')}}
    id={props.number}
  >
    {
      (edit === false)? <span>{props.text}</span>
        :<input value={currentVal}
                onChange={
                  (event)=>{
                    setCurrentVal(event.target.value)}
                  }
        />
    }
    <div>
      <button onClick={() =>{
        props.aufgabeAlsErledigtMarkieren(props.number)
      }
      }>{(props.done === false)?"erledigen":"zurücksetzen"}</button>
      <button onClick={() => {
        props.removeAufgabe(props.number)
      }}>Delete</button>
      <button onClick={() => {
        setEdit(!edit)
        props.editAufgabe(props.number, currentVal)
      }
      }>{
        (edit === false)?"Edit":"OK"
      }</button>

    </div>
  </li>
  )
}

export default Aufgabe
