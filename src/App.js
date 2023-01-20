import './App.css';
import Navbar from './components/Navbar/Navbar';
import Navlist from './components/Navlist/Navlist';
import Graph from './components/Graph/Graph';
import Stats from './components/Stats/Stats';
import Calculator from './components/Calculator/Calculator';
import SubmitButton from './components/SubmitButton/SubmitButton';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navlist />
      <Graph />
      <Stats />
      <Calculator />
      <Modal />
    </div>
  );
}

export default App;
