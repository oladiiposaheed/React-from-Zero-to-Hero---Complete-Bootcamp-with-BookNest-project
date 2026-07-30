import { useState, useEffect } from "react";

// Custom hook: saves data to browser storage

function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {
        // Get saved data from browser storage
        const stored = localStorage.getItem(key);
        // stored = the saved string, or null if nothing saved

        if (stored) {
            // Data exists — convert from string to JavaScript
            return JSON.parse(stored);
        } else {
            // No saved data — use the default value
            return initialValue;
        }
    });

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
     // Runs when key or value changes

    return [value, setValue];
}

export default useLocalStorage;



// Note:
// useState can take a FUNCTION
// The function runs ONLY ONCE (first render)

// JSON.stringify converts JavaScript to string
// "Fatimah" stays "Fatimah"
// [{id: 1}] → '[{"id":1}]'





