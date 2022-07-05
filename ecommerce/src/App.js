import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Activate from './containers/auth/Activate';
import Login from './containers/auth/Login';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';
import Signup from './containers/auth/Signup';
import Error404 from './containers/Error404';
import Home from './containers/Home';
import ProductDetail from './containers/pages/ProductDetail';
import Shop from './containers/Shop';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />}/>
          <Route path="/" element={<Home />}/>
          {/*Autenticacion */}
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/activate/:uid/:token" element={<Activate />}/>
          <Route path="/reset_password" element={<ResetPassword />}/>
          <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/product/:productId" element={<ProductDetail />}/>
        </Routes>
      </BrowserRouter>
      
    </Provider>
    
  );
}

export default App;
