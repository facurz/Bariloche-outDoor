import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container } from 'react-bootstrap'
import {ItemList} from '../ItemList/ItemList'
import {collection, getDocs, query, where} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'
import './ItemListContainer.scss'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)

        //1-armar la referencia
        const productosRef = collection(db,'productos') //método collection llama a la referencia del database y a la coleccion creada
        const q = catId ? query(productosRef, where('categ', '==', catId)) : productosRef
        
        //GET a esa referencia
        getDocs(q) //esta petición retorna una promesa
        .then((res)=>{
            const items = res.docs.map((doc) => ({
                id: doc.id,
                ...doc.data() //el doc.data me trae los campos de cada prodcutos
            })) 
            setProductos(items)
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
