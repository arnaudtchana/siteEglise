import React, {Component} from 'react';
import YouTube from 'react-youtube';
import Bar from "../HeaderBar/Bar";

class VideoPredication extends Component {
    constructor(props){
        super(props);
        this.state = {
            videoId : this.props.match.params.videoId
        }


    }
    componentDidMount(){
        //const {videoId} = this.props.match.params.videoId;
        /*on peut faire la requete pour recuperer l'id de la video ici*/
    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (

            <div className="row">
                <Bar/>
                <div className="col-md-offset-2 col-md-8 text-center">



                    <YouTube
                        videoId={this.state.videoId}
                        opts={opts}
                        onReady={this._onReady}
                    />


                </div>
            </div>
        )
    }
}
export default VideoPredication;