import React, {useState} from 'react';
import PicComponent from './PicComponent/PicComponent';

const DayThreeComp = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

  function picChooser(){
    return (text.length + text2.length) % 2 === 0 
    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLk2hFB9gfRYy9WyrKyHjGTCLFNIPDQNS_w1L6U5Tp2oKzxbUZyw"
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQAj1syNbXBeGLF0jBNBlNq58cZks95snX6ClzBUjknmMAOpk"
  }

  return(
    <>
      <p>Day Three Comp below</p>
      <PicComponent img={picChooser()}/><br/>
      <input value={text} onChange={e => setText(e.target.value)}/><br/>
      <input value={text2} onChange={e => setText2(e.target.value)}/>
      <h1>{text.length > text2.length ? text : text2}</h1>
    </>
  )
}

export default DayThreeComp;