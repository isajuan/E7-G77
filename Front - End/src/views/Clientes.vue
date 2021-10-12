<template>

    
    <div class="container">
    <div style="padding: 30px 0px; margin-bottom: 20px" class="container-fluid">
    <form @submit.prevent="registrarCliente()" v-if="!editar">
        
        <h3 style="background-color:blue; color:white; height: 60px">Registrar cliente</h3>  
        <b-alert 
         :show="dismissCountDown" 
         dismissible 
         :variant="mensaje.color" 
         @dismissed="dismissCountDown=0" 
         @dismiss-count-down="countDownChanged" 
         > 
         {{mensaje.texto}} 
         </b-alert>
        <input type="text" class="form-control my-2" placeholder="Nombres" v-model="cliente.nombre">
        <input type="text" class="form-control my-2" placeholder="Apellidos" v-model="cliente.apellido">
        <input type="text" class="form-control my-2" placeholder="Cedula" v-model="cliente.cedula">
        <input type="text" class="form-control my-2" placeholder="Dirección" v-model="cliente.direccion">
        <input type="text" class="form-control my-2" placeholder="Teléfono" v-model="cliente.telefono">
        <input type="text" class="form-control my-2" placeholder="@email" v-model="cliente.email">
        <b-button class="btn-success my-2" type="submit">Registrarse</b-button>

    </form>
    </div>

    <div class="container-fluid">
    <form @submit.prevent="editarCliente(clienteEditar)" v-if="editar">
        
        <h3>Editar datos</h3> 
        <b-alert 
         :show="dismissCountDown" 
         dismissible 
         :variant="mensaje.color" 
         @dismissed="dismissCountDown=0" 
         @dismiss-count-down="countDownChanged" 
         > 
         {{mensaje.texto}} 
         </b-alert>
        <input type="text" class="form-control my-2" placeholder="Nombres" v-model="clienteEditar.nombre">
        <input type="text" class="form-control my-2" placeholder="Apellidos" v-model="clienteEditar.apellido">
        <input type="text" class="form-control my-2" placeholder="Cedula" v-model="clienteEditar.cedula">
        <input type="text" class="form-control my-2" placeholder="Dirección" v-model="clienteEditar.direccion">
        <input type="text" class="form-control my-2" placeholder="Teléfono" v-model="clienteEditar.telefono">
        <input type="text" class="form-control my-2" placeholder="@email" v-model="clienteEditar.email">
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class="my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>
    </div>
       <h1>Clientes</h1>
       

        <table class="table table-success table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Código interno</th>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Cedula</th>
      <th scope="col">Dirección</th>
      <th scope="col">Teléfono</th>
      <!-- <th scope="col">@email</th> -->
      <th scope="col">Opciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in clientes" :key="index" >
      <th scope="row">{{item._id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.apellido}}</td>
      <td>{{item.cedula}}</td>
      <td>{{item.direccion}}</td>
      <td>{{item.telefono}}</td>
      <!-- <td>{{item.email}}</td> -->
      <td>
          <b-button class="btn-danger mx-2 my-2" @click="eliminarCliente(item._id)">Eliminar</b-button>
          <b-button class="btn-warning mx-2 my-2" @click="activarEdicion(item._id)">Editar</b-button>
      </td>
    </tr>
        
  </tbody>
</table>
 <footer style="background-color: #25294f" class="container-lg">
       <div class="row justify-content-space-evenly">
         <article class="col-12 offset-md-1 col-md-5">
           <h2 style="color: white">Contacto</h2>
           <p style="color: white">Dirección: Calle 3B # 16A-83 Los Sauces</p>
           <p style="color: white">Teléfono: 311 3901617</p>
           <p style="color: white" >email: servicioalcliente@detodito.co</p>
           <p style="color: white" >www.restaurantedetodito.com</p>

         </article>
         <article class="col-12 offset-md-1 col-md-5">
           <h2 style="color: white">Siganos en las redes sociales</h2>
           <p style="color: white">FaceBook</p>
           <p style="color: white">Instagram</p>
           <p style="color: white">Twiter</p>
           <p style="color: white">WhatsApp: 311 3901617</p>

         </article>

       </div>

     </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{

            clientes:[],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 2,
            dismissCountDown: 0,

            cliente:{nombre:"",apellido:"",cedula:"",direccion:"",telefono:"",email:""},
            editar:false,
            clienteEditar:{}

        }
    },

    created(){
        this.listarClientes();

    },

    methods:{
        listarClientes(){
            this.axios.get('/clientes')
            .then(res=>{
                this.clientes=res.data;

            })
            .catch(e=>{
                console.log(e.response)

            })
        },

        registrarCliente(){
            this.axios.post('/nuevo-cliente', this.cliente)
            .then(res=>{
                this.clientes.push(res.data)
                this.cliente.nombre="";
                this.cliente.apellido="";
                this.cliente.cedula="";
                this.cliente.direccion="";
                this.cliente.telefono="";
                this.cliente.email="";
                this.mensaje.color="success";
                this.mensaje.texto="Cliente registrado";
                this.showAlert();

            })
            .catch(e=>{
                console.log(e.response)

            })

        },

        eliminarCliente(id){
            this.axios.delete(`/clientes/${id}`)
            .then(res=>{
                const index = this.clientes.findIndex(item=> item._id===res.data._id);
                this.clientes.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Cliente eliminado";
                this.showAlert();



            })
            .catch(e=>{
                console.log(e.response);

            })

        },

        activarEdicion(id){
            this.editar = true;
            this.axios.get(`/clientes/${id}`)
            .then(res=>{
                this.clienteEditar=res.data;



            })
            .catch(e=>{
                console.log(e.response);

            })


        },

        editarCliente(item){
            
            this.axios.put(`/clientes/${item._id}`, item)
            .then(res=>{
                const index = this.clientes.findIndex(n=> n._id===res.data._id);
                this.clientes[index].nombre=res.data.nombre;
                this.clientes[index].apellido=res.data.apellido;
                this.clientes[index].cedula=res.data.cedula;
                this.clientes[index].direccion=res.data.direccion;
                this.clientes[index].telefono=res.data.telefono;
                this.clientes[index].email=res.data.email;
                this.mensaje.color="success";
                this.mensaje.texto="Datos actualizados";
                this.showAlert();
                this.editar=false;



            })
            .catch(e=>{
                console.log(e.response);

            })


        },


        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }


    }


}
</script>