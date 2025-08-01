import {  Link,Outlet, useLocation } from "react-router";


const Dashboard = () => {
    const location = useLocation(); 
     const isCartActive =
           location.pathname === "/dashboard" || location.pathname === "/dashboard/cart";

    const isWishlistActive = location.pathname === "/dashboard/wishlist";

    return (
        <div>
            <div className='h-[340px] md:h-[220px] bg-[#9538e2] pt-8'>
              <div className=' flex flex-col justify-center items-center h-36 gap-4 pt-6 px-3 max-w-[800px] mx-auto'>
                <h1 className='font-bold text-3xl text-white'>Dashboard</h1>
                <p className='text-white text-center'>Explore the latest gadgets that will take your experience to 
                  the next level. From smart devices to the coolest accessories, we have it all!</p>
                  <div className="flex gap-6 ">
                    <Link to="/dashboard/cart"><button 
                    className={`btn rounded-2xl px-8 ${isCartActive ? 'bg-white text-[#9538e2]' : 'bg-transparent text-white'}`}>
                        Cart
                    </button></Link>
                    <Link to="/dashboard/wishlist"><button 
                     className={`btn rounded-2xl px-8 ${isWishlistActive ? 'bg-white text-[#9538e2]' : 'bg-transparent text-white'}`}>
                        Wishlist
                    </button></Link>
                  </div>
              </div>
            </div>
            {/* Nested route content show here */}
            <Outlet />
        </div>
    );
};

export default Dashboard;