import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const styles = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffe5d9'
    }
};

export default function Footer() {
    return (
        <div style = {styles.footer}>
            <a href="https://github.com/">Github Profile</a>
            <a href="https://www.linkedin.com/in/michael-bosse1/">linkedin Profile</a>
    </div>
    );
};