import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

 
 const Carts = () => {
   const [carts, setCarts] = useState([])
    
     useEffect(()=>{
        fetch('Cart.json')
        .then(res => res.json())
        .then(data => setCarts(data));
     },[])

    return (
        <div>
            <div className="grid gap-3 md:grid-cols-3 mt-10">
                {
                    carts.map( cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
               
            </div>
        </div>
    );
 };
 
 export default Carts;