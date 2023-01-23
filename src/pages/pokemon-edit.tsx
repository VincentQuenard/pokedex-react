import React, { FunctionComponent, useState, useEffect } from 'react';

import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import { useParams} from 'react-router-dom';



const PokemonEdit: FunctionComponent = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null); // dire à typescript que soit la valeur est un pokémon ou elle est nulle

  useEffect(() => {
    POKEMONS.forEach((pokemon) => {
      if (id === pokemon.id.toString()) {
        setPokemon(pokemon);
      }
    });
  }, [id]);
  return (
    <div>
      {pokemon ? (
        <div className='row'>
          <h2 className='header center'>Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon}></PokemonForm>
        </div>
      ) : (
        <h4 className='center'>Aucun pokémon à afficher !</h4>
      )}
    </div>
  );
};

export default PokemonEdit;
