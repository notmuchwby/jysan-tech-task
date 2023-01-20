import './App.css';
import Navbar from './components/Navbar/Navbar';
import Navlist from './components/Navlist/Navlist';
import Graph from './components/Graph/Graph';
import Stats from './components/Stats/Stats';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navlist />
      <Graph />
      <Stats />
      <Calculator />
    </div>
  );
}

export default App;
