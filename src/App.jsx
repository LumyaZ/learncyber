import './App.css';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Agency from './components/Agency/Agency';
import './components/styles/main.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Hero />
        <Agency />
      </main>
    </div>
  );
}

export default App;
