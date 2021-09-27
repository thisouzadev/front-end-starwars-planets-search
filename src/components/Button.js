import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Button() {
  const { filters, setData, data } = useContext(starWarsContext);
  const { column, value, comparison } = filters.filterByNumericValues[0];
  function handleClick() {
    setData(data.filter((el) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(el[column], 10) > parseInt(value, 10);
      case 'menor que':
        return parseInt(el[column], 10) < parseInt(value, 10);
      case 'igual a':
        return parseInt(el[column], 10) === parseInt(value, 10);
      default:
        return data;
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
