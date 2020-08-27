import React from 'react';

const CartItem = (props) => {
     const { name, price } = props.cart;
    const cart = props.cart;
    console.log(props);

    return (
        // Chackout Option :
        <div>
         <li className="list-group-item d-flex my-2 shadow justify-content-between">
         <span>{name}</span> <span> ${price}</span>
      </li> 
    {/* <h2>Order Summary</h2>
    <p>Item Orders: {cart.length}</p> */}
   
   </div> 
   ); 
}

export default CartItem;