import React, {useState, useEffect} from 'react';

import Pie from './Pie/Pie';
import './Pies.css';

const Pies = () => {
  const [pies, setPies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pies')
      .then(res => res.json())
      .then(json => {
        let colNames = {
          nameOfPie: 'Name of Pie',
          baseOfPie: 'Base of Pie',
          crust: 'Crust',
          timeToBake: 'Time to Bake',
          servings: 'Servings',
          rating: 'Rating'
        }
        setPies([].concat(colNames).concat(json))
      });
  }, [])

  let pieRows = () => {
    return pies.map(pie => {
      return(
        <Pie key={pie.nameOfPie} pie={pie} />
      )
    })
  }

  return(
    <table>
      <tbody>
        {pieRows()}
      </tbody>
    </table>
  )
}

export default Pies;