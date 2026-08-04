import { Link, Outlet } from "react-router-dom";
import Header from './Header';

function Layout() {
    return (
        // Full page background — no padding so sticky works
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            
            <div className="sticky top-0 z-10 bg-gradient-to-b from-gray-50 to-gray-100 pt-4 pb-2">
                
                {/* Centered container for header + nav */}
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    
                    {/* App header (logo + cart count + user) */}
                    <Header />

                    {/* Navigation links — Home and Cart */}
                    <nav className="flex gap-4 mt-4">
                        <Link to='/' className="text-purple-600 font-semibold hover:text-purple-700">
                            🏠 Home
                        </Link>
                        <Link to='/cart' className="text-purple-600 font-semibold hover:text-purple-700">
                            🛒 Cart
                        </Link>
                    </nav>

                </div>
            </div>

            {/* PAGE CONTENT */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
                {/* Outlet = current page content (Home, Cart, BookDetails, etc.) */}
                <Outlet />
            </div>

        </div>
    );
}

export default Layout;