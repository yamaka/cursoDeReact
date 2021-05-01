import React from 'react'

export default function ListaFrutas({aFrutas}) {
    return (
        <div>
            <ul>
                {aFrutas.map(fruta => <li>{fruta}</li>)} 
            </ul>
        </div>
    )
}
