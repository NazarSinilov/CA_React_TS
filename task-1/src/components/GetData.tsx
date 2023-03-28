import React, { FC, useEffect, useState } from 'react';
import {WithLoadingIndicator} from './WithLoadingIndicator';

interface Props {

}

const fetchData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}

const GetData: FC<Props> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setData(res));
  }, []);

  return (
    <div>
         <ul>
           {data.map((item : {id: string, title: string}) => (
             <li key={item.id}>{item.title}</li>
           ))}
         </ul>
    </div>
  );
};


export default WithLoadingIndicator(GetData, fetchData);