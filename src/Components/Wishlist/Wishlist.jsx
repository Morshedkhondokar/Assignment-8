import React, { useContext } from 'react';
import { FaParachuteBox } from 'react-icons/fa6';
import WishlistContext from '../../Context/WishlistContext';
import WishlistItem from '../WishlistItem/WishlistItem';

const Wishlist = () => {
    const {wishlist} = useContext(WishlistContext)
    return (
        <div className='my-5 px-2'>
           <div className='flex justify-between'>
            <h1 className='text-2xl font-bold'>Wishlist</h1>
           </div>
           {/* cart item  */}
          {
            wishlist.length !== 0 ?  
            <div className='mt-8 mb-16'>
                {
                    wishlist.map((item, index) => <WishlistItem key={index} item={item}></WishlistItem> )
                }
           </div> 
           : <div className="flex flex-col items-center justify-center w-[400px] md:w-[700px] mx-auto 
                    lg:w-6xl h-96  bg-white rounded-2xl shadow-lg my-6">
                 {/* Empty Icon */}               
                   <FaParachuteBox className='text-8xl text-gray-500' />
                 {/* Message */}
                 <h2 className="text-xl font-semibold text-gray-700 mt-5">Your Wishlist is empty!!</h2>
               </div> 
          }
        </div>
    );
};

export default Wishlist;