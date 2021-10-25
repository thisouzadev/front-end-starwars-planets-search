import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import starWarsContext from './starWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      { column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
    order: { column: 'Name', sort: 'ASC' },
  });
  const [planet, setPlanet] = useState([]);

  const [columnArray, setColumnArray] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  console.log(data);
  async function getStarWarsAPIData() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    setData(response.results);
    setPlanet(response.results);
  }

  function handleChange(string) {
    setFilters({
      ...filters,
      filterByName: {
        name: string,
      },
    });
  }

  useEffect(() => {
    getStarWarsAPIData();
  }, []);

  const obj = {
    planet,
    columnArray,
    setData,
    setFilters,
    filters,
    data,
    handleChange,
    setColumnArray,
  };

  return (
    <starWarsContext.Provider value={ obj }>
      {children}
    </starWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
