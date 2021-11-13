import React, {useState} from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import './ItemCount.scss'

export const ItemCount = ({stock}) => {

    const [counter, setItemCount] = useState(1)
    
    const add = () =>(counter < stock ) ? setItemCount(counter + 1) : alert(`No hay más stock`);
    
    const subtract = () => (counter >0) ? setItemCount(counter - 1) : setItemCount(counter);

    const btnComprar = ()=> alert(`Se agregaron ${counter} unidades al carrito`)
    

    return (
        <div>
        <ButtonGroup aria-label="Basic example">
            <Button className="buttonsCounter py-0" onClick={subtract} variant="outline-dark">-</Button>
            <span className="spanCounter">{counter}</span>
            <Button className="buttonsCounter py-0" onClick={add} variant="outline-dark">+</Button>
        </ButtonGroup>
        
        <Button className="buttonsCounter mt-1 py-0" onClick={btnComprar} variant="dark">Agregar al Carrito</Button>
        
        
        </div>
        
    )
}


