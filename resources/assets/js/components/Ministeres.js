import React, {Component} from 'react';
import Bar from "./HeaderBar/Bar";

class Ministeres extends Component {
    render() {
        return (
            <div className="row">
                <Bar/>
                <div className="col-md-12">
                    <p>Bienvenue sur la page des ministeres</p>

                </div>
            </div>
        )
    }
}
export default Ministeres;