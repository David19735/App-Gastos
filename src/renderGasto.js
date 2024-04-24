import { format } from "date-fns";
import { parseISO } from "date-fns";
import { es } from "date-fns/locale";



const renderGasto=()=>{
    
    const gastos=JSON.parse(window.localStorage.getItem('gastos'));
    const contenedorGastos=document.querySelector('.gastos__lista');
    const totalGastos=document.getElementById('total-gastado');



    if(gastos){

        document.querySelector('.gastos__mensaje').classList.remove('gastos__mensaje--active');
        contenedorGastos.innerHTML="";
        let suma=0;

        const formatoMoneda=new Intl.NumberFormat('en-MX',{style:'currency',currency:'MXN'});

        gastos.forEach((gasto)=> {

            suma=suma+parseFloat(gasto.precio);

            const plantilla=`
            <div class="gasto" data-id="${gasto.id}">
            <div class="gasto__info">
                <div>
                    <p class="gasto__nombre">${gasto.descripcion}</p>
                    <p class="gasto__cantidad">${formatoMoneda.format(gasto.precio)}</p>
                </div>
                <p class="gasto__fecha">${format(parseISO(gasto.fecha),"dd 'de' MMMM yyyy",{locale:es})}</p>
            </div>
            <div class="gasto__acciones">
                <button class="gasto__btn" data-accion="editar-gasto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                            fill-rule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                    </svg>
                    <span>Editar</span>
                </button>
                <button class="gasto__btn gasto__btn--rojo" data-accion="eliminar-gasto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"
                        />
                    </svg>
                    <span>Eliminar</span>
                </button>
            </div>
        </div>
            `;

            contenedorGastos.innerHTML+=plantilla;
        });


        totalGastos.innerHTML=formatoMoneda.format(suma);

    }
    else{
        document.querySelector('.gastos__mensaje').classList.add('gastos__mensaje--active');
        totalGastos.innerHTML="$0.00";
    }


    

}

export default renderGasto;