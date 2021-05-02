import React from 'react';
import { Header } from './components/Header/Header'
import { CardList } from './components/Card/CardList'

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header/>
      <CardList/>
    </div>
  );
}

export default App;
