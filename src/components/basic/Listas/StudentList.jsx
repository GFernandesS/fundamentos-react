import React from 'react'
import studentList from '../../../data/alunos'

export default () => {
    let students = studentList.map(student => {
        return (
            <li>
                {student.nome} - {((student.nota1 + student.nota2)/2).toFixed(1)}
            </li>
        );
    });
    return (
        <div>
            <ul>
                {students}
            </ul>
        </div>
    )
}
