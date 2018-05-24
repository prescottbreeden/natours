// react
import React, { Component } from 'react';

// layouts
import Navigation from './layouts/Navigation.jsx';
import Header from './layouts/Header.jsx';
import Footer from './layouts/Footer.jsx';

// components
import About from './components/About.jsx';
import Book from './components/Book.jsx';
import Features from './components/Features.jsx';
import Popup from './components/Popup.jsx';
import Packages from './components/Packages.jsx';
import Stories from './components/Stories.jsx';

// css
import './static/index.css';

class App extends Component {

closeNav = () => {
    console.log('clicked nav link');
  }


  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
          <main>
            <About />
            <Features />
            <Packages />
            <Stories />
            <Book />
          </main>
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default App;
