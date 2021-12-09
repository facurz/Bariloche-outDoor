import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router'
import { CartContext } from '../../Context/CartContext'
import { CartItem } from './CartItem'
import { BsCart4  } from "react-icons/bs"
import { Container, Row, Col } from 'react-bootstrap'
import './CartView.scss' 

export const CartView = () => {

    const {carrito, vaciarCarrito, totalCompra} = useContext(CartContext)

    const navigate = useNavigate()

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleVolver = () => {
        navigate(-1)
    }

   

    return (
        <div className="container my-5">
            {
                carrito.length > 0 
                ?   <>  <div  className="cart_title">
                            <div>
                                <BsCart4 className="cart_widget--font"/>
                                <h2 className="cart_title--font">CARRITO DE COMPRAS</h2>
                            </div>
                            <div>
                                <button className="btn btn-outline-dark mx-1 my-1" onClick={vaciarCarrito}>Vaciar carrito</button>
                                <button className="btn btn-outline-dark mx-1 my-1" onClick={handleVolverInicio}>Volver al inicio</button>
                            </div>
                        </div>
                            
                        <hr/>
                        <Container>
                            <Row className="cartView_subtitulo">
                                <Col>
                                    <h6>PRODUCTO</h6>
                                </Col>
                                <Col>
                                    <h6>CANTIDAD</h6>
                                </Col>
                                <Col>
                                    <h6>SUBTOTAL</h6>
                                </Col>
                                <Col>
                                    <h6>QUITAR</h6>
                                </Col>
                            </Row>
                            </Container>
                        <section>
                            {
                                carrito.map((prod) => <CartItem {...prod}/>)
                            }
                        </section>
                        <hr/>
                        
                            <div className="d-flex justify-content-end">
                                <h5>TOTAL: $ {totalCompra()}</h5>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Link to="/checkout" className="btn btn-dark">Terminar mi compra</Link>
                            </div>
                        
                    </>
                
                :   <>
                        <div className="cart_title">
                            <h2 className="cart_title--font">CARRITO VACíO</h2>
                            <BsCart4 className="cart_widget--vacio"/>
                        </div>
                        <hr/>
                        <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
                    </>
            }
        </div>
    )
}