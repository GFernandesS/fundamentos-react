import React from 'react'
import productList from '../../../data/products'
import '../css/ProductList.css'

export default _ => {
    let tableStructure = getTableStructure(productList);

    return (
        <table>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            {tableStructure}
        </table>
    )
}

function getTableStructure(productList) {
    return productList.map(product => {
        return (
            <tr key={product.id} className={product.id % 2 === 0 ? "par" : ""}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>R$ {product.prize.toFixed(2)}</td>
            </tr>
        )
    })
}