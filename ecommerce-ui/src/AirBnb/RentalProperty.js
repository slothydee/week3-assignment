import React, { Component } from 'react';
import Host from './Host'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class RentalProperty extends Component {
    static propTypes = {
            rental: PropTypes.shape({
                title: PropTypes.string,
                houseType: PropTypes.string,
                image: PropTypes.string,
                location: PropTypes.shape({
                    city: PropTypes.string,
                    county: PropTypes.string,
                }),
                host: PropTypes.shape({
                    name: PropTypes.string,
                    isSuperhost: PropTypes.bool
                })
            })
    }
    render() {
        const {rental} = this.props;
        return (
            <div>
                <h2>{rental.title}</h2>
                <div className = 'homepage-child'>
                    <img alt={rental.title} src={rental.image} className="img"></img>
                </div>
                <div className='locations-gallery'>
                    <div className='homepage-child'> Type: {rental.houseType} </div>
                    <div className='homepage-child'> Location: {rental.location.city}, {rental.location.country} </div>
                    <div className='homepage-child'> ${rental.payment.cost} </div>
                    <div className='homepage-child'> {this._renderStars(rental.rating.stars)}</div>
                    <div className="homepage-child">
                        <Host host={this.props.rental.host} ></Host>
                    </div>
                </div>
            </div>
        )
    }
    _renderStars= (starCount) => {
        return (
            <div>
            <FontAwesomeIcon icon={faStar} color={'rgb(255,213,0)'} /> 
            {starCount}
            </div>
        )
    }
}
export default RentalProperty