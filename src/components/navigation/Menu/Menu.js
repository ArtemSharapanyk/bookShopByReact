import React, { Component } from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';

export default class Menu extends Component{
    state = {
        links: [
            {
                name: 'Shop',
                href: '/',
            },
            {
                name: 'About',
                href: '/about',
            },
            {
                name: 'Log/Reg',
                href: '/auth' 
            },
            {
                name: 'Admin Panel',
                href: '/adminPanel'
            }
        ]
    }

    

    render(){
        let {isOpen, closeMenuFunc} = this.props;

        let cls = [
            'menu',
            !isOpen ? 'close' : ''
        ]

        
        return (
            <nav className={cls.join(' ')}>
                <ul>
                    {this.state.links.map((el, index) => (
                        <li key={index} onClick={closeMenuFunc}>
                            <NavLink to={el.href} exact activeClassName={'activeMenuLink'}>
                                {el.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}
