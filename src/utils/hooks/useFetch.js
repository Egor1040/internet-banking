import { useEffect, useState } from "react"


export const useFetch = (api) => {
    const [res, setRes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(api)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setRes(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
        });
    }, [api])
    return { res, loading, error };
}