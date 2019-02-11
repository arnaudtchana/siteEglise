import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";
import Footer from "./Footer";

class Evenements extends Component {
    render() {
        return (
            <div>
            <div>
                <Bar/>
                <p>Bienvenue sur la page des evenements</p>
            </div>
                <Footer/>
            </div>
        )
    }
}
export default Evenements;