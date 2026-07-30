import { useEffect } from "react";


function useDocumentTitle(title) {
    // title = the text to show in the browser tab

    useEffect(() => {
        // Update the browser tab title
        document.title = title;
        // Example: document.title = '🛒 3 items — BookNest'
    }, [title]);
    // Re-run when title changes
}

export default useDocumentTitle;