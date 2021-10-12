import mongoose from 'mongoose'; 
const Schema = mongoose.Schema;

const menuSchema = new Schema({ 
    codigo: String,
    nombre_plato: String, 
    valor: String,
    especialidad: String
});

// Convertir a modelo 
const Menus = mongoose.model('Menus', menuSchema); 
export default Menus;