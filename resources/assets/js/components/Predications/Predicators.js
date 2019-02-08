import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class Predicators extends Component {
    constructor(props){
        super(props);
        console.log("voici lid de la video",this.props.videoId)

    }
    render() {
        return (
            <NavLink to="video/${this.props.videoId}">
            <div className='column div_predicator'>
                <div>
                    <img className="predicator_img" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
                </div>
                <div>
                    <h4>{this.props.titlePublication}</h4>
                    <p>{this.props.datePublication}</p>
                </div>
                <div>
                    <h4>{this.props.namePredicators}</h4>
                </div>

            </div>
            </NavLink>
        )
    }
}
export default Predicators;

