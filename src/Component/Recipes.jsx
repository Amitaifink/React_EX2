
import React, { Component } from 'react'
import Recipe from './Recipe';

export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <div className='row mx-auto' >
                <h2>Recipes made</h2>
                {this.props.dishesarr}
            </div>
        )
    }
}
