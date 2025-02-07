import {Outlet, Link} from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <nav>
                <Link to='/'>Home</Link> | <Link to='/one'>Feature One</Link>
            </nav>
            <hr />
            {/* This is where the matching child route will render */}
            <Outlet />
        </div>
    )
}