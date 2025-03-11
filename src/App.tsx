import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import Header from './layouts/Header';
import Footer from './layouts/Footer';


function App() {
  return (
    <div className="App">
     <div className='flex'>
      <Header />
     <HomePage />
     <Footer />
     </div>
    </div>
  );
}

export default App;
