import React from 'react'

export default function Book(props) {
	const myStyle = {
		height: '100px',
		width: '90%',
		margin: '10px 5%',
		padding: '10px',
		border: '1px solid black',
		borderRadius: '15px'
	}
    return (
        <div style={myStyle}>
        	<img src={props.image} />
            <h3> {props.title} </h3>
            <p className="author">{props.author}</p>
            <p className="price">{props.price}</p>
        </div>
    )
}
