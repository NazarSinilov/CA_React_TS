import {createRef} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {createBrowserRouter, Link, RouterProvider, useLocation, useOutlet} from 'react-router-dom';
import {SwitchTransition, CSSTransition} from 'react-transition-group';

interface RoutesI {
  path: string,
  name: string,
  element: JSX.Element,
  nodeRef: any
}

const routes: RoutesI[] = [
  {
    path: "/",
    name: 'Main',
    element: <Home/>,
    nodeRef: createRef(),
  },
  {
    path: "/about",
    name: 'About',
    element: <Contact/>,
    nodeRef: createRef(),
  },
];

const navArr = [
  {
    path: '/',
    text: 'Main'
  },
  {
    path: '/about',
    text: 'About'
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Example/>,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  }
])

function Example() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const {nodeRef} = routes.find((route) => route.path === location.pathname) ?? {}

  return (
    <div>
      {navArr.map(item => {
        return <Link to={item.path} key={item.path} className='item'>{item.text}</Link>
      })}
      <div>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

const container = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(container)
root.render(<RouterProvider router={router}/>)