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

        if(currShoppingCartItems.filter(element => (element === clickedTitle)).length === 0){
            this.setState({
                shoppingCartItems: [...this.state.shoppingCartItems, clickedTitle],
            });
        }
    }

    onRemove = (e) => {
        const clickedItem = e.target.value
        const currShoppingCartItems = this.state.shoppingCartItems
        for( let i = 0; i < currShoppingCartItems.length; i++){ 
            if ( currShoppingCartItems[i] === clickedItem) { 
        
                currShoppingCartItems.splice(i, 1); 
                this.setState({
                    shoppingCartItems: currShoppingCartItems
                })
            }
        
        }
        
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
            <div>
            <h1>Current Reservations</h1>
            <div className="locations-gallery">{this._renderShoppingCart()}</div>
            </div>
            </div>
        )
    }

    _renderShoppingCart= () => {
        const currShoppingCartItems = this.state.shoppingCartItems
        return currShoppingCartItems.map((item) => {
                return (  
                    <div className="shopping-cart-child" key={item + 'ShoppingCart'}>
                        <p>{item}</p>
                        <button onClick={this.onRemove} value={item}>Remove</button>
                    </div>
                    )
        })
    }
}
export default AirBnbHomePage