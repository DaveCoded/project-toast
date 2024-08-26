import React from 'react';

import { VARIANT_OPTIONS } from '../../constants';
import { ToastContext } from '../ToastProvider';
import Button from '../Button';

import styles from './ToastForm.module.css';

function ToastForm() {
    const [message, setMessage] = React.useState('');
    const [variant, setVariant] = React.useState('notice');

    const { addToast } = React.useContext(ToastContext);
    const textareaRef = React.useRef();

    const handleMessageChange = event => {
        setMessage(event.target.value);
    };

    const handleVariantChange = event => {
        setVariant(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        addToast({ variant, message });
        setMessage('');
        setVariant('notice');
        textareaRef.current?.focus();
    };

    return (
        <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
            <div className={styles.row}>
                <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
                    Message
                </label>
                <div className={styles.inputWrapper}>
                    <textarea
                        ref={textareaRef}
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        className={styles.messageInput}
                    />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.label}>Variant</div>
                <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                    {VARIANT_OPTIONS.map(option => (
                        <label key={option} htmlFor={`variant-${option}`}>
                            <input
                                id={`variant-${option}`}
                                type="radio"
                                name="variant"
                                value={option}
                                checked={option === variant}
                                onChange={handleVariantChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.label} />
                <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                    <Button type="submit" disabled={!message}>
                        Pop Toast!
                    </Button>
                </div>
            </div>
        </form>
    );
}

export default ToastForm;
