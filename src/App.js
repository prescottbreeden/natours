import React, { Component } from 'react';
import Header from './header/Header';
import About from './about/About';
import Features from './features/Features';
import Packages from './packages/Packages';
import Stories from './stories/Stories';
import './index.css';

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
        </main>
      </div>
    );
  }
}

export default App;
