import React from 'react'
import './MonthCategoies.css'

function MonthCategoies(props) {
    return (
        <>
            <div className='d-flex flex-column justify-conntent-center'>
                <img src={props.images} alt="" className='img-fluid'/>
                <p className='text-muted' style={{textOverflow: 'ellipsis' ,whiteSpace: 'nowrap' , overflow: 'hidden'}}>{props.name}</p>
            </div>
        </>

    )
}

export default MonthCategoies