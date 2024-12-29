import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from "./pages/[ProductPage]"; // Correct path for ProductPage
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* Pass the id dynamically */}
      </Routes>
    </Router>
  );
};

export default App;
