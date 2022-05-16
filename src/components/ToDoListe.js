import { useState } from 'react'
import Aufgabe from './Aufgabe';

const ToDoListe = () => {

  const [newAufgabe, setNewAufgabe] = useState("")

  const [aufgaben, setAufgaben] = useState([
    { text: "Einkaufen gehen", done: false, id: 1, farbe: 'schwarz' },
    { text: "Eis essen", done: false, id: 2, farbe: 'schwarz' },
    { text: "Spielen", done: false, id: 3, farbe:  'schwarz'  },
    { text: "Schlafen", done: false, id: 4, farbe:  'schwarz'  },
    { text: "Programmieren", done: true, id: 5, farbe:  'schwarz'  },
    { text: "Aufstehen", done: false, id: 6 },
  ])

  const createNewTask = () => {
    // Schritt 2: kurzen mit spread
    setAufgaben([ ...aufgaben, { text: newAufgabe, done: false, id: Date.now(), farbe: 'schwarz' } ])
  }

  const aufgabeDoneToggeln = (id) => {
    console.log('als erledigt', id);
    let geänderteKopie = aufgaben.map(aufgabe => {
        if(aufgabe.id === id){
          return {...aufgabe, done: !aufgabe.done}
        } else {
          return aufgabe
        }
    })
    // setAufgaben, um die neue Array in state zu speichern:
    setAufgaben(geänderteKopie)
  }


  const removeAufgabe = (id) => {
    let geänderteKopie = aufgaben.filter((item) => item.id !== id);
    setAufgaben(geänderteKopie);
  }

  const deleteAll = () => {
    setAufgaben([])
  }

  const alleErledigen = () => {
    let kopie = aufgaben.map(aufgabe => ({...aufgabe, done: true}))
    setAufgaben(kopie)
  }

  const alleZurueck = () => {
    let kopie = aufgaben.map(aufgabe => ({ ...aufgabe, done: false}))
    setAufgaben(kopie)
  }

  const editAufgabe = (id, newValue) => {
    let kopie = aufgaben.map(aufgabe => {
      if(aufgabe.id === id){
        aufgabe.text = newValue
      }
      return aufgabe
    })
    setAufgaben(kopie)
  }

  // filter funktionen: 

  let nichtErledigteAufgaben = aufgaben.filter((aufgabe) => aufgabe.done === false)
  let erledigteAufgaben = aufgaben.filter((aufgabe) => aufgabe.done === true)

  return (
    <div className='ToDoListe'>
      <div>
        <button onClick={deleteAll}>Alle Löschen</button>
        <button onClick={alleErledigen}>Alle Erledigen</button>
        <button onClick={alleZurueck}>Alle Zurücksetzen</button>
      </div>
      <h2>Das sind meine Aufgaben:</h2>
      <ul>
        {/* Schritt 2: nur nicht erledigte aufgaben anzeigen */}
        {nichtErledigteAufgaben.map((aufgabe) => {
          return <Aufgabe
            text={aufgabe.text}
            key={aufgabe.id}
            number={aufgabe.id}
            // Schritt 3: onClick um als erledigt zu markieren
            aufgabeDoneToggeln={aufgabeDoneToggeln}
            farbe={aufgabe.farbe}
            done={aufgabe.done}
            removeAufgabe = {removeAufgabe}
            editAufgabe = {editAufgabe}
             />
        })}
      </ul>
      <h2>Das habe ich schon erledigt:</h2>
      <ul>
      {erledigteAufgaben.map(aufgabe => {
        return <Aufgabe
          text={aufgabe.text}
          key={aufgabe.id}
          number={aufgabe.id}
          // Schritt 3: onClick um als erledigt zu markieren
          aufgabeDoneToggeln={aufgabeDoneToggeln}
          farbe={aufgabe.farbe}
          done={aufgabe.done}
          removeAufgabe = {removeAufgabe}
          editAufgabe = {editAufgabe}
           />
      })}
      </ul>


      <input type="text" value={newAufgabe} name="newTask"
             onChange={(event)=>{
              setNewAufgabe(event.target.value)}
             }/>

      <button onClick={createNewTask}>Ok</button>



    </div>
  )
}

export default ToDoListe