import React from "react";
import Navigation from './components/Navigation';
import UserAccount from './pages/UserAccount';
import UserAccountLogin from './pages/UserAccountLogin';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';

import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
  

  function App() {
    return (
      <div>
        <div>
        <Router>
         <Routes>
		<Route path ="/" element={<Navigation/>} />
	       <Route path ="/user" element={<UserAccount/>} />
		<Route path ="/login" element={<UserAccountLogin/>} /> 
	       <Route path ="/cart" element={<Cart/>} />
		  <Route path ="/home" element={<Home/>} />
		  <Route path ="/products" element={<Products/>} />
		  
          </Routes>
        </Router>
      </div>
      </div>
    );
  }

export default App;
