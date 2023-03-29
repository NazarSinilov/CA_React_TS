import React, {useState} from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
  ]);

  /*const deleteElem = (el: string) => {
    const newArr = arr.filter(name => name !== el);
    setArr(newArr);
  }
  return (
    <ul>
      {arr.map((el : string) => {
        return <li key={el} onClick={() => deleteElem(el)}>{el}</li>
      })}
    </ul>
  );*/

  const deleteElem = (i: number) => {
    const newArr = [...arr];
    newArr.splice(i, 1);
    setArr(newArr);
  }
  return (
    <ul>
      {arr.map((el : string, i: number) => {
        return <li key={el} onClick={() => deleteElem(i)}>{el}</li>
      })}
    </ul>
  );
}

export default App;
