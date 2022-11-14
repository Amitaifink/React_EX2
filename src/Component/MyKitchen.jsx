import React, { Component } from 'react';
import Recipes from './Recipes';
import dishesArr from './dishArr';
import RecipesDone from './RecipesDone';
import Recipe from './Recipe';



class MyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishesArr.map((dish) => {
                return (
                    <Recipe

                        name={dish.name}
                        desc={dish.desc}
                        imgUrl={dish.imgUrl}
                        getDish={this.getDish}
                        btnTxt='Get Dish'
                        class='btn btn-success btn-lg'
                        
                    />)

            }),
            recipesDone: [],
            count: 0
        }

    }
    getDish = (dishName) => {
        let dish = dishesArr.find((dish) => {
            return dish.name === dishName
        })
        let dishComponent = <Recipe
            name={dish.name}
            desc={dish.desc}
            imgUrl={dish.imgUrl}
            getDish={this.removeDish}
            btnTxt='eat dish'
            class='btn btn-outline-danger btn-lg'
             
        />


        
        this.setState({
            recipesDone: [...this.state.recipesDone, dishComponent],
            dishes: this.state.dishes.filter((dish) => {
                return dish.props.name !== dishName
            }),
            count: this.state.count + 1

        })

    }
    removeDish = (dishName) => {
        let dish = dishesArr.find((dish) => {
            return dish.name === dishName
        })
        let dishComponent = <Recipe
            name={dish.name}
            desc={dish.desc}
            imgUrl={dish.imgUrl}
            getDish={this.getDish}
            btnTxt='Get Dish'
            class='btn btn-success btn-lg'
        />
        this.setState({
            dishes: [...this.state.dishes, dishComponent],
            recipesDone: this.state.recipesDone.filter((dish) => {
                return dish.props.name !== dishName
            }),
            count: this.state.count - 1

        })
    }


    render() {

        return (

            <div className='container'>
                <h1>My Kitchen</h1>

                <Recipes dishesarr={this.state.dishes} />
              
                <RecipesDone count={this.state.count} dishesarr={this.state.recipesDone} />
            </div>
        );
    }
}



export default MyKitchen;