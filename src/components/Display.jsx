import React from 'react'

const Display = (props, key) => {
const {onAdd} = props;

  return (
    <main className='container card col-8 '>
      <h3>Products</h3>
      <div className='d-flex flex-column'>


    { props.items.map((item, index)=>(
     
      <div className='display  my-2 card d-flex flex-md-row py-2 flex-sm-column' >

        <img className='img ' src={item.image} alt="" />
        
        <div className='info mx-3'>
        <p className='name fw-bold '>{item.title} </p>
        <p className='fw-bold'>Price: ${item.price} </p>
        <p> <span className='fw-bold'>Description:</span> {item.description}</p>

        <button  onClick={()=>onAdd(item)} type='submit' className='bg-dark text-light'>Add to cart</button>
        </div>
        
      </div>
      
    ))}
      </div>
    </main>
  )
}

export default Display
