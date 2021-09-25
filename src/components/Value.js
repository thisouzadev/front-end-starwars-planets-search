import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Value() {
  const { filters, setFilters } = useContext(starWarsContext);
  const { filterByNumericValues } = filters;

  const handleSelect = (value) => setFilters({
    ...filters,
    filterByNumericValues: [{ ...filterByNumericValues[0], value }],
  });
  return (
    <label htmlFor="value-filter">
      <input
        onChange={ (event) => handleSelect(event.target.value) }
        data-testid="value-filter"
        type="number"
        name="value-filter"
      />
    </label>
  );
}
