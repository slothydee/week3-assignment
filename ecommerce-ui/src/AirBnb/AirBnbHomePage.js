import React, { Component } from 'react';
import RentalProperty from './RentalProperty';
import airbnbs from '../data/airbnbs.json';

class AirBnbHomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shoppingCartItems: [],
        }
    }

    onSubmit = (e) => {
        const currShoppingCartItems = this.state.shoppingCartItems
        const clickedTitle = e.target.value
        const clickedItem = {'inShoppingCart': true, 'title': clickedTitle}

        if(currShoppingCartItems.filter(element => (element.title === clickedTitle)).length === 0){
            this.setState({
                shoppingCartItems: [...this.state.shoppingCartItems, clickedItem],
            });
        }
        console.log(currShoppingCartItems)
    }

    onRemove = (e) => {
        const item = {'title': e.target.value, 'inShoppingCart': false}
        this.setState({
            shoppingCartItems: [...this.state.shoppingCartItems, item],
        });
    }

    render() {
        const rentals = airbnbs.map((location, idx) => {
            return (
                <div className="homepage-child" key={idx}>
                    <RentalProperty rental={location} />
                    <button onClick={this.onSubmit} value={location.title}>Reserve</button>
                </div>
                )
        })
        return (
            <div>
            <h1>Rentals</h1>
            <div className="locations-gallery">
                <div className="homepage-child">
                {rentals}
                </div>
            </div>
            <div className="locations-gallery">{this._renderShoppingCart()}</div>
            </div>
        )
    }

    _renderShoppingCart= () => {
        const currShoppingCartItems = this.state.shoppingCartItems
        // return currShoppingCartItems.map((item) => {
        //     return (
        //         <div>
        //             <h1>Current Reservations</h1>
        //         <div className="shopping-cart-child" key={item.title + 'ShoppingCart'}>
        //             <p>{item.title}</p>
        //             <button onClick={this.onRemove} value={item.title}>Remove</button>
        //         </div>
        //         </div>
        //         )
        // })
    }
}
export default AirBnbHomePage