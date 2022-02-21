import React from 'react';
import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import { CharacterList } from './components/CharactersList/CaractersList';
import './App.css';
import { GetAllCharacters } from './api/queries';




export const App = () => {

  return(
    <div>
      <Header />
      <Search />
      <CharacterList />
 
    </div>
  );
};



