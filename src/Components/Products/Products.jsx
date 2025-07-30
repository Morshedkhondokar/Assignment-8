import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]) 
    const [categoryBtn, setCategoryBtn] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")

    useEffect(() => {
        fetch("/data/data.json")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            const categories = ["All",...new Set(data.map(item => item.category))]
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
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center lg:justify-items-start'>
                    {
                        filteredProducts.map((item,index) => <Product key={index} item={item}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;