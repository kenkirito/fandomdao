import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroContainer from './components/HeroContainer';
import Sidebar from './components/Sidebar';
import Fan from './components/Fan';

function App() {
  return (
    <div className='App bg-bgcolor max-w-screen overflow-hidden min-h-screen text-pinktext'>
      <Header/>
      <HeroContainer/>
      <Fan/>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
