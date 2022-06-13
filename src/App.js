import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';
import Menu from './Components/Menu/menu';

function App() {
  return (
    <div className="App">
      <h1>Amoba solution</h1>
        <Menu/>
        <GameBoard/>
      
      <h2>New game + Game status</h2>
      <h2>Game Board</h2>
      <ul>
        <li>Játékmezők (20 x 20)</li>
        <li>Jétkos jele</li>
        <li>Győztes</li>
      </ul>
    </div>
  );
}

export default App;
