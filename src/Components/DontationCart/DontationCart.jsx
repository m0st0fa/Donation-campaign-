import { useEffect } from "react";
import { useState } from "react";
import SingleDontaionCart from "../SingleDontaionCart/SingleDontaionCart";

 
 const DontationCart = () => {
   const [allCart, setAllCart] =useState([])
   const [cardLength, setCartLength] = useState(4)
   useEffect(()=>{
    fetch('/public/Cart.json')
    .then(res => res.json())
    .then(data => setAllCart(data))
   },[])
   const handleShowAllCart = () =>{
    setCartLength(allCart.length)
   }
 
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl m-auto">
            {
                allCart.slice(0,cardLength).map(singleCart => <SingleDontaionCart key={singleCart.id} singleCart={singleCart}></SingleDontaionCart>)
            }
           <div className={cardLength === allCart.length && 'hidden'}>
           <div className= "text-center">
           <button onClick={handleShowAllCart} className="btn btn-primary absolute ">show all</button>
           </div>
           </div>
        </div>
        
    );
 };
 
 export default DontationCart;