import First from './components/basic/First'
import WithParameter from './components/basic/WithParameter'
import Fragment from './fragments/Fragment'
import React from 'react'
import Aleatory from './components/basic/Aleatory'
import Card from './components/layout/Card'
import Family from './components/basic/Family'
import FamilyMember from './components/basic/FamilyMember'
import StudentList from './components/basic/Listas/StudentList'

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
                    <StudentList/>
                </Card>
            </div>
        </div>
    )
}