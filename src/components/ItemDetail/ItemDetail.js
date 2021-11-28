import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router'
import {ItemCount} from '../ItemCount/ItemCount'
import { Col, Container, Row} from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext'
import './ItemDetail.scss'

export const ItemDetail = ({id, name, img, desc, price, categ, stock}) => {

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    
    

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () => {
        if (cantidad > 0) {
            agregarAlCarrito({
                id,
                name,
                price,
                cantidad
            })
        }   
    }

    return (
        <Container>
            <Row >
                <Col>
                    <img src={img} className="detail_img" alt={name}/>
                </Col>
                <Col>
                    <h4 className="detail_title">{name}</h4>
                    <hr/>
                    <p className="detail_text">{desc}</p>
                    <h4 className="detail_title--price">ARS $ {price}</h4>
                    <p className="detail_text mb-3"><small className="text-muted">Cantidad disponible: {stock}</small></p>

                    {
                    !isInCart(id) 
                    ?   <ItemCount 
                            stock={stock} 
                            cantidad={cantidad} 
                            setCantidad={setCantidad}
                            onAdd={handleAgregar}
                        />
                    :   <Link to="/cart" className="btn btn-dark d-block">Ir al Carrito de Compras</Link>
                    }

                    <div className="my-4">
                    <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
                    <button className="btn btn-outline-dark ms-2" onClick={handleVolverInicio}>Volver al inicio</button>
                    </div>
                </Col>
                
            </Row>
        
        </Container>

    )
}



