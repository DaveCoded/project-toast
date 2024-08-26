import React from 'react';

import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img alt="Cute toast mascot" src="/toast.png" />
            <h1>Toast Playground</h1>
        </header>
    );
}

export default Header;
