import React, {Component} from 'react';
import { Router, Route, Link,NavLink } from 'react-router-dom';

class Master extends Component {
    render(){
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">AppDividend here</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <NavLink to='/'>Tasksman</NavLink>
                            <NavLink to="/master">Master</NavLink>
                            <NavLink to="/example">Example ici</NavLink>
                        </ul>
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Master;