import React, { Component } from 'react';
import axios from 'axios'
import List from './containers/list'

export default class App extends Component {

    state = {
        allPhotos: [],
        errorMsg: ''
    }
    
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos`).then(
            response => {
                const { data } = response
                this.setState({ allPhotos: data })
            },
            error => {
                this.setState({ errorMsg: error.message })
            }
        )
    }

    render() {
        return (
            <div>
                <List {...this.state}/>
            </div>
        )
    }
}


