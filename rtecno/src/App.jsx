import React from 'react';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Home from './components/Pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
       <Routes>  
         <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<ItemListContainer/>}/>
         <Route path='/products/:productId' element={<ItemListContainer/>} />
         <Route path='/product/:productId' element={<ItemDetailContainer/>} />
       </Routes>
       <Footer/>
   </BrowserRouter>  
  );
}

export default App;