import { useState } from 'react';
import './App.css';
import { Main } from './components/main/main';
import { Header } from './components/header/header';
import { cartContext } from './context/cart-context.jsx';

function App() {
  const [cart, setCart] = useState([])

  return (
      <cartContext.Provider value={{cart,setCart}}>
        <div>
      {/* <Header cart={cart}></Header>
      <Main cart={cart} setCart={setCart}></Main> */}
      <Header></Header>
      <Main></Main>
        </div>
      </cartContext.Provider>
  )
}

export default App
