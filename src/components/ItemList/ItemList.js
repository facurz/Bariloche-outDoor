import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {
    
    return (
        <Container className="my-5">
          {
              items.length !== 0 && 
              <h2>{items[0].categ}</h2>
          }
          
            <hr/>
            <Row className="justify-content-center"> 
                {/* {items.map((prod) => <Item prod={prod}/>)} */}
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}