import React from 'react'

export default () => {
    const {a, b} = {a: 10, b: 15}
    const msg = "Minha mensagem do componente";
    return (
        <div>
            <p>{msg}</p>
            <h1>Meu primeiro componente2</h1>
        </div>
    )
}