import React , {Profiler} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Profiler id='app' onRender={(id, phase, actualDuration) => {
      console.log('actualDuration:', actualDuration);
    }}>
      <App />
    </Profiler>

  </React.StrictMode>
);


