import React, {useState} from 'react';

function Contador ({numero}){

    const [valor, setValor] = useState(numero);

    const contar =() => {
        setValor (valor + 1);
    }

    return(

        <>
            <h1>Aplicacion para contar. Valor inicial {numero}</h1>
            <h2>{valor}</h2>
             
            <button onClick={() => setValor (valor +1)}> Contar</button>
        </>

    );
}
export default Contador;

// <button onClick={() => setValor (valor +1)}> Contar</button>    { /*<button onClick={contar}></button>*/}