import React, { useState } from 'react'
import './style.css';


interface IProps {
  text: string,
}

export const Modal: React.FC<IProps> = ({text}) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
  <button onClick={() => setIsModal(true)}>Включить модалку</button>
    {isModal && (
      <div className='container' onClick={() => setIsModal(false)}>
        <div className='window' onClick={e => e.stopPropagation()}>
          <button onClick={() => setIsModal(false)}>{text}</button>
        </div>
      </div>
    )}
    </>)

}
