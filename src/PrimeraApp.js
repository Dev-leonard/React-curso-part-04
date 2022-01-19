import React from 'react';
//FC
const PrimeraApp = ({saludo = 'Hola Mundo'}) => {
    // const saludo = 'Hola Mundo';
    // console.log(props)
    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>;*/}
            <p>Mi primera aplicacion</p>
        </>
    );

}
export default PrimeraApp;
