import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState([])
    

    const [cantidad, setCantidad] = useState(0)

    const handleSumar = (cantidad) => {
        setCantidad(cantidad + 1)
    }

    const handleRestar = (cantidad) => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    const handleAgregar = (cantidad,item,carrito) => {

        const itemAgregado = { ...item, cantidad }
        const nuevoCarrito = [...carrito];
        const estaEnElcarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElcarrito) {
            estaEnElcarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito);
        setCantidad(0)
    }
    const carritoAcumulador = carrito.reduce((acc,prod) => acc + prod.cantidad,0);
    return(
        <CartContext.Provider value={{carrito,cantidad,handleSumar,handleRestar,handleAgregar,carritoAcumulador}}>
            {children}
        </CartContext.Provider>
    )

}