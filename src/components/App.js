import '../css/App.scss';
import Header from './Header';
import ToDoListe from './ToDoListe';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App" id="App">
        <Header/>
        <Routes>
          <Route path="/" element={<div>Startseite</div>}/>
          <Route path="/todos" element={<ToDoListe/>}/>
          <Route path="/help" element={<div>Help</div>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
