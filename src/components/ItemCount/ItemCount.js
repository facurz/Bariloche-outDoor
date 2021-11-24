import { ButtonGroup, Button } from 'react-bootstrap'
import './ItemCount.scss'

export const ItemCount = ({stock, cantidad, setCantidad, onAdd}) => {

    
    
    const handleAdd = () =>(cantidad < stock ) ? setCantidad(cantidad + 1) : alert(`No hay más stock`);
    
    const handleSubtract = () => cantidad >0 && setCantidad(cantidad - 1)

    

    return (
        <div>
        <ButtonGroup aria-label="Basic example">
            <Button className="buttonsCounter py-0" onClick={handleSubtract} variant="outline-dark">-</Button>
            <span className="spanCounter">{cantidad}</span>
            <Button className="button_Counter py-0" onClick={handleAdd} variant="outline-dark">+</Button>
        </ButtonGroup>
        
        <Button className="button_Agregar  py-0" onClick={onAdd} variant="dark">Agregar al Carrito</Button>
        
        
        </div>
        
    )
}


