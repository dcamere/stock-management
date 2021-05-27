import logo from './logo.svg';
import './App.css';
import Spinner from './Spinner.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Spinner min={0} max={10} currentValue={5}></Spinner>
      </header>
    </div>
  );
}

export default App;
