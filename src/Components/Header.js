import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style={maindiv}>

                <h1> Searh for your Favorite BOOK</h1>
                
            </div>
        )
    }
}

const maindiv={
    borderStyle:'solid',
    borderColor:'red',
    width:"50%",
    margin:"0 auto"
}