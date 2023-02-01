import React, { FunctionComponent, useState, useEffect } from 'react';

import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';
import { useParams } from 'react-router-dom';
import Loader from '../components/loader';

const PokemonEdit: FunctionComponent = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null); // dire à typescript que soit la valeur est un pokémon ou elle est nulle

  useEffect(() => {
    if (id !== undefined)
      PokemonService.getPokemon(+id).then((pokemon) => {
        setPokemon(pokemon);
      });
  }, [id]);
  return (
    <div>
      {pokemon ? (
        <div className='row'>
          <h2 className='header center'>Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className='center'>
          <Loader />
        </h4>
      )}
    </div>
  );
};

export default PokemonEdit;
