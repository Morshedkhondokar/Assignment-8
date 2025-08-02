import React, { useContext } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
import CartContext from '../../Context/CartContext';

const CartItem = ({item}) => {
    const { quantityIncreased, quantityDecreased,handleRemoveCart} = useContext(CartContext)
    const {product_name,product_image,description,price,quantity} = item;
    return (
        <div className='bg-white rounded-2xl p-2 md:p-6 flex justify-between mb-3'>
            {/* cart img */}
            <div className='flex gap-3 md:gap-6'>
                <div className='w-[140px] h-[130px] md:w-[200px] md:h-[180px] flex-shrink-0'>
                    <img className='w-full h-full object-cover rounded-2xl' src={product_image} alt="" />
                </div>
                {/* cart title */}
                <div className='flex flex-col justify-center  md:justify-start'>
                <div className='space-y-2 md:space-y-4'>
                        <h1 className='font-bold text-[14px] md:text-xl'>{product_name}</h1>
                        <p className='text-[#6c6b6f] md:my-2 text-[12px] md:text-[18px] font-medium'>{description}</p>
                        <h5 className='font-semibold text-[13px] md:text-xl'>Price: ${price}</h5>
                    </div>
                   {/* Quantity Selector */}
                    <div className="bg-white h-10 rounded-2xl p-2 flex gap-2 w-fit shadow-lg mt-3">
                        <button 
                            onClick={() => quantityDecreased(item)}
                           
                            className="bg-purple-500 text-white size-7 rounded-full flex items-center justify-center text-lg font-bold 
                            hover:bg-purple-600 transition cursor-pointer"
                            > -
                        </button>
                        <p className="font-semibold text-gray-800 text-lg w-6 text-center">{quantity}</p>
                        <button 
                             onClick={() => quantityIncreased(item)}
                            className="bg-purple-500 text-white size-7 rounded-full flex items-center justify-center text-lg font-bold  hover:bg-purple-600 transition 
                            cursor-pointer"
                            > +
                        </button>
                    </div>

                </div>
            </div>
                <div>
                    <button
                    onClick={() => handleRemoveCart(item)}
                    ><IoIosCloseCircle  className="text-2xl md:text-3xl text-red-500 cursor-pointer "/></button>
                </div>     
        </div>
    );
};

export default CartItem;