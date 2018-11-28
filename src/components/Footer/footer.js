import React from 'react';
import styles from './footer.css';

import { Link } from 'react-router-dom';

import {CURRENT_YEAR} from '../../config';

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <Link to="/" className={styles.logo}>
                <img alt="f_logo" src="/images/win.png"/>
            </Link>
            <div className={styles.right}>
                @Microsoft {CURRENT_YEAR} All rights reserved
            </div>
        </div>
     );
}
 
export default Footer;