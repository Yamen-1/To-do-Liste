import React from "react";

class ToDoListeClass extends React.Component {
  constructor(props) {
    super(props)
    // state leer: 
    // this.state = {}
    // mit einer eigenschaft:
    // this.state = { eineEigenschaft: 1}
    // state mit inhalt
    this.state = {
      newAufgabe: "",
      aufgaben: [
        { text: "Einkaufen gehen", done: false, id: 1, farbe: 'schwarz' },
        { text: "Eis essen", done: false, id: 2, farbe: 'schwarz' },
        { text: "Spielen", done: false, id: 3, farbe: 'schwarz' },
        { text: "Schlafen", done: false, id: 4, farbe: 'schwarz' },
        { text: "Programmieren", done: true, id: 5, farbe: 'schwarz' },
        { text: "Aufstehen", done: false, id: 6 },
      ]
    }
  }

  // wird zu useEffect: beim Laden
  componentDidMount() {
    console.log('Komponente wurde geladen')
    let dataAlsJSON = localStorage.getItem('aufgabenLS')
    let data = JSON.parse(dataAlsJSON)
    if(data){
      // im state speichern: 
      this.setState({ ...this.state, aufgaben: data })
    }
  }
  // wird zu useEffect wenn state sich ändert: 

  componentDidUpdate(alterProps, alterState){
    console.log('Etwas an state hat sich geändert')
    if(this.state.aufgaben !== alterState.aufgaben){
      localStorage.setItem('aufgabenLS', JSON.stringify(this.state.aufgaben))
    } else if (this.state.newAufgabe !== alterState.newAufgabe){
      /// mach etwas
      console.log("new aufgabe hat sich geändert")
    }
  }



  render() {
    return (
      <div className="ToDoListeClass">
          <p> {this.state.aufgaben[0].text}</p>
      </div>
    );
  }
}