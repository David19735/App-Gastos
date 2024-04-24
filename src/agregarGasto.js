import { v4 as uuidv4 } from 'uuid'; //Paquete de generador de id
import { abrirFormulario,cerrarFormulario } from './eventoFormulario';
import renderGasto from './renderGasto';
const formulario=document.getElementById('formulario-gasto__form');
const descripcion=formulario.descripcion;
const precio=formulario.precio;


//Expresiones regulares
const expresionDescripcion=/^[a-zA-Z0-9\_\- ]{4,30}$/;
const expresionPrecio=/^\d+(\.\d+)?$/;



const comprobarDescripcion=()=>{

    if(expresionDescripcion.test(descripcion.value)){
        descripcion.classList.remove('formulario-gasto__input--error');
        descripcion.parentElement.querySelector('.formulario-gasto__leyenda').classList.remove('formulario-gasto__leyenda--active');
        return true;
    }
    else{
        descripcion.classList.add('formulario-gasto__input--error');
        descripcion.parentElement.querySelector('.formulario-gasto__leyenda').classList.add('formulario-gasto__leyenda--active');

        return false;
    }

}


const comprobarPrecio=()=>{

    if(expresionPrecio.test(precio.value)){
        precio.classList.remove('formulario-gasto__input--error');
        precio.parentElement.querySelector('.formulario-gasto__leyenda').classList.remove('formulario-gasto__leyenda--active');
        return true;
    }
    else{
        precio.classList.add('formulario-gasto__input--error');
        precio.parentElement.querySelector('.formulario-gasto__leyenda').classList.add('formulario-gasto__leyenda--active');
        return false;
    }

}

descripcion.addEventListener('blur',(e)=>{

    comprobarDescripcion();

});

descripcion.addEventListener('keyup',(e)=>{
    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarDescripcion();
    }
})

precio.addEventListener('blur',(e)=>{

    comprobarPrecio();
});

precio.addEventListener('keyup',(e)=>{
    if([...e.target.classList].includes('formulario-gasto__input--error')){
        comprobarPrecio();
    }
})



formulario.addEventListener('submit',(e)=>{

    e.preventDefault();

    if(comprobarDescripcion()&&comprobarPrecio()){

        const nuevoGasto={
            descripcion:descripcion.value,
            precio:precio.value,
            fecha:new Date(),
            id:uuidv4()
        }

        const gastosGuardados=JSON.parse(window.localStorage.getItem('gastos'));


        if(gastosGuardados){

            const nuevosGastos=[...gastosGuardados,nuevoGasto];
            window.localStorage.setItem('gastos',JSON.stringify(nuevosGastos));
        }
        else{

            window.localStorage.setItem('gastos',JSON.stringify([{...nuevoGasto}]));
        }
        
        renderGasto();
        cerrarFormulario();
        descripcion.value="";
        precio.value="";



        
    }

});
    

