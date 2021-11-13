import React from 'react'
import { Card } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './Item.scss'

export const Item = ({id, name, img, desc, price, stock}) => {


    return(
        <Card className="px-0" style={{ width: '18rem' }}>
        <Card.Img src={img} />
        <Card.Body>
        <Card.Title>ARS $ {price}</Card.Title>
        <Card.Text>
            {name}
        </Card.Text>
        <ItemCount stock={stock}/>
        </Card.Body>
        </Card>
    )

} 
