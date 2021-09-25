import React, { useContext } from 'react';
import starWarsContext from '../context/starWarsContext';
import Input from './Input';

export default function Table() {
  const { data, filters } = useContext(starWarsContext);

  const filterPlanetName = () => data.filter((el) => (
    el.name.toLowerCase().includes(filters.filterByName.name.toLowerCase())
  ));
  data.forEach((planet) => delete planet.residents);
  if (data.length > 0) {
    return (
      <div>
        <Input />
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
