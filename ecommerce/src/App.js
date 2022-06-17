import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from './containers/Error404';
import Home from './containers/Home';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      
    </Provider>
    
  );
}

export default App;
