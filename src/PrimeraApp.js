import React from 'react';
//FC
const PrimeraApp = () => {

    const saludo = {
         nombre: 'edwin',
          edad: 34
    }

    return (
        <>
            {/*<h1>{saludo}</h1>*/}
            <pre>{JSON.stringify(saludo, null, 3)}</pre>;
            <p>Mi primera aplicacion</p>

        </>

    );

}

export default PrimeraApp;
