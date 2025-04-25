import Footer from './assets/components/Footer';
import Header from './assets/components/Header'
import Rank from './assets/components/Rank';
import './assets/styles/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Roadmap from './assets/components/Roadmap';
import PieChart from './assets/components/PieChart';
import Versions from './assets/components/Versions';
import Features from './assets/components/Features';
import Services from './assets/components/Services';
import Video from './assets/components/Video';

function App() {
  return (
    <>
     <Header />
     <Rank />
     <Roadmap />
     <Video />
     <PieChart />
     <Services />
     <Versions />
     <Features/>
     <Footer />
    </>
  )
}

export default App
