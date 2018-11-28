import React, { Component } from 'react';
import styles from './layout.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

class Layout extends Component {
    state = { 
        showNav: false
     }
    render() { 
        return ( 
            <div className={styles.body}>
                <Header
                   showNav = {this.state.showNav}
                   onHideNav = {() => this.setState({showNav: false})}
                   onOpenNav = {() => this.setState({showNav: true})}
                />
                {this.props.children}
                <Footer/>
            </div>
         );
    }
}
 
export default Layout;
