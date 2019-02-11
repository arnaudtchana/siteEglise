import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { person } from 'react-icons-kit/iconic/person'


class Predicators extends Component {
    constructor(props){
        super(props);
        console.log("voici lid de la video",this.props.videoId)

    }
    componentDidMount(){
        //const {videoId} = this.props.match.params.videoId;
        /*on peut faire la requete pour recuperer l'id de la video ici*/
    }
    render() {
        return (
            <NavLink className="navlink" to={{pathname:`video/${this.props.videoId}`}}>
            <div className='column div_predicator'>
                <div>
                    <img className="predicator_img" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" />
                </div>
                <div className="predicator_title text-center">
                    <h4 className="h4_text">{this.props.titlePublication}</h4>
                    <h6>{this.props.datePublication}</h6>
                </div>
                <div className="predicator_name">

                    <h5 className="h5_name text-center">
                        <Icon icon={person} size={20} />
                        {this.props.namePredicators}
                        </h5>
                </div>

            </div>
            </NavLink>
        )
    }
}
export default Predicators;

