import './App.css';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import Home from './pages/home/Home';
import Event from './pages/events/Event';
import EventDetail from './pages/events/EventDetail';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Gallery from './pages/gallery/Gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/events">
          <Route path="" element={<Event />} />
          <Route path=":id" element={<EventDetail />} />
        </Route>  
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />



        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
