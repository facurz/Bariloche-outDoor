import React, { useContext} from 'react'
import { useNavigate} from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { CartItem } from './CartItem'
import { BsCart4  } from "react-icons/bs"
import { Container, Row, Col } from 'react-bootstrap'
import './CartView.scss' 

export const CartView = () => {

    const {carrito, vaciarCarrito} = useContext(CartContext)

    const navigate = useNavigate()

    const handleVolverInicio = () => {
        navigate('/')
    }

   

    return (
        <div className="container my-5">
            {
                carrito.length > 0 
                ?   <>  
                        <div className="cart_title">
                            <BsCart4 className="cart_widget--font"/>
                            <h2 className="cart_title--font">CARRITO DE COMPRAS</h2>
                        </div>
                            
                        <hr/>
                        <Container>
                            <Row className="cartView_subtitulod-flex justify-content-center text-center">
                                <Col>
                                    <h5>Producto</h5>
                                </Col>
                                <Col>
                                    <h5>Cantidad</h5>
                                </Col>
                                <Col>
                                    <h5>Precio</h5>
                                </Col>
                                <Col>
                                    <h5>Subtotal</h5>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            </Container>
                        <section>
                            {
                                carrito.map((prod) => <CartItem {...prod}/>)
                            }
                        </section>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-dark" onClick={vaciarCarrito}>Vaciar carrito</button>
                            <button className="btn btn-dark mx-2">Terminar mi compra</button>
                            <button className="btn btn-outline-dark" onClick={handleVolverInicio}>Volver al inicio</button>
                        </div>
                    </>
                
                :   <>
                        <div className="cart_title">
                            <h2 className="cart_title--font">CARRITO VACíO</h2>
                            <BsCart4 className="cart_widget--vacio"/>
                        </div>
                        <hr/>
                        <Link to="/" className="btn btn-dark">Volver</Link>
                    </>
            }
        </div>
    )
}