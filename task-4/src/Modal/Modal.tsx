import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './style.css';


interface IProps {
  text: string,
}

export const Modal: React.FC<IProps> = ({ text }) => {
  const [isModal, setIsModal] = useState(false);

  const portalContainer = document.createElement('div');
  document.body.appendChild(portalContainer);

  const content = (
    <>
      <button onClick={() => setIsModal(true)}>Включить модалку</button>
      {isModal && (
        <div className='container' onClick={() => setIsModal(false)}>
          <div className='window' onClick={e => e.stopPropagation()}>
            <button onClick={() => setIsModal(false)}>{text}</button>
          </div>
        </div>
      )}
    </>);
  return ReactDOM.createPortal(
    content,
    portalContainer,
  );
}

