import React from 'react';

const Product = ({item}) => {
    const {product_name,product_image,price} = item
    return (
        <div className='w-[300px] h-[340px] p-5 rounded-2xl bg-white'>
            <div className='w-[262px]  h-[181px]'>
                <img className='w-full h-full rounded-2xl object-cover' src={product_image} alt="" />
            </div>
            <div className='mt-3'>
                <h1 className='text-[17px] '>{product_name}</h1>
                <h5 className='font-medium text-[#78787b] my-2'>Price: ${price}</h5>
                <button 
                  className="px-5 py-2 rounded-2xl font-semibold 
                    border border-[#9538e2] text-[#9538e2] bg-white
                    hover:bg-[#9538e2] hover:text-white
                    hover:scale-105 hover:shadow-lg
                    transition duration-300 ease-in-out cursor-pointer"
                >View Details</button>
            </div>
        </div>
    );
};

export default Product;