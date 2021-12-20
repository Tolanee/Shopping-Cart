import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Display from './components/Display';
import Header from './components/Header';
import Cart from './components/Cart';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
 const [items, setItems] = useState([])
 const [cartItems, setCartItems]= useState([])



  const getProducts= (items)=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then((res) =>{
      if(res.data){
        setItems(res.data)
      }
      
      
    })
  };
  useEffect(() => {
    if(items){
      getProducts(items)
    }
    
  }, );

  const onAdd =(item)=>{
    const exist = cartItems.find(x => x.id === item.id);
    if(exist){
      setCartItems(cartItems.map(x => x.id === item.id ? {...exist, qty: exist.qty + 1}: x))
    }else{
      setCartItems([...cartItems, {...item, qty: 1}])
    }
    };

    const onRemove =(item)=>{
      const exist = cartItems.find(x => x.id === item.id);
      if(exist.qty === 1){
        setCartItems(cartItems.filter(x => x.id !== item.id ))
      }else{

        setCartItems(cartItems.map(x => x.id === item.id ? {...exist, qty: exist.qty - 1}: x))
      }
    }

  return (
    <div className="App">
      <Header countCart={cartItems.length}/>
      <div className=' d-flex my-3 px-3'>
        <Display onAdd={onAdd} items={items}/>
        <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div>
    </div>
  
  );
}

export default App;
