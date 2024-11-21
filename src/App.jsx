import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Cart from './pages/Cart'

const App = () => {
const [cartArr, setcartArr] =useState([]);
  console.log(cartArr)
function xyz(ans){
  console.log(ans);

  let find = cartArr.find((ele)=>ele.id === ans.id);
  if(find){
    return alert('aleardy added in cart')
  }else{
    ans.quantity = 1
    let copyCarr = [...cartArr,ans]
    setcartArr(copyCarr);
  }

  
}


  return (
    <>
     <BrowserRouter>
    <div className='mb-[65px]'>
    <Navbar cartArr = {cartArr}/>
    </div>
     <Routes>
      <Route path='/' element={<Home xyz = {xyz}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart cartArr={cartArr} setcartArr={setcartArr}/>}/>
      <Route path='/login' element={<Login/>} component={() => <h1>Login Page</h1>}/>
      <Route path='/signup' element={<Signup/>} component={Signup}/>
      
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
