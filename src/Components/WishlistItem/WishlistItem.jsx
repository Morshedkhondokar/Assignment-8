import React, { useContext } from 'react';
import WishlistContext from '../../Context/WishlistContext';
import { IoIosCloseCircle } from "react-icons/io";

const WishlistItem = ({item}) => {
    const {product_name,product_image,description,price} = item;
    const {handleRemovewishlist} = useContext(WishlistContext)

    return (
              <div className='bg-white rounded-2xl p-2 md:p-6 flex justify-between mb-3'>
                  {/* cart img */}
                  <div className='flex gap-3 md:gap-6'>
                      <div className='w-[140px] h-[130px] md:w-[200px] md:h-[180px] flex-shrink-0'>
                          <img className='w-full h-full object-cover rounded-2xl' src={product_image} alt="" />
                      </div>
                      {/* cart title */}
                      <div className='flex flex-col justify-center items-center '>
                      <div className='space-y-2 md:space-y-4'>
                              <h1 className='font-bold text-[14px] md:text-xl'>{product_name}</h1>
                              <p className='text-[#6c6b6f] md:my-2 text-[12px] md:text-[18px] font-medium'>{description}</p>
                              <h5 className='font-semibold text-[13px] md:text-xl'>Price: ${price}</h5>
                          </div>
                      </div>
                  </div>
                      <div>
                          <button
                          onClick={() => handleRemovewishlist(item)}
                          ><IoIosCloseCircle  className="text-2xl md:text-3xl text-red-500 cursor-pointer "/></button>
                      </div>     
              </div>
    );
};

export default WishlistItem;