import { useContext } from "react";
import { BsCart4  } from "react-icons/bs";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './CartWidget.scss'



export const CartWidget = ( ) => {
    
    const {totalCantidad, carrito} = useContext(CartContext)

    return(
        <div className={carrito.length === 0 ? "hidden" : "cartWidget"}>
            
            <Link to="/cart">
                <BsCart4  className="cartIcon"/> 
                <span className="contador">{totalCantidad()}</span>
            </Link>
            
        </div>
    );
}