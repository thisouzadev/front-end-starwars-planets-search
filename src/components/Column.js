import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';

export default function Columm() {
  const { filters, setFilters } = useContext(starWarsContext);
  const { filterByNumericValues } = filters;

  const handleSelect = (value) => setFilters({
    ...filters,
    filterByNumericValues: [{ ...filterByNumericValues[0], column: value }],
  });

  const removeUsedOptions = () => {
    const options = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    return options.map((option) => {
      if (filterByNumericValues[0].column !== option) {
        return (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        );
      }
      return null;
    });
  };

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
