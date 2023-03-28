import React, { FC, useEffect, useState } from 'react';
import {WithLoadingIndicator} from './WithLoadingIndicator';

interface Props {

}

const GetData: FC<Props> = () => {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = res.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    setIsLoad(true);
    fetchData().then((res) => {
      setData(res)
      setIsLoad(false);
    });
  }, []);

  if (isLoad) {
    return <WithLoadingIndicator />
  }
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


export default GetData;