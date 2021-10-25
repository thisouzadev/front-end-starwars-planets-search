import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Columm() {
  const { filters, setFilters, columnArray } = useContext(starWarsContext);
  const { filterByNumericValues } = filters;

  const handleSelect = (value) => setFilters({
    ...filters,
    filterByNumericValues: [{ ...filterByNumericValues[0], column: value }],
  });

  const removeUsedOptions = () => columnArray.map((option) => (
    <option
      key={ option }
      value={ option }
    >
      { option }
    </option>
  ));

  return (
    <select
      data-testid="column-filter"
      onChange={ (event) => handleSelect(event.target.value) }
      name="columm"
    >
      { removeUsedOptions() }
    </select>
  );
}
