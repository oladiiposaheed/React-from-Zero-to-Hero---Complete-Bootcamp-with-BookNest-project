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






import useFetch from "./hooks/useFetch";

function App() {
    const { data, loading, error } = useFetch(
        'https://openlibrary.org/search.json?q=react&limit=5'
    );

    if (loading) 
        return <p>⏳ Loading...</p>;
    
    if (error) 
        return <p>❌ {error}</p>;

    return (
        <div>
            <h1>useFetch Demo</h1>
            <p>Found {data?.docs?.length || 0} books</p>
            <ul>
                {data?.docs?.map((book, i) => (
                    <li key={i}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;