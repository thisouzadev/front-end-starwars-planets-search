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
      { column: '',
        comparison: '',
        value: 0,
      },
    ],
    order: { column: 'Name', sort: 'ASC' },
  });

  async function getStarWarsAPIData() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    setData(response.results);
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
    setData,
    setFilters,
    filters,
    data,
    handleChange,
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
