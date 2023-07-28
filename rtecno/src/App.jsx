import React from 'react';
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from './components/Pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
       <Routes>  
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/products' element={<ItemListContainer/>}/>
         <Route path="/products/:productId" component={ItemListContainer} />
       </Routes>
       <Footer></Footer>
   </BrowserRouter>  
  );
}

export default App;