import { useReducer, useCallback } from 'react';

const initialState = {
    loading: false,
    error: null,
    data: null,
    extra: null,
    identifier: null
};

const httpReducer = (currentHttpState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: null, extra: null, identifier: action.identifier };
        case 'RESPONSE':
            return { ...currentHttpState, loading: false, data: action.responseData, extra: action.extra };
        case 'ERROR':
            return { loading: false, error: action.errorData };
        case 'CLEAR':
            return initialState;
        default:
            throw new Error('Should not get here!');
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

    const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }, []), []);

    const sendRequest = useCallback((url, method, body, extra, identifier) => {
        dispatchHttp({ type: 'SEND', identifier });

        fetch(url, {
            method,
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseData => {
                dispatchHttp({
                    type: 'RESPONSE',
                    responseData,
                    extra
                });
            })
            .catch(error => {
                console.error(error);
                dispatchHttp({
                    type: 'ERROR',
                    errorData: error.message
                });
            });
    }, []);

    return {
        loading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        extra: httpState.extra,
        identifier: httpState.identifier,
        sendRequest,
        clear
    };
};

export default useHttp;