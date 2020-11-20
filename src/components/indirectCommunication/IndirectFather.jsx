import React from 'react'
import IndirectSon from './IndirectSon'

export default props => {

    const fornecerInformacoes = (name, age, nerd) => {
        console.log(name, age, nerd);
    }
    return(
        <div>
            <IndirectSon onClick={fornecerInformacoes}></IndirectSon>
        </div>
    )
}