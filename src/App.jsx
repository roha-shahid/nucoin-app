import Footer from './assets/components/Footer';
import Header from './assets/components/Header'
import Rank from './assets/components/Rank';
import './assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Roadmap from './assets/components/Roadmap';
import PieChart from './assets/components/PieChart';
import Versions from './assets/components/Versions';

function App() {

  return (
    <>
     <Header />
     <Rank />
     <Roadmap />
     <PieChart />
     <Versions />
     <Footer />
    </>
  )
}

export default App
