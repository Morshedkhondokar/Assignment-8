import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Rating from "@mui/material/Rating";
import { Button } from '@mui/material';
import { TiHeartFullOutline } from "react-icons/ti";
import { MdShoppingCartCheckout } from "react-icons/md";


const Details = () => {
    const [productsDetails, setProductsDetails] = useState([]);
    const {productId} = useParams()


    useEffect( () => {
        fetch("/data/data.json")
        .then(res => res.json())
        .then(data => setProductsDetails(data))
    },[])

      const detailsProduct = productsDetails.find(
    (item) => item.product_id === productId
  );
     if (!detailsProduct) {
    return <h1 className="text-center mt-10">Loading product...</h1>;
  }
    return (
        <div>
            <div className='h-[340px] md:h-[340px] bg-[#9538e2]'>
              <div className=' flex flex-col justify-center items-center h-36 gap-4 pt-6 px-3 max-w-[800px] mx-auto'>
                <h1 className='font-bold text-3xl text-white'>Product Details</h1>
                <p className='text-white text-center'>Explore the latest gadgets that will take your experience to 
                  the next level. From smart devices to the coolest accessories, we have it all!</p>
              </div>
               
            </div>
            {/* container*/}
            <div className='flex flex-col lg:flex-row w-[380px] md:w-[680px] lg:w-5xl mx-auto p-3 md:p-6 bg-white mb-10 rounded-2xl -mt-40 md:-mt-40 gap-5'>
              {/* image */}
                <div className='w-[350px] md:w-[620px]  lg:w-[440px] md:h-[460px]'>
                  <img className='object-cover lg:h-[460px]  rounded-2xl' src={detailsProduct.product_image} 
                  alt={detailsProduct.product_name} /> 
                </div>
                <div>
                  {/* title */}
                   <div>
                     <h1 className='text-3xl font-semibold mb-1'>{detailsProduct.product_name}</h1>
                    <h2 className='font-semibold'>Brand: {detailsProduct.brand}</h2>
                    <h2 className='font-semibold mt-0.5'>Price: ${detailsProduct.price}</h2>

                    {
                      detailsProduct.availability === true ? <p className='text-xs text-green-700 border border-green-700 px-3 py-1 inline-block rounded-2xl bg-[#eaf5e6] my-2'>
                        in stock</p>
                      : 
                      <p className='text-xs text-red-700 border border-red-700 px-3 py-1 inline-block rounded-2xl bg-[#fdecea] my-2'>
                        Out of stock
                      </p>
                    }
                    <p className='text-[14px] font-medium text-[#757478]'>{detailsProduct.description}</p>
                   </div>
                   {/* Specification */}
                   <div className='my-4'>
                      <h5 className='font-semibold'>Specification:</h5>
                      <ol className="list-decimal list-inside space-y-1 text-[14px] font-medium  text-[#757478]">
                        {detailsProduct.specification.map((text, index) => <li key={index}>{text}</li>)}
                      </ol>
                   </div>
                   {/* rating */}
                   <div>
                    <h3 className='font-bold mb-2'>Rating⭐</h3>
                    <div className="flex items-center gap-2">
                      <Rating
                          name="read-only"
                          value={detailsProduct.rating}
                          precision={0.5} // Half star allow
                          readOnly
                          size="size-medium"
                        />
                        <span className="text-gray-600 text-lg font-semibold">
                          {detailsProduct.rating}
                        </span>
                      </div>
                   </div>
                   {/* addCart adn wishlist buttons */}
                   <div className='flex items-center gap-2 mt-4'>
                    <Button variant="contained"   className="!bg-[#9538e2] !hover:bg-[#7d29b7] text-white !rounded-4xl">Add To Cart <MdShoppingCartCheckout className='ml-3 text-xl'/></Button>
                    <button className='text-4xl p-1 rounded-full border border-gray-300 hover:shadow-md  transition cursor-pointer'><TiHeartFullOutline  className='text-2xl
                    hover:text-[#9538e2] text-[#757478]'/></button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Details;