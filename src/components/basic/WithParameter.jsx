import React from 'react'

export default (props) => {
    let nota = calculaMedia(props.nota1, props.nota2);
    let status = nota >= 7
                ? <font color="yellow">Aprovado</font> 
                : <font color="red">Reprovado</font>
                
    return <h2><strong>Nota:</strong> {nota}| Status: {status} </h2>
}

function calculaMedia(nota1, nota2){
    return (nota1+nota2)/2;
}