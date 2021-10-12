import './App.css';
import Home from './components/Home';
import User from './User';
import HomeContainer from '../src/containers/HomeContainer'

function App() {
  return (
    <div className="App">
      {/* <User data={{name : 'Sudhakar Pandey', age: 23}} /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
