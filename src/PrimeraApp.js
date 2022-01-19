import React from 'react';
import PropsTypes from 'prop-types';
//FC
const PrimeraApp = ({ saludo, subtitulo }) => {
    // const saludo = 'Hola Mundo';
    // console.log(props)
    return (
        <>
            <h1>{saludo}</h1>
            {/*<pre>{JSON.stringify(saludo, null, 3)}</pre>;*/}
            <p>{ subtitulo }</p>
        </>
    );

}
PrimeraApp.propTypes = {
saludo: PropsTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: 'soy un subtitulo'
}
export default PrimeraApp;
