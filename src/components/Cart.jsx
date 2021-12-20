import React from 'react'

const Cart = (props) => {
const {cartItems, onAdd, onRemove} = props;
const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
const taxPrice = itemsPrice * 0.14;
const shippingPrice = itemsPrice > 100? 0: 10;
const totalPrice = itemsPrice + taxPrice + shippingPrice
  return (
    <aside className='container card mx-2 col-4 '>
      <h3>Cart Items</h3>
      <div>
        {cartItems.length === 0 && <div>Cart is Empty</div>}

        {cartItems.map((cartItem) => (
          <div key={cartItem.id} className='d-flex flex-column my-2'>
            <div>{cartItem.title}</div>
            <div className='d-flex flex-row'>
              <button onClick={()=>onAdd(cartItem)} className='add btn btn-primary px-2 '>Add</button>
              <button onClick={()=>onRemove(cartItem)} className='add btn  btn-danger px-2 mx-2'>Remove</button>

            </div>

            <div>
              {cartItem.qty} x ${cartItem.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {cartItems.length !== 0 &&(
        <>
        <hr></hr>
        <div className="d-flex flex-row justify-content-around">
          <h6 >Items Price: </h6>
          <div> ${itemsPrice.toFixed(2)} </div>
        </div>

        <div className="d-flex flex-row justify-content-around">
          <h6>Tax Price: </h6>
          <div> ${taxPrice.toFixed(2)} </div>
        </div>

        <div className="d-flex flex-row justify-content-around">
          <h6>Shipping Price: </h6>
          <div> ${shippingPrice.toFixed(2)} </div>
        </div>

        <div className="d-flex flex-row justify-content-around">
          <h6>Total Price: </h6>
          <div> ${totalPrice.toFixed(2)} </div>
        </div>

        <button className='btn btn-primary' onClick={()=>alert('Checkout Implemented')}> Checkout</button>
        </>
      )}
    </aside>
  )
}

export default Cart
