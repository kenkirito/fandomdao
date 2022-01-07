import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroContainer from './components/HeroContainer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App bg-bgcolor min-h-screen text-pinktext'>
      <Header/>
      <HeroContainer/>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
