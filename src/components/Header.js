import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Summa: {new Intl.NumberFormat().format(summa)}$</p>
  </div>)
}

const showNothing = () => {
  return (<div className='empty'>
    <h2>Produse nu sunt</h2>
  </div>)
}
 
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
        <div>
            <span className='logo'>Noua Zeelanda.</span>
            <ul className='nav'>
              {/* <li a href="https://ro.wikipedia.org/wiki/Noua_Zeeland%C4%83">Despre Noua Zeelanda</li> */}
              <a href="https://ro.wikipedia.org/wiki/Noua_Zeeland%C4%83" className='link'>Despre Noua Zeelanda:</a>
              {/* <a href="">Contacte</a> */}
              <a href="https://vinimondo.ro/vinuri-noua-zeeland%C4%83" className='link'>Cabinet:</a>
              {/* <li>Contacte</li> */}
              {/* <li>Cabinet</li> */}
              <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'} `} />

              {cartOpen && (
                <div className='shop-cart'>
                  {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
                </div>
              )}
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
