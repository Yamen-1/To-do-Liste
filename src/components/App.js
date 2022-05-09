import '../css/App.scss';
import Header from './Header';
import ToDoListe from './ToDoListe';

function App() {
  return (
    <div className="App" id="App">
      <Header/>
      {/* Hier Liste von Todo */}
      <ToDoListe/>
    </div>
  );
}

export default App;
