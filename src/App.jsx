import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './fragments/Fragment'
import React from 'react'
import Aleatory from './components/basic/Aleatory'
import Card from './components/layout/Card'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'
import StudentList from './components/basic/lists/StudentList'
import ProductList from './components/basic/lists/ProductList' 
import ParOuImpar from './components/conditional/ParOuImpar'
import ConditionalRenderize from './components/conditional/conditional'
import Funcionario from './components/conditional/Funcionario'
import DirectFather from './components/directCommunication/DirectFather'
import IndirectFather from './components/indirectCommunication/IndirectFather'

export default _ => {
    return (
        <div id="app">
            <First />
            <Fragment />
            <div className="cards">
                <Card title="#01 - Desafio aleatório" color="red">
                    <Aleatory max={20} min={10} />
                </Card>

                <Card title="#02 - Com parâmetro" color="green">
                    <WithParameter nota1={5.6} nota2={8.6} />
                </Card>
                <Card title="#03 - Com filhos">
                    <Family lastName="Fernandes">
                        <FamilyMember name="Guilherme"></FamilyMember>
                        <FamilyMember name="Cristina"></FamilyMember>
                        <FamilyMember name="Gustavo"></FamilyMember>
                    </Family>
                </Card>
                <Card title="#04 - Repetição">
                    <StudentList />
                </Card>
                <Card title="#05 - Repetição com produtos">
                    <ProductList />
                </Card>
                <Card title="#06 - Renderização condicional" color="red">
                    <ParOuImpar number={14} />
                </Card>
                <Card title="#07 - Renderização condicional 2" color="red">
                    <ConditionalRenderize name="Schiavone" isVisible={true}>
                        <Funcionario/>
                    </ConditionalRenderize>
                </Card>
                <Card title="#08 - Comunicação direta" color="green">
                    <DirectFather></DirectFather>
                </Card>
                <Card title="#09 - Comunicação indireta">
                    <IndirectFather></IndirectFather>
                </Card>
            </div>
        </div>
    )
}