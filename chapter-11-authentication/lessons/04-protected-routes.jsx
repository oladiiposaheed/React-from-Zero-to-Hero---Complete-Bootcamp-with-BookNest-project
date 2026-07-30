import { Navigate } from 'react-router-dom';   
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
    const { user } = useAuth()   // Get current user
    // Get user from auth context (null = not logged in)

    if (!user) {
        // If not logged in → redirect to login page
        return <Navigate to='/login' replace />;
    }

    // If logged in → show the protected content
    return children;
}

export default ProtectedRoute;



// Note:
// Navigate = React Router's way to redirect
// replace = replace current URL in history (can't go back)
// children = the protected component (like <Cart />)