import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PokemonList from './pages/Pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';


const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <nav>
        <div className='nav-wrapper teal'>
          <Link to='/' className='brand-logo center'>
            Pokédex
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<PokemonList />} />
          <Route path='/pokemons' element={<PokemonList />} />
          <Route path='/pokemons/add' element={<PokemonAdd />} />
          <Route path='/pokemons/edit/:id' element={<PokemonEdit />} />
          <Route path='/pokemons/:id' element={<PokemonsDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


