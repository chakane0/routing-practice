import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import FeatureOneRoutes from "./FeatureOneRoutes";

// here we can define our apps routes in a decouples way
// The top level route uses the layout component
// Its children include: An index route which renders the home component and features routes imported from separate modules. 

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                // the index route: when the URL is exactly '/', render Home
                index: true,
                element: <Home />,
            },
            // insert the feature routes
            FeatureOneRoutes,
            // we can add more feature route objects here
        ]
    }
])