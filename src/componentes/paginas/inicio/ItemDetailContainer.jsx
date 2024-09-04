import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config-fb'
import { getDoc, doc } from "firebase/firestore"
import { useParams } from 'react-router-dom';
import ItemDetail from '../../paginas/inicio/ItemDetail';





function ItemDetailContainer() {

    const [item,setItem]= useState();
    const {ItemID} = useParams();

    useEffect(()=>{

        const docRef= doc (db,"productos",ItemID);
        getDoc(docRef)
        .then(res => setItem({...res.data(), id: res.id}))
        
    },[])

    return (
        <>
        {item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer