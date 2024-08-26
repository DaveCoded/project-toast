import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
    const { toasts, removeToast } = React.useContext(ToastContext);

    if (toasts.length === 0) return null;

    return (
        <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
            {toasts.map(({ variant, message, id }) => {
                return (
                    <li className={styles.toastWrapper} key={id}>
                        <Toast variant={variant} handleDismiss={() => removeToast(id)}>
                            {message}
                        </Toast>
                    </li>
                );
            })}
        </ol>
    );
}

export default ToastShelf;
