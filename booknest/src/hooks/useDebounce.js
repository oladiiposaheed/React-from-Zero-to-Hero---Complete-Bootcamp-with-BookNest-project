import { useState, useEffect } from "react";


// Custom hook: delays a value until user stops changing it
function useDebounce(value, delay=500) {

    // value = the text to debounce (like searchTerm)
    // delay = how long to wait in milliseconds (500 = half second)

    // debouncedValue = the delayed version of value
    // setDebouncedValue = function to update it
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set a timer: after `delay` ms, update debouncedValue
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        // Example: delay=500 → wait half second → update

        // Cleanup function: if value changes before timer finishes, CANCEL it
        return () => clearTimeout(timer);
        // This prevents the old timer from firing
    }, [value, delay]);
    // Re-run when value or delay changes

    return debouncedValue;    // Return the delayed value    
}

export default useDebounce;