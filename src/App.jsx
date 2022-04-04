import Navbar from './components/Navbar';
import Header from './components/Header';
import Statistics from './components/Statistics/index';
import BoostLink from './components/BoostLink';
import Footer from './components/Footer';
import './styles/index.scss';

function App() {
  return (
    <div className="App" role="main">
      <Navbar />
      <Header />
      <Statistics />
      <BoostLink />
      <Footer />
    </div>
  );
}

export default App;
