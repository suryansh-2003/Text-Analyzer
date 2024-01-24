import './App.css';
import InputText from './Components/InputText';

const toggle = () => { 
  let darkMode = document.querySelector('.dark-mode');
  let modeToggle = document.querySelector('.mode-toggle');
  darkMode.classList.toggle('active');
  modeToggle.classList.toggle('active');
}


function App() {
  return (
    <div className="App-header">
      <div className='main'>

      <div onClick={toggle} className='mode-toggle'></div>
      <div className='container'>
        <div className='dark-mode'></div>
      </div>
      </div>
      <h1 style={{color: "#cfd0ff"}}>Text Analyzer</h1>
      <InputText />
    </div>

  );
}

export default App;
