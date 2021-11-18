import React from 'react'
import { useNavigate } from 'react-router'
import {ItemCount} from '../ItemCount/ItemCount'
import { Col, Container, Row} from 'react-bootstrap'
import './ItemDetail.scss'

export const ItemDetail = ({id, name, img, desc, price, categ, stock}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
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
                
                    <ItemCount stock={stock}/>
                
                    <div className="my-4">
                    <button className="btn btn-dark" onClick={handleVolver}>Volver</button>
                    <button className="btn btn-outline-dark ms-2" onClick={handleVolverInicio}>Volver al inicio</button>
                    </div>
                </Col>
                
            </Row>
        
        </Container>

    )
}



