import './App.css';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import Agency from './components/Agency/Agency';
import './components/styles/main.scss';
import Modules from './components/Modules/Modules';
import History from './components/History/History';
import Team from './components/Team/Team';
import Process from './components/Process/Process';
import Testimonials from './components/Testimonials/Testimonials';
import WorkWithUs from './components/WorkWithUs/WorkWithUs';
import Realisations from './components/Realisations/Realisations';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Hero />
        <Agency />
        <Modules />
        <Testimonials />
        <History />
        <Team />
        <WorkWithUs />
        <Process />
        <Realisations />
        <Contact/>
        <Footer />
      </main>
    </div>
  );
}

export default App;
