import { Outlet, Navigate } from 'react-router-dom';
import FeatureFirst from './FeatureFirst';
import FeatureSecond from './FeatureSecond';

// This route object defines the route for '/one' along with its children.
// When a user goes to '/one', the index route triggers and automatically navigates the user to '/one/1'.
// The Outlet in the parent allows the child routes to render their components.

const FeatureOneRoutes = {
    path: 'one',
    element: <Outlet />,
    children: [
        {
            // index route for/one triggers a redirection to /one/1
            index: true,
            element: <Navigate to='1' replace />,
        },
        {
            path: '1',
            element: <FeatureFirst />,
        },
        {
            path: '2',
            element: <FeatureSecond />
        },
    ],
};

export default FeatureOneRoutes;