import React from 'react'
 

const Header = (props) => {
  const {countCart} = props

  return (
    <header className='card d-flex flex-row justify-content-between px-5 align-items-center ' >
      <div>
        <a  className='text-decoration-none' href="/"> 
        <h1 >Shopping Cart</h1>
        </a>
      </div>

      <div>
        <a  className='px-2 text-decoration-none' href="#/cart"> 
        <i class="fas fa-shopping-cart"></i>{''}
        {countCart? (
          <button className='ms-2 badge rounded-circle'>{countCart}</button>
        ): ('')}
        
        </a>
        <a  className='px-2 text-decoration-none' href="#/signin"> SignIn</a>

      </div>
    </header>
  )
}

export default Header
