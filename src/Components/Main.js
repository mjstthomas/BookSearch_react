import React, { Component } from 'react';
import axios from 'axios';
import Book from './Book.js'

export default class Main extends Component {

    state = {
        LoadedData: [],
        searchTerm:'',
        printType: '',
        filter: '',
        Loading: false
    }



    handleSubmit = event => {
        event.preventDefault()
        setTimeout(()=> {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}+printType=${this.state.printType}+filter=${this.state.filter}`)
            .then(response => {
                const Data = response.data.items
                console.log(Data)
                this.setState({
                    LoadedData: Data,
                    Loading: !this.state.Loading
                })
                console.log(Data)
            })
            
        }, 2000)
    }
    handleChange= event => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    handleClick = event => {
        console.log(this.state)
        this.setState({Loading: true})

    }
    render() {
        const Books = this.state.LoadedData.map(book =>{
            return <Book 
            key={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            image={book.volumeInfo.imageLinks.thumbnail}
            />
            console.log(book.saleInfo.retailPrice.amount[0])
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchTerm" onChange={this.handleChange} />
                    <select name="printType" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="all">all</option>
                        <option value="book">book</option>
                        <option value="magazine">magazine</option>
                    </select>
                    <select name="filter" onChange={this.handleChange}>
                        <option value=""></option>
                        <option value="free-ebooks">free-ebooks</option>
                        <option value="paid-ebooks">paid-ebooks</option>
                    </select>
                    <button type="submit" onClick={this.handleClick}>Search</button>
                </form>
                {this.state.Loading && <h2>Loading.....</h2>}
                {Books}

            </div>
        )
    }
}
