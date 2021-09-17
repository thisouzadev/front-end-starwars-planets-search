import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import starWarsContext from './starWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  console.log(data);
  const [filterInput, setfilterInput] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  async function getStarWarsAPIData() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    setData(response.results);
  }

  function handleChange(string) {
    setfilterInput({ filters: {
      filterByName: {
        name: string,
      },
    },
    });
  }

  useEffect(() => {
    getStarWarsAPIData();
  }, []);

  const obj = {
    filterInput,
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
