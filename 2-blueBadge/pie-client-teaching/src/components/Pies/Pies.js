import React, {useState, useEffect} from 'react';
import APIURL from '../../helpers/environment';

import Pie from './Pie/Pie';
import './Pies.css';

// const hardCodedPies = [
//   {
//     nameOfPie: 'pumpkin',
//     baseOfPie: 'pumpkin puree',
//     crust: 'pastry',
//     timeToBake: 50,
//     servings: 8,
//     rating: 4.2
//   }, 
//   {
//     nameOfPie: 'apple',
//     baseOfPie: 'jam',
//     crust: 'graham cracker',
//     timeToBake: 30,
//     servings: 6,
//     rating: 4.0
//   }, 
//   {
//     nameOfPie: 'rhoubarb',
//     baseOfPie: 'jam filling',
//     crust: 'pastry',
//     timeToBake: 45,
//     servings: 8,
//     rating: 4.5
//   }
// ]

const Pies = (props) => {
  const [pies, setPies] = useState([]);

  const pieRows = () => {
    const pieColumns = {
      nameOfPie: 'Pie Name',
      baseOfPie: 'Pie Base',
      crust: 'Pie Crust',
      timeToBake: 'Bake Time',
      servings: 'Servings',
      rating: 'Rating'
    }
  return [<Pie key={'column names'} pie={pieColumns} />].concat(
    pies.map((pieInfo, index) => 
      {
        return <Pie key={index} pie={pieInfo} />
      }
    ))
  }

  /*
    [
      <Pie key={'column names'} pie={pieColumns} />,
      <Pie key={'column names'} pie={pieInfo} />,
      <Pie key={'column names'} pie={pieInfo} />,
      <Pie key={'column names'} pie={pieInfo} />
    ]
  */

  useEffect(() => {
    fetch(`${APIURL}/pie`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token
      }
    })
      .then(res => res.json())
      .then(json => setPies(json))
      .catch(err => console.log(err))
  }, [])

  return (
    <table>
      <tbody>
        {pieRows()}
      </tbody>
    </table>
  )
}

export default Pies;