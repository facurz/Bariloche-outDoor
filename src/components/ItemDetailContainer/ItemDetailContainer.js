import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import { Container} from 'react-bootstrap'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {doc, getDoc, collection} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'


export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(()=>{
        setLoading(true)

        const productosRef = collection(db,'productos')
        const docRef = doc(productosRef, itemId)
        getDoc(docRef)
            .then((res) => {
                setItem({
                    id: res.id,
                    ...res.data()
                })
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
