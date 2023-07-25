import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/CSS/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider} from 'react-router-dom';
import Routes from './Routes/main'
import { ContextProvider } from './Hooks/MyContext'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ContextProvider>    
      <RouterProvider router={Routes}></RouterProvider>
    </ContextProvider>
  
);


//reportWebVitals();
