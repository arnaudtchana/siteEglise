import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Predicators from "./Predications/Predicators";


class Accueil extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:[
                {
                    titlePublication:"Le Mistere de la naissance du Christ",
                    datePublication:"1er janvier 2018",
                    nameAuthor:"Ngongang Boris",
                    videoId:'iMk0Zv5QmLM'
                },
                {
                    titlePublication:"Le Mistere de la naissance du Christ",
                    datePublication:"1er janvier 2018",
                    nameAuthor:"Tankeu yolande",
                    videoId:'rGnlRvRKbqM'

                },
                {
                    titlePublication:"Le Mistere de la naissance du Christ",
                    datePublication:"1er janvier 2018",
                    nameAuthor:"Nguedjo viviane",
                    videoId:'9RlwmR048vA'

                },
            ]
        }

    }
    render() {
        return (
            <div>
            <div className='row'>
                <div className='col-md-12 delete_padding'>
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                    >
                        <div>
                            <img src="images/homeSlideImages/02.jpg" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="images/homeSlideImages/07.jpg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="images/homeSlideImages/default.jpg" />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div>
                            <img src="images/homeSlideImages/gate.jpg" />
                            <p className="legend">Legend 4</p>
                        </div>
                    </Carousel>

                </div>
            </div>
                <div className='row marge_haut_container'>
                    <div className='col-md-offset-1 col-md-6'>
                        <h1 className='style_titre_predication'>Dernières prédications</h1>
                    </div>
                </div>

                <div className='row padding'>
                {
                    this.state.dataSource.map(function(predicators){
                        return (
                            <div className='col-md-4'>
                            <Predicators
                                titlePublication={predicators.titlePublication}
                                datePublication={predicators.datePublication}
                                namePredicators={predicators.nameAuthor}
                                videoId={predicators.videoId}
                            />
                            </div>
                        );
                    })
                }
                </div>
            </div>
        )
    }
}
export default Accueil;

