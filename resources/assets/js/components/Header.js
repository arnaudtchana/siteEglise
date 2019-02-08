import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Header = () => (
    <div className='container'>
    <div className='row couleur_bar_menu col-md-12'>
        <div className='col-md-offset-1 col-md-1 text-center'>
            <img className="taille_img" src="images/logo.png" />
        </div>
    <div className="col-md-9 text-left">
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
            <ul className="nav navbar-nav">
            <li><NavLink className="active" to='/'>ACCUEIL</NavLink></li>
                <li><NavLink className="active" to="/predications">PREDICATIONS</NavLink></li>
                <li> <NavLink to="/ministeres">MINISTERES</NavLink></li>
                <li> <NavLink to="/evenements">EVENEMENTS</NavLink></li>
                <li> <NavLink to="/galerie">GALERIE</NavLink></li>
                <li> <NavLink to="/a_propos">A PROPOS</NavLink></li>
            </ul>
    </nav>
    </div>
    </div>
    </div>
)

export default Header