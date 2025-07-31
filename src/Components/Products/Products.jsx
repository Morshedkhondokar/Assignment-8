import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FaParachuteBox } from "react-icons/fa6";

const Products = () => {
    const [products, setProducts] = useState([]) 
    const [categoryBtn, setCategoryBtn] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        fetch("/data/data.json")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            const categories = ["All",...new Set(data.map(item => item.category)), "Chargers"]
            setCategoryBtn(categories)
        } )

    },[])
//    console.log(categoryBtn)

    const filteredProducts = selectedCategory === "All" 
        ? products 
        : products.filter(item => item.category === selectedCategory)
    

    
    return (
        <div>
            <h1 className='font-bold text-3xl text-center '>Explore Cutting-Edge Gadgets</h1>
            <div className='flex flex-col lg:flex-row justify-center  lg:items-start gap-8 my-6'>
                <div className='flex lg:flex-col flex-wrap justify-center  lg:justify-start gap-4 bg-white p-3  rounded-2xl shadow-md
                    max-h-[410px] md:w-[600px] mx-2.5 md:mx-auto overflow-auto lg:w-48 lg:mx-0'>
                    {categoryBtn.map((cabtn, index) => 
                        <button
                        onClick={() => setSelectedCategory(cabtn)}
                        key={index} className={`p-2 btn rounded-2xl transition-all duration-300 
                                ${selectedCategory === cabtn 
                                    ? 'bg-[#9538e2] text-white'  
                                    : 'bg-[#f3f3f3] text-[#78787b] hover:bg-[#9538e2] hover:text-white '}`}>{cabtn}</button>
                    )}
                </div>
                <div>
  {filteredProducts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:justify-items-start">
      {filteredProducts.map((item, index) => (
        <Product key={index} item={item} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center w-[400px] md:w-[700px] mx-auto lg:w-[948px] h-96 bg-white rounded-2xl shadow-lg">
      {/* Empty Icon */}
      
        <FaParachuteBox className='text-8xl text-gray-500' />
      

      {/* Message */}
      <h2 className="text-xl font-semibold text-gray-700 mt-5">No Products Found</h2>
      <p className="text-gray-500 text-sm mt-2">Please try another category.</p>
    </div>
  )}
</div>

            </div>
        </div>
    );
};

export default Products;