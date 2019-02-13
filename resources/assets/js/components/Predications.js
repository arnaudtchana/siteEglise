import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";
import Footer from "./Footer";
import Predicators from "./Predications/Predicators";

class Predications extends Component {
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
                <Bar/>
                <div className='row'>
                    <div className='col-md-5 marge_div'>
                        <h1 className='style_titre_predication'>Prédications</h1>
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
                <Footer/>
            </div>
        )
    }
}
export default Predications;