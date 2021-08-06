import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './App/Components/Main/Main';
import ReactNotification from 'react-notifications-component'
import { StoreContext, store } from './App/Stores/Store';
import './Resrouces/Global Css/Main.css'
import 'react-notifications-component/dist/theme.css'
ReactDOM.render(

    <BrowserRouter>
    <StoreContext.Provider value={store}>
    <ReactNotification/>
      <Main/>
    </StoreContext.Provider>
    </BrowserRouter>
,
  document.getElementById('root')
);

