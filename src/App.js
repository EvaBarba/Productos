import { useEffect, useState } from 'react';
import Header from "./Header";
import SearchPage from './SearchPage';
import PagProduct from './PagProduct';
import NoMatch from './NoMatch';
import CONFIG from "./config/config";
import {mockdata} from "./constants/products.js";
import { Route, Routes, Link } from "react-router-dom";

import './App.css';

import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';




const USE_SERVER = CONFIG.use_server;

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState();


  const download = async () => {
    
    let downloadedProducts
    
    if(USE_SERVER){
      try {
        const res = await fetch(CONFIG.server_url);
        downloadedProducts = await res.json();
  
      } catch (e) {
        alert("No se ha podido recuperar la información.");
      } setProducts(downloadedProducts.products);
  
      } else {
        setProducts(mockdata.products)
    }
  }
  
  
  useEffect(() => {
    async function fetchData() {
      await download();
  
      setTimeout(()=>{
        setIsLoading(false);
      },CONFIG.loading_timeout_ms);
    }
  
    fetchData();
  }, []);


  return (
    <div className="App">

      <Header />     

      {isLoading ? <Spinner animation="border" variant="secondary" id="loading" className="spinner" /> :

        <Routes>
          <Route path="/" element={products && <SearchPage numProducts={CONFIG.num_items} theproducts={products} />} />
          <Route path="/products/:productId" element={<PagProduct productos={products} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      }

    </div>
  );
}

export default App;
