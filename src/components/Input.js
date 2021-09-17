import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Input() {
  const { handleChange } = useContext(starWarsContext);
  return (
    <form>
      <label htmlFor="filterPlanets">
        filtro por planetas:
        <input
          data-testid="name-filter"
          onChange={ (event) => handleChange(event.target.value) }
          type="text"
          name="filterPlanets"
        />
      </label>
    </form>
  );
}

// referencia: https://www.youtube.com/watch?v=5Tq4-UgPTDs&ab_channel=ViniciusDacal
// ajudou a compriender melhor o uso do useState pra pegar os value pra poder fazer a logica.
