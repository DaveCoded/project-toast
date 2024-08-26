import React from 'react';

import Header from '../Header';
import ToastForm from '../ToastForm';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <ToastForm />
            <ToastShelf />
        </div>
    );
}

export default ToastPlayground;
