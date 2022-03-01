import React from 'react'
import { useParams } from 'react-router-dom'

export const Param = (props) => {
    const { id } = useParams(); 
    return (
        <div className="Param">
            <h4>Param</h4>
            <p>Valor: {id}</p>
        </div>
    )
}

export default Param;
