import { useState, useEffect } from "react";


function useFetch(url) {
    const [data, setData] = useState(null);    // Fetched data
    const [loading, setLoading] = useState(true);    // Loading state
    const [error, setError] = useState(null);     // Error state

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(url);
                if (!response.ok) 
                    throw new Error('Failed to fetch');

                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [url]);   // Re-fetch when URL changes

    return { data, loading, error };
}

export default useFetch;