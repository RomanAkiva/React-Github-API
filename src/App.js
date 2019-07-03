import React from 'react';
import Repos from './components/Repos';
import './App.css';

//get js repos over 25k stars sorted by most to least order
// https://api.github.com/search/repositories?q=stars:>25000+language:jacasvript&sort=stars&order=desc

const App = () => {
  return (
    <div className="app">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">React Github API - Get Repos</a>
        </div>
      </nav>
      <Repos />
    </div>
  )
}

export default App;
