import React from 'react'

export default props => {
    const generateAleatory = (max, min) => Math.floor(Math.random() * (max - min)) + min;
    return (
        <React.Fragment>
            <p>Valor máximo: {props.max}</p>
            <p>Valor mínimo: {props.min}</p>
            <p>Valor escolhido: {generateAleatory(props.max, props.min)}</p>
        </React.Fragment>
    )
}

