import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";
import Footer from "./Footer";

class Galerie extends Component {
    render() {
        return (
            <div>
            <div>
                <Bar/>
                <p>Bienvenue sur la page des galeries</p>
            </div>
                <Footer/>
            </div>
        )
    }
}
export default Galerie;