import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='h-[440px] md:h-[540px] bg-[#9538e2] rounded-b-2xl'>
                <div className='max-w-[1000px] mx-auto  space-y-2 md:space-y-6 p-3'>
                    <h1 className='text-white text-2xl font-bold md:text-5xl text-center mt-4 md:mt-8 md:leading-16'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className='text-white md:text-xl text-center my-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className=' text-center'>
                    <button className='btn rounded-4xl'>Shop Now</button>
                </div>
                </div>
            </div>
            <div className='w-[370px] md:w-[580px] lg:w-[1000px] mx-auto -mt-30 md:-mt-33 lg:-mt-40 mb-11 border border-gray-300  p-2 md:p-4 rounded-2xl'>
                     <img className='object-cover max-h-[500px] rounded-2xl w-full' src="/assets/banner.jpg" alt="" />
            </div>


        </div>
    );
};

export default Banner;