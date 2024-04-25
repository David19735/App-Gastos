const contenedorFormulario=document.getElementById('formulario-gasto');
const boton=document.getElementById('toggle-form-gasto');

//Función para abrir el formulario

const abrirFormulario=(modo)=>{
    
    contenedorFormulario.classList.add('formulario-gasto--active');
    boton.classList.add('agregar-gasto__btn--active');


    if(modo==="agregarGasto"){

        document.querySelector('.formulario-gasto__titulo').innerHTML="Agregar gasto";
        document.querySelector('.formulario-gasto__btn').innerHTML="Agregar gasto";
        document.querySelector('.formulario-gasto').dataset.modo="agregarGasto";
        document.getElementById('descripcion').value="";
            document.getElementById('precio').value="";

    }
    else if(modo==="editarGasto"){
        

        document.querySelector('.formulario-gasto__titulo').innerHTML="Editar gasto";
        document.querySelector('.formulario-gasto__btn').innerHTML="Editar gasto";
        document.querySelector('.formulario-gasto').dataset.modo="editarGasto";

    }
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
        abrirFormulario("agregarGasto");
    }

});

export {abrirFormulario,cerrarFormulario};

