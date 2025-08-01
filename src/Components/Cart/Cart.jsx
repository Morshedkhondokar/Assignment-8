import React, { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import { FaParachuteBox } from 'react-icons/fa6';

const Cart = () => {
    const {cart,totalPrice} = useContext(CartContext);
    return (
        <div className='my-5 px-2'>
           <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>Cart</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                <h2 className='text-xl font-semibold'>Total Cost: ${totalPrice}</h2>
                <div>
                    <button className='btn rounded-3xl border-purple-600 text-purple-600 mr-3'>sort by price</button>
                    <button className='btn rounded-3xl text-white bg-purple-600'>Purchase</button>
                </div>
            </div>
           </div>
           {/* cart item  */}
          {
            cart.length !== 0 ?  
            <div className='mt-8 mb-16'>
                {
                    cart.map((item, index) => <CartItem key={index} item={item}></CartItem> )
                }
           </div> 
           : <div className="flex flex-col items-center justify-center w-[400px] md:w-[700px] mx-auto lg:w-[948px] h-96
                      bg-white rounded-2xl shadow-lg my-6">
                 {/* Empty Icon */}               
                   <FaParachuteBox className='text-8xl text-gray-500' />
                 {/* Message */}
                 <h2 className="text-xl font-semibold text-gray-700 mt-5">Your Cart is empty</h2>
               </div> 
          }
        </div>
    );
};

export default Cart;