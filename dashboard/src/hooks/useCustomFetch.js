import { useEffect, useState } from 'react';

export const useCustomFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasErrors: null,
    })


    useEffect(() => {

        setState({
            ...state,
            isLoading: true,
        })
        fetch(url)
            .then(res => res.json())
            .then(data =>
                setState({
                    data:data.data,
                    isLoading: false,
                    hasErrors: false,
                })
            )
            .catch(err => {
                setState({
                    data: null,
                    isLoading: false,
                    hasErrors: err,
                })
            })
    }, [url])

    return {
        data:state.data,
        isLoading: state.isLoading,
        hasErrors: state.hasErrors,
    }

}