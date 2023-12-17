import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {

    const isMounted = useRef(true)

    const [state, setState] = useState({
        data : '',
        loading : true,
        error : null
    });

    useEffect(() => {

      return () => {
        isMounted.current = false
      };
    }, []);


    useEffect(() => {
      
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                
                const {name, region, coatOfArms} = data

                if (isMounted.current){
                    setState({
                        data: {name, region, coatOfArms},
                        loading : false,
                        error : null
                    })
                }                    
                    
            })

    }, [url]);

    return state
}

export default useFetch;
