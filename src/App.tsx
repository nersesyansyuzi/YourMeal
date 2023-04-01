import React from 'react';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import Meal from './components/Meal';



function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <Meal/>
      <Footer/>
    </div>
  );
}

export default App;
