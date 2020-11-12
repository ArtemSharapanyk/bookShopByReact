import React, { Component } from 'react'
import './Layout.css';
import Menu from '../../components/navigation/Menu/Menu';
import ToggleMenuBtn from '../../components/navigation/ToggleBtnMenu/ToggleBtnMenu';

export default class Layout extends Component{
    state = {
        menu: false
    }
    
    menuBtnHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    closeMenuOnClickHandler = () => {
        this.setState({
            menu: false
        })
    }

    render(){
        return (
            <div className="app">
                <div className="wrapper">
                    <div className="title">
                        Books shop
                    </div>
                    <main>
                        {this.props.children}
                    </main>
                    
                    <Menu isOpen={this.state.menu} closeMenuFunc={this.closeMenuOnClickHandler}/>
                    <ToggleMenuBtn menuBtnHandler={this.menuBtnHandler} isOpen={this.state.menu} />
                </div>
            </div>
        )
    }
}