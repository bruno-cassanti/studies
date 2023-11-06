import React from "react";
import './styles.scss'

export default function List() {
    const task = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {
        tarefa: 'Js',
        tempo: '01:00:00'
    }]
    return(
        <aside className="task__list">
            <h2> Estudos do dia </h2>
            <ul>
                {task.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}