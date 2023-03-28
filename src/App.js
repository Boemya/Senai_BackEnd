import logo from './logo.svg'
import './App.css'
import Banner from './componentes/Banner/Banner'
import CampoTexto from './componentes/CampoTexto/CampoTexto'
import Formulario from './componentes/Formulario'
import ListaSuspensa from './componentes/ListaSuspensa'

function App() {
  return (
    <div className="App">
      <h1>Sejam bem vindos a Faculdade Senai</h1>
      <Banner />
      <Formulario/>
      <ListaSuspensa/>
     
    </div>
  );
}

export default App;
