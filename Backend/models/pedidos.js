import mongoose from 'mongoose'; 
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({ 
    cedula_cliente: String,
    codigo_plato: String, 
    valor: String,
    forma_pago: String,
    tiempo_entrega: String
});

// Convertir a modelo 
const Pedidos = mongoose.model('Pedidos', pedidoSchema); 
export default Pedidos;