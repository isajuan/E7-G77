<template>
    <div class="container">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/OL1.png" class="" width="1200px"  height="400px" alt="...">
        </div>
        <div class="carousel-item">
           <img src="../assets/OL2.png" class="" width="1200px"  height="400px" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/OL3.png" class="" width="1200px"  height="400px"  alt="...">
       </div>
        <a class="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
       </a>
       <a class="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
       </a>
       </div>
     </div>

        <h1 style="background-color:blue; color:white; height: 60px">Pedidos</h1>
       
    <table class="table table-striped table-hover">
    <thead>
    <tr>
      <!-- <th scope="col">Código interno</th> -->
      <th scope="col">Cedula cliente</th>
      <th scope="col">Código plato</th>
      <th scope="col">Valor</th>
      <th scope="col">Forma de pago</th>
      <th scope="col">Tiempo de entrega</th>
      
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, index) in pedidos" :key="index" >
      <!-- <th scope="row">{{item._id}}</th> -->
      <td>{{item.cedula_cliente}}</td>
      <td>{{item.codigo_plato}}</td>
      <td>{{item.valor}}</td>
      <td>{{item.forma_pago}}</td>
      <td>{{item.tiempo_entrega}}</td>
      
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

            pedidos:[]

        }
    },

    created(){
        this.listarPedido();

    },

    methods:{
        listarPedido(){
            this.axios.get('/pedidos')
            .then(res=>{
                this.pedidos=res.data;

            })
            .catch(e=>{
                console.log(e.response)

            })
        }
    }


}
</script>