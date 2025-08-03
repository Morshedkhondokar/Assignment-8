import { useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";


const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        const getCartDataFromLocal = localStorage.getItem("cart")
        return getCartDataFromLocal ? JSON.parse(getCartDataFromLocal) : [];
    });
    const [totalPrice, setTotalprice] = useState()
    const [finalCost, setFinalCost] = useState(0)
    // const navigate = useNavigate()

    // add to cart
    const handleAddToCart = (product) => {
        
        if (!product.availability) {
        toast.error(`${product.product_name} is out of stock!`);
        return; 
        }

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
        if (total > 0) {
            setFinalCost(total);
        }
    },[cart])

   const hanslePurchase = () => {
    const purchase = document.getElementById('pruchase_modal');
    purchase.showModal()
    setCart([])
   }

    // close modal 
    const handleCloseModal = () => {
        const closeModal = document.getElementById('pruchase_modal');
        closeModal.close()
        // navigate('/')
        // alert('hello')
    }



    
    return (<>
    {/* modal */}
    {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn hidden" onClick={()=>document.getElementById('pruchase_modal').showModal()}>open modal</button>
        <dialog id="pruchase_modal" className="modal">
        <div className="modal-box">
            <div className="w-[70px] mx-auto my-2.5">
                <img src="/assets/Group.png " alt="" />
            </div>
            <h3 className="text-2xl font-bold text-center">Payment Successfully</h3>
            <hr  className="my-3"/>
            <p className='text-center font-medium'>Thanks for Pruchasing.</p>
            <p className='text-center font-medium mt-2.5'>Total Cost: ${finalCost}</p>
            <div className="modal-action block">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button 
                id="closeModal"
                className="btn w-full rounded-3xl bg-[#eae9e9]"
                onClick={handleCloseModal}
                >Close</button>
            </form>
            </div>
        </div>
        </dialog>
    {/* cart provider */}
    <CartContext.Provider 
         value={{handleAddToCart, cart,setCart, quantityIncreased, quantityDecreased,totalPrice,handleRemoveCart,
         hanslePurchase}}>
            <Toaster/>
            {children}
        </CartContext.Provider>
    </>);
};

export default CartProvider;