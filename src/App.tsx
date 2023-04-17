import React from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default App;
