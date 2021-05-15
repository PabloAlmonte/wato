import React from 'react';
import './assets/css/App.css';
import { HeaderComponent } from './components/header.component';
import { NavigationComponent } from './components/tabs.component';
import { HomePage } from './pages/home/home.page';

function App() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <HomePage />
      <NavigationComponent />
    </React.Fragment>
  );
}

export default App;
