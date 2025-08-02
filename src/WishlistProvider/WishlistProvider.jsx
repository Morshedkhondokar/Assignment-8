import React, { useEffect, useState } from 'react';
import WishlistContext from '../Context/WishlistContext';
import toast from 'react-hot-toast';

const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState(() => {
        const getWishlistDataFromLocal = localStorage.getItem('wishlist');
        return getWishlistDataFromLocal ? JSON.parse(getWishlistDataFromLocal) : [];
    });
    
    const addWishlist = (product) => {
        const exists = wishlist.find(item => item.product_id === product.product_id)
        if(!exists){
            setWishlist([product,...wishlist])
            toast.success(`${product.product_name} alredy in wishlist`)
        }else{
            toast(`${product.product_name} alredy in wishlist`, {
                icon: '😊',
                });
        }
    }

    // Remove from cart
    const handleRemovewishlist = (product) => {
        const removeItem = wishlist.filter(item => item.product_id !== product.product_id)
        setWishlist(removeItem)
        toast.error(`${product.product_name} remove frome wishlist ❌`)
    }


    // wishlist data save in localstorage
    useEffect( () => {
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])
    return (
       <WishlistContext.Provider value={{addWishlist,wishlist,handleRemovewishlist}}>
            {children}
       </WishlistContext.Provider>
    );
};

export default WishlistProvider;