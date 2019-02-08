/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
import Accueil from "./components/Accueil";


require('./bootstrap');
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Route, BrowserRouter,Switch,HashRouter } from 'react-router-dom';
import Example from './components/Example';
import Master from './Components/Master';
import CreateItem from './components/CreateItem';
import Header from './Components/Header'
import Predications from "./components/Predications";
import Ministeres from "./components/Ministeres";
import Evenements from "./components/Evenements";
import About from "./components/About";
import Galerie from "./components/Galerie";
import VideoPredication from "./components/Predications/VideoPredication";



/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

class App extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <Route path="/" component={Accueil} exact />
                    <Route path="/predications" component={Predications} />
                    <Route path="/ministeres" component={Ministeres} />
                    <Route path="/evenements" component={Evenements} />
                    <Route path="/galerie" component={Galerie} />
                    <Route path="/a_propos" component={About} />
                    <Route path="/video/:videoId" component={VideoPredication} />

                </div>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('example'))

