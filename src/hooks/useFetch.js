import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [state, setState] = useState({
        data : '',
        loading : true,
        error : null
    });

    useEffect(() => {
      
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const {name, region, coatOfArms} = data
                setState({
                    data: {name, region, coatOfArms},
                    loading : false,
                    error : null
                })
            })

    }, [url]);

    return state
}

export default useFetch;
