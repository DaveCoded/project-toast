import React from 'react';
import { useKeydown } from '../../hooks';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([]);

    const addToast = React.useCallback(({ variant, message }) => {
        setToasts(prevToasts => [...prevToasts, { variant, message, id: crypto.randomUUID() }]);
    }, []);

    const removeToast = React.useCallback(id => {
        setToasts(prevToasts => prevToasts.filter(t => t.id !== id));
    }, []);

    const removeAllToasts = React.useCallback(() => {
        setToasts([]);
    }, []);

    useKeydown('Escape', removeAllToasts);

    const value = React.useMemo(
        () => ({
            toasts,
            addToast,
            removeToast
        }),
        [toasts, addToast, removeToast]
    );

    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
