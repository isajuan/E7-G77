import express from 'express'; 
const router = express.Router();

// importar el modelo Clientes
import Clientes from '../models/clientes'; 

// Agregar un Cliente
router.post('/nuevo-cliente', async(req, res) => { 
    const body = req.body; 
    try { 
        const clientesDB = await Clientes.create(body); 
        res.status(200).json(clientesDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error
        });
    }
});

// Get con parámetros
router.get('/clientes/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const clientesDB = await Clientes.findOne({_id}); 
        res.json(clientesDB); 
    }   catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        });
    }
});

// Get con todos los documentos 
router.get('/clientes', async(req, res) => {
    try { 
        const clientesDB = await Clientes.find();
        res.json(clientesDB); 
    }   catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error
        });
    } 
});

// Delete eliminar una cliente 
router.delete('/clientes/:id', async(req, res) => {
    const _id = req.params.id; 
    try { 
     const clientesDB = await Clientes.findByIdAndDelete({_id}); 
     if(!clientesDB){ 
        return res.status(400).json({ 
        mensaje: 'No se encontró el cliente indicado', error
       });
      } 
      res.json(clientesDB); 
    } catch (error) { 
      return res.status(400).json({ 
        mensaje: 'Ocurrio un error', 
        error 
      });
   } 
});

// Put actualizar un cliente
router.put('/clientes/:id', async(req, res) => { 
  const _id = req.params.id; 
  const body = req.body; 
  try { 
    const clientesDB = await Clientes.findByIdAndUpdate(_id, body, {new: true});
    res.json(clientesDB); 
  } catch (error) { 
    return res.status(400).json({ 
      mensaje: 'Ocurrio un error', 
      error 
    });
   } 
});


// Exportamos la configuración de express app 
module.exports = router;