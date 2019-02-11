import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";
import Footer from "./Footer";

class Predications extends Component {
    render() {
        return (
            <div>
                <Bar/>
                <p>Bienvenue sur la page des predications</p>
                <Footer/>
            </div>
        )
    }
}
export default Predications;