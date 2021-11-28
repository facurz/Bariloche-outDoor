import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../Context/CartContext'
import { Container, Row, Col } from 'react-bootstrap'
import './CartItem.scss'

export const CartItem = ({name, price, cantidad, id}) => {

    const {removerDelCarrito} = useContext(CartContext)


    return (
        <Container>
            
            <Row className="d-flex justify-content-center text-center">
                <Col>
                <p>{name}</p>
                </Col>
                <Col>
                <p>{cantidad}</p>
                </Col>
                <Col>
                <p>{price}</p>
                </Col>
                <Col>
                <p>{price * cantidad}</p>
                </Col>
                <Col>
                <button 
                    className="eliminar_producto btn btn-danger"
                    onClick={() => { removerDelCarrito(id) }}
                >
                    <BsFillTrashFill/>
                </button>
                </Col>
            </Row>
        </Container>
    )
}
