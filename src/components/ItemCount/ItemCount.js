import React, {useState} from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import './ItemCount.scss'

export const ItemCount = ({stock}) => {

    const [counter, setItemCount] = useState(1)
    
    const handleAdd = () =>(counter < stock ) ? setItemCount(counter + 1) : alert(`No hay más stock`);
    
    const handleSubtract = () => (counter >0) ? setItemCount(counter - 1) : setItemCount(counter);

    const btnComprar = ()=> alert(`Se agregaron ${counter} unidades al carrito`)
    

    return (
        <div>
        <ButtonGroup aria-label="Basic example">
            <Button className="buttonsCounter py-0" onClick={handleSubtract} variant="outline-dark">-</Button>
            <span className="spanCounter">{counter}</span>
            <Button className="button_Counter py-0" onClick={handleAdd} variant="outline-dark">+</Button>
        </ButtonGroup>
        
        <Button className="button_Agregar  py-0" onClick={btnComprar} variant="dark">Agregar al Carrito</Button>
        
        
        </div>
        
    )
}


