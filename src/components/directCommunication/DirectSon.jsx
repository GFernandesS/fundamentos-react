import React from 'react'

export default props => {
    return(
        <div>
            <div><strong>{props.text}</strong></div>
            <div>{props.number}</div>
            <div>{props.bool ? "Verdadeiro" : "Falso"}</div>
        </div>
    )
}