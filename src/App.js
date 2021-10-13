import './App.css';
import Home from './components/Home';
import User from './User';
import HomeContainer from '../src/containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <User data={{name : 'Sudhakar Pandey', age: 23}} /> */}
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
