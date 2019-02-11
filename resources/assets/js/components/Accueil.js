import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Predicators from "./Predications/Predicators";
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';
import Maps from "./maps";


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
            <div className='row' style={{minHeight:'100%'}}>
                <div className='col-md-12 delete_padding'>
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                    >
                        <div>
                            <div className="details text-center">
                                <NavLink to="/a_propos" className="plus_de_detail navlink">Plus de détails</NavLink>
                            </div>
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
                <div className="column" style={{paddingLeft:50,paddingRight:50}}>
                    <div className='row marge_haut_container'>
                        <div className='col-md-5 marge_div'>
                        <h1 className='style_titre_predication'>Dernières prédications</h1>
                        <hr className="soulignement" />
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
                    <div className='row marge_haut_container'>
                        <div className='col-md-5 marge_div'>
                            <h1 className='style_titre_predication'>Prédications récentes</h1>
                            <hr className="soulignement" />
                        </div>
                    </div>
                    <div className="row paading">
                        <p>ici la liste des predications recentes</p>
                    </div>
                    <div className='row marge_haut_container'>
                        <div className='col-md-5 marge_div'>
                            <h1 className='style_titre_predication'>Evènements à venir</h1>
                            <hr className="soulignement" />
                        </div>
                    </div>
                    <div className="row paading">
                        <p>ici la liste des evenments a venir</p>
                    </div>
                    <div className='row marge_haut_container'>
                        <div className='col-md-5 marge_div'>
                            <h1 className='style_titre_predication'>Localisation</h1>
                            <hr className="soulignement" />
                        </div>
                    </div>
                    <div className="row padding">
                        <Maps />
                    </div>
            </div>
                <Footer/>
            </div>
        )
    }
}
export default Accueil;

