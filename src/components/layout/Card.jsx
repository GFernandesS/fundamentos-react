import React from 'react'
import './Card.css'

export default props => {
    const style = {
        backgroundColor: props.color  || 'red',
        borderColor: props.color || 'green' 
    }
    return (
        <div className="card" style={style}>
            <div className="title">{props.title}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}