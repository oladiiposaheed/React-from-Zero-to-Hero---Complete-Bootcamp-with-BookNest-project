import { Link, Outlet } from "react-router-dom";
import Header from './Header';

function Layout() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-0 px-6 pb-6 md:p-6">
            <div className="max-w-7xl mx-auto">

                {/* Header on every page */}
                {/* <Header cartCount={cartCount} /> */}
                <Header />

                {/* Navigation links */}
                <nav className="flex gap-4 mb-6">
                    <Link to='/' className="text-purple-600 font-semibold hover:text-purple-700">🏠 Home</Link>
                    <Link to='/cart' className="text-purple-600 font-semibold hover:text-purple-700">🛒 Cart</Link>
                </nav>

                {/* Page content changes here */}
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;