import React, {Component} from 'react';
import YouTube from 'react-youtube';
import Bar from "../HeaderBar/Bar";
import Footer from "../Footer";

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

            <div>
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
                <div className="row col-md-offset-2 col-md-8 text-center" style={{backgroundColor:'#f5f8fa',marginTop:15,marginBottom:15,borderRadius:30,paddingBottom:15}}>
                    <h3>Ajouter un commentaire</h3>

                    <form>

                        <div className="row col-md-12 form_margin">
                            <div className="col-md-2">
                                <label>
                                 Nom:
                                 </label>
                            </div>

                            <div className="col-md-10">

                            <input type="text" name="name" className="form-control"/>
                            </div>

                        </div>
                        <div className="row col-md-12 form_margin">
                            <div className="col-md-2">
                                <label>
                                    Adresse Email*:
                                </label>
                            </div>
                            <div className="col-md-10">
                                <input type="text" name="name" className="form-control" />
                            </div>

                        </div>
                        <div className="row col-md-12 form_margin">
                            <div className="col-md-2">
                                <label>
                                    Commentaire*:
                                </label>
                            </div>
                            <div className="col-md-10">
                                <textarea rows="5" type="text" name="name" className="form-control" />
                            </div>

                        </div>


                        <div className="row">
                            <input className="envoyer" type="submit" value="Envoyer" />
                        </div>


                    </form>
                </div>
                <Footer/>
            </div>


        )
    }
}
export default VideoPredication;