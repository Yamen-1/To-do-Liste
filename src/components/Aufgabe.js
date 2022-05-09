import './Aufgabe.css'
const Aufgabe = (props) => {
  return (
  <li className={`Aufgabe ${props.farbe??  'wennFarbeFehlt' }`} id={props.number} > Deine Aufgabe Nummer {props.number} ist {props.text}</li>
  )
}

export default Aufgabe
