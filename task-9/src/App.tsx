import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const paginationElem = 3;

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      const limitPhoto = response.data;
      limitPhoto.length = 50;
      setPhotos(limitPhoto);
      if (!currentPhotos.length) {
        setCurrentPhotos(limitPhoto.slice(0, paginationElem))
      }
    } catch (e) {
      console.log(e)
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [currentPage]);

  const allPage = Math.ceil(photos.length / paginationElem);
  const pages = [];
  for (let i = 0; i < allPage; i++) {
    pages.push(i + 1);
  }

  const changePage = (numPage: number) => {
    setCurrentPage(numPage);
    const newPhotos = [...photos];
    setCurrentPhotos(newPhotos.slice((numPage - 1) * paginationElem, paginationElem * numPage));
  }

  return (
    <div>
      <ul>
        {currentPhotos.map((photo: {id: string, url: string}) => (
          <li key={photo.id}>
            <img style={{width:'200px', height: '200px'}} src={photo.url} alt='' />
          </li>
        ))}
      </ul>
      {currentPage > 1 && (
        <span onClick={() => changePage(currentPage - 1)}>Prev page</span>
      )}

      {pages.map(el => <span key={el} className={el === (currentPage) ? 'active' : ''} onClick={() => changePage(el)} style={{margin: '0 10px'}}>{el}</span>)}

      {currentPage < allPage && (
        <span onClick={() => changePage(currentPage + 1)}>Next page</span>
      )}

    </div>
  );
};

export default App;