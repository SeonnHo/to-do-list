import './App.css';
import Card from './components/Card';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <Card />
    </DarkModeProvider>
  );
}

export default App;
