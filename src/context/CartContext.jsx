import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {


    const [carrito, setCarrito] = useState([])
    

    const [cantidad, setCantidad] = useState(0)

    const handleSumar = (item) => {
        const nuevoCarrito = [...carrito];
        const estaEnElcarrito = nuevoCarrito.find((producto) => producto.id === item.id);
        estaEnElcarrito.cantidad += 1;
        setCarrito(nuevoCarrito)
    }
    const handleRestar = (item) => {
        const nuevoCarrito = [...carrito];
        const estaEnElcarrito = nuevoCarrito.find((producto) => producto.id === item.id);
        if(estaEnElcarrito.cantidad>1){
            estaEnElcarrito.cantidad -= 1
        }
        setCarrito(nuevoCarrito)
    }
    const eliminarProducto = (item) => {
        const nuevoCarrito = [...carrito];
        const estaEnElcarrito = nuevoCarrito.filter((producto) => producto.id !== item.id);
        setCarrito(estaEnElcarrito)

    }
    const handleAgregar = (item,carrito) => {

        const itemAgregado = { ...item, cantidad:1 }
        const nuevoCarrito = [...carrito];
        const estaEnElcarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElcarrito) {
            estaEnElcarrito.cantidad += 1;
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito);
        setCantidad(0)
    }
    const limpiarCarrito = () => {
        setCarrito([])
    }
    const carritoAcumulador = carrito.reduce((acc,prod) => acc + prod.cantidad,0);
    const precioTotal = carrito ? carrito.reduce((acc,prod) => acc + (prod.precio * prod.cantidad),0) : "0";

    return(
        <CartContext.Provider value={{carrito,cantidad,handleSumar,handleRestar,handleAgregar,eliminarProducto,carritoAcumulador,limpiarCarrito,precioTotal}}>
            {children}
        </CartContext.Provider>
    )

}