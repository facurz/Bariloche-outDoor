import { useContext } from "react";
import { BsCart4  } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";
import './CartWidget.scss'


export const CartWidget = ( ) => {
    
    const {totalCantidad} = useContext(CartContext)

    return(
        <div className="cartWidget">
            
            <BsCart4  className="cartIcon"/> 
            <span className="contador">{totalCantidad()}</span>
            
        </div>
    );
}