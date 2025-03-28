import './App.css';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Agency from './components/Agency/Agency';
import './components/styles/main.scss';
import Modules from './components/Modules/Modules';
function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Hero />
        <Agency />
        <Modules />
      </main>
    </div>
  );
}

export default App;
