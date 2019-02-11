import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";
import Footer from "./Footer";

class Ministeres extends Component {
    render() {
        return (
            <div>
            <div className="row">
                <Bar/>
                <div className="col-md-12">
                    <p>Bienvenue sur la page des ministeres</p>

                </div>
            </div>
                <Footer/>
            </div>
        )
    }
}
export default Ministeres;