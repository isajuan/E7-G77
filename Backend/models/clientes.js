import mongoose from 'mongoose'; 
const Schema = mongoose.Schema;

const clientesSchema = new Schema({ 
    nombre: String,
    apellido: String, 
    cedula:{type: String, required: [true, 'Cedula obligatoria']},
    direccion: String,
    telefono: String,
    email: String
});

// Convertir a modelo 
const Clientes = mongoose.model('Clientes', clientesSchema); 
export default Clientes;