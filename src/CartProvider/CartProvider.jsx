import { useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";


const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const get = localStorage.getItem("cart")
        return get ? JSON.parse(get) : [];
    });
    const [totalPrice, setTotalprice] = useState()

    const handleAddToCart = (product) => {
        const exist = cart.find(item => item.product_id === product.product_id)
       if(exist){
            const updatedCart = cart.map(item => item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 } : item);
            setCart(updatedCart);
            toast.success(`${product.product_name} quantity increased`);
       }else {
         setCart([{ ...product, quantity: 1 }, ...cart]);
            toast.success(`${product.product_name} added to Cart`);
        }
    }

    // Remove from cart
    const handleRemoveCart = (product) => {
        const removeItem = cart.filter(item => item.product_id !== product.product_id)
        setCart(removeItem)
        toast.error(`${product.product_name} remove frome Cart❌`)
    }

    // quantity increased
    const quantityIncreased = (product) =>{
         const updatedCart = cart.map(item => item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 } : item);
            setCart(updatedCart);
    }
    // quantity deccreased
    const quantityDecreased = (product) =>{
         const updatedCart = cart.find(item => item.product_id === product.product_id);
         if(updatedCart.quantity <= 1){
            handleRemoveCart(updatedCart)
         }else{
            setCart(cart.map(item => item.product_id === product.product_id ? {...item, quantity: item.quantity - 1 }: item))
         }
            
    }
    // localstorage save cart data
    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    // tataPrice
    useEffect(() => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity,0)
        setTotalprice(total)
    },[cart])

    useEffect(() =>{

    },[cart])



    
    return (
        <CartContext.Provider 
         value={{handleAddToCart, cart, quantityIncreased, quantityDecreased,totalPrice,handleRemoveCart}}>
            <Toaster/>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;