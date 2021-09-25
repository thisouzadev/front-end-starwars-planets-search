import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Columm() {
  const { filters, setFilters } = useContext(starWarsContext);
  const { filterByNumericValues } = filters;

  const handleSelect = (value) => setFilters({
    ...filters,
    filterByNumericValues: [{ ...filterByNumericValues[0], column: value }],
  });

  return (
    <select
      data-testid="column-filter"
      onChange={ (event) => handleSelect(event.target.value) }
      name="columm"
    >
      <option value="population">population</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="rotation_period">rotation_period</option>
      <option value="surface_water">surface_water</option>
    </select>
  );
}
