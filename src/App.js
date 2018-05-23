// react
import React, { Component } from 'react';

// layouts
import Header from './layouts/Header.jsx';

// components
import About from './components/About.jsx';
import Features from './components/Features.jsx';
import Packages from './components/Packages.jsx';
import Stories from './components/Stories.jsx';
import Book from './components/book.jsx';

// css
import './static/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <About />
          <Features />
          <Packages />
          <Stories />
          <Book />
        </main>
      </div>
    );
  }
}

export default App;
