import React from 'react';
import Store from './components/store';
import Navbar from './components/navbar';
import Product from './products/product';
import Finish from './products/finish';
import ProductsContextProvider from './products/productsContext';
import Buttons from './products/buttons';
import { Routes,Route,Navigate } from 'react-router-dom';
import styles from './App.module.css'
function App() {

  return (
    <Buttons>
    <ProductsContextProvider>
      <Navbar/>
      <div className={styles.marg}>
      <Routes>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/products' element={<Store/>}/>
        <Route path='/pay' element={<Finish/>}/>
        <Route path='*' element={<Navigate to='/products' replace/>}/>
      </Routes>
      </div>
    </ProductsContextProvider>
    </Buttons>
  );
}

export default App;

