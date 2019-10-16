import React, {useState, useEffect} from 'react';

const styles = {
  'width': '150px',
  'border': '2px solid black'
}

const Card = () => {
  const [pic, setPic] = useState('');

  useEffect(() => {
    fetch('https://random.dog/woof.json')
      .then(res => res.json())
      .then(json => setPic(json.url))
  }, [])

  return(
    <img alt="dog pic" src={pic} style={styles}/>
  )
}

export default Card;