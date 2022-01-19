import React from 'react';
import PropsTypes from 'prop-types';
//FC
const PrimeraApp = ({saludo }) => {
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
PrimeraApp.propTypes = {
saludo: PropsTypes.string.isRequired
}
export default PrimeraApp;
