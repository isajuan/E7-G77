import express from 'express'; 
const router = express.Router();

// importar el modelo Clientes
import Menus from '../models/menus'; 

// Agregar un Cliente
router.post('/nuevo-menu', async(req, res) => { 
    const body = req.body; 
    try { 
        const menuDB = await Menus.create(body); 
        res.status(200).json(menuDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error
        });
    }
});

// Get con parámetros
router.get('/menus/:codigo', async(req, res) => { 
    const codigo = req.params.codigo; 
    try { 
        const menuDB = await Menus.findOne({codigo}); 
        res.json(menuDB); 
    }   catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        });
    }
});

// Get con todos los documentos 
router.get('/menus', async(req, res) => {
    try { 
        const menuDB = await Menus.find();
        res.json(menuDB); 
    }   catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error
        });
    } 
});

// Exportamos la configuración de express app 
module.exports = router;