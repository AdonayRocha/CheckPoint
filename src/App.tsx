import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ToDoLista from './pages/ToDoLista/ToDoLista'; 
import Perfil from './pages/Perfil/Perfil';
import GlobalStyle from './style/GlobalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nova-lista" element={<ToDoLista />} /> {}
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
