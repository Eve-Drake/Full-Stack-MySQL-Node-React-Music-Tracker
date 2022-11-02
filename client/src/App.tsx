import './index.css';
import TaskInput from './components/MusicInfomationInput';
import MusicDisplay from './components/MusicDisplay';

function App() {

  return (
    <div>
     <h1>Music Application</h1>
     <div className='input-display'>
      <section><TaskInput /></section>
      <section><MusicDisplay />    </section>  
     </div>
    </div>
  );
}

export default App;
