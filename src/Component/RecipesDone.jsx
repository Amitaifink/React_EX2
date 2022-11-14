import React, { Component } from 'react';
import Recipes from './Recipes';


class RecipesDone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: 'none'

        }
    }

    render() {
        if (this.props.count === 0) {
            this.state.isDisplay = 'none'
        } else {
            this.state.isDisplay = 'block'
        }
        return (
            <div style={{ display: this.state.isDisplay }} className='mt-5 row '>
                <h1>Recipes Done</h1>
                <h2>אבי אכל: {this.props.count} מנות</h2>
                <div className='row'>
                    {this.props.dishesarr}
                </div>
            </div>
        );
    }
}


export default RecipesDone;