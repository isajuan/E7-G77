import express from 'express'; 
const router = express.Router();

// importar el modelo Pedidos
import Pedidos from '../models/pedidos'; 

// Agregar un Pedido
router.post('/nuevo-pedido', async(req, res) => { 
    const body = req.body; 
    try { 
        const pedidoDB = await Pedidos.create(body); 
        res.status(200).json(pedidoDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error
        });
    }
});

// Get con parámetros
router.get('/pedidos/:cedula_cliente', async(req, res) => { 
    const cedula_cliente = req.params.cedula_cliente; 
    try { 
        const pedidoDB = await Pedidos.findOne({cedula_cliente}); 
        res.json(pedidoDB); 
    }   catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        });
    }
});

// Get con todos los documentos 
router.get('/pedidos', async(req, res) => {
    try { 
        const pedidoDB = await Pedidos.find();
        res.json(pedidoDB); 
    }   catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error
        });
    } 
});

// Exportamos la configuración de express app 
module.exports = router;