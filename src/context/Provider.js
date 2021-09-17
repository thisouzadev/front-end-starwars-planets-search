import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import starWarsContext from './starWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);

  async function getStarWarsAPIData() {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url).then((resp) => resp.json());
    setData(response.results);
  }

  useEffect(() => {
    getStarWarsAPIData();
  }, []);
  console.log(data);

  const obj = {
    data,
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
