import { abrirFormulario } from "./eventoFormulario";
import renderGasto from "./renderGasto";
import { cerrarFormulario } from "./eventoFormulario";

const contenedorGastos=document.getElementById('gastos');


contenedorGastos.addEventListener('click',(e)=>{

    const gasto=e.target.closest('.gasto');

    if(gasto){

        if(gasto.scrollLeft>0){
            gasto.querySelector('.gasto__info').scrollIntoView({
                behavior:'smooth',
                inline:'start',
                block:'nearest'
            })
        }
        else{
            gasto.querySelector('.gasto__acciones').scrollIntoView({
                behavior:'smooth',
                inline:'start',
                block:'nearest'
            })
        }
    }
    if(e.target.closest('[data-accion="editar-gasto"]')){

        const gastosGuardados=JSON.parse(window.localStorage.getItem('gastos'));
        const id=gasto.dataset.id;

        let descripcion="";
        let precio="";

        gastosGuardados.forEach((gasto)=> {

            if(gasto.id===id){
                descripcion=gasto.descripcion;
                precio=gasto.precio;
            }

            document.querySelector('.formulario-gasto').dataset.id=id;
            document.getElementById('descripcion').value=descripcion;
            document.getElementById('precio').value=precio;

            
            
        });

        
        
        abrirFormulario("editarGasto");

    }

    if(e.target.closest('[data-accion="eliminar-gasto"]')){
        
        const id=gasto?.dataset?.id;
        const gastosGuardados=JSON.parse(window.localStorage.getItem('gastos'));


        const nuevosGastos=gastosGuardados.filter((gasto)=>{
            if(gasto.id!==id){
                return gasto;
            }
        })

        
        window.localStorage.setItem('gastos',JSON.stringify(nuevosGastos));

        renderGasto();
       

    }



});