'use strict';

const contenedorFormulario=document.getElementById('formulario-gasto');
const boton=document.getElementById('toggle-form-gasto');

//Función para abrir el formulario

const abrirFormulario=()=>{
    contenedorFormulario.classList.add('formulario-gasto--active');
    boton.classList.add('agregar-gasto__btn--active');
};

//Función para cerrar el formulario

const cerrarFormulario=()=>{
    contenedorFormulario.classList.remove('formulario-gasto--active');
    boton.classList.remove('agregar-gasto__btn--active');
};


//Evento al presionar el botón verde
boton.addEventListener('click',(e)=>{
    e.preventDefault();

    if([...contenedorFormulario.classList].includes('formulario-gasto--active')){
        cerrarFormulario();

    }
    else {
        abrirFormulario();
    }

});

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
    }
    else {
        descripcion.classList.add('formulario-gasto__input--error');
        descripcion.parentElement.querySelector('.formulario-gasto__leyenda').classList.add('formulario-gasto__leyenda--active');
    }

};


const comprobarPrecio=()=>{

    if(expresionPrecio.test(precio.value)){
        precio.classList.remove('formulario-gasto__input--error');
        precio.parentElement.querySelector('.formulario-gasto__leyenda').classList.remove('formulario-gasto__leyenda--active');
    }
    else {
        precio.classList.add('formulario-gasto__input--error');
        precio.parentElement.querySelector('.formulario-gasto__leyenda').classList.add('formulario-gasto__leyenda--active');
    }

};

descripcion.addEventListener('blur',(e)=>{

    comprobarDescripcion();

});

precio.addEventListener('blur',(e)=>{

    comprobarPrecio();
});
//# sourceMappingURL=bundle.js.map
