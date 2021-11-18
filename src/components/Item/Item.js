import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import './Item.scss'

export const Item = ({id, name, img, desc, price, stock}) => {


    return(
        <Card key={id} className="px-0" style={{ width: '18rem' }}>
        <Card.Img src={img} />
        <Card.Body>
        <Card.Title>ARS $ {price}</Card.Title>
        <Card.Text>
            {name}
        </Card.Text>
        <Link to={`/detail/${id}`}><Button variant="dark">Ver más</Button></Link>
        </Card.Body>
        </Card>
    )

} 
