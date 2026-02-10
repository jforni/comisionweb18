import React, { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

//Inicializar el SDK con la Public Key
initMercadoPago("APP_USR-2b38dc0d-56a3-4e36-9727-7f7f6465c0b8", {locale: 'es-AR'});

const Checkout = () => {
  const [preferenceId, setPreferenceId]  = useState(null);

  const createPreference = async () => {
    try {
      const response = await fetch("http://localhost:3000/create_preference", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          title: "Curso de Videojuegos",
          quantity: 1,
          price: 1000,
        }),
      });

      const data = await response.json();
      return data.id; //Retornamos el ID de la preferencia
    } catch (error) {
      console.error("Error al crear la preferencia: ", error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if(id){
      setPreferenceId(id);
    }
  };

  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h2>Carrito de compras 🛒</h2>
      <p>Producto: Curso Videojuegos con Godot</p>
      <p>Precio: U$S 1000</p>

      <button onClick={handleBuy} className='btn-comprar'>
        Confirmar compra
      </button>

      {preferenceId && (
        <div style={{marginTop: '20px'}}>
          <Wallet initialization={{preferenceId: preferenceId}}/>
        </div>
      )}
    </div>
  )
}

export default Checkout;