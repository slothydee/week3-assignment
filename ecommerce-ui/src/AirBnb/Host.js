import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class Host extends Component {
    static propTypes = {
        host: PropTypes.shape({
            name: PropTypes.string,
            isSuperhost: PropTypes.bool
        })
    }

    render() {
        const {host} = this.props;
        return (
        <div className="host">
            <div className="host">
                    <div className='host-child'>
                        <h4>Host: {host.name} {this._renderHostIcon()}</h4>
                    </div>
            </div>  
        </div>
        )
    }
    _renderHostIcon = () => {
        if (this.props.host.isSuperhost) {
            return (
                <FontAwesomeIcon icon={faUserCircle} color={'rgb(49, 150, 36)'} title='superhost'/> 
            )
            }
        else {
            return (
                <FontAwesomeIcon icon={faUserCircle} className="fa-is-not-superhost"/>
            )
        }
    }
}

export default Host;