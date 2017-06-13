import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Today_menu from './components/Today_menu';
import Today_recepies from './components/Today_recepies';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';
import 'font-awesome/css/font-awesome.css';


class App extends Component {
  render() {
    return (
      <div>
       <Navbar /> 
       <Jumbotron /> 
       <Today_menu />
       <Newsletter />
       <Today_recepies />
       <Footer />
      </div>
    );
  }
}

export default App;
