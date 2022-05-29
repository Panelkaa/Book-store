import React, { PureComponent } from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Order from './components/Order';
import Main from './components/Main';
import { Route, Routes } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <main className="app__main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/order" element={<Order />} />
        </Routes>
          </main>
      </div>
    );
  }
}

export default App;
