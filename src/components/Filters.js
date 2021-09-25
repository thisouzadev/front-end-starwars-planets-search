import React, { useContext, useState } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Filters() {
  const { column, setColumn } = useState('population');
  const { comparison, setComparison } = useState('maior que');
  const { valueInput, setValueInput } = useState(0);
  const { filters, setFilters } = useContext(starWarsContext);
  const { filterByNumericValues } = filters;
  const handleSelect = ({ target: { value } }) => setComparison({
    {comparison: value },
});
  return (
    <div>

      <select
        data-testid="column-filter"
        /* onChange={ (event) => handleSelect(event.target.value) } */
        name="columm"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleSelect }
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <label htmlFor="value-filter">
        <input
          /* onChange={ (event) => handleSelect(event.target.value) } */
          data-testid="value-filter"
          type="number"
          name="value-filter"
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
      >
        filtrar
      </button>
    </div>
  );
}
