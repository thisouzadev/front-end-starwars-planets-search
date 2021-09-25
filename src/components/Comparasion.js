import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Comparasion() {
  const { filters, setFilters } = useContext(starWarsContext);
  const { filterByNumericValues } = filters;
  const handleSelect = ({ target: { value } }) => setFilters({
    ...filters,
    filterByNumericValues: [{ ...filterByNumericValues[0], comparison: value }],
  });

  return (
    <select
      data-testid="comparison-filter"
      onChange={ handleSelect }
      name="comparison"
    >
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );
}
