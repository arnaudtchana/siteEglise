import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";

class Evenements extends Component {
    render() {
        return (
            <div>
                <Bar/>
                <p>Bienvenue sur la page des evenements</p>
            </div>
        )
    }
}
export default Evenements;