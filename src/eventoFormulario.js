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
    else{
        abrirFormulario();
    }

});

export {abrirFormulario,cerrarFormulario};

