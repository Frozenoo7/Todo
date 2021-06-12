import React from 'react'

function Button({title,color,functionHandler}) {
    return (
        <>
        <button className="btn-all" style={{backgroundColor:color}}  onClick={functionHandler}>{title}</button>
        </>
    )
}

export default Button;
