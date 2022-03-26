import Navbar from './components/Navbar';
import Header from './components/Header';
import Statistics from './components/Statistics/index';
import BoostLink from './components/BoostLink';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Statistics />
      <BoostLink />
      <div style={{ marginBottom: ' 1000px' }}></div>
    </div>
  );
}

export default App;
