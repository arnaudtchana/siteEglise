import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";
import Footer from "./Footer";

class About extends Component {
    render() {
        return (
            <div>
            <div>
                <Bar/>
                <p>Bienvenue sur la page a propos</p>
            </div>
                <Footer/>
            </div>
        )
    }
}
export default About;