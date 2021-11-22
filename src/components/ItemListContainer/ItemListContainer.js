import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container } from 'react-bootstrap'
import { pedirDatos } from '../../helpers/pedirDatos'
import {ItemList} from '../ItemList/ItemList'
import './ItemListContainer.scss'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {

                if (!catId) {
                    setProductos(resp)
                } else {
                    setProductos( resp.filter( prod => prod.categ === catId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <Container className="my-5">
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <><h2 className="listContainer_title">PRODUCTOS: {catId}</h2><hr/><ItemList items={productos}/></>
            }
        </Container>
    )
}
