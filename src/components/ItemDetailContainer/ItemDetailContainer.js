import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Container} from 'react-bootstrap'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirDatos()
            .then( resp => {
                setItem( resp.find( prod => prod.id === Number(itemId)) )
            })
            .finally(()=>{
                setLoading(false)
            })
    },[itemId])
    
    
    return (
        
        <Container className="my-5">
           
                {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail {...item}/>
                }
            
        </Container>
        
    )
}
