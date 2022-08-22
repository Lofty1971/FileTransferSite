import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>File Transfer Site</p>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <form>
          <input type="file" id="input"></input>

        </form>
      </header>
      
    </div>
  );
}

export default App;
