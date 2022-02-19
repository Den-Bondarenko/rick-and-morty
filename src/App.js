import React from 'react';
import {Header} from './components/Header/Header';
import { CharacterList } from './components/CharactersList/CaractersList';
import './App.css';


export const App = () => {

  return(
    <div>
      <Header />
      <CharacterList />
    </div>
  );
};



