import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ThankYou from './pages/ThankYou';
import OrphanageDetail from "./pages/OrphanageDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/orphanages/:id" element={<OrphanageDetail />} />
      

    </Routes>
  );
}

export default App;
