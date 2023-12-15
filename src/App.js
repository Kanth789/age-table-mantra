import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from './components/Navbar';
import Board from './components/Board';
import FormComponent from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Board/>
      <FormComponent/>
    </div>
  );
}

export default App;
