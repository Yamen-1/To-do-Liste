import './Aufgabe.css'
const Aufgabe = (props) => {
  return (
  <li 
    className={`Aufgabe ${props.farbe??  'wennFarbeFehlt' }`} 
    style={{ backgroundColor:  props.done ? ('gray') : ('red')}}
    id={props.number} 
    onClick={() => {
      // funktion rufen von props, mit id (number) als parameter
      props.aufgabeAlsErledigtMarkieren(props.number)
    }}
  
  > Deine Aufgabe Nummer {props.number} ist {props.text}</li>
  )
}

export default Aufgabe
