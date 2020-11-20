import React from 'react'

export default props => {
    return (
        <>
            <button onClick={_ => props.onClick("Guilherme", 10, true)}>Fornecer informações</button>
        </>
    )
}