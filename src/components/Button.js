import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Button() {
  const { filters, setData, setColumnArray, planet } = useContext(starWarsContext);
  const { column, value, comparison } = filters.filterByNumericValues[0];

  const array = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  function handleClick() {
    setColumnArray(array.filter((el) => column !== el));
    setData(planet.filter((el) => {
      switch (comparison) {
      case 'maior que':
        return Number(el[column]) > Number(value);
      case 'menor que':
        return Number(el[column]) < Number(value);
      case 'igual a':
        console.log('dentro switch');
        return Number(el[column]) === Number(value);
      default:
        return planet;
      }
    }));
  }

  return (
    <button
      onClick={ handleClick }
      data-testid="button-filter"
      type="button"
    >
      filtrar
    </button>
  );
}
