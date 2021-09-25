import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';
import Input from './Input';

export default function Table() {
  const { data, filters, setData } = useContext(starWarsContext);
  const { column, value, comparison } = filters.filterByNumericValues[0];
  function handleclick() {
    setData(data.filter((el) => {
      switch (comparison) {
      case 'maior que':
        console.log(el[column]);
        return parseInt(el[column], 10) > parseInt(value, 10);
      case 'menor que':
        return parseInt(el[column], 10) < parseInt(value, 10);
      case 'igual a':
        return parseInt(el[column], 10) === parseInt(value, 10);
      default:
        return data;
      }
    }));
  }

  const filterPlanetName = () => data.filter((el) => (
    el.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
  ));
  data.forEach((planet) => delete planet.residents);
  if (data.length > 0) {
    return (
      <div>
        <Input />
        <button
          onClick={ handleclick }
          data-testid="button-filter"
          type="button"
        >
          filtrar
        </button>
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((title, index) => (
                <th key={ index }>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              filterPlanetName()
                .map((planet, index) => (
                  <tr key={ index }>
                    {
                      Object.values(planet).map((info, index2) => (
                        <td key={ index2 }>
                          {info}
                        </td>
                      ))
                    }
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
}
