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
        return (
        <div className="host">
            <div className="host">
                    <div className='article-child'>
                        <h4>{this.props.author.name}</h4>
                    </div>
                        <div className='article-child'>
                        _renderHostIcon()
                        </div>
            </div>  
        </div>
        )
    }
    _renderHostIcon = () => {
        if (this.props.host.isSuperhost) {
            return (
                <div className='article-child'>
                <FontAwesomeIcon icon={faUserCircle} className="fa-is-host"/>
                </div>
            )
            }
        else {
            return (
                <div className='article-child'>
                <FontAwesomeIcon icon={faUserCircle} className="fa-is-not-superhost"/>
                </div>
            )
        }
    }
}

export default Host;