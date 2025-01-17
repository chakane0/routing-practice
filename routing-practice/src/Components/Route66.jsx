import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import FetchLocalJSON from './FetchLocalJSON'

function Route66() {
    return <p>Hello, Route!</p>;
}


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Route66 />
    },
    {
        path: "simpleState",
        element: <WelcomePage />
    },
    {
        path:'fetch-local-json',
        element: <FetchLocalJSON />
    }
]);