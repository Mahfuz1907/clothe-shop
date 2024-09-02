// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import Index from './components/index';
import Categories from './components/categories'
import Rating from './components/rating'
import Order from './components/order'
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer'; 

function App() {
  return (
    <Router>
      <div>
      <Header />
      <main style={{ paddingTop: '140px'}}> {/* Adjust based on header and footer height */}
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      </Routes>
      </main>
      <Footer /> {}
    </div>
    </Router>
    
  );
}

export default App;
