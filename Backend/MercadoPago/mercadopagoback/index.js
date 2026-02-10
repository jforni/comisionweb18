const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { MercadoPagoConfig, Preference } = require('mercadopago');

app.use(express.json());
app.use(cors());

// Agregamos el Access Token de PRUEBA
const client = new MercadoPagoConfig({accessToken: process.env.MERCADOPAGO_TOKEN_API});

app.post("/create_preference", async (req, res) => {
    try {
        const preference = new Preference(client);

        //Definir que estamos vendiendo
        const result = await preference.create({
            body: {
                items: [
                    {
                        title: req.body.title,
                        quantity: Number(req.body.quantity),
                        unit_price: Number(req.body.price),
                        currency_id: "ARS", //Aquí va la moneda de tu país
                    }
                ],
                back_urls: {
                    success: "https://tu-sitio.com/success",
                    failure: "https://tu-sitio.com/failure",
                    pending: "https://tu-sitio.com/pending"
                },
                auto_return: "approved",
            }
        })

        //Enviar el ID de la preferencia al frontend
        res.json({ id: result.id});
    } catch (error) {
        res.status(500).json({error: "Error al crear la preferencia"});
    }
});

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000!"))