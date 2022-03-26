import Navbar from './components/Navbar';
import Header from './components/Header';
import Statistics from './components/Statistics/index';
import './styles/index.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Statistics />
    </div>
  );
}

export default App;
