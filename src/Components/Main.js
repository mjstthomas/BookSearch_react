import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book.js'

export default class Main extends Component {

    state = {
        LoadedData: [],
        searchTerm:'kids',
    }


    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`)
            .then(response => {
                const Data = response.data.items
                console.log(Data)
                this.setState({
                    LoadedData:Data
                })
                console.log(Data)
            })
            
    }


    render() {
        const Books = this.state.LoadedData.map(book =>{
            return <Book 
            title={book.volumeInfo.title}/>
        })

        return (
            <div>
                {Books}

            </div>
        )
    }
}
